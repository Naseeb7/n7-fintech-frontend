import type { ButtonHTMLAttributes } from "react";

import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        tokens.button.base,
        variant === "primary" ? tokens.button.primary : tokens.button.secondary,
        className,
      )}
      {...props}
    />
  );
}
