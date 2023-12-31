// "use client";

import React from "react";
import menus from "@/data/menus";
import NavbarItem from "./NavbarItem";
import NavbarIcons from "./NavbarIcons";

const Navbar = () => {
  return (
    <div className=" flex gap-8 items-center justify-between">
      <nav className="hmh-navbar nav-main-menu text-sm font-semibold tracking-wide">
        <ul className="navbar__menu-list flex items-center gap-6">
          {menus.map((menu: any) => {
            return (
              <NavbarItem
                path={menu.path}
                key={menu.id}
                target={"self"}
                className="hmh-navbar__menu-item"
              >
                {menu.label}
              </NavbarItem>
            );
          })}
        </ul>
      </nav>
      <NavbarIcons />
    </div>
  );
};

export default Navbar;
