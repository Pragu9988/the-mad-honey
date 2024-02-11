import { ChevronRight } from "lucide-react";
import React from "react";
import Anchor from "@/components/elements/Anchor";

type BreadcrumbItem = {
  label: string;
  url?: string;
};

type TProps = {
  items: BreadcrumbItem[];
};

const Breadcrumb = ({ items }: TProps) => {
  console.log("items", items);
  return (
    <div className="breadcrumb py-2 mb-4">
      <div className="flex items-center space-x-1 text-base text-muted-foreground">
        {items &&
          items.length &&
          items.map((item, index) => (
            <>
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                {item.url ? (
                  <Anchor path={item.url} target={"_self"}>
                    {item.label}
                  </Anchor>
                ) : (
                  item.label
                )}
              </div>

              {index < items.length - 1 && (
                <ChevronRight size={16} strokeWidth={1.5} />
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
