import ProductTemplate from "@/components/templates/ProductTemplate";
import { fetchProducts } from "@/services/products.service";
import { IProduct } from "@/types";
import React from "react";

export default async function Product({
  params,
}: {
  params: { productSlug: string };
}) {
  const product: IProduct[] = await fetchProducts({ slug: params.productSlug });
  console.log("prod", product);
  return <ProductTemplate product={product[0]} />;
}
