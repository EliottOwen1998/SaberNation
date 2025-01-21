import React from 'react';
import { Link } from 'react-router-dom';
 import styles from '../assets/styles/productItem.module.css';

const ProductItem = ({ product, onAddToCart, isProductDetailPage = false }) => {
  const handleAddToCart = () => {
    console.log("Adding to cart:", product);
    onAddToCart(product); // Ensures proper function call
  };

  return (
    <div className={styles.productCard} role="listitem">
      <Link to={`/product/${product.id}`} className={styles.productLink}>
        <img
          src={product.image}
          alt={product.name || "Product Image"}
          className={isProductDetailPage ? styles.productImageDetail : styles.productImage}
        />
        <h3>{product.name || "Unnamed Product"}</h3>
        <p className={styles.price}>
        ᖬ {product.price ? product.price.toFixed(2) : "0.00"}
          </p>
      </Link>

      {isProductDetailPage && (
        <button
          className={styles.addToCartButton}
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;


