import { ShoppingBag, User } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/auth.context";
import { Button } from "@/components/elements/Buttons/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Anchor from "@/components/elements/Anchor";

const DropdownAuth = () => {
  const { user, isAuthenticated, loading, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  const authMenu = [
    {
      label: "Login",
      link: "/login",
    },
    {
      label: "Signup",
      link: "/signup",
    },
  ];

  const profileMenu = [
    {
      label: "Profile",
      link: "/myaccount/profile",
    },
    {
      label: "Order",
      link: "/myaccount/orders",
    },
    {
      label: "Downloads",
      link: "/myaccount/downloads",
    },
    {
      label: "Addresses",
      link: "/myaccount/addresses",
    },
    {
      label: "Wishlist",
      link: "/myaccount/wishlist",
    },
  ];
  return (
    <div className="hmh-header-auth">
      <DropdownMenu>
        <DropdownMenuTrigger className="align-middle">
          <User size={20} strokeWidth={1.5} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" min-w-[200px]">
          {isAuthenticated ? (
            <>
              <DropdownMenuLabel>
                <div className="flex justify-start items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user?.avatar_url} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="user-name text-sm">{user?.username}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {profileMenu.map((menu, index) => {
                return (
                  <DropdownMenuItem key={menu.label}>
                    <Anchor target={"self"} path={menu.link}>
                      {menu.label}
                    </Anchor>
                  </DropdownMenuItem>
                );
              })}
              <DropdownMenuItem
                onClick={handleLogout}
                className=" text-destructive cursor-pointer"
              >
                Logout
              </DropdownMenuItem>
            </>
          ) : (
            <div className="space-y-4 p-4">
              <Button href="/login" className="w-full h-8" size={"sm"}>
                Login
              </Button>
              <Button
                href="/signup"
                className="w-full h-8"
                variant={"accent"}
                size={"sm"}
              >
                Signup
              </Button>
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownAuth;
