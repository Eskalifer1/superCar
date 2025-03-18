import { Dispatch, useEffect, useRef, useState } from "react";

function useLocalStorageState<T>(
  key: string,
  initialValue: T
): [T, Dispatch<React.SetStateAction<T>>] {
  const prevKeyRef = useRef<string>(key);

  const [state, setState] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (prevKeyRef.current !== key) {
      try {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
          setState(JSON.parse(storedValue));
        } else {
          setState(initialValue);
        }
      } catch (error) {
        console.error(
          "Error reading from localStorage during key change",
          error
        );
        setState(initialValue);
      }
      prevKeyRef.current = key;
    }
  }, [key, initialValue]);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;
