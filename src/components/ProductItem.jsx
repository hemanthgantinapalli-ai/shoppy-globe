import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

/**
 * ProductItem Component - Displays a single product with add to cart button
 * Uses Tailwind CSS for consistent styling and responsive design
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
    <div className="bg-gradient-to-b from-white to-blue-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
      {/* Product Image Section */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative group">
        <div className="aspect-square bg-gradient-radial from-blue-100/50 to-transparent overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          {product.discountPercentage && product.discountPercentage > 0 && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
              -{Math.round(product.discountPercentage)}%
            </div>
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-slate-900/45 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold py-2 px-4 rounded-full bg-white/15 uppercase tracking-wide">
              View Details
            </span>
          </div>
        </div>
      </Link>

      {/* Product Info Section */}
      <div className="p-4 flex flex-col flex-grow gap-3">
        {/* Title */}
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed flex-grow">
          {product.description}
        </p>

        {/* Rating */}
        {product.rating && (
          <div className="text-sm text-amber-500 font-medium">
            ⭐ {product.rating} ({product.reviews?.length || 0} reviews)
          </div>
        )}

        {/* Stock Status */}
        {product.stock !== undefined && (
          <div className="text-xs font-semibold">
            {product.stock > 10 ? (
              <span className="text-emerald-600">✓ In Stock ({product.stock})</span>
            ) : product.stock > 0 ? (
              <span className="text-amber-600">⚠ Low Stock ({product.stock})</span>
            ) : (
              <span className="text-red-600">✗ Out of Stock</span>
            )}
          </div>
        )}

        {/* Price and Add to Cart - Pushed to bottom */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          {/* Price Row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-indigo-600">
                ${product.price}
              </span>
              {product.discountPercentage && product.discountPercentage > 0 && (
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">
                  -{product.discountPercentage}% off
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`
              w-full py-2.5 px-4 rounded-full font-bold text-sm transition-all duration-200
              ${product.stock === 0
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : showSuccess
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
              }
            `}
          >
            {product.stock === 0
              ? "Out of Stock"
              : showSuccess
                ? "✓ Added!"
                : "➕ Add to Cart"
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
