import Users from "./users.tsx";
import { AppProvider } from "./providers/app-provider.tsx";
import CardPost from "./card/cardBlock.tsx";

function App() {
  return (
    <AppProvider>
      <CardPost />
    </AppProvider>
  );
}

export default App;
