import type { JSX } from "react";

export type RouteType = {
  path: string;
  element: JSX.Element | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layout: JSX.Element | any;
  title: string;
};
