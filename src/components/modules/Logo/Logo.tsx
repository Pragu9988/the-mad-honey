import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import defaultLogoImg from "@/assets/images/hmh-logo-white.png"

type TProps = {
  className?: string;
  logo?: any;
};

const Logo = ({ className, logo }: TProps) => {
  return (
    <Link href="/" id="primaryLogo" className={clsx("site-logo", className)}>
      <Image
        src={logo ?? defaultLogoImg}
        alt="Mad Honey Logo"
        width={176}
        height={46}
      />
    </Link>
  );
};

export default Logo;
