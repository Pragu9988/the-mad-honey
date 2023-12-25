"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TProps = {
  id: number;
  icon: JSX.Element;
  label: string;
  link: string;
};
const CardDashboard = ({ id, icon, label, link }: TProps) => {
  return (
    <Card className="w-full">
      <CardContent className="py-6 aspect-[3/2] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          {icon && icon}
          <p className="text-base font-medium">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDashboard;
