import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/elements/Buttons/Button";

const LoginForm = () => {
  return (
    <section className="login-section bg-primary-50 py-8 md:py-10 lg:py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl text-primary-500 font-bold text-center mb-8">
          Login
        </h1>
        <div className="login-form__wrapper max-w-sm mx-auto">
          <form action="" className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label className="text-base" htmlFor="email">
                Email
              </Label>
              <Input
                className="h-12 bg-white"
                type="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label className="text-base" htmlFor="email">
                Password
              </Label>
              <Input
                className="h-12 bg-white"
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <Button variant={"accent"} size={"sm"} className="w-full mt-6">Login</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
