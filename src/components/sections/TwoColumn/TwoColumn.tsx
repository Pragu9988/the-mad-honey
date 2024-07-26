import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn.utils";
import { VariantProps, cva } from "class-variance-authority";
import Anchor from "@/components/elements/Anchor";
import { Button } from "@/components/elements/Buttons/Button";

const columnVariants = cva("col-module", {
  variants: {
    background: {
      gray: "bg-neutral-100",
      theme: "bg-primary-100",
      white: "bg-neutral-0",
    },
  },
  defaultVariants: {
    background: "gray",
  },
});

type TProps = VariantProps<typeof columnVariants> & {
  className?: string;
  title: string;
  content: string;
  imgSrc: any;
  btnLabel?: string;
  btnLink?: string;
  btn?: any;
  priority?: boolean;
  srcSet?: any;
  isVideo?: boolean;
  videoUrl?: string;
  textFirst?: boolean;
  children?: React.ReactNode;
};

const TwoColumn = ({
  title,
  content,
  imgSrc,
  btnLabel,
  btnLink,
  background,
  className,
  priority,
  btn,
  srcSet,
  isVideo,
  videoUrl,
  textFirst,
  children,
}: TProps) => {
  return (
    <section className="introduction py-8 md:py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-16 items-center">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            {isVideo ? (
              <video
                controls
                preload="metadata"
                className="tw-w-full tw-h-full tw-aspect-[886 / 400]"
              >
                <source src={videoUrl} />
              </video>
            ) : (
              <div className="col-module__image tw-pt-4 lg:tw-pt-0 image-wrapper  image-hover-zoom tw-rounded-lg tw-overflow-hidden">
                {className === "image-free-size" ? (
                  <Image
                    src={imgSrc}
                    // srcSet={srcSet}
                    width={800}
                    height={800}
                    alt={title}
                    priority={priority ?? false}
                  />
                ) : (
                  <Image
                    src={imgSrc}
                    // srcSet={srcSet}
                    width={800}
                    height={800}
                    // fill
                    alt={title}
                    priority={priority ?? false}
                  />
                )}
              </div>
            )}
          </div>
          <div
            className={cn(
              "col-span-1 md:col-span-2 align-middle",
              textFirst ? "-order-1 lg:col-span-3" : "lg:col-span-3"
            )}
          >
            <div className="col-module__content tw-ml-0 lg:tw-ml-10 space-y-6">
              <h2 className="h1 tw-mb-4">{title}</h2>
              {/* <p className="tw-mb-4">{content}</p> */}
              <div
                className="tw-mb-4"
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
              {children}
              {btnLabel && (
                <Anchor
                  path={btnLink ?? "#"}
                  target="_self"
                  className="inline-block"
                >
                  <Button
                    className="tw-mt-6 btn btn-primary"
                    variant={"accent"}
                  >
                    {btnLabel}
                  </Button>
                </Anchor>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumn;
