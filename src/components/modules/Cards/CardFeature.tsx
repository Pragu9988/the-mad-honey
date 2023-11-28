type TProps = {
  topic: string;
  figure: string | number;
  info: string;
};
import Image from "next/image";

import honeyIcon from "@/assets/images/honeycomb.png";

const CardFeature = ({ topic, figure, info }: TProps) => {
  return (
    <div className="infograph-card space-y-4 shadow-sm p-4 h-full">
      <div className="infograph-card__figure h1">
        <Image src={honeyIcon} className="w-12 h-12" width={honeyIcon.width} height={honeyIcon.height} alt={"icon"} />
      </div>
      <h4 className="infograph-card__topic text-lg font-semibold">{topic}</h4>
      <p className="infograph-card__info text-base">{info}</p>
    </div>
  );
};

export default CardFeature;
