import IntroBanner from "@/components/sections/IntroBanner/IntroBanner";
import aboutBannerImg from "@/assets/images/tmh-intro.jpg";
import faqs from "@/data/faqs";
import FaqAccordion from "@/components/sections/FaqAccordion/FaqAccordion";

export default function Faqs() {
  return (
    <>
      <IntroBanner
        title={"Customer Reviews"}
        strapline={"Reviews"}
        image={aboutBannerImg}
      />
      <div className="container mx-auto py-6 md:py-8 lg:pt-20 lg:pb-8">
        <div className="text-lg text-center">No reviews yet.</div>
      </div>
    </>
  );
}
