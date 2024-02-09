// "use client";

import React from "react";
import menus from "@/data/menus";
import NavbarItem from "./NavbarItem";
import NavbarIcons from "./NavbarIcons";
import { cn } from "@/utils/cn.utils";

type TProps = {
  isOffcanvas?: boolean;
};

const Navbar = ({ isOffcanvas }: TProps) => {
  return (
    <div className=" flex gap-8 items-center justify-between flex-col md:flex-row">
      <nav
        className={cn(
          "hmh-navbar nav-main-menu text-sm font-semibold tracking-wide",
          isOffcanvas ? "hmh-navbar--mobile" : null
        )}
      >
        <ul
          className={cn(
            "navbar__menu-list flex md:items-center gap-4 md:gap-6",
            isOffcanvas ? "flex-col" : null
          )}
        >
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
      {!isOffcanvas && <NavbarIcons />}
    </div>
  );
};

export default Navbar;
