import {
  Download,
  HelpCircle,
  Heart,
  MapPinned,
  User,
  PackageCheck,
} from "lucide-react";

type IconType = {
  [key: string]: JSX.Element;
};

export const icons: IconType = {
  package: <PackageCheck size={48} strokeWidth={1} />,
  download: <Download size={48} strokeWidth={1} />,
  address: <MapPinned size={48} strokeWidth={1} />,
  profile: <User size={48} strokeWidth={1} />,
  wishlist: <Heart size={48} strokeWidth={1} />,
  help: <HelpCircle size={48} strokeWidth={1} />,
};
