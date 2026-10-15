// hooks/data/useMovieVideos.js
import { useState, useCallback } from "react";
import { getMovieVideos } from "../../services/movieService";

export function useMovieVideos() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTrailer = useCallback(async (movieId, type = "movie") => {
    setIsLoading(true);
    setError(null);
    try {
      const videos = await getMovieVideos({ id: movieId, type });
      const trailer = videos.results.find((v) => v.type === "Trailer");
      return trailer?.key || null;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { fetchTrailer, isLoading, error };
}
