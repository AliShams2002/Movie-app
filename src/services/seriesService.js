import { axiosInstance } from "./Config";

export const getSeries = async () => {
  const res = await axiosInstance.get("trending/tv/day");
  const data = res.data.results;
  return data;
};

export const getSeriesWithFillter = async (id) => {
  const res = await axiosInstance.get(`discover/tv?with_genres=${id}`);
  const data = res.data.results;
  return data;
};
