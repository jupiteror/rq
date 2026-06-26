import { PATHS } from "./paths.ts";
import type { RouteType } from "@/types/route.type.ts";
import { BaseLayout } from "@/app/layouts/base-layout.tsx";
import Home from "@/pages/home.tsx";
import CartsPage from "@/pages/carts.tsx";

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
