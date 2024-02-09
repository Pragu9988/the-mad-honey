import React from "react";
import DropdownAuth from "../Dropdowns/DropdownAuth";
import { Heart, SearchIcon, ShoppingBag, Menu } from "lucide-react";
import OffCanvasCart from "../OffCanvas/OffCanvasCart";
import OffCanvasSearch from "../OffCanvas/OffCanvasSearch";
import ModalFavorites from "../Modals/ModalFavorites";
import { useCart } from "@/context/cart.context";
import OffCanvasMobileMenu from "../OffCanvas/OffCanvasMobileMenu";

const NavbarIcons = () => {
  const { cart } = useCart();
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
            <div className="relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cart ? (
                <span className="bg-accent text-white w-4 h-4 rounded-full flex items-center justify-center text-xs font-medium absolute -top-2 -right-2">
                  {cart?.item_count}
                </span>
              ) : null}
            </div>
          </OffCanvasCart>
        </li>
        <li className="hmh-header-icons__item">
          <DropdownAuth />
        </li>
        <li className="hmh-header-icons__item block md:hidden">
          <OffCanvasMobileMenu>
            <Menu size={20} strokeWidth={1.5} />
          </OffCanvasMobileMenu>
        </li>
      </ul>
    </div>
  );
};

export default NavbarIcons;
