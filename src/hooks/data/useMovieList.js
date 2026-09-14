import { useCallback, useEffect, useRef, useState } from "react";

export function useMovieList({ fetcher, dependencies = [], enabled = true }) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  const fetcherRef = useRef(fetcher);
  useEffect(() => {
    fetcherRef.current = fetcher;
  }, [fetcher]);

  const execute = useCallback(async (signal) => {
    setStatus("loading");
    setError(null);

    try {
      const result = await fetcherRef.current({ signal });
      if (signal?.aborted) return;
      setData(result);
      setStatus("success");
    } catch (err) {
      if (err.name === "CanceledError" || err.name === "AbortError") return;
      setError(err.message || "Somthing went wrong");
      setStatus("error");
    }
  }, []);

  const refetch = useCallback(() => {
    execute();
  }, [execute]);

  useEffect(() => {
    if (!enabled) return;

    const controller = new AbortController();
    execute(controller.signal);

    return () => controller.abort();
  }, [enabled, execute, ...dependencies]);

  return { data, status, error, refetch };
}
