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
import EditPasswordForm from "../EditPasswordForm";

const CardEditPassword = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-base">Edit Password</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <EditPasswordForm />
      </CardContent>
    </Card>
  );
};

export default CardEditPassword;
