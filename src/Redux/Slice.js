import { createSlice } from "@reduxjs/toolkit";

// User Slice
const initialUserState = {
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    registerUser(state, action) {
      state.user = action.payload; // Store user information
    },
    loginUser(state) {
      state.isLoggedIn = true; // Update login status
    },
    logoutUser(state) {
      state.isLoggedIn = false; // Reset login status
      state.user = null; // Clear user information
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
        // If item exists, increment quantity
        state.cartItems[itemIndex].quantity += 1;
      } else {
        // If item is new, add it to the cart
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      // Update total quantity and amount
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
        (total, item) => total + item.quantity * item.price,
        0
      );
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
        (total, item) => total + item.quantity * item.price,
        0
      );
    },

    // Remove item from cart
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      // Update total quantity and amount
      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.quantity * item.price,
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

// Export actions
export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export const {
  addItem,
  incrementItem,
  decrementItem,
  removeItem,
  clearCart,
} = cartSlice.actions;

// Export reducers
export const userReducer = userSlice.reducer;
export const cartReducer = cartSlice.reducer;
