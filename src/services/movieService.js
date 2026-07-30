import { axiosInstance } from "./Config";

export const getNowPlayingMovies = async () => {
  const res = await axiosInstance.get("movie/now_playing");
  const data = res.data.results;
  return data;
};

export const getAnimations = async () => {
  const res = await axiosInstance.get("/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16");
  const data = res.data.results;
  return data;
};

export const getPopularMovies = async () => {
  const res = await axiosInstance.get("movie/popular");
  const data = res.data.results;
  return data;
};
