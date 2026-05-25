import type { HTMLAttributes } from "react";

import { layout } from "@/lib/layout";
import { cn } from "@/utils/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn(layout.container, className)} {...props} />;
}
