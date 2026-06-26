import { Header } from "@/widgets/header/header.tsx";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
