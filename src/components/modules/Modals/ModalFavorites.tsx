import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/elements/Buttons/Button";
import OffCanvasCart from "../OffCanvas/OffCanvasCart";

type TProps = {
  children: ReactNode;
};

const ModalFavorites = ({ children }: TProps) => {
  return (
    <div className="modal-favorites">
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Favorite Products</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">No favorite items available.</div>
          <DialogFooter>
            <OffCanvasCart>
              <Button type="submit">Add to Cart</Button>
            </OffCanvasCart>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalFavorites;
