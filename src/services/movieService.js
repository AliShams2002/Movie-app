import { axiosInstance } from "./Config";

export const getNowPlayingMovies = async ({ signal }) => {
  const res = await axiosInstance.get("movie/now_playing", { signal });
  const data = res.data.results;
  return data;
};

export const getDiscoverMovies = async (params) => {
  const res = await axiosInstance.get(
    `/discover/movie?with_genres=${params.genre}&sort_by=${params.sortBy}&vote_average.gte=${params.rating}&primary_release_year=${+params.year}&page=${params.page}`,
  );
  const data = res.data.results;
  return data;
};

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

export const getPopularMovies = async ({ signal }) => {
  const res = await axiosInstance.get("movie/popular", { signal });
  const data = res.data.results;
  return data;
};

export const getMovieDetail = async ({ type, id, signal }) => {
  const res = await axiosInstance.get(`${type}/${id}`, { signal });
  const { data } = res;
  return data;
};

export const getMovieCredits = async ({ type, id, signal }) => {
  const res = await axiosInstance.get(`${type}/${id}/credits`, { signal });
  const { data } = res;
  return data;
};

export const getMovieVideos = async ({ type, id, signal }) => {
  const res = await axiosInstance.get(`${type}/${id}/videos`, { signal });
  const { data } = res;
  return data;
};

export const getMovieSimilar = async ({ type, id, signal }) => {
  const res = await axiosInstance.get(`${type}/${id}/similar`, { signal });
  const { data } = res;
  return data;
};

export const getMovieReviews = async ({ type, id, signal }) => {
  const res = await axiosInstance.get(`${type}/${id}/reviews`, { signal });
  const { data } = res;
  return data;
};
