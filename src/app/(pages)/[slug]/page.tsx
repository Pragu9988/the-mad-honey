// "use client";

import IntroBanner from "@/components/sections/IntroBanner/IntroBanner";
import aboutBannerImg from "@/assets/images/tmh-intro.jpg";
import faqs from "@/data/faqs";
import FaqAccordion from "@/components/sections/FaqAccordion/FaqAccordion";
import { fetchPageById, fetchPages, usePages } from "@/services/pages.service";
import DefaultTemplate from "@/components/templates/DefaultTemplate";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // fetch data
  const response = await fetchPages({ slug: params.slug });

  console.log("reddd", response);

  return {
    title: response?.yoast_head_json?.title ?? "",
    description: response?.yoast_head_json?.description ?? "",
    openGraph: {
      type: response?.yoast_head_json?.og_type ?? "article",
      url: response?.yoast_head_json?.og_url ?? "",
      title: response?.yoast_head_json?.og_title ?? "",
      description: response?.yoast_head_json?.og_description ?? "",
      locale: response?.yoast_head_json?.og_locale ?? "",
      siteName: response?.yoast_head_json?.og_site_name ?? "",
      images: response?.yoast_head_json?.og_image ?? "",
    },
    twitter: {
      card: response?.yoast_head_json?.twitter_card ?? "",
      site: response?.yoast_head_json?.og_image ?? "",
      creator: "@creator",
      images: response?.yoast_head_json?.twitter_image ?? "",
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  //   const {
  //     data: page,
  //     isLoading: loading,
  //     isError: error,
  //   } = usePages({ slug: params.slug });
  const response = await fetchPages({ slug: params.slug });

  console.log("data", response);
  return (
    <>
      <DefaultTemplate
        title={response[0].title}
        content={response[0].content}
        id={response[0].id}
      />
    </>
  );
}
