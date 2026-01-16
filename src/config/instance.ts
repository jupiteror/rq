import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5 * 60 * 1000,
  headers: { "X-Custom-Header": "foobar" },
});
