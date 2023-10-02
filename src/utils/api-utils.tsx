import { setLoading } from '@/redux/features/productSlice';
import { apiUrl } from '@/api/index';
import type { AppDispatch } from "@/redux/store";

const fetchData = async (url: string, dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch(apiUrl + url);

    if (!response.ok) {
      throw new Error(`Error al cargar datos desde ${url}`);
    }

    const data = await response.json();
    dispatch(setLoading(false));

    return data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const fetchProducts = async (dispatch: AppDispatch, requestProducts: string) => {
  return fetchData(requestProducts, dispatch);
};

export const fetchCategories = async (dispatch: AppDispatch, requestCategories: string) => {
  return fetchData(requestCategories, dispatch);
};

export const fetchProductById = async (dispatch: AppDispatch, productId: string) => {
  const url = `products/${productId}`;
  return fetchData(url, dispatch);
};