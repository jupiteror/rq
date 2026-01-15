import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query-client.ts";
import Users from "./users.tsx";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users/>
    </QueryClientProvider>
  );
}

export default App;
