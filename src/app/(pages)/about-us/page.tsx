import IntroBanner from "@/components/sections/IntroBanner/IntroBanner";
import AboutIntroduction from "@/components/sections/About/AboutIntroduction";
import CoreValues from "@/components/sections/CoreValues";
import aboutBannerImg from "@/assets/images/tmh-intro.jpg";
import { ABOUT_ID } from "@/config/ids.config";
import { fetchPageById } from "@/services/pages.service";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const response = await fetchPageById(ABOUT_ID);

  return {
    title: response.yoast_head_json.title,
    description: response.yoast_head_json?.description,
    openGraph: {
      type: response.yoast_head_json?.og_type,
      url: response.yoast_head_json?.og_url,
      title: response.yoast_head_json?.og_title,
      description: response.yoast_head_json?.og_description,
      locale: response.yoast_head_json?.og_locale,
      siteName: response.yoast_head_json?.og_site_name,
      images: response.yoast_head_json?.og_image,
    },
    twitter: {
      card: response.yoast_head_json?.twitter_card,
      site: response.yoast_head_json?.og_image,
      creator: "@creator",
      images: response.yoast_head_json?.twitter_image,
    },
  };
}

export default function AboutUs() {
  return (
    <>
      <IntroBanner
        title={"About Company"}
        strapline={"Company"}
        image={aboutBannerImg}
      />
      <AboutIntroduction />
      <CoreValues />
    </>
  );
}
