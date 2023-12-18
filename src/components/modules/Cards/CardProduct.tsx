"use client";
import { useState } from "react";
import Image from "next/image";
import Anchor from "@/components/elements/Anchor";
import { cn } from "@/utils/cn.utils";
import { VariantProps, cva } from "class-variance-authority";
import DefaultImg from "@/assets/images/img-default-banner.png";
import Price from "@/components/elements/Price/Price";
import AddToCart from "@/components/elements/AddToCart";

const cardVariants = cva("hmh-card", {
  variants: {
    type: {
      product: "hmh-card--product",
      cart: "hmh-card--cart",
    },
    alignment: {
      vertical: "hmh-card__alignment--vertical",
      horizontal:
        "hmh-card__alignment--horizontal tw-grid tw-grid-cols-3 tw-gap-4",
    },
  },
  defaultVariants: {
    type: "product",
    alignment: "vertical",
  },
});

type TProps = VariantProps<typeof cardVariants> & {
  product: any;
  className?: string;
};

const CardProduct = ({ product, className, type, alignment }: TProps) => {

  return (
    <div
      className={cn(
        " image-hover-zoom",
        cardVariants({ type, alignment, className })
      )}
    >
      {product.images[0] && (
        <Anchor path={`/${product.slug}`} target={"_self"}>
          <div
            className={cn(
              "hmh-card__image mb-4",
              alignment === "vertical" ? "tw-mb-2 md:tw-mb-4" : "tw-col-span-1"
            )}
          >
            <Image
              src={product.images[0].src}
              alt={product.name ?? "Gallery Image"}
              width={500}
              height={500}
              quality={75}
              className={cn("object-contain")}
              placeholder="blur"
              blurDataURL={DefaultImg.src}
            />
          </div>
        </Anchor>
      )}
      {product.name ? (
        <div
          className={cn(
            "hmh-card__content space-y-2",
            "tw-text-center md:tw-text-left"
          )}
        >
          <Anchor path={"/"} target="_self">
            <h3 className={`title`}>{product.name}</h3>
          </Anchor>
          {/* TODO style caption */}
          {/* {caption ? (
            <div
              className="caption"
              dangerouslySetInnerHTML={{
                __html: sanitize(caption),
              }}
            />
          ) : (
            <></>
          )} */}
          {/* <div
            className="excerpt"
            dangerouslySetInnerHTML={{ __html: sanitize(excerpt) }}
          /> */}
          <div className="price-container">
            <Price
              price={product.price}
              regularPrice={product?.regular_price}
              salePrice={product?.sale_price}
            />
          </div>
          <div className="cta">
            <AddToCart productId={product.id} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CardProduct;
