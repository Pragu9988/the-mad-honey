import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IProduct } from "@/types";

type TProps = {
  product: IProduct;
};

const ProductTabs = ({ product }: TProps) => {
  return (
    <div className="product-tabs py-8 md:py-10 lg:py-10">
      <div className="container mx-auto">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="bg-transparent border-b-4 border-gray-300 rounded-none px-0">
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
          <TabsContent value="account" className=" space-y-4 py-4 md:py-8">
            <p>
              Himalayan Shilajit Honey is naturally processed and contains 100%
              Pure Highest Grade mineral extract, premium quality. Shilajit is a
              popular and powerful supplement common in Ayurvedic medicine. It
              is loaded with antioxidants and is an effective supplement with
              great effects on overall health and well-being. Our Shilajit resin
              is obtained from Himalayan rocks enriched in plant residues which
              have deep roots in the Himalayan soil. The naturally processed
              plant material found in it is rich in minerals, nutrients and
              bioactive compounds such as humic and fulvic acids. Our Shilajit,
              in its purest form of resin is very puissant but also challenging
              to measure and weight in small portion for daily usage. Our
              dropper bottle allows to deliver the exact and perfect dose of
              pure Shilajit enhanced by the sweet taste of the magical Himalayan
              Jamun Honey in addition to all its benefits.
            </p>{" "}
            <h5>COMPOSITION</h5>{" "}
            <p>
              Origin 100% Himalaya, Nepal No additive. No preservatives. Each
              bottle of our Shilajit Honey contains: ✔️ Pure highest grade
              Shilajit resin (see video) Our natural & premium quality
              high-grade Shilajit resin is collected diretly by our team from
              the great Himalayas above 6,000m / 19,000ft. Purification and
              filtration by triphala decoction & 45 days sun-drying process.
              Composition 85+ minerals – 85.6% fulvic acid – 13% humic acid 30ml
              bottle = 10g 60ml bottle = 20g ✔️ Pure Jamun Honey Origin
              organically harvested in the Himalayas, Nepal. 100% raw,
              unprocessed Jamun Honey guaranteed without heated process or
              subjected to heavy filtration to retain fully its natural
              nutritional and medicinal properties. 1x 30ml bottle = 1 month
              supply 1x 60ml bottle = 1 to 2 months supply
            </p>
            <h5>DOSAGE RECOMMENDATION</h5>
            <p>
              {" "}
              The recommended dose of Shilajit is 300-500 mg daily. Each bottle
              contains ±32 droppers and each dropper contains 300-350 mg of pure
              highest grade Shilajit resin dosed with pure Himalayan Jamun
              Honey. Nothing else! CAUTION
            </p>
            <h5>CAUTION</h5>
            <p>
              Do NOT mix Shilajit with Mad Honey as it will lead to a build-up
              of toxins in the body which can cause various dangerous problems.
              Shilajit Honey is a very powerful Ayurvedic medicine supplement,
              please consult with a healthcare professional or an Ayurvedic
              practitioner to ensure it is appropriate for your individual needs
              and to determine the right dosage. Shilajit Honey should not be
              given to infants under two years of age or pregnant women.
            </p>
          </TabsContent>
          <TabsContent value="password">No Reviews Yet.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductTabs;
