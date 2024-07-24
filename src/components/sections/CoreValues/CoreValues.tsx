"use client";

import React from "react";
import values from "@/data/values";
import { scrollUpVariants } from "@/utils/framer.utils";
import CardFeature from "@/components/modules/Cards/CardFeature";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn.utils";
import SectionHeader from "@/components/modules/SectionHeader";

const CoreValues = () => {
  return (
    <section className="infograph-block py-8">
      <div className="container mx-auto">
        <SectionHeader title={"Why choose Himalayan Mad Honey?"} size="4xl" className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-10">
          {values?.map((item: any, itemIndex: number) => {
            return (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.2 }}
                variants={scrollUpVariants}
                className="ims-col-6 ims-col-md-6 ims-col-lg-3"
                key={item?.title + itemIndex}
              >
                <CardFeature
                  icon={item?.icon}
                  key={item?.title + itemIndex}
                  topic={item?.title}
                  figure={item?.figure}
                  info={item?.description}
                  className={cn(itemIndex > 2 ? "-mt-[1px]" : "mt-0")}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
