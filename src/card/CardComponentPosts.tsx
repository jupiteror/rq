import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PostType } from "@/types/posts.type";

const CardComponentPosts = ({ posts }: { posts: PostType }) => {
  return (
    <Card className="my-5 " key={posts.id}>
      <CardHeader>
        <CardTitle>{posts?.title}</CardTitle>
        <CardDescription className="my-2">
          <Badge variant="outline">Tags: #{posts?.tags.join(", #")}</Badge>
        </CardDescription>
        <CardAction>{posts?.userId}</CardAction>
      </CardHeader>
      <CardContent>
        <p>{posts?.body}</p>
      </CardContent>
      <CardFooter>
        {posts?.reactions.likes} Likes, {posts?.reactions.dislikes} Dislikes,
        Views: {posts?.views}
        <Button className="ml-4">Comments</Button>
      </CardFooter>
    </Card>
  );
};

export default CardComponentPosts;
