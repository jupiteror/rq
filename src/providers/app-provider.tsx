import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../query-client/query-client";
import type { IWrapperProps } from "../types/wrapper.type";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./theme-provider";

export function AppProvider({ children }: IWrapperProps) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
