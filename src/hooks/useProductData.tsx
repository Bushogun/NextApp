'use client'
import { useEffect } from 'react';
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setCategories, setLoading, setError } from '@/redux/features/productSlice';
import { fetchProductData } from '@/utils/api-utils';

const useProductData = () => {
  const dispatch = useDispatch();
  const requestProducts = useSelector((state: RootState) => state.product.requestProducts);
  const requestCategories = useSelector((state: RootState) => state.product.requestCategories);
  const limit = useSelector((state: RootState) => state.product.selectLimit);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));

        const { products, categories }  = await fetchProductData(dispatch, requestProducts, requestCategories, limit);

        dispatch(setProducts(products.results))
        dispatch(setCategories(categories.results))

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
