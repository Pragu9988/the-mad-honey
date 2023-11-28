"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { cn } from "@/utils/cn.utils";
import clsx from "clsx";
import { VariantProps, cva } from "class-variance-authority";
import SliderSlide from "../../modules/SliderSlide/SliderSlide";

import heroBannerImg from "@/assets/images/hero-banner.jpg";

const sliderVariants = cva("hero-banner-slider", {
  variants: {
    layout: {
      full_width: "hero-banner-slider--full-width",
      boxed: "hero-banner-slider--boxed",
    },
  },
  defaultVariants: {
    layout: "full_width",
  },
});

type TProps = VariantProps<typeof sliderVariants> & {
  className?: string;
  slides?: any;
};

const HeroSlider = ({ className, layout, slides }: TProps) => {
  return (
    <section className={cn(sliderVariants({ layout, className }))}>
      <div
        className={clsx(
          "mx-auto",
          layout == "full_width"
            ? "container__max container__max--no-space"
            : null
        )}
      >
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="swiper banner-swiper"
        >
          {/* {slides?.length > 0 &&
            slides?.map((slide: any, slideIndex: number) => {
              return ( */}
          <>
            <SwiperSlide
              className={cn(
                true ? "banner__slide--both" : "banner__slide--deskonly"
              )}
              // key={slideIndex?.toString()}
            >
              <SliderSlide
                showContent={true}
                title={"The untouched purity of Nepal's wilderness"}
                variant={"center_text"}
                btnLabel={"Buy Now"}
                btnPath={"/"}
                imgSrc={heroBannerImg}
                // mblImgSrc={slide?.thumbnailImage?.sourceUrl}
              />
            </SwiperSlide>
          </>
          {/* );
            })} */}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSlider;
