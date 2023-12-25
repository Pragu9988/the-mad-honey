import SignupFrom from "@/components/sections/SignupFrom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account",
};

export default function CheckoutPage() {
  return <SignupFrom />;
}
