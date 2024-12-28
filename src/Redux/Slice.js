import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // Initialize cartItems as an array
};

const Slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Check if the item already exists in the cart
      const existingItem = state.cartItems.find(
        (item) => item.title === action.payload.title
      );
      if (existingItem) {
        // Increase the quantity of the existing item
        existingItem.quantity += 1;
      } else {
        // Add the new item with quantity 1
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementItem: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addItem, incrementItem, decrementItem } = Slice.actions;
export default Slice.reducer;
