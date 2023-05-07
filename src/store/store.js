import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../redux/product'
export const store = configureStore({
  reducer: {
    products: productSlice,
  }
})