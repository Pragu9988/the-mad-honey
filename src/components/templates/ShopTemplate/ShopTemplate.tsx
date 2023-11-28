import PageBanner from "@/components/sections/PageBanner";
import React from "react";
import heroBannerImg from "@/assets/images/hero-banner.jpg";
import ShopProducts from "@/components/sections/ShopProducts";

const ShopTemplate = () => {
  return (
    <>
      <PageBanner
        title={"Shop"}
        variant={"center_text"}
        imgSrc={heroBannerImg}
      />
      <ShopProducts />
    </>
  );
};

export default ShopTemplate;
