import Image from "next/image";
import HomeTemplate from "@/components/templates/HomeTemplate";
import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
import SubscribeCta from "@/components/sections/Newsletter";

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
