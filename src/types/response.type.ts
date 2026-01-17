import type { CommentType, PostType } from "./posts.type";

export type PostsTypeResponse = {
  limit: number;
  posts: PostType[];
  skip: number;
  total: number;
};

export type CommentsTypeResponse = {
  limit: number;
  comments: CommentType[];
  skip: number;
  total: number;
};
