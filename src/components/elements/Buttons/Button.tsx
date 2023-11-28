import * as React from "react";
import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils/cn.utils";

const buttonVariants = cva("hmh-button", {
  variants: {
    variant: {
      primary: "hmh-button--primary",
      accent: "hmh-button--accent",
      destructive:
        "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
      outline: "hmh-button--outline",
      subtle:
        "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
      ghost: "hmh-button--ghost",
      link: "hmh-button--link",
      white: "hmh-button--white",
    },
    size: {
      default: "hmh-button--base",
      sm: "hmh-button--sm",
      lg: "hmh-button--lg",
      stretch: "hmh-button--stretch",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
