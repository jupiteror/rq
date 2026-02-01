import { ThemeSwitcher } from "@/shared/ui/theme-switcher";
import { BaseNavigation } from "@/navigation/base-navigation";

export function Header() {
  return (
    <header className="py-4 px-5 flex items-center justify-between border-b">
      <BaseNavigation />
      <ThemeSwitcher />
    </header>
  );
}
