import { useRef, useState, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

const initialState = { width: 0, height: 0 };
const useDimension = (ref: any) => {
  const [dimensions, setdDimensions] = useState(initialState);
  const resizeObserverRef = useRef<any>(null);

  useLayoutEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries = []) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect;
        setdDimensions({ width, height });
      });
    });
    if (ref.current) resizeObserverRef.current.observe(ref.current);
    return () => {
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
    };
  }, [ref]);
  return dimensions;
};

export default useDimension;
