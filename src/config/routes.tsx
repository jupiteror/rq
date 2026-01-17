import Home from "@/pages/home";
import { PATHS } from "./paths";
import type { RouteType } from "@/types/route.type";
import { BaseLayout } from "@/layouts/base-layout";
import PostsPage from "@/pages/posts-page";
import CommentsPage from "@/pages/comments-page";

export const ROUTES: RouteType[] = [
  {
    path: PATHS.HOME,
    element: <Home />,
    title: "Home",
    layout: BaseLayout,
  },
  {
    path: PATHS.POST.POSTS,
    element: <PostsPage />,
    title: "Posts",
    layout: BaseLayout,
  },
  {
    path: PATHS.POST.COMMENTS,
    element: <CommentsPage />,
    title: "Comments",
    layout: BaseLayout,
  },
];
