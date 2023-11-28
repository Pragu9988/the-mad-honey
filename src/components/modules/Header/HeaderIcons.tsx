import React from "react";
import HeaderAuth from "./HeaderAuth";
import { Heart, SearchIcon } from "lucide-react";

const HeaderIcons = () => {
  return (
    <div className="hmh-header-icons">
      <ul className="hmh-header-icons__list flex items-center gap-4">
        <li className="hmh-header-icons__item">
          <SearchIcon size={20} strokeWidth={1.5} />
        </li>
        <li className="hmh-header-icons__item">
          <Heart size={20} strokeWidth={1.5} />
        </li>
        <li className="hmh-header-icons__item">
          <HeaderAuth />
        </li>
      </ul>
    </div>
  );
};

export default HeaderIcons;
