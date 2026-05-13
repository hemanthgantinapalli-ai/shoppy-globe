import { useEffect, useState } from "react";

/**
 * Custom hook for debouncing a value.
 * @param {any} value - The input value to debounce.
 * @param {number} delay - Debounce delay in milliseconds.
 * @returns {any} The debounced value.
 */
const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
