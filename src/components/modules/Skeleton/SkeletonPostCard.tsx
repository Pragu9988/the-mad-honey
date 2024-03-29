import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonPostCard = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[310px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-[100px]" />
      </div>
    </div>
  );
};

export default SkeletonPostCard;
