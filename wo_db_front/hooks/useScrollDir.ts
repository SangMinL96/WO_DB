import { useState, useEffect } from 'react';

export const useScrollDir = (noScroll: boolean = false) => {
  const [scrollDir, setScrollDir] = useState('up');
  const [isScrollTop, setIsScrollTop] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    if (!noScroll) {
      const threshold = 5;
      let lastScrollY = window.pageYOffset;
      let ticking = false;

      const updateScrollDir = () => {
        const scrollY = window.pageYOffset;
        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false;
          return;
        }
        // console.log(scrollY, lastScrollY);

        setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };
      const onScroll = () => {
        if (!ticking) {
          if (window.scrollY === 0) {
            setIsScrollTop(true);
          } else {
            setIsScrollTop(false);
          }
          // if (window.scrollY > 80) {
          //   setIsFixed(true);
          // } else {
          //   setIsFixed(false);
          // }
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
        }
      };
      window.addEventListener('scroll', onScroll);
      // console.log(scrollDir);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [scrollDir, noScroll]);
  return { scrollDir, isScrollTop, isFixed, setScrollDir };
};
