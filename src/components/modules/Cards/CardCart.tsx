import React from "react";
import Image from "next/image";
import { ICartItem } from "@/types";
import Counter from "@/components/elements/Counter/Counter";
import Price from "@/components/elements/Price/Price";

type TProps = {
  product: ICartItem;
  isCheckout?: boolean;
};

const CardCart = ({ product, isCheckout }: TProps) => {
  return (
    <div className="flex gap-4">
      <div className="cart-item__thumbnail relative">
        <Image
          src={product.featured_image}
          alt={product.title}
          width={90}
          height={90}
        />
        {isCheckout && (
          <span className="bg-accent text-white w-4 h-4 rounded-full flex items-center justify-center text-xs font-medium absolute -top-2 -right-2">
            {product.quantity.value}
          </span>
        )}
      </div>
      <div className="cart-item__content">
        <p className="text-base text-primary-900 font-normal mb-1">
          {product.title}
        </p>
        <Price price={product.price} className="mb-1" />
        {!isCheckout && (
          <Counter
            max={product.quantity.max_purchase}
            initialQty={product.quantity.value}
            productKey={product.item_key}
          />
        )}
      </div>
    </div>
  );
};

export default CardCart;
