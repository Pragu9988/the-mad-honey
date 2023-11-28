import React from "react";
import SliderSlide from "@/components/modules/SliderSlide/SliderSlide";
import heroBannerImg from "@/assets/images/hero-banner.jpg";

type TProps = {
  title: string;
  variant?: any;
  imgSrc: any;
};
const PageBanner = ({ title, variant, imgSrc }: TProps) => {
  return (
    <section className="page-banner max-h-96">
      <SliderSlide
        showContent={true}
        title={title}
        variant={variant}
        imgSrc={imgSrc}
        className="page-banner"
        // mblImgSrc={slide?.thumbnailImage?.sourceUrl}
      />
    </section>
  );
};

export default PageBanner;
