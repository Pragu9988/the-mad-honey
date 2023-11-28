import React from "react";
import { cn } from "@/utils";

type TProps = {
  className?: string;
};

const Price = ({ className }: TProps) => {
  return (
    <div className={cn(className, "price flex items-center gap-4 flex-wrap")}>
      <dd>
        <span className="price--sale font-semibold" data-sale-price="">
          33,99 €
        </span>
      </dd>
      <del>
        <span
          className="price price--regular text-gray-400 font-medium"
          data-regular-price=""
        >
          40,47 €
        </span>
      </del>
    </div>
  );
};

export default Price;
