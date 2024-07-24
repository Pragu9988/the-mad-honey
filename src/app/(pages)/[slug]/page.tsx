// "use client";

import IntroBanner from "@/components/sections/IntroBanner/IntroBanner";
import aboutBannerImg from "@/assets/images/tmh-intro.jpg";
import faqs from "@/data/faqs";
import FaqAccordion from "@/components/sections/FaqAccordion/FaqAccordion";
import { fetchPages, usePages } from "@/services/pages.service";
import DefaultTemplate from "@/components/templates/DefaultTemplate";

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
