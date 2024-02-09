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
import { changePasswordFormSchema } from "@/utils/formSchema";
import { cn } from "@/utils";

const EditPasswordForm = () => {
  const { toast } = useToast();

  const { signup, isAuthenticated } = useAuth();

  const form = useForm<z.infer<typeof changePasswordFormSchema>>({
    resolver: zodResolver(changePasswordFormSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
      confirm_new_password: "",
    },
  });

  function onSubmit(values: z.infer<typeof changePasswordFormSchema>) {
    if (isAuthenticated) {
      toast({
        description: "User account created successfully.",
      });
    }
  }
  return (
    <div className="signup-form__wrapper max-w-xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid w-full items-center gap-4">
            <FormField
              control={form.control}
              name="old_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="old_password">Current Password</FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 bg-white"
                      type="password"
                      id="old_password"
                      placeholder="Current Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
          <div className="grid w-full items-center gap-4">
            <FormField
              control={form.control}
              name="new_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="new_password">New Password</FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 bg-white"
                      type="new_password"
                      id="new_password"
                      placeholder="New Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
          <div className="grid w-full items-center gap-4">
            <FormField
              control={form.control}
              name="confirm_new_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="confirm_new_password">
                    Confirm New Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 bg-white"
                      type="password"
                      id="confirm_new_password"
                      placeholder="confirm New Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
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
            Change Password
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EditPasswordForm;
