"use client";

import Link, { type LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuSub,
} from "./navigation-menu";
import { cn } from "@/lib/utils";

function SideBar() {
  return (
    <NavigationMenu orientation="horizontal">
      <NavigationMenuList className="flex flex-column">
        <div>
          <NavigationMenuItem>
            <NextNavigationMenuLink href={"/"}>Introduction</NextNavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NextNavigationMenuLink href={"/without-slots"}>Without slots</NextNavigationMenuLink>
            <NavigationMenuSub>
              <NextNavigationMenuLink href={"/without-slots/with-suspense"}>
                With suspense
              </NextNavigationMenuLink>
              <NextNavigationMenuLink href={"/without-slots/suspense-error"}>
                Suspense with error
              </NextNavigationMenuLink>
            </NavigationMenuSub>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NextNavigationMenuLink href={"/with-slots"}>With slots</NextNavigationMenuLink>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NextNavigationMenuLink({ href, ...props }: NextLinkProps & { children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenuLink
      className={cn(navigationMenuTriggerStyle(), "w-full")}
      active={isActive}
      asChild
    >
      <Link {...props} href={href} className="block w-full" />
    </NavigationMenuLink>
  );
}

export { SideBar };
