import HeroSlider from "@/components/sections/HeroSlider/HeroSlider";
import FeaturedProductGrid from "@/components/sections/FeaturedProductGrid";
import React from "react";
import CoreValues from "@/components/sections/CoreValues";
import TwoColumn from "@/components/sections/TwoColumn";

import introBannerImg from "@/assets/images/intro-image.jpg";
import termOfUseImg from "@/assets/images/terms-of-use.jpg";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import BlogGrid from "@/components/sections/BlogGrid/BlogGrid";
import BuyInBulk from "@/components/sections/BuyInBulk";
import honeyBottles from "@/assets/images/honey-bottles.png";
import buyBulkImg from "@/assets/images/bulk-order.png";
import honeyHuntingImg from "@/assets/images/honey-hunting.png"
import honeyHarvestingImg from "@/assets/images/honey-harvesting.png"

const HomeTemplate = () => {
  return (
    <>
      <HeroSlider />
      <TwoColumn
        title="Discover the perfect mad honey for you"
        imgSrc={honeyHuntingImg}
        btnLabel="Show Now"
        btnLink="/products"
        content={
          "Unlock the ancient secrets of the Himalayas with our exclusive range of Mad Honey. Sourced from the untouched, pristine landscapes, our honey is a rare treasure coveted for its unparalleled taste and remarkable properties."
        }
      />
      <CoreValues />
      <FeaturedProductGrid />
      <Testimonials />
      <BuyInBulk imgSrc={buyBulkImg} />
      <BlogGrid />
      <TwoColumn
        title="Effects of Himalayan Mad Honey"
        imgSrc={honeyHarvestingImg}
        btnLabel="Terms of Use"
        btnLink="/terms-of-use"
        content={
          "Mad honey, derived from the nectar of Rhododendron flowers, is renowned for its unique properties and potent effects. While it offers a range of health benefits, it's crucial to understand its effects and usage guidelines."
        }
        textFirst={true}
      ></TwoColumn>
    </>
  );
};

export default HomeTemplate;
