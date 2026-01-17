import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CommentType } from "@/types/posts.type";

const CardComponentComments = ({ comment }: { comment: CommentType }) => {
  return (
    <Card className="my-5">
      <CardHeader>
        <CardTitle>{comment.user.username}</CardTitle>
        <CardDescription>{comment.user.fullName}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{comment.body}</p>
      </CardContent>
      <CardFooter>
        <p className="mr-2">Likes:{comment.likes};</p>
        <p>PostId:{comment.postId}</p>
      </CardFooter>
    </Card>
  );
};

export default CardComponentComments;
