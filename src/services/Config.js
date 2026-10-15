import axios from "axios";
import toast from "react-hot-toast";
// import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MOVIE_API_URL || "https://api.themoviedb.org",
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
    // مدیریت خطاهای شبکه یا سرور// مدیریت خطاهای مختلف
    if (!error.response) {
      return Promise.reject(
        new Error("Connection to the server could not be established"),
      );
    }

    const { status, data } = error.response;

    switch (status) {
      case 401:
        // Unauthorized - هدایت به صفحه login
        localStorage.removeItem("token");
        window.location.href =
          "/login?redirect=" + encodeURIComponent(window.location.pathname);
        toast.error("Please log in again");
        break;

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

// تابع retry برای خطاهای شبکه
const retryAxios = async (fn, retries = 3, delay = 1000) => {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0 && (!error.response || error.response.status >= 500)) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      return retryAxios(fn, retries - 1, delay * 2);
    }
    throw error;
  }
};

export { axiosInstance, retryAxios };
