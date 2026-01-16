import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../query-client/query-client";
import type { IWrapperProps } from "../types/wrapper.type";

export function AppProvider({ children }: IWrapperProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
