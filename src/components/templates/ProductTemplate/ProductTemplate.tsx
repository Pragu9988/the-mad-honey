import Breadcrumb from "@/components/modules/Breadcurmb/Breadcrumb";
import ProductSingle from "@/components/sections/Product/ProductSingle";
import ProductTabs from "@/components/sections/Product/ProductTabs";
import RelatedProducts from "@/components/sections/Product/RelatedProducts";
import React from "react";

const ProductTemplate = () => {
  return (
    <>
      <div className="container mx-auto">
        <Breadcrumb />
      </div>
      <ProductSingle />
      <ProductTabs />
      <RelatedProducts />
    </>
  );
};

export default ProductTemplate;
