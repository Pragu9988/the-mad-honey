"use client";

import React, { useMemo } from "react";
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
import { customerFormSchema } from "@/utils/formSchema";
import { cn } from "@/utils";
import { updateCustomer } from "@/services/customer.service";

type TProps = {
  fullWidth?: boolean;
};

const CustomerUpdateForm = ({ fullWidth }: TProps) => {
  const { user, setUser, loading, setLoading } = useAuth();
  console.log("user", user);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof customerFormSchema>>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: useMemo(() => {
      return {
        first_name: user ? user?.first_name : "",
        last_name: user ? user?.last_name : "",
        email: user ? user?.email : "",
      };
    }, [user]),
  });

  function onSubmit(values: z.infer<typeof customerFormSchema>) {
    updateProfile(values);
  }

  const updateProfile = async (data: any) => {
    setLoading(true);
    try {
      const res = await updateCustomer(data);
      if (res.status == 200) {
        setUser(res.data);
        toast({
          description: "User account updated successfully.",
        });
      }
    } catch (error) {
      console.error("Update customer error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={cn(!fullWidth ? "container mx-auto" : "")}>
      <div className="signup-form__wrapper max-w-xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-4">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="first_name">First Name</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="last_name">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        type="email"
                        id="email"
                        placeholder="Email Address"
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
              Update Profile
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CustomerUpdateForm;
