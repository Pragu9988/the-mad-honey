"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/elements/Buttons/Button";
import { useAuth } from "@/context/auth.context";
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const LoginForm = () => {
  const { user, login, logout, isAuthenticated, loading } = useAuth();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    login(values);
    // ✅ This will be type-safe and validated
    console.log(values);
  }

  return (
    <section className="login-section bg-primary-50 py-8 md:py-10 lg:py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl text-primary-500 font-bold text-center mb-8">
          Login
        </h1>
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
