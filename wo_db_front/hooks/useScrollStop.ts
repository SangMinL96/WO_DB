import { useState, useEffect } from 'react';

export const useScrollStop = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const createScrollStopListener = (element, callback, timeout) => {
    let removed = false;
    let handle = null;
    const onScroll = () => {
      if (handle) {
        clearTimeout(handle);
      }
      handle = setTimeout(callback, timeout || 200); // default 200 ms
    };
    element.addEventListener('scroll', onScroll);
    return () => {
      if (removed) {
        return;
      }
      removed = true;
      if (handle) {
        clearTimeout(handle);
      }
      element.removeEventListener('scroll', onScroll);
    };
  };
  useEffect(() => {
    const destroyListener = createScrollStopListener(
      window,
      () => {
        setIsScroll(false);
      },
      0,
    );
    return () => destroyListener(); // when App component is unmounted
  });
  return isScroll;
};
