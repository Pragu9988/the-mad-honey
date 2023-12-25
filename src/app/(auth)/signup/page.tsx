import SignupFrom from "@/components/sections/SignupFrom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account",
};

export default function SignUpPage() {
  return (
    <section className="signup-section pb-8 md:pb-10 lg:pb-16 space-y-8 md:space-y-10">
      <div className="signup-section__heading bg-accent-100 py-6 md:py-8">
        <div className="container mx-auto">
          <h1 className="text-4xl text-primary-500 fond-bold text-center">
            Signup
          </h1>
        </div>
      </div>
      <SignupFrom />
    </section>
  );
}
