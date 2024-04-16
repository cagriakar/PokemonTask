import { useEffect, useState } from 'react';

/**
 * The `useDebounce` function in TypeScript React is used to debounce a value with a specified delay.
 * @param {string} value - The `value` parameter is the input value that you want to debounce.
 * @param {number} [delay=500] - `delay` is 500 milliseconds if not provided explicitly.
 * @returns the debounced value of the input `value` string after a specified `delay` in milliseconds.
 */
export default function useDebounce(value: string, delay: number = 500): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
