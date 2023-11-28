"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn.utils";
type TProps = {
  title: string;
  btnLabel?: string;
  type?: "default" | "cta";
  content?: string;
  className?: string;
};

const SectionHeader = ({ title, content, className }: TProps) => {
  return (
    <div className="ims-container">
      <div className={cn("headline headline--center tw-mb-6", className)}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 2 }}
          className="h1 tw-mb-2 text-primary-500 md:tw-md-4"
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
