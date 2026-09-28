import { axiosInstance } from "./Config";

// Search service
export const getSearch = async ({ endpoint, params, signal }) => {
  const res = await axiosInstance.get(endpoint, {
    params: params,
    signal,
  });
  const { data } = res;
  return data;
};
