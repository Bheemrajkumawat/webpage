import { createSlice } from "@reduxjs/toolkit";

//  User Slice (
const initialUserState = {
  isLoggedIn: !!localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    registerUser(state, action) {
      state.user = action.payload;
    },
    loginUser(state, action) {
      const { user, token } = action.payload;
      state.isLoggedIn = true;
      state.user = user;
      state.token = token;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    },
    logoutUser(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

// Cart Slice
const initialCartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    // Add item to cart
    addItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },

    // Increment item quantity
    incrementItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
      }
      // Update total quantity and amount
      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.quantity * (item.price || 0),
        0
      );
      console.log("Updated Total Amount:", state.cartTotalAmount);
    },

    // Decrement item quantity
    decrementItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1 && state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      }
      // Update total quantity and amount
      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.quantity * (item.price || 0),
        0
      );
    },

    // Remove item from cart
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.quantity * (item.price || 0),
        0
      );
    },

    // Clear the cart
    clearCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
    },
  },
});

const initialState = {
  orders: [],
  orderHistory: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setOrderHistory: (state, action) => {
      state.orderHistory = action.payload;
    },
    cancelOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order._id !== action.payload
      );
    },
    confirmOrder: (state, action) => {
      state.orderHistory.push(action.payload);
      state.orders = state.orders.filter(
        (order) => order._id !== action.payload._id
      );
    },
  },
});

// Export actions
export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export const { addItem, incrementItem, decrementItem, removeItem, clearCart } =
  cartSlice.actions;

// ✅ Export actions
export const { setOrders, setOrderHistory, cancelOrder, confirmOrder } =
  orderSlice.actions;

// Export reducers
export const userReducer = userSlice.reducer;
export const cartReducer = cartSlice.reducer;

export default orderSlice.reducer;
