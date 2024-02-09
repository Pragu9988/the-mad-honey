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
import { Button } from "@/components/ui/button";
import SignupForm from "@/components/sections/SignupFrom/SignupForm";
import CustomerUpdateForm from "@/components/sections/CustomerUpdateForm";

const CardEditProfile = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-base">Edit Profile</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <CustomerUpdateForm fullWidth />
      </CardContent>
    </Card>
  );
};

export default CardEditProfile;
