import { getPosts } from "@/api/get/get-posts";
import { PostContext } from "@/context/post-context";
import type { PostsTypeResponse } from "@/types/response.type";
import { useEffect, useState } from "react";

export type IPostType = {
  posts: PostsTypeResponse | null;
  setPosts: (posts: PostsTypeResponse) => void;
};

const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<PostsTypeResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res))
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error response</div>;

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
