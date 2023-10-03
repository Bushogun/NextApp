'use client'
import React, { useEffect, useState } from 'react';
import { fetchProductById } from '@/utils/api-utils';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setError } from '@/redux/features/productSlice';
import styles from './product-details.module.scss'

const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const selectedProductId = useAppSelector(state => state.productReducer.selectProduct);
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    if (selectedProductId) {
      fetchProductDetails();
    }
  }, [selectedProductId]);

  const fetchProductDetails = async () => {
    try {
      const productDetailsById = await fetchProductById(dispatch, selectedProductId);
      setProductDetails(productDetailsById);
    } catch (error) {
      dispatch(setError('ha ocurrido un error en el servidor'));
    }
  };

  return (
    <div className={styles['details']}>
      {productDetails && (
        <div className={styles['container-details']}>

          <div className={styles['container-img']}>
            <img  className={styles['card-img']} 
              src={productDetails.image} 
              alt={productDetails.title}
              title={productDetails.title} />
          </div>

          <div className={styles['container-data']}>
            <h2 className={styles['title']}>{productDetails.title}</h2>
            <p className={styles['description']}>{productDetails.description}</p>
            <div className={styles['category-container']}>
            <p className={styles['category']}>{productDetails.category}</p>
            </div>
              <p className={styles['price']}>${productDetails.price}</p>
          </div>

        </div>
      )}
    </div>
  );
};

export default ProductDetails;
