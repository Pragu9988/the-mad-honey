import IntroBanner from "@/components/sections/IntroBanner/IntroBanner";
import aboutBannerImg from "@/assets/images/tmh-intro.jpg";
import { IPost } from "@/types";
import { fetchPosts } from "@/services/posts.service";

type TProps = {
  params: { blogSlug: string };
};

export default async function Blogs({ params }: TProps) {
  const blog: IPost[] = await fetchPosts({ slug: params.blogSlug });
  return (
    <>
      <IntroBanner
        title={blog[0].title.rendered}
        strapline={"Need Help?"}
        image={aboutBannerImg}
      />
    </>
  );
}
