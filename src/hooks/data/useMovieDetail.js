import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  getMovieCredits,
  getMovieDetail,
  getMovieReviews,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/movieService";

const INITIAL = { data: null, status: "loading", error: null };

export function useMovieDetail({ type, id }) {
  const [state, setState] = useState({
    detail: INITIAL,
    credits: INITIAL,
    videos: INITIAL,
    similar: INITIAL,
    reviews: INITIAL,
  });

  const paramsRef = useRef({ type, id });

  useEffect(() => {
    paramsRef.current = { type, id };
  }, [type, id]);

  const execute = useCallback(async (signal) => {
    const { type, id } = paramsRef.current;
    if (!id) return;

    setState({
      detail: { ...INITIAL },
      credits: { ...INITIAL },
      videos: { ...INITIAL },
      similar: { ...INITIAL },
      reviews: { ...INITIAL },
    });

    const results = await Promise.allSettled([
      getMovieDetail({ type, id, signal }),
      getMovieCredits({ type, id, signal }),
      getMovieVideos({ type, id, signal }),
      getMovieSimilar({ type, id, signal }),
      getMovieReviews({ type, id, signal }),
    ]);

    if (signal?.abort) return;

    const keys = ["detail", "credits", "videos", "similar", "reviews"];

    const next = {};
    results.forEach((result, index) => {
      const key = keys[index];
      if (result.status === "fulfilled") {
        next[key] = { data: result.value, status: "success", error: null };
      } else {
        // AbortError رو نادیده بگیر
        if (
          result.reason?.name === "CanceledError" ||
          result.reason?.name === "AbortError"
        ) {
          next[key] = { data: null, status: "loading", error: null };
        } else {
          next[key] = {
            data: null,
            status: "error",
            error: result.reason?.message || "Something went wrong",
          };
        }
      }
    });
    setState(next);
  }, []);

  const refetch = useCallback(() => {
    execute();
  }, [execute]);

  // const trailer = useMemo(() => {
  //   const videos = state.videos.data;

  //   if (!videos?.length) return null;

  //   const official = videos.find(
  //     (v) => v.type === "Trailer" && v.site === "Youtube",
  //   );

  //   if (official) return official;

  //   const trailerAny = videos.find(
  //     (v) => v.type === "Trailer" && v.site === "Youtube",
  //   );

  //   if (trailerAny) return trailerAny;

  //   return videos.find((v) => v.site === "YouTube") || null;
  // }, [state.videos.data]);

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();
    execute(controller.signal);

    return () => controller.abort();
  }, [type, id, execute]);

  return {
    detail: state.detail,
    credits: state.credits,
    videos: state.videos,
    similar: state.similar,
    reviews: state.reviews,
    refetch,
  };
}
