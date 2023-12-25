"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IAddressData } from "@/types";
import { PenSquare } from "lucide-react";
import DrawerEditAddress from "../Drawer/DrawerEditAddress";

type TProps = {
  className?: string;
  data?: IAddressData;
};
const CardAddress = ({ className }: TProps) => {
  const [openModal, setOpenModal] = useState(false);
  const data: IAddressData = {
    first_name: "Ram",
    last_name: "Mahat",
    company: "",
    address_1: "Old Baneshwor",
    address_2: "",
    city: "Kathmandu",
    postcode: "44600",
    country: "",
    state: "",
    email: "ram@mailnator.com",
    phone: "",
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const renderData = Object.entries(data).map(([key, value]) => {
    // Check if the value exists and is not an empty string
    if (value && value !== "") {
      return (
        <div className="grid grid-cols-3 gap-4" key={key}>
          <p className="text-sm font-semibold col-span-1 capitalize">
            {key.replace(/_/g, " ")}
          </p>
          <p className="text-sm text-gray-700 font-normal col-span-2">
            {value}
          </p>
        </div>
      );
    }
    return null;
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg flex justify-between items-start">
          Billing Address
          <DrawerEditAddress open={openModal} setOpen={setOpenModal}>
            <PenSquare
            size={20}
              strokeWidth={1.5}
              className="cursor-pointer hover:text-secondary"
              onClick={handleOpenModal}
            />
          </DrawerEditAddress>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">{renderData}</div>
      </CardContent>
    </Card>
  );
};

export default CardAddress;
