import React from "react";
import { cn } from "@/utils";

type TProps = {
  className?: string;
  price?: string;
  regularPrice?: string;
  salePrice?: string;
};

const Price = ({ className, price, regularPrice, salePrice }: TProps) => {
  return (
    <div className={cn(className, "price flex items-center gap-4 flex-wrap")}>
      {!regularPrice && !salePrice ? (
        <dd>
          <span className="price--sale font-semibold" data-sale-price="">
            {price}
          </span>
        </dd>
      ) : (
        <>
          <dd>
            <span className="price--sale font-semibold" data-sale-price="">
              {salePrice}
            </span>
          </dd>
          <del>
            <span
              className="price price--regular text-gray-400 font-medium"
              data-regular-price=""
            >
              {regularPrice}
            </span>
          </del>
        </>
      )}
    </div>
  );
};

export default Price;
