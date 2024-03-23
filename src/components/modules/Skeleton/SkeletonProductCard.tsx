import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/utils/cn.utils";

type TProps = {
  alignment?: "horizontal" | "vertical";
};
const SkeletonProductCard = ({ alignment }: TProps) => {
  return (
    <div
      className={cn(
        "flex gap-3",
        alignment == "horizontal" ? "flex-row items-center" : "flex-col"
      )}
    >
      <Skeleton
        className={cn(
          "rounded-xl",
          alignment == "horizontal" ? " h-[90px] w-[90px]" : "h-[310px] w-full "
        )}
      />
      <div className="space-y-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-[100px]" />
        {alignment != "horizontal" && <Skeleton className="h-6 w-[150px]" />}
      </div>
    </div>
  );
};

export default SkeletonProductCard;
