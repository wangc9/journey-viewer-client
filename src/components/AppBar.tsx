"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";

export default function AppBar() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="w-screen px-8 py-2 sm:px-8 h-6 flex justify-between bg-amber-300">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle() + "bg-amber-300"}
            >
              <p
                className={`${
                  pathname.includes("/admin/")
                    ? ""
                    : "underline underline-offset-2"
                } font-semibold`}
              >
                Individual
              </p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/admin" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p
                className={`${
                  pathname.includes("/admin/")
                    ? "underline underline-offset-2"
                    : ""
                } font-semibold`}
              >
                Admin
              </p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle() + "bg-amber-300"}
            >
              <p
                className={`${
                  pathname.includes("/fi/")
                    ? ""
                    : "underline underline-offset-2"
                } font-semibold`}
              >
                EN
              </p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/admin" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p
                className={`${
                  pathname.includes("/fi/")
                    ? "underline underline-offset-2"
                    : ""
                } font-semibold`}
              >
                FI
              </p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
