"use client";

import CardProduct from "@/components/modules/Cards/CardProduct";
import SectionHeader from "@/components/modules/SectionHeader";
import React from "react";
import productss from "@/data/products";
import DefaultImg from "@/assets/images/img-default-banner.png";
import { useProducts, fetchProducts } from "@/services/products.service";

const FeaturedProductGrid = () => {
  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useProducts();
  console.log("pp", products);

  if (productsLoading) {
    return <p>Loading...</p>;
  }

  if (productsError) {
    return <p>Error fetching data</p>;
  }
  return (
    <section className="featured-product py-8 md:py-10 lg:py-20">
      <div className="container mx-auto space-y-10">
        <SectionHeader title={"Our Collection"} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {products &&
            products.map((product: any, index: number) => {
              return <CardProduct product={product} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductGrid;
