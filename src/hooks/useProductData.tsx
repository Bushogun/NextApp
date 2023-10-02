// useProductData.js
'use client'
import { useEffect } from 'react';
import { setProducts, setCategories, setLoading, setError } from '@/redux/features/productSlice';
import { fetchProducts, fetchCategories } from '@/utils/api-utils';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const useProductData = () => {
  const dispatch = useAppDispatch();
  const requestProducts = useAppSelector(state => state.productReducer.requestProducts);
  const requestCategories = useAppSelector(state => state.productReducer.requestCategories);
  const limit = useAppSelector(state => state.productReducer.selectLimit);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts(dispatch, requestProducts);
        const categories = await fetchCategories(dispatch, requestCategories);

        dispatch(setProducts(products));
        dispatch(setCategories(categories));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError('Busca algo antes de filtrar'));
        dispatch(setLoading(false));
      }
    };
    fetchData();
  }, [requestProducts, requestCategories, limit]);
};


export default useProductData;