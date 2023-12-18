import React from "react";
import { Button } from "@/components/elements/Buttons/Button";
import { useCart } from "@/context/cart.context";
import { Loader2 } from "lucide-react";

type TProps = {
  productId: string;
};

const AddToCart = ({ productId }: TProps) => {
  const { addToCart, loading, loadingProduct, setLoadingProduct } = useCart();

  const handleAddToCart = (e: any, product_id: string) => {
    e.preventDefault();
    setLoadingProduct(product_id);
    addToCart({ id: product_id });
  };

  return (
    <div>
      <Button variant={"link"} onClick={(e) => handleAddToCart(e, productId)}>
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
