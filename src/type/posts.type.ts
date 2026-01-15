export type PostType = {
  id: number;
  title: string;
  body: string;
  tags: string;
  reactions: ReactionsType[];
  views: number;
  userId: 121;
};

type ReactionsType = {
  likes: number;
  dislikes: number;
};
