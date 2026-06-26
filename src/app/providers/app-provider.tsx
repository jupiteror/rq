import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import type {IWrapperProps} from "@/types/wrapper.type.ts";
import {queryClient} from "@/shared/api/query-client/query-client.ts";

export function AppProvider({ children }: IWrapperProps) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
}
