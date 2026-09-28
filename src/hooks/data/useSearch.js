import { useCallback, useEffect, useRef, useState } from "react";
import { getSearch } from "../../services/search";

export function useSearch({ filters }) {
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("idle"); // idle, loading, error
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const filterRef = useRef(filters);
  const abortControllerRef = useRef(null);
  const isLoadingMoreRef = useRef(false);

  useEffect(() => {
    filterRef.current = filters;
  }, [filters]);

  //   Getting the hasMore value
  const hasMore = page <= totalPages;

  //   Initial fetch with abort controll
  const execute = useCallback(async () => {
    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setStatus("loading");
    setResults([]);
    setPage(1);
    setError(null);

    try {
      const { endpoint, params } = getEndpointAndParams(filterRef.current, 1);
      const response = await getSearch({
        endpoint,
        params,
        signal: controller.signal,
      });
      const data = response.results;

      if (controller.signal.aborted) return;

      setResults(data);
      setStatus("success");
      setTotalPages(response.total_pages);
    } catch (err) {
      if (err.name === "CanceledError" || err.name === "AbortError") return;
      setError(err.message || "Something went wrong");
      setStatus("error");
    }
  }, []);

  //   Refetch if there is a change in the dependency
  useEffect(() => {
    execute();
  }, [
    filters.q,
    filters.type,
    filters.genre,
    filters.year,
    filters.minRating,
    filters.sort,
    filters.list,
    execute,
  ]);

  //   Refetch function for Refetching
  const refetch = useCallback(() => {
    execute();
  }, [execute]);

  //   LoadMore for fetch more items
  const loadMore = useCallback(async () => {
    if (isLoadingMoreRef.current) return;
    if (page >= totalPages) return;

    isLoadingMoreRef.current = true;
    setIsLoadingMore(true);
    const nextPage = page + 1;

    try {
      const { endpoint, params } = getEndpointAndParams(
        filterRef.current,
        nextPage,
      );
      const response = await getSearch({ endpoint, params });
      const data = response.results;

      setResults((prev) => [...prev, ...data]);
      setPage(nextPage);
      setTotalPages(response.total_pages);
    } catch (err) {
      console.error("Load more failed", err);
    } finally {
      isLoadingMoreRef.current = false;
      setIsLoadingMore(false);
    }
  }, [page, totalPages]);

  return {
    results,
    status,
    error,
    hasMore,
    loadMore,
    isLoadingMore,
    refetch,
  };
}

// Return endpoint & params
function getEndpointAndParams(filters, page) {
  const { q, type, genre, year, minRating, sort, list } = filters;

  // 1. Text search
  if (q) {
    return {
      endpoint: `/search/${type}`,
      params: { query: q, page },
    };
  }

  // 2. list preset (popular, top_rated, ...)
  if (list) {
    const mediaType = type === "tv" ? "tv" : "movie";
    return {
      endpoint: `/${mediaType}/${list}`,
      params: { page },
    };
  }

  // ۳. discover with filter
  const mediaType = type === "tv" ? "tv" : "movie";
  const dateField =
    mediaType === "movie" ? "primary_release_date" : "first_air_date";

  return {
    endpoint: `/discover/${mediaType}`,
    params: {
      page,
      sort_by: sort,
      ...(genre && { with_genres: genre }),
      ...(year && {
        [`${dateField}.gte`]: `${year}-01-01`,
        [`${dateField}.lte`]: `${year}-12-31`,
      }),
      ...(minRating && { "vote_average.gte": minRating }),
    },
  };
}
