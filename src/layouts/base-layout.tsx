import { Header } from "@/widgets/header/header";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
