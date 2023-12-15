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
      label: "My Profile",
      link: "/my-account#profile",
    },
    {
      label: "My Order",
      link: "/my-account#order",
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
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>My Order</DropdownMenuItem>
              <DropdownMenuItem>My Purchase</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
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
