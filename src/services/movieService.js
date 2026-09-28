import { axiosInstance } from "./Config";

// NowPlayin service
export const getNowPlayingMovies = async ({ signal }) => {
  const res = await axiosInstance.get("movie/now_playing", { signal });
  const data = res.data.results;
  return data;
};

// Anim service
export const getAnimations = async ({ signal }) => {
  const res = await axiosInstance.get("/discover/movie", {
    params: {
      with_genres: 16,
      sort_by: "popularity.desc",
    },
    signal,
  });
  const data = res.data.results;
  return data;
};

// Popular service
export const getPopularMovies = async ({ signal }) => {
  const res = await axiosInstance.get("movie/popular", { signal });
  const data = res.data.results;
  return data;
};

// Movie detail service
export const getMovieDetail = async ({ type, id, signal }) => {
  const res = await axiosInstance.get(`${type}/${id}`, { signal });
  const { data } = res;
  return data;
};

// Movie credits service
export const getMovieCredits = async ({ type, id, signal }) => {
  const res = await axiosInstance.get(`${type}/${id}/credits`, { signal });
  const { data } = res;
  return data;
};

// Movie videos service
export const getMovieVideos = async ({ type, id, signal }) => {
  const res = await axiosInstance.get(`${type}/${id}/videos`, { signal });
  const { data } = res;
  return data;
};

// Similar movie service
export const getMovieSimilar = async ({ type, id, signal }) => {
  const res = await axiosInstance.get(`${type}/${id}/similar`, { signal });
  const { data } = res;
  return data;
};

// Movie reviews service
export const getMovieReviews = async ({ type, id, signal }) => {
  const res = await axiosInstance.get(`${type}/${id}/reviews`, { signal });
  const { data } = res;
  return data;
};
