import React from "react";
import { Button } from "@/components/elements/Buttons/Button";
import Anchor from "@/components/elements/Anchor";
import Image from "next/image";
type TProps = {
  imgSrc: any;
};

const BuyInBulk = ({ imgSrc }: TProps) => {
  return (
    <section className="buy-in-bulk py-6 md:py-8 lg:pt-20 lg:pb-8">
      <div className="container mx-auto">
        <div className="bg-accent-50 grid grid-cols-1 rounded-3xl shadow md:grid-cols-5 gap-6 md:gap-12 p-6 md:p-12 items-center">
          <div className="content space-y-5 col-span-1 md:col-span-2">
            <h2 className="mb-0 text-2xl md:text-4xl font-bold text-gray-800">
              Bulk Buyers, Rejoice! Special Wholesale Rates Await You!
            </h2>
            <p className="text-gray-700 text-xl">
              Unlock Sweet Success with Our Exclusive Honey at Wholesale Rates!
            </p>
            <Button className="tw-mt-6 btn btn-primary" variant={"accent"}>
              Seize the Honey!
            </Button>
          </div>
          <div className="image col-span-1 md:col-span-3">
            <Image
              src={imgSrc}
              // srcSet={srcSet}
              width={800}
              height={800}
              alt={"Buy in bulk"}
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyInBulk;
