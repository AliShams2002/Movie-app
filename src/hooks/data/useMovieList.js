import { useCallback, useEffect, useRef, useState } from "react";

export function useMovieList({ fetcher, enabled = true }) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  // Keep latest fetcher in a ref so `execute` stays stable without re-creating
  const fetcherRef = useRef(fetcher);
  useEffect(() => {
    fetcherRef.current = fetcher;
  }, [fetcher]);

  const execute = useCallback(async (signal) => {
    setStatus("loading");
    setError(null);

    try {
      const result = await fetcherRef.current({ signal });
      // Ignore result if request was aborted

      if (signal?.aborted) return;
      setData(result);
      setStatus("success");
    } catch (err) {
      // Ignore abort/cancel errors - they are expected on unmount or param change
      if (err.name === "CanceledError" || err.name === "AbortError") return;
      setError(err.message || "Somthing went wrong");
      setStatus("error");
    }
  }, []);

  // Manual refetch without abort signal
  const refetch = useCallback(() => {
    execute();
  }, [execute]);

  // Auto-fetch when enabled changes, with cleanup via AbortController
  useEffect(() => {
    if (!enabled) return;

    const controller = new AbortController();
    execute(controller.signal);

    return () => controller.abort();
  }, [enabled, execute]);

  return { data, status, error, refetch };
}
