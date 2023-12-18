"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { CartContext } from "@/context/cart.context";
import { ICart, AddToCartProps, CartContextProps } from "@/types";
import {
  clearCartData,
  fetchCartData,
  getCartData,
} from "@/services/cart.service";
import { useToast } from "@/components/ui/use-toast";
import { sanitize } from "@/utils/sanitize.uitls";

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ICart | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingProduct, setLoadingProduct] = useState<string | null>(null);
  const [openCart, setOpenCart] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const initialCartData = async () => {
      const cartData = await getCartData();
      setCart(cartData);
      setLoading(false);
      setLoadingProduct(null);
    };
    initialCartData();
  }, []);

  const addToCart = async (data: AddToCartProps) => {
    setLoading(true);
    try {
      const cartData = await fetchCartData(data);
      // setOpenCart(true);
      setLoading(false);
      {
        !loading && setOpenCart(true);
      }
      setCart(cartData);
      if (cartData) {
        toast({
          description: sanitize(cartData.notices.success),
        });
      }
      return cartData;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
      setLoadingProduct(null);
    }
  };

  const clearCart = async () => {
    const response = await clearCartData();
    setCart(null);
    return response;
  };

  const cartValues: CartContextProps = {
    cart,
    addToCart: addToCart,
    loading,
    openCart,
    setOpenCart,
    loadingProduct,
    setLoadingProduct,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
