// useProductData.js
'use client'
import { useEffect } from 'react';
import { setProducts, setCategories, setLoading, setError } from '@/redux/features/productSlice';
import { fetchProducts, fetchCategories } from '@/utils/api-utils';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const useProductData = () => {
  const dispatch = useAppDispatch();
  const requestCategories = process.env.NEXT_PUBLIC_REQUEST_CATEGORIES!;
  const requestProducts = process.env.NEXT_PUBLIC_REQUEST_PRODUCTS!;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await fetchCategories(dispatch, requestCategories);
        const products = await fetchProducts(dispatch, requestProducts);
        const categoriesWithTodos: string[] = ['All', ...categories];
        dispatch(setProducts(products));
        dispatch(setCategories(categoriesWithTodos));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError('Busca algo antes de filtrar'));
        dispatch(setLoading(false));
      }
    };
    fetchData();
  }, [requestProducts, requestCategories]);
};


export default useProductData;