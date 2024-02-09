import React from "react";
import Logo from "../Logo";

const HeaderCheckout = () => {
  return (
    <div className="site-top">
      <header id="site-header" className="main-header bg-white border-b py-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4">
            <Logo />
            <button className="">Go to Homepage</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderCheckout;
