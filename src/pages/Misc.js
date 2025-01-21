// ClothingPage.js
import React from 'react';
import ProductItem from '../components/ProductItem';
import productsData from '../data/ProductsData';
import '../assets/styles/productGrid.css';

const ClothingPage = ({ addToCart }) => {
  const clothingProducts = productsData.filter(product => product.category === 'clothing');

  return (
    <div className="product-grid">
      {clothingProducts.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

export default ClothingPage;

// ActionFiguresPage.js
import React from 'react';
import ProductItem from '../components/ProductItem';
import productsData from '../data/ProductsData';
import '../assets/styles/productGrid.css';

const ActionFiguresPage = ({ addToCart }) => {
  const actionFigureProducts = productsData.filter(product => product.category === 'actionFigures');

  return (
    <div className="product-grid">
      {actionFigureProducts.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

export default ActionFiguresPage;
