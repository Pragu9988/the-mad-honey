type TProps = {
  topic: string;
  figure: string | number;
  info: string;
  className?: string;
};
import Image from "next/image";

import honeyIcon from "@/assets/images/honeycomb.png";
import { cn } from "@/utils/cn.utils";

const CardFeature = ({ topic, figure, info, className }: TProps) => {
  return (
    <div
      className={cn(
        "infograph-card space-y-4 py-6 pr-0 md:pr-7 h-full border-y border-primary-200",
        className
      )}
    >
      <div className="infograph-card__figure h1">
        <Image
          src={honeyIcon}
          className="w-12 h-12"
          width={honeyIcon.width}
          height={honeyIcon.height}
          alt={"icon"}
        />
      </div>
      <h4 className="infograph-card__topic text-lg font-semibold text-gray-800">{topic}</h4>
      <p className="infograph-card__info text-base">{info}</p>
    </div>
  );
};

export default CardFeature;
