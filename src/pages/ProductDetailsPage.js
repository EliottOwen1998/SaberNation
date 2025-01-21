import { useParams } from 'react-router-dom';
import productsData from '../data/ProductsData';

const ProductDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  // Check if the product has specifications (for lightsabers)
  const isLightsaber = product.specifications;

  return (
    <div className="product-detail-page">
      <div className="product-details-container">
        <div className="product-info-grid">
          {/* Centered Product Name */}
          <h1 className="product-title">{product.name}</h1>

          {/* Product Description */}
          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          {/* Product Image */}
          <div className="product-image-container">
            <img src={product.image} alt={product.name} className="productImageDetail" />
            <div className="product-price">ᖬ{product.price}</div>
          </div>

          {/* Conditional Rendering for Specifications (Lightsabers only) */}
          {isLightsaber ? (
            <div className="product-specifications">
              <h3>Specifications</h3>
              <ul>
                <li><strong>Color:</strong> {product.specifications.color}</li>
                <li><strong>Blade Type:</strong> {product.specifications.bladeType}</li>
                <li><strong>Hilt Material:</strong> {product.specifications.hiltMaterial}</li>
                <li><strong>Weight:</strong> {product.specifications.weight}</li>
                <li><strong>Length:</strong> {product.specifications.length}</li>
              </ul>
            </div>
          ) : (
            // For clothing, we show size information
            product.size && (
              <div className="product-size">
                <h3>Available Sizes</h3>
                <ul>
                  {product.size.map((size) => (
                    <li key={size}>{size}</li>
                  ))}
                </ul>
              </div>
            )
          )}

          {/* Product Rating */}
          <div className="product-rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={`star ${index < Math.round(product.rating) ? '' : 'empty'}`}>
                {index < Math.round(product.rating) ? '\u2605' : '\u2606'}
              </span>
            ))}
            <span className="product-rating-text">({product.rating.toFixed(1)}/5)</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="add-to-cart-container">
          <button className="addToCartButton" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
