import { axiosInstance } from "./Config";

// TV series service
export const getSeries = async ({ signal }) => {
  const res = await axiosInstance.get("trending/tv/day", { signal });
  const data = res.data.results;
  return data;
};
