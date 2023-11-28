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

const ShopProducts = () => {
  return (
    <section className="featured-product py-4 md:py-8 lg:py-10">
      <div className="container mx-auto space-y-6">
        <div className="flex justify-between">
          <div className="breadcrumb__container">
            <Breadcrumb />
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
          {products.map((product, index) => {
            return <CardProduct title={product.title} imgSrc={DefaultImg} />;
          })}
          {products.map((product, index) => {
            return <CardProduct title={product.title} imgSrc={DefaultImg} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopProducts;
