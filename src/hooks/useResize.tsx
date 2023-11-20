import { useEffect } from 'react';

export type ResizeCallback = (width: number, height: number) => void;

export const useResizeListener = (callback: ResizeCallback) => {
  useEffect(() => {
    const handleResize = () => {
      callback(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [callback]);
};
