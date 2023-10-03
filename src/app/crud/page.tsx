'use client'
import React from 'react'
import useProductData from '@/hooks/useProductData'
import styles from './crud.module.scss'
import { Categories } from '@/components/filter-categories/filter-categories'
import { useAppSelector } from '@/redux/hooks';
import ListItems from '@/components/list-product-items/list-product-items'
import LoadingSpinner from '@/components/loading-spinner/loading-spinner'
import ErrorComponent from '@/components/error-component/error-component'

const crud = () => {
  useProductData();
  const loading = useAppSelector(state => state.productReducer.loading);
  const error = useAppSelector(state => state.productReducer.error);


  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className={styles['container-body']}>
      <div className={styles['filters-container']}>
        <Categories />
      </div>
      <div className={styles['cards-container']}>
        <ListItems />
      </div>
    </div>
  );
}


export default crud