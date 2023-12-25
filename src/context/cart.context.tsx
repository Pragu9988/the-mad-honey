"use client";

import { createContext, useContext } from "react";

import { CartContextProps } from "@/types";

export const CartContext = createContext<CartContextProps>({
  cart: null,
  setCart: () => {},
  addToCart: async () => "",
  loading: true,
  openCart: false,
  setOpenCart: () => {},
  loadingProduct: null,
  setLoadingProduct: () => {},
  clearCart: async () => "",
});

export const useCart = () => {
  return useContext(CartContext);
};
