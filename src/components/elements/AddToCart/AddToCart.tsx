"use client";
import React from "react";
import { Button } from "@/components/elements/Buttons/Button";
import { useCart } from "@/context/cart.context";
import { Loader2 } from "lucide-react";

type TProps = {
  productId: string | number;
  type?: "single" | "card";
};

const AddToCart = ({ productId, type }: TProps) => {
  const { addToCart, loading, loadingProduct, setLoadingProduct } = useCart();

  const handleAddToCart = (e: any, product_id: string | number) => {
    e.preventDefault();
    setLoadingProduct(product_id);
    addToCart({ id: product_id });
  };

  return (
    <div>
      <Button
        variant={type == "single" ? "primary" : "link"}
        onClick={(e) => handleAddToCart(e, productId)}
      >
        {loadingProduct !== productId ? (
          "Add to cart"
        ) : (
          <Loader2 size={20} className="animate-spin text-center" />
        )}
      </Button>
    </div>
  );
};

export default AddToCart;
