import { useEffect, useState } from "react";

/**
 * Custom hook to fetch products from DummyJSON API
 * @returns {Object} Object containing products array, loading state, and error
 */
const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://dummyjson.com/products");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data.products || []);
      } catch (err) {
        setError(err.message || "Failed to fetch products");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;