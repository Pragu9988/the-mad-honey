import ShopTemplate from "@/components/templates/ShopTemplate";
import config from "@/config/api.config";
import axios from "axios";
import React, { cache } from "react";
import { fetchProducts } from "@/services/products.service";
import { IProduct } from "@/types";

export default async function Shop() {
  const products: IProduct[] = await fetchProducts({});

  return <ShopTemplate products={products} />;
}
