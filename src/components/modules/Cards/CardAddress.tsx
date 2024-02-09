"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IAddressData } from "@/types";
import { Loader2, PenSquare } from "lucide-react";
import DrawerEditAddress from "../Drawer/DrawerEditAddress";
import { Button } from "@/components/ui/button";

type TProps = {
  className?: string;
  data: any;
  title: string;
};
const CardAddress = ({ className, data, title }: TProps) => {
  const [openModal, setOpenModal] = useState(false);

  const allEmpty = (data: IAddressData) => {
    return Object.values(data).every((value) => value === "");
  };

  const renderData = (data: IAddressData) => {
    const resultData = Object.entries(data).map(([key, value]) => {
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
      return <></>;
    });

    return resultData;
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const renderBillingData = data && renderData(data);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg flex justify-between items-start">
          {title}
          <DrawerEditAddress
            open={openModal}
            setOpen={setOpenModal}
            title={title}
          >
            {data && !allEmpty(data) ? (
              <PenSquare
                size={20}
                strokeWidth={1.5}
                className="cursor-pointer hover:text-secondary"
                onClick={handleOpenModal}
              />
            ) : (
              <Button variant={"outline"} size={"sm"} onClick={handleOpenModal}>
                Add {title}
              </Button>
            )}
          </DrawerEditAddress>
        </CardTitle>
      </CardHeader>
      {data && !allEmpty(data) ? (
        <CardContent>
          <div className="space-y-2">{renderBillingData}</div>
        </CardContent>
      ) : null}
    </Card>
  );
};

export default CardAddress;
