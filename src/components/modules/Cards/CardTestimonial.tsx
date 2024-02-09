import Image from "next/image";
import Anchor from "@/components/elements/Anchor";
import { cn } from "@/utils/cn.utils";
import { sanitize } from "@/utils/sanitize.uitls";
import { VariantProps, cva } from "class-variance-authority";
import DefaultImg from "@/assets/images/ims-default-banner.png";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

const cardVariants = cva("hmh-card", {
  variants: {
    type: {
      process: "hmh-card__type--process",
      testimonial: "hmh-card__type--testimonial border border-accent-200 rounded-lg p-6",
    },
    alignment: {
      vertical: "hmh-card__alignment--vertical",
      horizontal: "hmh-card__alignment--horizontal | grid grid-cols-3 gap-4",
    },
  },
  defaultVariants: {
    type: "process",
    alignment: "vertical",
  },
});

type TProps = VariantProps<typeof cardVariants> & {
  title?: string;
  className?: string;
  img?: any;
  link?: string;
  excerpt?: string;
  children: ReactNode;
};

const CardTestimonial = ({
  title,
  className,
  img,
  link,
  excerpt,
  type,
  alignment,
  children,
}: TProps) => {
  return (
    <div className={cn(cardVariants({ type, alignment, className }))}>
      {children}
    </div>
  );
};

export default CardTestimonial;
