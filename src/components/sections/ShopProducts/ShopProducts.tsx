"use client";

import CardProduct from "@/components/modules/Cards/CardProduct";
import products from "@/data/products";
import React from "react";
import DefaultImg from "@/assets/images/img-default-banner.png";
import Breadcrumb from "@/components/modules/Breadcurmb/Breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProducts } from "@/services/products.service";
import { IProduct } from "@/types";

type TProps = {
  data?: IProduct[];
};

const ShopProducts = ({ data }: TProps) => {
  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useProducts(data);

  return (
    <section className="featured-product py-4 md:py-8 lg:py-10">
      <div className="container mx-auto space-y-6">
        <div className="flex justify-between">
          <div className="breadcrumb__container">
            <Breadcrumb
              items={[{ label: "Home", url: "/" }, { label: "Products" }]}
            />
          </div>
          <div className="filter__select">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="By Popularity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {products?.map((product: any, index: number) => {
            return <CardProduct product={product} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopProducts;
