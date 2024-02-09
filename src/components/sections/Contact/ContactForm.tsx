"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/elements/Buttons/Button";

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
import { contactFormSchema } from "@/utils/formSchema";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    toast({
      description: "Form Submission complete. We will get back to you soon.",
    });
  }

  return (
    <section className="py-6 md:py-8 lg:pt-20 lg:pb-8">
      <div className="container mx-auto">
        <div className="contact-form max-w-3xl mx-auto">
          <div className="section-padding">
            <div id="template" className="form-wrapper">
              <div id="customer">
                <div id="create-customer">
                  <div className="auth__header space-y-4">
                    <h2 className="mb-0 text-2xl md:text-4xl font-bold text-gray-800">
                      The largest Slovak travel agency with 100 years of
                      tradition
                    </h2>
                    <p>Let’s Talk, But You First!</p>
                    <p>
                      We’re proud of the relationships we build. We’re all
                      wildly different from each other, so chances are at least
                      one of us has something in common with you!
                    </p>
                  </div>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                        <div className="input-row">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-base" htmlFor="name">
                                  Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="h-12 bg-white"
                                    type="text"
                                    id="name"
                                    placeholder="Enter your Name"
                                    {...field}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          ></FormField>
                        </div>

                        <div className="input-row">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel
                                  className="text-base"
                                  htmlFor="email"
                                >
                                  Email
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    className="h-12 bg-white"
                                    type="email"
                                    id="email"
                                    placeholder="Enter your Email"
                                    {...field}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          ></FormField>
                        </div>
                      </div>

                      <div className="input-row">
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base" htmlFor="email">
                                Message
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
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
