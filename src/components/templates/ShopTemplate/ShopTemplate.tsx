"use client";

import PageBanner from "@/components/sections/PageBanner";
import React from "react";
import heroBannerImg from "@/assets/images/hero-banner.jpg";
import ShopProducts from "@/components/sections/ShopProducts";
import { IProduct } from "@/types";

type TProps = {
  products?: IProduct[];
};

const ShopTemplate = ({ products }: TProps) => {
  return (
    <>
      <PageBanner
        title={"Shop"}
        variant={"center_text"}
        imgSrc={heroBannerImg}
      />
      <ShopProducts data={products} />
    </>
  );
};

export default ShopTemplate;
