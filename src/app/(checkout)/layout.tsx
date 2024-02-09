import HeaderCheckout from "@/components/modules/Header/HeaderCheckout";
import Footer from "@/components/modules/Footer/Footer";

interface CheckoutLayoutProps {
  children: React.ReactNode;
}

export default function CheckoutLayout({ children }: CheckoutLayoutProps) {
  return (
    <>
      <HeaderCheckout />
      <main className="main">{children}</main>
    </>
  );
}
