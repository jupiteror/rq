import { getPosts, type PostsTypeResponse } from "@/api/get/get-posts";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const CardPost = () => {
  const [pub, setPub] = useState<PostsTypeResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getPosts()
      .then((res) => {
        setPub(res);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Load...</div>;
  if (isError) return <div>Error response</div>;
  if (isLoading) return <div>Load...</div>;
  if (isError) return <div>Error response</div>;

  return (
    <div>
      {pub?.posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}

      <p>Всего постов: {pub?.total}</p>
    </div>
  );
};

export default CardPost;
