import axios from "axios";
import { instance } from "../../instance";
import type { PostType } from "../../type/posts.type";

export async function getPosts(): Promise<PostType> {
  return await instance.get("/posts").then((res) => res.data);
}