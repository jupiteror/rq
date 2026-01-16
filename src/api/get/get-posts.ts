import { instance } from "../../instance";
import type { PostType } from "@/types/posts.type";

export type PostsTypeResponse = {
  limit: number;
  posts: PostType[];
  skip: number;
  total: number;
};

export async function getPosts(): Promise<PostsTypeResponse> {
  const res = await instance.get<PostsTypeResponse>("/posts");
  return res.data;
}
