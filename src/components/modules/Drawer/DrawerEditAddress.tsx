"use client";

import React, { ReactNode, useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import EditAddressForm from "../EditAddressForm";

type TProps = {
  children: ReactNode;
  open: boolean;
  setOpen: any;
  title: string;
};

const DrawerEditAddress = ({ children, open, setOpen, title }: TProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="sm:max-w-3xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Edit {title}</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <EditAddressForm title={title} setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  );
};

export default DrawerEditAddress;
