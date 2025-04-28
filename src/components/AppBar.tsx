"use client";

import { Link } from "@/i18n/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function AppBar() {
  const pathname = usePathname();
  const t = useTranslations("AppBar");

  return (
    <NavigationMenu className="flex h-[5%] w-screen justify-between bg-amber-300 px-8 py-2 sm:px-8">
      <NavigationMenuList>
        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Link href="/" legacyBehavior passHref>
              <p
                className={`${
                  pathname.includes("/admin")
                    ? ""
                    : "underline decoration-2 underline-offset-2"
                } cursor-pointer font-semibold`}
              >
                {t("individual")}
              </p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Link href="/admin" legacyBehavior passHref>
              <p
                className={`${
                  pathname.includes("/admin")
                    ? "underline decoration-2 underline-offset-2"
                    : ""
                } font-semibold`}
              >
                {t("admin")}
              </p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Link
              href={pathname.length <= 3 ? "/" : pathname.slice(3)}
              locale="en"
              legacyBehavior
              passHref
            >
              <p
                className={`${
                  pathname.includes("/fi")
                    ? ""
                    : "underline decoration-2 underline-offset-2"
                } font-semibold`}
              >
                EN
              </p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="cursor-pointer">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Link
              href={pathname.length <= 3 ? "/" : pathname.slice(3)}
              locale="fi"
              legacyBehavior
              passHref
            >
              <p
                className={`${
                  pathname.includes("/fi")
                    ? "underline decoration-2 underline-offset-2"
                    : ""
                } font-semibold`}
              >
                FI
              </p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
