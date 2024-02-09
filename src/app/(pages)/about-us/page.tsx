import IntroBanner from "@/components/sections/IntroBanner/IntroBanner";
import AboutIntroduction from "@/components/sections/About/AboutIntroduction";
import CoreValues from "@/components/sections/CoreValues";
import aboutBannerImg from "@/assets/images/tmh-intro.jpg";

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
