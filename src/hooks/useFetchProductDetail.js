import { useEffect, useState } from "react";

/**
 * Custom hook to fetch a single product's details
 * @param {number|string} productId - The ID of the product to fetch
 * @returns {Object} Object containing product data, loading state, and error
 */
const useFetchProductDetail = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      setError("Product ID is required");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        
        if (!response.ok) {
          throw new Error(`Product not found`);
        }
        
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message || "Failed to fetch product details");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};

export default useFetchProductDetail;
