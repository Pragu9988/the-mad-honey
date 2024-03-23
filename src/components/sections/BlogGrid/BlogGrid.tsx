"use client";

import SectionHeader from "@/components/modules/SectionHeader";
import React from "react";
import blogs from "@/data/blogs";
import CardBlog from "@/components/modules/Cards/CardBlog";
import { usePosts } from "@/services/posts.service";
import SkeletonPostCard from "@/components/modules/Skeleton/SkeletonPostCard";

const BlogGrid = () => {
  const params: Record<string, any> = {
    per_page: 4,
  };
  const {
    data: blogs,
    isLoading: blogsLoading,
    isError: blogsError,
  } = usePosts(null, params);
  
  return (
    <section className="featured-product py-8 md:py-10 lg:py-20">
      <div className="container mx-auto space-y-10">
        <SectionHeader title={"Our Blogs"} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {blogsLoading || blogsError
            ? Array.from({ length: 3 }, (_, index) => (
                <SkeletonPostCard key={index} />
              ))
            : blogs &&
              blogs.map((blog: any, index: number) => {
                return <CardBlog blog={blog} key={blog.id} />;
              })}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
