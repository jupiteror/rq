import { getComments } from "@/api/get/get-comments";
import CardComponentComments from "@/card/CardComponentComments";
import type { CommentsTypeResponse } from "@/types/response.type";
import { useEffect, useState } from "react";

const CommentsPage = () => {
  const [comments, setComments] = useState<CommentsTypeResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getComments()
      .then((res) => {
        return setComments(res);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  console.log(comments);
  


  if (isLoading) return <div>Load...</div>;
  if (isError) return <div>Error response</div>;

  return (
    <div className="px-20">
      {comments?.comments.map((comment) => (
        <CardComponentComments comment={comment} />
      ))}
    </div>
  );
};

export default CommentsPage;
