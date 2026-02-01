import Home from "@/pages/home";
import { PATHS } from "./paths";
import type { RouteType } from "@/types/route.type";
import { BaseLayout } from "@/layouts/base-layout";


export const ROUTES: RouteType[] = [
  {
    path: PATHS.HOME,
    element: <Home />,
    title: "Home",
    layout: BaseLayout,
  },
];
