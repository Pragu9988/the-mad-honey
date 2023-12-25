"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import profileMenus from "@/data/profileMenus";
import { cn } from "@/utils/cn.utils";

const AccountNavbar = () => {
  return (
    <div>
      <NavigationMenu className="account-navbar max-w-none justify-start bg-primary-50 px-4 rounded-md shadow">
        <NavigationMenuList className="flex-col items-start gap-0 space-x-0">
          {profileMenus.map((menu: any, index: number) => {
            return (
              <NavigationMenuItem
                key={menu.id}
                className="w-full border-b border-gray-200"
              >
                <Link href={`/myaccount${menu.path}`} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-lg bg-transparent hover:bg-transparent hover:text-accent focus:text-accent focus:bg-transparent px-2 py-6 "
                    )}
                  >
                    {menu.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default AccountNavbar;
