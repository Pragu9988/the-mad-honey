import HeroSlider from "@/components/sections/HeroSlider/HeroSlider";
import FeaturedProductGrid from "@/components/sections/FeaturedProductGrid";
import React from "react";
import CoreValues from "@/components/sections/CoreValues";
import TwoColumn from "@/components/sections/TwoColumn";

import introBannerImg from "@/assets/images/intro-image.jpg";

const HomeTemplate = () => {
  return (
    <>
      <HeroSlider />
      <TwoColumn
        title="Discover the Magic of Mad Honey"
        imgSrc={introBannerImg}
        btnLabel="Show Now"
        content={
          "Unlock the ancient secrets of the Himalayas with our exclusive range of Mad Honey. Sourced from the untouched, pristine landscapes, our honey is a rare treasure coveted for its unparalleled taste and remarkable properties."
        }
      />
      <CoreValues />
      <FeaturedProductGrid />
      <TwoColumn
        title="Join the Mad Honey Experience"
        imgSrc={introBannerImg}
        btnLabel="Show Now"
        content={
          "Become a part of our community of honey enthusiasts! Stay updated on the latest news, recipes, and wellness insights straight from the Himalayas."
        }
        textFirst={true}
      />
    </>
  );
};

export default HomeTemplate;
