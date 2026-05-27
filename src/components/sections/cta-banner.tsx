import type { ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/utils/cn";
import { tokens } from "@/styles/tokens";

type CtaBannerProps = ComponentPropsWithoutRef<"section"> & {
  variant?: "cb7" | "n7" | "default";
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export function CtaBanner({
  variant = "cb7",
  title,
  description,
  primaryLabel,
  secondaryLabel,
  className,
  ...props
}: CtaBannerProps) {
  const backgroundMap = {
    cb7: "/sections/images/ctaBanner/CB7_CTA.webp",
    n7: "/sections/images/ctaBanner/N7.webp",
    default: "",
  } as const;

  return (
    <Section className={cn(tokens.ctaBanner.shell, className)} {...props}>
      <Container>
        <div
          className={cn(
            tokens.ctaBanner.surface,
            variant === "default" && "from-background",
          )}
        >
          {variant !== "default" && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-4xl top-[-10%] "
            >
              <Image
                src={backgroundMap[variant]}
                alt=""
                fill
                className={cn("object-contain", "object-right")}
                sizes="(min-width: 1024px) 80vw, 100vw"
              />
            </div>
          )}

          <div className={tokens.ctaBanner.body}>
            <div className={tokens.ctaBanner.titleContainer}>
              <Heading level={2} className={tokens.ctaBanner.title}>
                {title}
              </Heading>
              <Text className={cn(tokens.ctaBanner.description, "")}>
                {description}
              </Text>
            </div>

            <div className={tokens.ctaBanner.actions}>
              <Button variant="secondary" className="w-full sm:w-1/2 lg:w-1/2">
                {secondaryLabel}
              </Button>
              <Button variant="primary" className="w-full sm:w-1/2 lg:w-1/2">
                {primaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
