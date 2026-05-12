import { useSelector } from "react-redux";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import "../styles/ProductList.css";

/**
 * ProductList Component - Displays all products with search functionality
 */
const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const searchQuery = useSelector((state) => state.search);

  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="product-list-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list-container">
        <div className="error">
          <p>❌ Error: {error}</p>
          <p>Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="product-list-container">
        <div className="no-products">
          <p>No products found matching your search.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <div className="products-header">
        <h2>Our Products</h2>
        <p className="product-count">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
