export type PostType = {
  id: number;
  title: string;
  body: string;
  tags: string;
  reactions: ReactionsType[];
  views: number;
  userId: number;
};

type ReactionsType = {
  likes: number;
  dislikes: number;
};
