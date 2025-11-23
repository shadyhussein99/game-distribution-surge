import { useState, useEffect } from "react";

/**
 * Returns a debounced version of the given value.
 * The value is only updated after the given delay has passed.
 * The default delay is 600ms.
 *
 * @param {string} value The value to debounce.
 * @param {number} [delay=600] The delay in milliseconds.
 * @returns {string} The debounced value.
 */
export function useDebounce(value: string, delay: number = 600) {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
