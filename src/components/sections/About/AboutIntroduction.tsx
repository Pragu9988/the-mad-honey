import React from "react";
import CardInfo from "@/components/modules/Cards/CardInfo";

const AboutIntroduction = () => {
  return (
    <section className="py-6 md:py-8 lg:pt-20 lg:pb-8 space-y-6 lg:space-y-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-[50%]">
            <h2 className="mb-0 text-2xl md:text-4xl font-bold text-gray-800">
              Discover the Untouched Purity of Himalayan Mad Honey
            </h2>
          </div>
          <div className="max-w-[60%]">
            <p className="mt-4 md:mt-5 mb-0 text-lg xl:px-2 text-gray-700">
              At Himalayan Mad Honey, we bring you the purest, most exceptional
              honey, harvested from the high cliffs of the Himalayas. This rare
              honey, cherished for generations, offers unique flavors and
              natural health benefits. Rooted in tradition and sustainability,
              our honey embodies the untouched purity of Nepal's wilderness,
              reflecting the harmony between people, bees, and the majestic
              Himalayan landscape.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <CardInfo
            title={"Our Mission"}
            content={
              "Our mission is to share the untouched purity of Nepal's wilderness with the world through our exceptional wild honey. We strive to preserve traditional harvesting practices while embracing sustainability, offering a taste of the Himalayas in every jar while supporting the communities and nature that make it possible."
            }
          />
          <CardInfo
            title={"Our Vision"}
            content={
              "Our vision is to share Nepal's extraordinary Mad Honey with adventurous souls globally, encapsulating the essence of the Himalayas. We aim to lead by example, setting the standard for pure, sustainable, and exceptional honey production and inspiring a profound reverence for nature's treasures."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default AboutIntroduction;
