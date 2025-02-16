import { useEffect, useState } from 'react';

type Options<T> = {
  onInitCompleted?: (value: T) => void;
};

const useLocalStorage = <T>(
  key: string,
  initialState?: T | (() => T),
  options: Options<T> = {},
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(initialState as T);

  useEffect(() => {
    const item = localStorage.getItem(key);

    if (item) setState(parse(item));
    options.onInitCompleted?.(state);
  }, [key]);

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state, initialState]);

  return [state, setState];
};

const parse = (value: string) => {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

export default useLocalStorage;
