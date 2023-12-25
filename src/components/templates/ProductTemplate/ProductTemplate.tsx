import Breadcrumb from "@/components/modules/Breadcurmb/Breadcrumb";
import ProductSingle from "@/components/sections/Product/ProductSingle";
import ProductTabs from "@/components/sections/Product/ProductTabs";
import RelatedProducts from "@/components/sections/Product/RelatedProducts";
import React from "react";
import { IProduct } from "@/types";

type TProps = {
  product: IProduct;
};

const ProductTemplate = ({ product }: TProps) => {
  console.log("prod", product);

  return (
    <>
      <div className="container mx-auto">
        <Breadcrumb />
      </div>
      <ProductSingle product={product} />
      <ProductTabs product={product} />
      {/* <RelatedProducts /> */}
    </>
  );
};

export default ProductTemplate;
