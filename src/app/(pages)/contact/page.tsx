import IntroBanner from "@/components/sections/IntroBanner/IntroBanner";
import AboutIntroduction from "@/components/sections/About/AboutIntroduction";
import CoreValues from "@/components/sections/CoreValues";
import aboutBannerImg from "@/assets/images/tmh-intro.jpg";
import ContactForm from "@/components/sections/Contact/ContactForm";
import ContactAddress from "@/components/sections/Contact/ContactAddress";

export default function ContactUs() {
  return (
    <>
      <IntroBanner
        title={"Contact Us"}
        strapline={"Need Help?"}
        image={aboutBannerImg}
      />
      <ContactForm />
      <ContactAddress />
    </>
  );
}
