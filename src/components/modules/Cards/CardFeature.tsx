type TProps = {
  topic: string;
  figure: string | number;
  info: string;
  className?: string;
  icon: string;
};
import Image from "next/image";

import honeyIcon from "@/assets/images/honeycomb.png";
import sustainIcon from "@/assets/images/planet-earth.png";
import pulseIcon from "@/assets/images/pulse.png";
import supportIcon from "@/assets/images/support.png";
import adventureIcon from "@/assets/images/camping.png";
import innovationIcon from "@/assets/images/innovative.png";
import { cn } from "@/utils/cn.utils";

const CardFeature = ({ topic, figure, info, className, icon }: TProps) => {
  const iconMap: any = {
    pure: honeyIcon,
    sustain: sustainIcon,
    adventure: adventureIcon,
    support: supportIcon,
    health: pulseIcon,
    innovation: innovationIcon,
  };
  return (
    <div
      className={cn(
        "infograph-card space-y-4 py-6 pr-0 md:pr-7 h-full",
        className
      )}
    >
      <div className="infograph-card__figure h1">
        <Image
          src={iconMap[icon]}
          className="w-12 h-12"
          width={honeyIcon.width}
          height={honeyIcon.height}
          alt={"icon"}
        />
      </div>
      <h4 className="infograph-card__topic text-lg font-semibold text-gray-800">
        {topic}
      </h4>
      <p className="infograph-card__info text-base">{info}</p>
    </div>
  );
};

export default CardFeature;
