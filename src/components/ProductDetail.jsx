import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import useFetchProductDetail from "../hooks/useFetchProductDetail";
import "../styles/ProductDetail.css";

/**
 * ProductDetail Component - Shows detailed information about a product
 */
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, loading, error } = useFetchProductDetail(id);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
        })
      );
      alert("Product added to cart!");
    }
  };

  if (loading) {
    return (
      <div className="product-detail-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-detail-container">
        <div className="error">
          <p>❌ Error: {error}</p>
          <button onClick={() => navigate(-1)} className="back-btn">
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-container">
        <div className="error">
          <p>Product not found</p>
          <button onClick={() => navigate("/")} className="back-btn">
            ← Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>

      <div className="product-detail">
        <div className="product-detail-image">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="detail-image"
            loading="lazy"
          />
          {product.images && product.images.length > 1 && (
            <div className="additional-images">
              {product.images.slice(0, 4).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.title} ${idx}`}
                  className="thumbnail"
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>

        <div className="product-detail-info">
          <h1 className="product-title">{product.title}</h1>

          <div className="product-meta">
            {product.rating && (
              <div className="rating">
                ⭐ {product.rating} out of 5
              </div>
            )}
            {product.brand && (
              <div className="brand">
                <strong>Brand:</strong> {product.brand}
              </div>
            )}
            {product.category && (
              <div className="category">
                <strong>Category:</strong> {product.category}
              </div>
            )}
          </div>

          <p className="description">{product.description}</p>

          <div className="specs">
            {product.sku && (
              <div className="spec">
                <strong>SKU:</strong> {product.sku}
              </div>
            )}
            {product.weight && (
              <div className="spec">
                <strong>Weight:</strong> {product.weight}g
              </div>
            )}
            {product.dimensions && (
              <div className="spec">
                <strong>Dimensions:</strong> {JSON.stringify(product.dimensions)}
              </div>
            )}
          </div>

          <div className="price-section">
            <div className="price">${product.price}</div>
            {product.discountPercentage && (
              <div className="discount">
                Save {product.discountPercentage}%
              </div>
            )}
            {product.stock !== undefined && (
              <div className={`stock ${product.stock > 0 ? "available" : "unavailable"}`}>
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Out of stock"}
              </div>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="add-to-cart-btn"
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? "➕ Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>

      {product.reviews && product.reviews.length > 0 && (
        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          <div className="reviews-list">
            {product.reviews.slice(0, 5).map((review, idx) => (
              <div key={idx} className="review">
                <div className="review-header">
                  <strong>{review.reviewerName}</strong>
                  <span className="review-rating">
                    ⭐ {review.rating}
                  </span>
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
