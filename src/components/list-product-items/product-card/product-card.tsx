import React from 'react';
import { IProduct } from '@/interfaces/i-product';
import styles from './product-card.module.scss';

interface Props {
  product: IProduct;
  onClick?: () => void;
}

export const Card = ({ product, onClick }: Props) => {
  return (
    <div className={styles.card_container} onClick={onClick}>
      <figure className={styles.card_figure}>
        <span className={styles.card_bottom_text}>{product.category}</span>
        <img
          className={styles.card_img}
          src={product.image} 
          alt={product.title}
        />
      </figure>
      <p className={styles.card_container_info}>
        <span className={styles.card_info_title}>{product.title}</span>
        <span className={styles.card_info_price}> <br /> $ {product.price}</span>
      </p>
    </div>
  );
};
