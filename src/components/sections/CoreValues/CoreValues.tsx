"use client";

import React from "react";
import values from "@/data/values";
import { scrollUpVariants } from "@/utils/framer.utils";
import CardFeature from "@/components/modules/Cards/CardFeature";
import { motion } from "framer-motion";

const CoreValues = () => {
  return (
    <section className="infograph-block bg-primary-100 ims-padding-block py-8 md:py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
                  key={item?.title + itemIndex}
                  topic={item?.title}
                  figure={item?.figure}
                  info={item?.description}
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
