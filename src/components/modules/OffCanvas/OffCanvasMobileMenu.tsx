"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/context/cart.context";
import emptyCart from "@/assets/images/empty-cart.png";
import { Button } from "@/components/elements/Buttons/Button";
import { ICartItem } from "@/types";
import CardCart from "../Cards/CardCart";
import Anchor from "@/components/elements/Anchor";
import Logo from "../Logo";
import Navbar from "../Navbar/Navbar";

type TProps = {
  children: ReactNode;
};
const OffCanvasMobileMenu = ({ children }: TProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="mobile-menu-offcanvas">
      <Sheet open={openMenu} onOpenChange={setOpenMenu}>
        <SheetTrigger className="align-middle">{children}</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription>
              <Navbar isOffcanvas={true} />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default OffCanvasMobileMenu;
