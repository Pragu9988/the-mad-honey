import AddToCart from "@/components/elements/AddToCart";
import { Button } from "@/components/elements/Buttons/Button";
import Counter from "@/components/elements/Counter/Counter";
import Price from "@/components/elements/Price/Price";
import ProductMedia from "@/components/modules/ProductMedia";
import { IProduct } from "@/types";
import { sanitize } from "@/utils/sanitize.uitls";
import React from "react";

type TProps = {
  product: IProduct;
};

const ProductSingle = ({ product }: TProps) => {
  console.log("pp", product);
  return (
    <section className="product-single pb-4 md:pb-8 lg:pb-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="product-media">
            <ProductMedia />
          </div>
          <div className="product-summary space-y-4 md:space-y-8 py-8">
            <h2 className="product-summary__title font-medium">
              {product.name}
            </h2>
            <div
              className="product-summary__excerpt text-base"
              dangerouslySetInnerHTML={{
                __html: sanitize(product.short_description),
              }}
            ></div>
            <div className="product-summary__buy-box rounded-lg p-4 lg:p-8 bg-accent-100 max-w-md space-y-4 md:space-y-6 shadow-sm">
              <Price
                className="text-2xl"
                price={product.price}
                regularPrice={product.regular_price}
                salePrice={product.sale_price}
              />
              <div className="block">
                <Counter max={product.sku} initialQty={1} />
              </div>
              <AddToCart productId={product.id} type="single" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSingle;
