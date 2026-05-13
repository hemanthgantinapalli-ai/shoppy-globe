import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import "../styles/ProductList.css";

/**
 * ProductList Component - Displays all products with search and sorting functionality
 */
const ProductList = () => {
  const [sortBy, setSortBy] = useState("default");
  const { products, loading, error } = useFetchProducts();
  const searchQuery = useSelector((state) => state.search);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "rating":
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case "name":
        return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return filtered;
    }
  }, [products, searchQuery, sortBy]);

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

  if (filteredAndSortedProducts.length === 0) {
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
        <div className="product-controls">
          <div className="sort-controls">
            <label htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
          <p className="product-count">
            Showing {filteredAndSortedProducts.length} of {products.length} products
          </p>
        </div>
      </div>

      <div className="product-list">
        {filteredAndSortedProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
