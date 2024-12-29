// Redux Slice (Slice.js)

import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
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
        (total, item) => total + item.quantity * item.description,
        0
      );
    },

    // Increment item quantity
    incrementItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1){
        state.cartItems[itemIndex].quantity += 1;
      }

      // Update total quantity and amount
      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.quantity * item.description,
        0
      );
    },

    // Decrement item quantity
    decrementItem: (state, action) => {
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
        (total, item) => total + item.quantity * item.description,
        0
      );
    },

    // Remove item from cart
    removeItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
      }

      // Update total quantity and amount
      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.quantity * item.description,
        0
      );
    },
  },
});

export const { addItem, incrementItem, decrementItem, removeItem } =
  Slice.actions;
export default Slice.reducer;
