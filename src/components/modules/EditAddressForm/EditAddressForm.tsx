"use client";

import React, { useEffect, useState } from "react";
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
import { Button } from "@/components/elements/Buttons/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { updateCustomer } from "@/services/customer.service";
import { useAuth } from "@/context/auth.context";
import { IAddressData } from "@/types";

type TProps = {
  title: string;
  setOpen: any;
};

const EditAddressForm = ({ title, setOpen }: TProps) => {
  const { user, setUser, loading, setLoading } = useAuth();
  const { toast } = useToast();
  const [isBilling, setIsBilling] = useState(true);

  useEffect(() => {
    if (title != "Billing Address") {
      setIsBilling(false);
    }
  }, [title]);

  const form = useForm({
    defaultValues: title != "Billing Address" ? user?.shipping : user?.billing,
  });

  function onSubmit(values: any) {
    console.log("values", values);
    if (isBilling) {
      const data = {
        billing: {
          ...values,
        },
      };
      updateAddress(data);
    } else {
      const data = {
        shipping: {
          ...values,
        },
      };
      updateAddress(data);
    }
  }

  const updateAddress = async (data: any) => {
    setLoading(true);
    try {
      const res = await updateCustomer(data);
      console.log("res", res);
      if (res.status == 200) {
        setUser(res.data);
        setOpen(false);
        toast({
          description: "Address created successfully.",
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
                <FormLabel htmlFor="company">Company</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 bg-white"
                    type="text"
                    id="company"
                    placeholder="Company Name"
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
            name="address_1"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="address_1">Address 1</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 bg-white"
                    type="text"
                    id="address_1"
                    placeholder="Address"
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
            name="address_2"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="address_2">Address 2</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 bg-white"
                    type="text"
                    id="address_2"
                    placeholder="Address 2 (Optional)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-4">
          <div className="grid w-full items-center gap-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="city">City</FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 bg-white"
                      type="text"
                      id="city"
                      placeholder="City"
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
              name="postcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="postcode">Post Code</FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 bg-white"
                      type="text"
                      id="postcode"
                      placeholder="Post Code"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-4">
          <div className="grid w-full items-center gap-4">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="country">Country</FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 bg-white"
                      type="text"
                      id="country"
                      placeholder="Country"
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
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="state">State</FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 bg-white"
                      type="text"
                      id="state"
                      placeholder="State"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
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
        <div className="grid w-full items-center gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 bg-white"
                    type="tel"
                    id="phone"
                    placeholder="Phone"
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
          Update
        </Button>
      </form>
    </Form>
  );
};

export default EditAddressForm;
