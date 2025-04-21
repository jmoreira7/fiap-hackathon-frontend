import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-screen bg-black py-3 flex justify-center">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={`font-bold ${
                location.pathname === "/"
                  ? "text-black bg-white"
                  : "text-gray-200"
              }`}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/students"
              className={`font-bold ${
                location.pathname === "/students"
                  ? "text-black bg-white"
                  : "text-gray-200"
              }`}
            >
              Manage Students
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
