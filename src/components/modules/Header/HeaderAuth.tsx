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

const HeaderAuth = () => {
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
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>My Order</DropdownMenuItem>
          <DropdownMenuItem>My Purchase</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeaderAuth;
