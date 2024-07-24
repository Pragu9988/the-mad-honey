"use client";
import Image from "next/image";
import Anchor from "@/components/elements/Anchor";
import { cn } from "@/utils/cn.utils";
import { VariantProps, cva } from "class-variance-authority";
import DefaultImg from "@/assets/images/img-default-banner.png";
import { sanitize } from "@/utils/sanitize.uitls";
import { IPost } from "@/types";

const cardVariants = cva("hmh-card", {
  variants: {
    type: {
      blog: "hmh-card--blog",
    },
    alignment: {
      vertical: "hmh-card__alignment--vertical",
      horizontal:
        "hmh-card__alignment--horizontal tw-grid tw-grid-cols-3 tw-gap-4",
    },
  },
  defaultVariants: {
    type: "blog",
    alignment: "vertical",
  },
});

type TProps = VariantProps<typeof cardVariants> & {
  blog: IPost;
  className?: string;
};

const CardBlog = ({ blog, className, type, alignment }: TProps) => {
  return (
    <div
      className={cn(
        " image-hover-zoom",
        cardVariants({ type, alignment, className })
      )}
    >
      <Anchor path={`/blogs/${blog.slug}`} target={"_self"}>
        <div
          className={cn(
            "hmh-card__image mb-4",
            alignment === "vertical" ? "tw-mb-2 md:tw-mb-4" : "tw-col-span-1"
          )}
        >
          {/* <Image
            src={blog?.image}
            alt={blog.title ?? "Gallery Image"}
            width={500}
            height={300}
            quality={75}
            className={cn("object-contain")}
            placeholder="blur"
            blurDataURL={DefaultImg.src}
          /> */}
        </div>
      </Anchor>
      {blog.title ? (
        <div
          className={cn(
            "hmh-card__content space-y-2",
            "tw-text-center md:tw-text-left"
          )}
        >
          <Anchor path={`/blogs/${blog.slug}`} target="_self">
            <h3 className={`title font-medium`}>{blog.title.rendered}</h3>
          </Anchor>
          <div
            className="excerpt line-clamp-2"
            dangerouslySetInnerHTML={{
              __html: sanitize(blog.excerpt.rendered),
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CardBlog;
