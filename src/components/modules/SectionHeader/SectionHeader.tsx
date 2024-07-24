"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn.utils";
import { cva, VariantProps } from "class-variance-authority";
type TProps = {
  title: string;
  btnLabel?: string;
  type?: "default" | "cta";
  content?: string;
  className?: string;
};

const titleVariants = cva("", {
  variants: {
    size: {
      default: "h1",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      stretch: "hmh-button--stretch",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface TitleProps
  extends TProps,
    VariantProps<typeof titleVariants> {}

const SectionHeader = ({ title, content, className, size }: TitleProps) => {
  return (
    <div className="ims-container">
      <div className={cn("headline headline--center tw-mb-6", className)}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 2 }}
          className={cn(
            "tw-mb-2 text-primary-500 md:tw-md-4",
            titleVariants({ size })
          )}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 2 }}
          className="h5"
        >
          {content}
        </motion.p>
      </div>
    </div>
  );
};

export default SectionHeader;
