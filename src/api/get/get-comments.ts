import { api } from "../../config/instance";

export async function getComments() {
  const res = await api.get("/comments");
  return res.data;
}
