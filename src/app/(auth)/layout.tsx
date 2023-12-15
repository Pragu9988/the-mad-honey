import HeaderAuth from "@/components/modules/Header/HeaderAuth";
import Footer from "@/components/modules/Footer/Footer";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <HeaderAuth />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}
