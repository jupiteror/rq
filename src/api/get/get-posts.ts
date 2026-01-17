import { api } from "@/config/instance";
import type { PostsTypeResponse } from "@/types/response.type";

export async function getPosts(): Promise<PostsTypeResponse> {
  const res = await api.get<PostsTypeResponse>("/posts");

  return res.data;
}
