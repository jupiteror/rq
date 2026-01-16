import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../query-client/query-client";
import type { IWrapperProps } from "../types/wrapper.type";
import { BrowserRouter } from "react-router";

export function AppProvider({ children }: IWrapperProps) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
}
