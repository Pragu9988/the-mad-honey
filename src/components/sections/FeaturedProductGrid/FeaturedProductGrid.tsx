import CardProduct from "@/components/modules/Cards/CardProduct";
import SectionHeader from "@/components/modules/SectionHeader";
import React from "react";
import products from "@/data/products";
import DefaultImg from "@/assets/images/img-default-banner.png";


const FeaturedProductGrid = () => {
  return (
    <section className="featured-product py-8 md:py-10 lg:py-20">
      <div className="container mx-auto space-y-10">
        <SectionHeader title={"Our Collection"} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {products.map((product, index) => {
            return <CardProduct title={product.title} imgSrc={DefaultImg} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductGrid;
