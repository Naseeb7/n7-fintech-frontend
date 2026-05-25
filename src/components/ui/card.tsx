import type { HTMLAttributes } from "react";

import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";

type CardVariant = "default" | "minimal";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

export function Card({
  className,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        variant === "default" ? tokens.card.base : tokens.card.minimal,
        className,
      )}
      {...props}
    />
  );
}
