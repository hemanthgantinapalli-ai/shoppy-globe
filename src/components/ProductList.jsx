import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/searchSlice";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";

/**
 * ProductList Component - Displays all products with search, sorting, and category filtering
 * Uses Tailwind CSS for responsive grid layout and consistent styling
 */
const ProductList = () => {
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { products, loading, error } = useFetchProducts();
  const searchQuery = useSelector((state) => state.search);
  const dispatch = useDispatch();

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    return ["all", ...uniqueCategories.sort()];
  }, [products]);

  // Filter, sort, and categorize products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

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
  }, [products, searchQuery, sortBy, selectedCategory]);

  const clearFilters = () => {
    setSortBy("default");
    setSelectedCategory("all");
    dispatch(setSearch(""));
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h2>
          <p className="text-gray-600">Loading products...</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-gradient-to-b from-white to-blue-50 rounded-3xl overflow-hidden shadow-lg animate-pulse flex flex-col h-full">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300"></div>
              <div className="p-4 flex flex-col flex-grow gap-3">
                <div className="h-5 bg-gray-300 rounded"></div>
                <div className="flex-grow">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
                <div className="mt-auto pt-3 border-t border-gray-200">
                  <div className="h-6 bg-gray-300 rounded mb-3 w-20"></div>
                  <div className="h-10 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center min-h-64 flex flex-col justify-center">
          <p className="text-red-700 font-semibold text-lg mb-2">❌ Error: {error}</p>
          <p className="text-red-600">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  if (filteredAndSortedProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 rounded-2xl p-8 text-center min-h-64 flex items-center justify-center">
          <p className="text-gray-700 text-lg">No products found matching your search.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* Background gradient */}
      <div className="absolute top-60 left-0 w-full h-96 bg-gradient-radial from-blue-100/30 to-transparent pointer-events-none -z-10"></div>

      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Our Products</h2>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 mb-4">
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <label htmlFor="category-select" className="text-sm font-semibold text-gray-700">
              Category:
            </label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort-select" className="text-sm font-semibold text-gray-700">
              Sort by:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>

          {/* Clear Filters */}
          {(sortBy !== "default" || selectedCategory !== "all" || searchQuery) && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Product Count */}
        <p className="text-gray-600 text-sm">
          Showing {filteredAndSortedProducts.length} of {products.length} products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
