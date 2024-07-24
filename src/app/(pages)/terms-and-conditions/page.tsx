import IntroBanner from "@/components/sections/IntroBanner/IntroBanner";
import aboutBannerImg from "@/assets/images/tmh-intro.jpg";
import faqs from "@/data/faqs";
import FaqAccordion from "@/components/sections/FaqAccordion/FaqAccordion";

export default function Faqs() {
  return (
    <>
      <IntroBanner
        title={"Frequently Asked Questions"}
        strapline={"FAQS"}
        image={aboutBannerImg}
      />
      <FaqAccordion faqs={faqs} />
    </>
  );
}
