import axios from "axios";
import { toast } from "react-hot-toast";

const baseURL = "http://localhost:8000";

export const backend = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  adapter: "fetch",
  responseType: 'stream'
});

backend.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 422) {
      const errors = error.response.data.detail;
      errors.forEach((err: any) => {
        toast.error(err.msg);
      });
    } else {
      toast.error("An unexpected error occurred");
    }
    return Promise.reject(error);
  }
);
