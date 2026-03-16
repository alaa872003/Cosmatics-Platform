import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1";

export const endpoints = {
  products: "/products",
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
