export type PostType = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: ReactionsType;
  views: number;
  userId: number;
};

type ReactionsType = {
  likes: number;
  dislikes: number;
};

export type CommentType = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: UserCommentsType;
};

export type UserCommentsType = {
  id: number;
  username: string;
  fullName: string;
};
