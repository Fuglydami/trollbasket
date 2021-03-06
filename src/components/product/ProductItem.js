import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'components';
import { formatPrice } from 'utils/price-format';
import styles from './Product.module.css';

const ProductItem = ({ product }) => {
  return (
    <div className={styles.product__item}>
      <Link to={`/product-detail/${product?.id}`}>
        <Image src={product?.image} />
        <div className={styles.product__item__desc}>{product?.name}</div>
        <h4 className={styles.product__item__price}>
          {formatPrice(product?.price)}
        </h4>
        <span className={styles.product__item__more}>MOQ 4 (pieces)</span>
      </Link>
    </div>
  );
};

export default ProductItem;
