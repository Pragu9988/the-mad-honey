import IntroBanner from "@/components/sections/IntroBanner/IntroBanner";
import aboutBannerImg from "@/assets/images/tmh-intro.jpg";


export default function Cart() {
  return (
    <>
      <IntroBanner
        title={"Contact Us"}
        strapline={"Need Help?"}
        image={aboutBannerImg}
      />
    </>
  );
}
