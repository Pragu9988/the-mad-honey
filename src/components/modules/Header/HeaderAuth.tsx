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
import Logo from "../Logo";

const HeaderAuth = () => {
  return (
    <div className="site-top">
      <header id="site-header" className="main-header bg-white border-b py-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4">
            <Logo />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderAuth;
