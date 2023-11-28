import Anchor from "@/components/elements/Anchor";
import clsx from "clsx";

type TProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  path: string;
  hoverStyle?: "A" | "B";
  color?: "light" | "dark";
  onKeyPress?: (e: React.KeyboardEvent<HTMLAnchorElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLAnchorElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLAnchorElement>) => void;
  target?: string;
};

const NavbarItem = ({
  children,
  className,
  id,
  path,
  hoverStyle,
  color,
  onKeyPress,
  onFocus,
  onBlur,
  target,
  ...rest
}: TProps) => {
  return (
    <li className={`menu-item ${className}`}>
      <Anchor
        path={path}
        id={id}
        className={clsx(
          "main-menu",
          color === "light" && "text-white hover:text-white",
          color === "dark" && "text-secondary",
          hoverStyle === "B" &&
            "relative before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-0 before:h-px before:transition-all before:duration-300 hover:before:w-full",
          hoverStyle === "B" && color === "dark" && "before:bg-primary",
          hoverStyle === "B" && color === "light" && "before:bg-white"
        )}
        onKeyPress={onKeyPress}
        onFocus={onFocus}
        onBlur={onBlur}
        target={target}
        role="menuitem"
        tabIndex={0}
        {...rest}
      >
        {children}
      </Anchor>
    </li>
  );
};

export default NavbarItem;
