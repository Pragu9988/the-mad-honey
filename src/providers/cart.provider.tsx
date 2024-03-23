"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { CartContext } from "@/context/cart.context";
import { ICart, AddToCartProps, CartContextProps } from "@/types";
import {
  clearCartData,
  fetchCartData,
  getCartData,
  updateCartItem,
} from "@/services/cart.service";
import { useToast } from "@/components/ui/use-toast";
import { sanitize } from "@/utils/sanitize.uitls";

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ICart | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();
  const [loadingProduct, setLoadingProduct] = useState<string | null>(null);
  const [openCart, setOpenCart] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const initialCartData = async () => {
      try {
        setLoading(true);
        const cartData = await getCartData();
        setCart(cartData);
      } catch (error) {
        console.error("Get cart data error:", error);
      } finally {
        setLoading(false);
        setLoadingProduct(null);
      }
    };
    initialCartData();
  }, []);

  const addToCart = async (data: AddToCartProps) => {
    try {
      setLoading(true);
      const cartData = await fetchCartData(data);
      // setOpenCart(true);
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
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      console.error("Add to Cart Error:", error);
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
    setCart,
    addToCart: addToCart,
    loading,
    openCart,
    setOpenCart,
    loadingProduct,
    setLoadingProduct,
    clearCart,
    error,
  };

  return (
    <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
