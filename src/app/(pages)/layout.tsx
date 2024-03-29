import { Montserrat, Karla } from "next/font/google";
import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
import SubscribeCta from "@/components/sections/Newsletter";
import "@/assets/scss/main.scss";
import TanstackProvider from "@/providers/tanstack.provider";
import type { Metadata, ResolvingMetadata } from "next";

const primary = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const accent = Karla({ subsets: ["latin"], variable: "--font-karla" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${primary.variable} ${accent.variable}`}>
        <TanstackProvider>
          <Header />
          <main className="main">{children}</main>
          <SubscribeCta />
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
