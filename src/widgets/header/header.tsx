import { BaseNavigation } from "@/widgets/navigation/base-navigation";
import { Logo } from "@/shared/ui/logo/logo";
import { Button } from "@/shared/ui/button";
import { ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="py-4 px-5 flex items-center justify-between border-b">
      <div>
        <Logo width="1/2" height="1/2" />
      </div>
      <div>
        <BaseNavigation />
      </div>
      <div>
        <Button size={"icon-lg"}>
          <ShoppingCart />
        </Button>
      </div>
    </header>
  );
}
