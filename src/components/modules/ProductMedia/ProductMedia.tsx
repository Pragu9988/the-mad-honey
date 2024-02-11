"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import DefaultImg from "@/assets/images/img-default-banner.png";
import { Skeleton } from "@/components/ui/skeleton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

type TProps = {
  images: any;
};

const ProductMedia = ({ images }: TProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="product-media__container flex md:flex-row-reverse gap-2">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images && images.length ? (
          images.map((image: any) => {
            return (
              <SwiperSlide key={image.id}>
                <img src={image.src} className="w-full h-full object-cover" />
              </SwiperSlide>
            );
          })
        ) : (
          <Skeleton className="h-[400px] w-full rounded-xl" />
        )}
      </Swiper>
      {images && images.length > 2 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          direction="vertical"
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper max-h-[540px] w-20 flex-auto0"
        >
          {images.map((image: any) => {
            return (
              <SwiperSlide key={image.id}>
                <img src={image.src} className="w-20 h-[68px] object-cover" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default ProductMedia;
