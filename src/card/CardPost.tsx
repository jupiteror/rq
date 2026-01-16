import { getPosts } from "@/api/get/get-posts";

import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import type { PostsTypeResponse } from "@/types/response.type";

const CardPost = () => {
  const [posts, setPosts] = useState<PostsTypeResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getPosts()
      .then((res) => {
        setPosts(res);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // console.log(pub);

  if (isLoading) return <div>Load...</div>;
  if (isError) return <div>Error response</div>;
  if (isLoading) return <div>Load...</div>;
  if (isError) return <div>Error response</div>;

  return (
    <div className="px-20">
      {posts?.posts.slice(0, 10).map((post) => (
        <CardComponent posts={post} />
      ))}
    </div>
  );
};

export default CardPost;
