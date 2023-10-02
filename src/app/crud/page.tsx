'use client'
import React from 'react'
import useProductData from '@/hooks/useProductData'
import styles from './crud.module.scss'
import { Categories } from '@/components/filter-categories/filter-categories'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import ListItems from '@/components/list-product-items/list-product-items'


const crud = () => {
  useProductData();
  const categories = useAppSelector(state => state.productReducer.categories);

  const loading = useAppSelector(state => state.productReducer.loading);
  const error = useAppSelector(state => state.productReducer.error);

  return (
    <>
      {
        loading ? (
          <div className={styles.container_loading}>
            <div className={styles.loading}></div>
            <p>Loading...</p>
          </div>
        ) : error ? (
          <div className={styles.container_loading}>
            <p>Error: {error}</p>
          </div>
        ) : (
          <div className={styles.container_body}>
            <div className={styles.filters_container}>
              <Categories />
            </div>
            <div className={styles.cards_container}>
              <ListItems />
            </div>
          </div>
        )}
    </>
  );
}

export default crud