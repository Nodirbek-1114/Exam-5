import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'products',
  initialState: { productsArr: [], categoryArr: [], array: [], counter: 0, lakeArr: [] },
  reducers: {
    setProducts: (state, action) => {
      state.productsArr = action.payload;
    },
    setCategory: (state, action) => {
      state.categoryArr = state.productsArr.filter(a => a.category === action.payload);
    },
    setCart: (state, action) => {
      if (!state.array.find(a => a.id === action.payload.id)) {
        state.array.push(action.payload);
      }
    },
    setCounter: (state, action) => {
      if (!state.lakeArr.find(a => a.id === action.payload.id)) {
        state.lakeArr.push(action.payload);
        state.counter++;
      }
    }
  },
});

export const { setProducts, setCategory, setCart, setCounter } = productSlice.actions;

export default productSlice.reducer;
