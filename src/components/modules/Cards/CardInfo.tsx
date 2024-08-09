type TProps = {
  title: string;
  content: string;
  className?: string;
};
import { cn } from "@/utils/cn.utils";

const CardInfo = ({ title, content, className }: TProps) => {
  return (
    <div
      className={cn(
        "infograph-card space-y-4 p-4 lg:p-6 h-full rounded shadow border-2 border-secondary/50 shadow-secondary-light",
        className
      )}
    >
      <h4 className="text-lg md:text-xl lg:text-3xl font-semibold text-gray-800">
        {title}
      </h4>
      <p className="infograph-card__info text-base">{content}</p>
    </div>
  );
};

export default CardInfo;
