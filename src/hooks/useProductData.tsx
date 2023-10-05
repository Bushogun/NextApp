'use client'
import { useEffect } from 'react';
import { setProducts, setCategories, setLoading, setError, setSelectCategory } from '@/redux/features/productSlice';
import { fetchProducts, fetchCategories } from '@/utils/api-utils';
import { useAppDispatch } from '@/redux/hooks';

const useProductData = () => {
  const dispatch = useAppDispatch();
  const requestCategories = process.env.NEXT_PUBLIC_REQUEST_CATEGORIES!;
  const requestProducts = process.env.NEXT_PUBLIC_REQUEST_PRODUCTS!;

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setSelectCategory("All"));
        const categories = await fetchCategories(dispatch, requestCategories);
        const products = await fetchProducts(dispatch, requestProducts);
        const categoriesWithAll: string[] = ['All', ...categories];
        dispatch(setProducts(products));
        dispatch(setCategories(categoriesWithAll));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError('Hubo un error en la conexión'));
        dispatch(setLoading(false));
      }
    };
    fetchData();
  }, [requestProducts, requestCategories]);
};


export default useProductData;
