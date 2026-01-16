import { PATHS } from "./paths";

export const NAVIGATION = [
  {
    path: PATHS.HOME,
    title: "Home",
  },
  {
    path: PATHS.POST.POSTS,
    title: "Posts",
  },
  {
    path: PATHS.POST.COMMENTS,
    title: "Comments",
  },
] as const;
