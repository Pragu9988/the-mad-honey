import React from "react";
import { cn } from "@/utils";

type TProps = {
  className?: string;
  price?: any;
  regularPrice?: any;
  salePrice?: any;
  inCent?: boolean;
};

const Price = ({
  className,
  price,
  regularPrice,
  salePrice,
  inCent = true,
}: TProps) => {
  const formatPrice = (value: any) => `$ ${inCent ? value / 100 : value}`;

  return (
    <div className={cn(className, "price flex items-center gap-4 flex-wrap text-2xl")}>
      {!regularPrice && !salePrice ? (
        <dd>
          <span className="price--sale font-semibold" data-sale-price="">
            {formatPrice(price)}
          </span>
        </dd>
      ) : (
        <>
          <dd>
            <span className="price--sale font-semibold" data-sale-price="">
              {formatPrice(salePrice)}
            </span>
          </dd>
          <del>
            <span
              className="price price--regular text-gray-400 font-medium"
              data-regular-price=""
            >
              {formatPrice(regularPrice)}
            </span>
          </del>
        </>
      )}
    </div>
  );
};

export default Price;
