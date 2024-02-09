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
import Anchor from "@/components/elements/Anchor";

type TProps = {
  children: ReactNode;
};

const OffCanvasCart = ({ children }: TProps) => {
  const { openCart, setOpenCart, cart, clearCart } = useCart();
  return (
    <div className="cart-offcanvas">
      <Sheet open={openCart} onOpenChange={setOpenCart}>
        <SheetTrigger className="align-middle">{children}</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Your Cart ({cart?.item_count})</SheetTitle>
            <SheetDescription>
              {cart?.items ? (
                <div className="">
                  <div className="cart-content  flex flex-col justify-between">
                    <div className="cart-list space-y-4 py-6">
                      {cart?.items.map((product: ICartItem, index: number) => {
                        return <CardCart product={product} key={product.id} />;
                      })}
                      <div className="clear-cart">
                        <Button
                          variant={"accent"}
                          onClick={clearCart}
                          className="h-8"
                          size={"sm"}
                        >
                          Clear Cart
                        </Button>
                      </div>
                    </div>
                    <div className="cart-footer">
                      <div className="cart-xsell"></div>
                      <div className="cart-total py-4 space-y-3 border-t border-gray-200">
                        <div className="flex items-baseline justify-between text-gray-800">
                          <h4 className="text-sm font-medium">Subtotal</h4>
                          <div className="text-sm font-semibold">
                            {cart?.totals?.subtotal / 100}
                          </div>
                        </div>
                        <div className="flex items-baseline justify-between text-gray-800">
                          <h4 className="text-lg font-medium">Total</h4>
                          <div className="text-lg font-semibold">
                            {cart?.totals?.total / 100}
                          </div>
                        </div>
                        <hr />
                        <Anchor target={"self"} path={"/checkout"}>
                          <Button variant={"accent"} className="w-full">
                            Proceed to Checkout
                          </Button>
                        </Anchor>
                      </div>
                    </div>
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
