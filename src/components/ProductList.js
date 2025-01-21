import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/ProductsData';
import ProductItem from '../components/ProductItem';
import '../assets/styles/productDetail.css';

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div className="not-found">Product not found</div>;
  }

  return (
    <div className="products-page">
      <ProductItem
        product={product}
        onAddToCart={addToCart}
        isProductDetailPage={true}
      />
      <div className="product-description">
        <p>{product.description}</p>
        <ul className="specifications">
          {Object.entries(product.specifications).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailPage;




