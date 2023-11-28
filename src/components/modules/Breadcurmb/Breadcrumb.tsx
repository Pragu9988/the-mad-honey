import { ChevronRight } from "lucide-react";
import React from "react";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb py-2 mb-4">
      <div className="flex items-center space-x-1 text-base text-muted-foreground">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          Home
        </div>
        <ChevronRight size={16} strokeWidth={1.5} />
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          Product
        </div>
        <ChevronRight size={16} strokeWidth={1.5} />
        <div className="font-medium text-foreground">Badge</div>
      </div>
    </div>
  );
};

export default Breadcrumb;
