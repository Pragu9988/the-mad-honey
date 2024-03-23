import Image from "next/image";
import HomeTemplate from "@/components/templates/HomeTemplate";
import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
import SubscribeCta from "@/components/sections/Newsletter";
import type { Metadata, ResolvingMetadata } from "next";
import { HOME_ID } from "@/config/ids.config";
import { fetchPageById } from "@/services/pages.service";
import { HomeKeywords } from "@/config/keywords.config";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const home = await fetchPageById(HOME_ID);

  return {
    title: home.yoast_head_json.title,
    description: home.yoast_head_json?.description,
    keywords: HomeKeywords,
    openGraph: {
      type: home.yoast_head_json?.og_type,
      url: home.yoast_head_json?.og_url,
      title: home.yoast_head_json?.og_title,
      description: home.yoast_head_json?.og_description,
      locale: home.yoast_head_json?.og_locale,
      siteName: home.yoast_head_json?.og_site_name,
      images: home.yoast_head_json?.og_image,
    },
    twitter: {
      card: home.yoast_head_json?.twitter_card,
      site: home.yoast_head_json?.og_image,
      creator: "@creator",
      images: home.yoast_head_json?.twitter_image,
    },
  };
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <HomeTemplate />
      </main>
      <SubscribeCta />
      <Footer />
    </>
  );
}
