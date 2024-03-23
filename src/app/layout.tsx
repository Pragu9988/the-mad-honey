import type { Metadata } from "next";
import TanstackProvider from "@/providers/tanstack.provider";
import AuthProvider from "@/providers/auth.provider";
import CartProvider from "@/providers/cart.provider";
import { Toaster } from "@/components/ui/toaster";
import { Montserrat, Karla } from "next/font/google";
import "@/assets/scss/main.scss";
import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
import GoogleAnalytics from "./googleAnalytics";

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
        {/* <GoogleAnalytics /> */}
        <TanstackProvider>
          <AuthProvider>
            <CartProvider>{children}</CartProvider>
          </AuthProvider>
        </TanstackProvider>
        <Toaster />
      </body>
    </html>
  );
}
