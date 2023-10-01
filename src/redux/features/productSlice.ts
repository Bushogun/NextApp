import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { initialStateProductStore } from "@/redux/initial-state";

const productSlice = createSlice({
  name: "product",
  initialState: initialStateProductStore,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectCategory: (state, action) => {
        state.selectCategory = action.payload;
    },
    setSelectProduct: (state, action) => {
        state.selectProduct = action.payload;
    },
    setSelectLimit: (state, action) => {
        state.selectLimit = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCategories,
  setProducts,
  setSelectCategory,
  setSelectProduct,
  setSelectLimit,
  setLoading,
  setError,
} = productSlice.actions;

export const requestProducts = (state: RootState) => state.product.requestProducts
export const requestCategories = (state: RootState) => state.product.requestCategories

export default productSlice.reducer