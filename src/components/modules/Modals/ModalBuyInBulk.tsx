"use client";

import React, { ReactNode, useState } from "react";
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
import BuyInBulkForm from "../BuyInBulkForm";

type TProps = {
  children: ReactNode;
};

const ModalBuyInBulk = ({ children }: TProps) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="modal-favorites">
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className=" max-w-3xl">
          <DialogHeader>
            <DialogTitle>Get a Quote for Bulk Purchase</DialogTitle>
            <DialogDescription>
              Inquire about our honey jars for bulk purchases. Fill out the form
              below to get a personalized quote and explore the perfect honey
              options for your needs.
            </DialogDescription>
          </DialogHeader>
          <BuyInBulkForm setOpenModal={setOpenModal} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalBuyInBulk;
