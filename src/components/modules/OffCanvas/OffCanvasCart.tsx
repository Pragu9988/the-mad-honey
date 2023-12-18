import React, { ReactNode } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/context/cart.context";
import emptyCart from "@/assets/images/empty-cart.png";
import { Button } from "@/components/elements/Buttons/Button";
import { ICartItem } from "@/types";
import CardCart from "../Cards/CardCart";

type TProps = {
  children: ReactNode;
};

const OffCanvasCart = ({ children }: TProps) => {
  const { openCart, setOpenCart, cart, clearCart } = useCart();
  console.log("abc", cart);
  return (
    <div className="cart-offcanvas">
      <Sheet open={openCart} onOpenChange={setOpenCart}>
        <SheetTrigger className="align-middle">{children}</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Your Cart ({cart?.item_count})</SheetTitle>
            <SheetDescription>
              {cart?.items ? (
                <div className="cart-content">
                  <div className="cart-list space-y-4">
                    {cart?.items.map((product: ICartItem, index: number) => {
                      return <CardCart product={product} key={product.id} />;
                    })}
                  </div>
                  <div className="clear-cart">
                    <Button
                      variant={"accent"}
                      onClick={clearCart}
                      className="h-8 w-full"
                      size={"sm"}
                    >
                      Clear Cart
                    </Button>
                  </div>
                  <div className="cart-xsell"></div>
                  <div className="cart-footer">
                    <div className="calculate-price"></div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full mt-24">
                  <div className="space-y-4 md:space-y-6 text-center">
                    <Image
                      src={emptyCart}
                      width={100}
                      height={100}
                      alt="Empty cart"
                      className="mx-auto"
                    />
                    <p className="text-base">Still Empty!</p>
                    <Button variant={"accent"}>Continue Shopping</Button>
                  </div>
                </div>
              )}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default OffCanvasCart;
