import { useCallback, useEffect, useState } from 'react';

type Callback<T extends unknown[]> = (...args: T) => void;

const useThrottle = <T extends unknown[]>(
  callback?: Callback<T>,
  delay: number = 500,
) => {
  const [isReady, setIsReady] = useState(true);

  const debounce = useCallback(
    (...args: T) => {
      if (!isReady) return;

      setIsReady(false);
      callback?.(...args);
    },
    [callback, isReady],
  );

  useEffect(() => {
    if (!isReady) {
      const timer = setTimeout(() => setIsReady(true), delay);

      return () => clearTimeout(timer);
    }
  }, [isReady, delay]);

  return debounce;
};

export default useThrottle;
