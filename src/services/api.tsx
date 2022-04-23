import axios from "axios";

export const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
