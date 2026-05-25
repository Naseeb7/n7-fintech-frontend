import type { HTMLAttributes } from "react";

import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  muted?: boolean;
};

export function Text({ className, muted = false, ...props }: TextProps) {
  return (
    <p
      className={cn(
        muted ? tokens.typography.text.muted : tokens.typography.text.base,
        className,
      )}
      {...props}
    />
  );
}
