import React from "react";
import { cn } from "@/utils";

type TProps = {
  className?: string;
  price?: any;
  regularPrice?: any;
  salePrice?: any;
};

const Price = ({ className, price, regularPrice, salePrice }: TProps) => {
  return (
    <div className={cn(className, "price flex items-center gap-4 flex-wrap")}>
      {!regularPrice && !salePrice ? (
        <dd>
          <span className="price--sale font-semibold" data-sale-price="">
            {price / 100}
          </span>
        </dd>
      ) : (
        <>
          <dd>
            <span className="price--sale font-semibold" data-sale-price="">
              {salePrice / 100}
            </span>
          </dd>
          <del>
            <span
              className="price price--regular text-gray-400 font-medium"
              data-regular-price=""
            >
              {regularPrice / 100}
            </span>
          </del>
        </>
      )}
    </div>
  );
};

export default Price;
