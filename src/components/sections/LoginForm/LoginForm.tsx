"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/elements/Buttons/Button";
import { useAuth } from "@/context/auth.context";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { loginFormSchema } from "@/utils/formSchema";

const LoginForm = () => {
  const { toast } = useToast();
  const { user, login, logout, isAuthenticated, loading } = useAuth();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    // Do something with the form values.
    login(values);
    // ✅ This will be type-safe and validated
    if (isAuthenticated) {
      toast({
        description: "User logged in successfully.",
      });
    }
  }

  return (
    <section className="login-section pb-8 md:pb-10 lg:pb-16 space-y-8 md:space-y-10">
      <div className="login-section__heading bg-accent-100 py-6 md:py-8">
        <div className="container mx-auto">
          <h1 className="text-4xl text-primary-500 font-bold text-center">
            Login
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="login-form__wrapper max-w-sm mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid w-full items-center gap-1.5">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base" htmlFor="username">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-12 bg-white"
                          type="text"
                          id="username"
                          placeholder="Username"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base" htmlFor="password">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-12 bg-white"
                          type="password"
                          id="password"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <Button
                type="submit"
                variant={"accent"}
                size={"sm"}
                className="w-full mt-6"
              >
                Login
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
