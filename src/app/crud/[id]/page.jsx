'use client'
import React, { useEffect, useState } from 'react';
import { fetchProductById } from '@/utils/api-utils';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setError, setSelectedProductById } from '@/redux/features/productSlice';
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

  const renderStars = (rate) => {
    const stars = [];
    const maxRating = 5;
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span key={i} className={i <= rate ? 'star filled' : 'star'}>
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return (
    <div className={styles['details']}>
      {productDetails && (
        <div className={styles.container_details}>

          <div className={styles['container_img']}>
            <img  className={styles['card_img']} 
              src={productDetails.image} 
              alt={productDetails.title}
              title={productDetails.title} />
          </div>

          <div className={styles['container-data']}>
            <h2 className={styles['title']}>{productDetails.title}</h2>
            <p className={styles['description']}>{productDetails.description}</p>
            <p className={styles['category']}>{productDetails.category}</p>
            <p className={styles['price']}>${productDetails.price}</p>
            <div className={styles['rating']}>{renderStars(productDetails.rate)}</div>
            <p className={styles['rating-count']}>{productDetails.count}</p>
          </div>

        </div>
      )}
    </div>
  );
};

export default ProductDetails;
