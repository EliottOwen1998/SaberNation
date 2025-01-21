import React from 'react';
import ProductItem from '../components/ProductItem';
import productsData from '../data/ProductsData';
import '../assets/styles/products.css';

const ProductList = ({ addToCart }) => {
  return (
    <div className="products-page">
      <main>
        <h2>Our Awesome Lightsabers</h2>
        <p className="intro-text">
          Check out our premium selection of custom lightsabers.
        </p>
        <div className="product-grid">
          {productsData.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onAddToCart={addToCart} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductList;




