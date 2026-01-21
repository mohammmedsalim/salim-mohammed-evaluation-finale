import axios from "axios";

console.log("DEBUG: VITE_API_BASE_URL =", import.meta.env.VITE_API_BASE_URL);

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
    ? `${import.meta.env.VITE_API_BASE_URL}/api`
    : "http://localhost:5000/api",
});
