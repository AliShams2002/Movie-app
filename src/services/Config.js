import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MOVIE_API_URL || "https://api.themoviedb.org/3",
  timeout: 30000,
  timeoutErrorMessage: "The response time took more than 30 seconds!",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
    Accept: "application/json",
    "Accept-Language": "fa-IR",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data && response.data.success === false) {
      const error = new Error(response.data.message || "Server Error");
      error.response = response;
      return Promise.reject(error);
    }

    return response;
  },
  (error) => {
    // Handling network or server errors // Handling various types of errors
    if (!error.response) {
      return Promise.reject(
        new Error("Connection to the server could not be established"),
      );
    }

    const { status, data } = error.response;

    switch (status) {
      case 404:
        // Not Found
        toast.error("The requested resource was not found");
        break;

      case 500:
        // Server Error
        toast.error("Internal server error. Please contact support");
        break;

      default:
        toast.error(data?.message || "Unknown error");
    }

    return Promise.reject(error);
  },
);

export { axiosInstance };
