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
import * as z from "zod";
import { buyInBulkSchema } from "@/utils/formSchema";
import { Textarea } from "@/components/ui/textarea";
import { MailCheck } from "lucide-react";

type TProps = {
  setOpenModal: any;
};
const BuyInBulkForm = ({ setOpenModal }: TProps) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof buyInBulkSchema>>({
    resolver: zodResolver(buyInBulkSchema),
  });

  function onSubmit(values: z.infer<typeof buyInBulkSchema>) {
    setHasSubmitted(true);
  }
  return (
    <div>
      {hasSubmitted ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <MailCheck size={48} strokeWidth={3} className="text-green-500" />
          <div className="msg space-y-4">
            <h3 className="text-xl text-gray-700">
              Thank you for submitting your enquiry!
            </h3>
            <p className="text-base">
              We appreciate your interest in our honey jars. Our team will
              review your request and get back to you shortly. If you have any
              urgent questions, please feel free to contact us at
              <a href="mailto:query@himalayanmadhoney.net">
                query@himalayanmadhoney.net
              </a>
              .
            </p>
          </div>
          <Button variant={"outline"} onClick={setOpenModal(false)}>
            Close
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-row grid grid-cols-1 md:grid-cols-2 w-full items-center gap-4">
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="full_name">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        type="text"
                        id="full_name"
                        placeholder="Full Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="company_name">
                      Company Name (if applicable)
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        type="text"
                        id="company_name"
                        placeholder="Company Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div className="form-row grid grid-cols-1 md:grid-cols-2 w-full items-center gap-4">
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
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="phone">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        type="tel"
                        id="phone"
                        placeholder="Phone Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div className="form-row grid grid-cols-1 md:grid-cols-2 w-full items-center gap-4">
              <FormField
                control={form.control}
                name="product_of_interest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="product_of_interest">
                      Product of Interest
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        type="text"
                        id="product_of_interest"
                        placeholder="Product of Interest"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="estimated_qty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="estimated_qty">
                      Estimated Quantity
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        type="tel"
                        id="estimated_qty"
                        placeholder="Eg. 1kg or 50 units"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div className="form-row">
              <FormField
                control={form.control}
                name="shipping_destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="shipping_destination">
                      Shipping Destination
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        type="text"
                        id="shipping_destination"
                        placeholder="Shipping Destination"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div className="form-row">
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base" htmlFor="email">
                      Additional Comments/Notes
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="form-action">
              <Button
                type="submit"
                variant={"accent"}
                size={"sm"}
                className="w-full mt-6"
              >
                Enquire Now
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default BuyInBulkForm;
