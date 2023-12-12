import React from "react";
import HeaderAuth from "./HeaderAuth";
import { Heart, SearchIcon, ShoppingBag } from "lucide-react";
import OffCanvasCart from "../OffCanvas/OffCanvasCart";
import OffCanvasSearch from "../OffCanvas/OffCanvasSearch";
import ModalFavorites from "../Modals/ModalFavorites";

const HeaderIcons = () => {
  return (
    <div className="hmh-header-icons">
      <ul className="hmh-header-icons__list flex items-center gap-4">
        <li className="hmh-header-icons__item">
          <OffCanvasSearch>
            <SearchIcon size={20} strokeWidth={1.5} />
          </OffCanvasSearch>
        </li>
        <li className="hmh-header-icons__item">
          <ModalFavorites>
            <Heart size={20} strokeWidth={1.5} />
          </ModalFavorites>
        </li>
        <li className="hmh-header-icons__item">
          <OffCanvasCart>
            <ShoppingBag size={20} strokeWidth={1.5} />
          </OffCanvasCart>
        </li>
        <li className="hmh-header-icons__item">
          <HeaderAuth />
        </li>
      </ul>
    </div>
  );
};

export default HeaderIcons;
