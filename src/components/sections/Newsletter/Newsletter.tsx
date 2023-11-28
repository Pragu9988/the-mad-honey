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

interface NewsletterInterface {
  data?: any;
}

const MotionButton = motion(Button);

const Newsletter: React.FC<NewsletterInterface> = ({ data }) => {
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
            <div className="flex w-full items-center space-x-2 bg-white p-2 pl-4 rounded">
              <Mail className="text-neutral-500" size={32} />
              <Input
                type="email"
                placeholder="Email"
                className=" border-none focus:ring-0"
              />
              <Button type="submit">Subscribe</Button>
            </div>
            <div className="items-top flex space-x-2">
              <Checkbox id="terms1" className="border-white" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-xs font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  By subscribing to newsletters, you agree to the processing
                  personal data and profiling for the purpose of sending
                  personalized marketing offers and you declare that you have
                  become familiar with the Information on the processing of
                  personal data.
                </label>
              </div>
            </div>
          </div>
          <div className="ims-col-12 ims-col-lg-7 -order-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
