import CheckoutForm from "@/components/sections/CheckoutFrom/CheckoutForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account",
};

export default function CheckoutPage() {
  return <CheckoutForm />;
}
