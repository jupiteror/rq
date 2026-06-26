import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 5 * 60 * 1000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  responseType: "json",
});
