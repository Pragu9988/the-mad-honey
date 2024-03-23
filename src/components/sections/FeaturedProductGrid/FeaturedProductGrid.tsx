"use client";

import CardProduct from "@/components/modules/Cards/CardProduct";
import SectionHeader from "@/components/modules/SectionHeader";
import React from "react";
import productss from "@/data/products";
import DefaultImg from "@/assets/images/img-default-banner.png";
import { useProducts, fetchProducts } from "@/services/products.service";
import SkeletonProductCard from "@/components/modules/Skeleton/SkeletonProductCard";

const FeaturedProductGrid = () => {
  const params: Record<string, any> = {
    per_page: 4,
  };
  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useProducts(null, params);

  const skeletons = Array.from(new Array(Math.floor(5)), (_x, i) => i + 1);
  return (
    <section className="featured-product py-8 md:py-10 lg:py-20">
      <div className="container mx-auto space-y-10">
        <SectionHeader title={"Our Collection"} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {productsLoading || productsError
            ? Array.from({ length: 4 }, (_, index) => (
                <SkeletonProductCard key={index} />
              ))
            : products &&
              products.map((product: any, index: number) => {
                return <CardProduct product={product} key={product.id} />;
              })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductGrid;
