import React from "react";
import { ChevronRight } from "lucide-react";

const CheckoutNav = () => {
  return (
    <div className="breadcrumb py-2 mb-4">
      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          Shopping Cart
        </div>
        <ChevronRight size={16} strokeWidth={1.5} />
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          Checkout Page
        </div>
        <ChevronRight size={16} strokeWidth={1.5} />
        <div className="font-medium text-foreground">Review Order</div>
      </div>
    </div>
  );
};

export default CheckoutNav;
