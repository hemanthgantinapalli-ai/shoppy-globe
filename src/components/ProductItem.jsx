import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles/ProductItem.css";

/**
 * ProductItem Component - Displays a single product with add to cart button
 */
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
      })
    );
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-wrapper">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
            loading="lazy"
          />
          {product.discountPercentage && product.discountPercentage > 0 && (
            <div className="discount-badge">
              -{Math.round(product.discountPercentage)}%
            </div>
          )}
          <div className="product-overlay">
            <span className="view-detail">View Details</span>
          </div>
        </div>
      </Link>

      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-title-link">
          <h3 className="product-title">{product.title}</h3>
        </Link>

        <p className="product-description">
          {product.description.substring(0, 50)}...
        </p>

        <div className="product-footer">
          <div className="product-price">
            <span className="price">${product.price}</span>
            {product.discountPercentage && (
              <span className="discount">-{product.discountPercentage}%</span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className={`add-to-cart-btn ${product.stock === 0 ? 'disabled' : ''}`}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? "Out of Stock" : showSuccess ? "✓ Added!" : "➕ Add to Cart"}
          </button>
        </div>

        {product.rating && (
          <div className="product-rating">
            ⭐ {product.rating} ({product.reviews?.length || 0} reviews)
          </div>
        )}

        {product.stock && (
          <div className="product-stock">
            {product.stock > 10 ? (
              <span className="in-stock">✓ In Stock ({product.stock})</span>
            ) : product.stock > 0 ? (
              <span className="low-stock">⚠ Low Stock ({product.stock})</span>
            ) : (
              <span className="out-of-stock">✗ Out of Stock</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
