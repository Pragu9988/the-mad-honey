"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { toInteger } from "lodash";
import { updateCartItem } from "@/services/cart.service";
import { useCart } from "@/context/cart.context";

type TProps = {
  max: string | number;
  initialQty: number;
  productKey?: string;
};

const Counter = ({ max, initialQty, productKey }: TProps) => {
  const [count, setCount] = useState(initialQty ?? 1);
  const maxCount = toInteger(max == -1 ? 100 : max);
  const { toast } = useToast();
  const { setCart } = useCart();

  const updateCart = async (data: any) => {
    const cartData = await updateCartItem(data);
    console.log("cart", cartData);
    setCart(cartData);
  };

  useEffect(() => {
    if (productKey) {
      const data = {
        id: productKey,
        quantity: count,
      };
      updateCart(data);
    }
  }, [count, productKey]);

  const increment = () => {
    if (count < maxCount) {
      setCount(count + 1);
    } else {
      toast({
        description: "Maximum limit reached.",
      });
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="price-counter items-center inline-flex bg-gray-50 p-0.5 rounded-sm">
      <button
        className="p-1 text-gray-900 border border-gray-300 hover:bg-accent-100 rounded disabled:bg-gray-50 disabled:border-gray-400 disabled:text-gray-500"
        onClick={decrement}
      >
        <Minus size={18} />
      </button>
      <span className="px-2 w-fit text-base text-left">{count}</span>
      <button
        className="p-1 text-gray-900 border border-gray-300 hover:bg-accent-100 rounded disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-300"
        onClick={increment}
        disabled={count === maxCount}
      >
        <Plus size={18} />
      </button>
    </div>
  );
};

export default Counter;
