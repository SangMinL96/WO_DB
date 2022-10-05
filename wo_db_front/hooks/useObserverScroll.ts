import { useEffect, useRef } from 'react';

export function useObserverScrollBbs(list: any, isDeskTop: boolean) {
  const pageEnd = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isDeskTop) {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            // loadMore함수 호출
          }
        },
        { threshold: 1 },
      );
      if (observer) {
        observer?.observe(pageEnd.current);
      }
    }
  }, [isDeskTop]);

  return pageEnd;
}
