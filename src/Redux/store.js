import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/Slice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
