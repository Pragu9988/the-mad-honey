import { Button } from "@/components/elements/Buttons/Button";
import Counter from "@/components/elements/Counter/Counter";
import Price from "@/components/elements/Price/Price";
import ProductMedia from "@/components/modules/ProductMedia";
import React from "react";

const ProductSingle = () => {
  return (
    <section className="product-single pb-4 md:pb-8 lg:pb-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="product-media">
            <ProductMedia />
          </div>
          <div className="product-summary space-y-4 md:space-y-8 py-8">
            <h2 className="product-summary__title font-medium">
              MAD HONEY Limited Reserve 50g
            </h2>
            <div className="product-summary__excerpt text-base">
              Himalayan Shilajit Honey is naturally processed and contains 100%
              Pure Highest Grade mineral extract, premium quality.
            </div>
            <div className="product-summary__buy-box rounded-lg p-4 lg:p-8 bg-accent-100 max-w-md space-y-4 md:space-y-6 shadow-sm">
              <Price className="text-2xl" />
              <div className="block">
                <Counter />
              </div>
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSingle;
