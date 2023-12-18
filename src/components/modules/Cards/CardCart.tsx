import React from "react";
import Image from "next/image";
import { ICartItem } from "@/types";
import Counter from "@/components/elements/Counter/Counter";
import Price from "@/components/elements/Price/Price";

type TProps = {
  product: ICartItem;
};

const CardCart = ({ product }: TProps) => {
  return (
    <div className="flex gap-4">
      <div className="cart-item__thumbnail">
        <Image
          src={product.featured_image}
          alt={product.title}
          width={90}
          height={90}
        />
      </div>
      <div className="cart-item__content">
        <p className="text-base text-primary-900 font-normal mb-1">
          {product.title}
        </p>
        <Price price={product.price} className="mb-1" />
        <Counter />
      </div>
    </div>
  );
};

export default CardCart;
