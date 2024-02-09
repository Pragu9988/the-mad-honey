import React from "react";
import Image from "next/image";

import SectionHeader from "@/components/modules/SectionHeader";

import process1Img from "@/assets/images/process-1.png";
import process2Img from "@/assets/images/process-2.png";
import process3Img from "@/assets/images/process-3.png";
import testimonials from "@/data/faqs";
import TestimonialMarquee from "./TestimonailMarquee";

const Testimonials = () => {
  return (
    <section className="hmh-testimonial  py-8 md:py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <SectionHeader title={"What our user say"} />
          </div>
          <div className="col-span-3">
            <TestimonialMarquee className={" px-8"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
