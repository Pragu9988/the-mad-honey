import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IProduct } from "@/types";
import { sanitize } from "@/utils/sanitize.uitls";

type TProps = {
  product: IProduct;
};

const ProductTabs = ({ product }: TProps) => {
  return (
    <div className="product-tabs py-8 md:py-10 lg:py-10">
      <div className="container mx-auto">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="bg-transparent border-gray-300 rounded-none px-0 w-full border-b">
            <TabsTrigger
              value="account"
              className="text-lg data-[state=active]:border-b-4 data-[state=active]:border-accent-500 rounded-none data-[state=active]:text-primary-500 data-[state=active]:shadow-none"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="text-lg data-[state=active]:border-b-4 data-[state=active]:border-accent-500 rounded-none data-[state=active]:text-primary-500 data-[state=active]:shadow-none"
            >
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" className=" space-y-4 py-4 md:py-6">
            {product.description ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitize(product.description),
                }}
              />
            ) : (
              <p className="text-base text-gray-700">
                No description Available
              </p>
            )}
          </TabsContent>
          <TabsContent value="password" className=" space-y-4 py-4 md:py-6">
            No Reviews Yet.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductTabs;
