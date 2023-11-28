import Image from "next/image";
import Anchor from "@/components/elements/Anchor";
import { cn } from "@/utils/cn.utils";
import { sanitize } from "@/utils/sanitize.uitls";
import { VariantProps, cva } from "class-variance-authority";
import DefaultImg from "@/assets/images/img-default-banner.png";
import { Button } from "@/components/elements/Buttons/Button";
import Price from "@/components/elements/Price/Price";

const cardVariants = cva("hmh-card", {
  variants: {
    type: {
      product: "hmh-card--product",
      cart: "hmh-card--cart",
    },
    alignment: {
      vertical: "hmh-card__alignment--vertical",
      horizontal:
        "hmh-card__alignment--horizontal tw-grid tw-grid-cols-3 tw-gap-4",
    },
  },
  defaultVariants: {
    type: "product",
    alignment: "vertical",
  },
});

type TProps = VariantProps<typeof cardVariants> & {
  title?: string;
  className?: string;
  imgSrc?: any;
  caption?: string;
  link?: string;
  linkTarget?: string;
  excerpt?: string;
  publishedDate?: string;
  id?: string;
  slug?: string;
  imgHeight?: number;
  imgWidth?: number;
  priority?: boolean;
  vacancy?: {
    department?: string;
    location?: string;
    deadline?: string;
    startDate?: Date;
    applyLink?: string;
  };
};

const CardProduct = ({
  title,
  className,
  excerpt,
  imgSrc,
  link,
  type,
  alignment,
  vacancy,
  publishedDate,
  linkTarget,
  caption,
  imgHeight,
  imgWidth,
  priority,
  id,
  slug,
}: TProps) => {
  return (
    <div
      className={cn(
        " image-hover-zoom",
        cardVariants({ type, alignment, className })
      )}
    >
      {imgSrc && (
        <Anchor path={"/"} target={linkTarget ?? "_self"}>
          <div
            className={cn(
              "hmh-card__image mb-4",
              alignment === "vertical" ? "tw-mb-2 md:tw-mb-4" : "tw-col-span-1"
            )}
          >
            <Image
              src={imgSrc}
              alt={title ?? "Gallery Image"}
              width={imgWidth ?? 500}
              height={imgHeight ?? 500}
              quality={75}
              // fill
              // objectFit='contain'
              className={cn("tw-object-contain")}
              placeholder="blur"
              blurDataURL={DefaultImg.src}
              priority={priority ?? false}
            />
          </div>
        </Anchor>
      )}
      {title ? (
        <div
          className={cn(
            "hmh-card__content space-y-2",
            "tw-text-center md:tw-text-left"
          )}
        >
          <Anchor path={"/"} target="_self">
            <h3 className={`title`}>{title}</h3>
          </Anchor>
          {/* TODO style caption */}
          {/* {caption ? (
            <div
              className="caption"
              dangerouslySetInnerHTML={{
                __html: sanitize(caption),
              }}
            />
          ) : (
            <></>
          )} */}
          {/* <div
            className="excerpt"
            dangerouslySetInnerHTML={{ __html: sanitize(excerpt) }}
          /> */}
          <div className="price-container">
            <Price />
          </div>
          <div className="cta">
            <Button variant={"link"}>Add to cart</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CardProduct;
