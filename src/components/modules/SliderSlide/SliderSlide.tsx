"use client";

import { VariantProps, cva } from "class-variance-authority";
import { BannerType } from "@/types";
import { cn } from "@/utils/cn.utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { sanitize } from "@/utils/sanitize.uitls";
import Anchor from "@/components/elements/Anchor";
import { Button } from "@/components/elements/Buttons/Button";

const bannerVariants = cva("hero-banner-slide module-banner", {
  variants: {
    variant: {
      text_and_image: "hero-banner-slide--text-image",
      center_text: "hero-banner-slide--text-center",
      left_text: "hero-banner-slide--text-left",
      overlay_text: "hero-banner-slide--overlay-text",
    },
    textColor: {
      theme: "text-theme",
      dark: "text-dark",
      light: "text-light",
    },
  },
  defaultVariants: {
    variant: "text_and_image",
    textColor: "light",
  },
});

type TProps = BannerType &
  VariantProps<typeof bannerVariants> & {
    className?: string;
    imgSrc: any;
    type?: string;
    mblImgSrc?: string;
    btnPath?: string;
    showContent?: any;
  };

const SliderSlide = ({
  className,
  title,
  subtitle,
  btnLabel,
  mblImgSrc,
  link,
  variant,
  textColor,
  imgSrc,
  type,
  btnPath,
  showContent,
  ...props
}: TProps) => {
  return (
    <div className={cn(bannerVariants({ variant, textColor, className }))}>
      <div className="hero-banner-slide__background">
        <div className="hero-banner-slide__overlay"></div>
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={"banner image"}
            fill
            priority
          />
        )}
      </div>
      <div className="hmh-container hero-banner-slide__content h-full">
        <div className="flex justify-center items-center h-full">
          {showContent ? (
            <div className="hmh-col-12 hmh-col-md-6 column-1 hero-banner-slide__text">
              <div className="content-overlay text-center">
                {title ? (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      duration: 2,
                    }}
                  >
                    <h1
                      className="title"
                      dangerouslySetInnerHTML={{
                        __html: sanitize(title),
                      }}
                    />
                  </motion.div>
                ) : (
                  <></>
                )}
                {subtitle && (
                  <div
                    className="subtitle h6 tw-mb-2 md:tw-mb-8"
                    dangerouslySetInnerHTML={{
                      __html: sanitize(subtitle),
                    }}
                  />
                )}
                {btnLabel ? (
                  <Anchor path={"/"} target="_self">
                    <Button size={"sm"} variant={"white"}>
                      {btnLabel}
                    </Button>
                  </Anchor>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : null}

          <div className="hmh-col-12 hmh-col-md-6 column-2 hero-banner-slide__img">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
            >
              <div className="hero-banner-slide__img-grid-container">
                {mblImgSrc || imgSrc ? (
                  <Image src={mblImgSrc ?? imgSrc} fill alt="Group Image" />
                ) : null}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSlide;
