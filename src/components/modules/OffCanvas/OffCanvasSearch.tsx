import React, { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/elements/Buttons/Button";

type TProps = {
  children: ReactNode;
};

const OffCanvasSearch = ({ children }: TProps) => {
  return (
    <div className="search-offcanvas">
      <Sheet>
        <SheetTrigger className="align-middle" asChild>
          {children}
        </SheetTrigger>
        <SheetContent side={"top"}>
          <SheetHeader>
            <SheetDescription className="py-12">
              <div className="max-w-md mx-auto">
                <h3 className="search-label text-xl font-semibold">
                  Search product
                </h3>
                <div className="flex w-full items-center justify-center space-x-2">
                  <Input type="email" placeholder="Email" />
                  <Button variant={"accent"} size={"sm"} type="submit">
                    Search
                  </Button>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default OffCanvasSearch;
