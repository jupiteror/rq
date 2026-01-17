import { NAVIGATION } from "@/config/navigation";
import { Link } from "react-router";

export function BaseNavigation() {
  return (
    <div>
      {NAVIGATION.map((nav) => (
        <Link key={nav.path} to={nav.path}>
          <span className="ml-4">{nav.title}</span>
        </Link>
      ))}
    </div>
  );
}
