import type { PostType } from "./posts.type";

export type PostsTypeResponse = {
  limit: number;
  posts: PostType[];
  skip: number;
  total: number;
};
