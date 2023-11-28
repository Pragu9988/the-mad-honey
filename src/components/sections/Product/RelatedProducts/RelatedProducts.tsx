import CardProduct from "@/components/modules/Cards/CardProduct";
import SectionHeader from "@/components/modules/SectionHeader";
import React from "react";
import products from "@/data/products";
import DefaultImg from "@/assets/images/img-default-banner.png";

const RelatedProducts = () => {
  return (
    <section className="related-product py-4 md:py-8 lg:py-10">
      <div className="container mx-auto space-y-10">
        <SectionHeader title={"Related Products"} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {products.map((product, index) => {
            return <CardProduct title={product.title} imgSrc={DefaultImg} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
