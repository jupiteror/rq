import { PATHS } from "./paths";
import type { RouteType } from "@/types/route.type";
import { BaseLayout } from "@/layouts/base-layout";
import Home from "@/pages/home";
import CartsPage from "@/pages/carts";

export const ROUTES: RouteType[] = [
  {
    path: PATHS.HOME,
    element: <Home />,
    layout: BaseLayout,
  },
  {
    path: PATHS.CARTS,
    element: <CartsPage />,
    layout: BaseLayout,
  },
];
