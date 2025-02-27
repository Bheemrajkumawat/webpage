import { configureStore } from "@reduxjs/toolkit";
import  {cartReducer, userReducer } from "../Redux/Slice";
import ordersReducer from "../Redux/Slice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer,
  },
});
