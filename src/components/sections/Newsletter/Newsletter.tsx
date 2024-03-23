"use client";

import { Button } from "@/components/elements/Buttons/Button";
import ctaBackgroundImg from "@/assets/images/cta-background.jpg";
import Anchor from "@/components/elements/Anchor";
import { motion } from "framer-motion";
import { sanitize } from "@/utils/sanitize.uitls";
import { scrollUpVariants } from "@/utils/framer.utils";
import { Mail, MoveRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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
import { useForm } from "react-hook-form";
import { newsletterFormSchema } from "@/utils/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSubscribe } from "@/services/newsletter.service";
import { z } from "zod";

interface NewsletterInterface {
  data?: any;
}

const MotionButton = motion(Button);

const Newsletter: React.FC<NewsletterInterface> = ({ data }) => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof newsletterFormSchema>>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
      // terms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof newsletterFormSchema>) {
    console.log("values", values);
    const response = await newsletterSubscribe(values.email);
    if (response) {
      toast({
        description:
          "Subscription Successful! Thank you for subscribing to our newsletter.",
      });
    }
  }
  return (
    <section
      className="call-to-action py-16 md:py-24 bg-cover relative"
      style={{ backgroundImage: `url(${ctaBackgroundImg.src})` }}
    >
      <div className="absolute top-0 end-0 w-3/4 h-full bg-gradient-to-l from-accent-600 hidden lg:block"></div>
      <div className="hmh-container relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-white space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              className="h1 cta__title"
            >
              Handpicked Offers Delivered to Your Inbox!
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              className="cta__subtitle text-lg tw-mb-8"
            >
              Get the hottest deals and exclusive offers sent directly to you.
            </motion.div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="flex w-full items-center space-x-2 bg-white p-2 pl-4 rounded relative">
                  <Mail className="text-neutral-500" size={32} />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            className="border-none focus:ring-0 focus-visible:ring-0 text-gray-700"
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="absolute -bottom-8" />
                      </FormItem>
                    )}
                  ></FormField>
                  <Button type="submit">Subscribe</Button>
                </div>
                <div className="items-top flex space-x-2">
                  {/* <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Checkbox
                            className="border-white"
                            id="terms"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="terms"
                          className="text-xs font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          By subscribing to newsletters, you agree to the
                          processing personal data and profiling for the purpose
                          of sending personalized marketing offers and you
                          declare that you have become familiar with the
                          Information on the processing of personal data.
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField> */}
                </div>
              </form>
            </Form>
          </div>
          <div className="ims-col-12 ims-col-lg-7 -order-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
