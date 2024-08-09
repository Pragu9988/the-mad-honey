import React from "react";
import Logo from "../Logo";
import darkLogoImg from "@/assets/images/hmh-logo-dark.png";
import NavbarItem from "../Navbar/NavbarItem";

const Footer = () => {
  return (
    <footer id="site-footer" className="hmh-footer">
      <div className="hmh-footer__main py-8 md:py-12 lg:py-16 bg-primary-500 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-4 md:gap-8 lg:gap-12">
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
              <div className="logo-wrap mb-4">
                <Logo logo={darkLogoImg} />
              </div>
              <p>
                Harvested from the high cliffs of the Himalayas, this rare honey
                boasts a unique flavor and natural health benefits. Enjoy the
                potent elixir treasured by local communities for its distinctive
                properties and rich heritage.
              </p>
            </div>
            <div className="lg:col-span-1"></div>
            <div className="col-span-1 lg:col-span-2">
              <h5 className="mb-4">Shop</h5>
              <ul className="hmh--footer-menu__list space-y-4">
                <NavbarItem color="light" path="/shop">
                  Shop
                </NavbarItem>
                <NavbarItem color="light" path="/about-us">
                  About
                </NavbarItem>
                <NavbarItem color="light" path="/reviews">
                  Reviews
                </NavbarItem>
                <NavbarItem color="light" path="/contact-us">
                  Contact
                </NavbarItem>
              </ul>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <h5 className="mb-4">Explore</h5>
              <ul className="hmh--footer-menu__list space-y-4">
                <NavbarItem color="light" path="/">
                  Shipping and Return Policy
                </NavbarItem>
                <NavbarItem color="light" path="/terms-conditions">
                  Terms and Conditions
                </NavbarItem>
                <NavbarItem color="light" path="/">
                  Product Certification
                </NavbarItem>
                <NavbarItem color="light" path="/">
                  Disclamer
                </NavbarItem>
              </ul>
            </div>
            {/* <div className="col-span-1 lg:col-span-2">
              <h5 className="mb-4">Contact</h5>
              <ul className="hmh--footer-menu__list space-y-4">
                <NavbarItem color="light" path="/">
                  About
                </NavbarItem>
                <NavbarItem color="light" path="/">
                  Reviews
                </NavbarItem>
                <NavbarItem color="light" path="/">
                  Blog
                </NavbarItem>
                <NavbarItem color="light" path="/">
                  Contact
                </NavbarItem>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <div className="hmh-footer__credit">
        <div className="container mx-auto py-6">
          <div className="flex justify-between items-start">
            <p className="text-sm text-gray-400">
              © 2023 Himalayan mad honey. - All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
