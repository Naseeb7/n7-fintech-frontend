import type { HTMLAttributes } from "react";

import { layout } from "@/lib/layout";
import { cn } from "@/utils/cn";

type SectionProps = HTMLAttributes<HTMLElement>;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn(layout.section, "w-full", className)}
      {...props}
    />
  );
}
