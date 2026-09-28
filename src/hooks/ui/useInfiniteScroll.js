import { useEffect, useRef } from "react";

export function useInfiniteScroll({ onLoadMore, hasMore, isLoading }) {
  const sentinelRef = useRef(null);

  useEffect(() => {
    // Prevent duplicate requests
    if (isLoading || !hasMore) return;

    // Check if the last item has been viewed?
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      //   That means 50% of the item has been viewed
      { threshold: 0.5 },
    );

    const el = sentinelRef.current;
    if (el) observer.observe(el);

    // Cleanup
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [onLoadMore, hasMore, isLoading]);

  return { sentinelRef };
}
