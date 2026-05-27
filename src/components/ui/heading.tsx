import type { HTMLAttributes } from "react";

import { tokens } from "@/styles/tokens";
import type { ElementType } from "react";

import { cn } from "@/utils/cn";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel;
};

const headingTag: Record<HeadingLevel, ElementType> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

export function Heading({
  level = 2,
  className,
  ...props
}: HeadingProps) {
  const Tag = headingTag[level];

  return <Tag className={cn(tokens.typography.heading[level], className)} {...props} />;
}
