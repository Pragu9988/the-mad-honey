import type { Metadata } from "next";
import { Montserrat, Karla } from "next/font/google";
import "@/assets/scss/main.scss";
import TanstackProvider from "@/providers/tanstack.provider";

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
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
