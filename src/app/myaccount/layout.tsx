import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
import AccountNavbar from "@/components/modules/AccountNavbar";

interface MyAccountLayoutProps {
  children: React.ReactNode;
}

export default function MyAccountLayout({ children }: MyAccountLayoutProps) {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container mx-auto max-w-7xl py-6 md:py-8 lg:py-12">
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-1">
              <AccountNavbar />
            </div>
            <div className="col-span-3 p-0 md:px-4">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
