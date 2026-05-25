import type { ComponentPropsWithoutRef } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/utils/cn";
import { tokens } from "@/styles/tokens";

type CtaBannerProps = ComponentPropsWithoutRef<"section"> & {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  backgroundLabel?: string;
  compact?: boolean;
};

export function CtaBanner({
  title,
  description,
  primaryLabel,
  secondaryLabel,
  backgroundLabel = "CTA",
  compact = false,
  className,
  ...props
}: CtaBannerProps) {
  return (
    <Section className={cn(tokens.ctaBanner.shell, className)} {...props}>
      <Container>
        <div className={tokens.ctaBanner.surface}>
          <div
            aria-hidden="true"
            className={compact ? tokens.ctaBanner.bgLabelCompact : tokens.ctaBanner.bgLabel}
          >
            {backgroundLabel}
          </div>

          <div className={tokens.ctaBanner.grid}>
            <div className="relative z-10 max-w-2xl">
              <Heading level={2} className={tokens.ctaBanner.title}>
                {title}
              </Heading>
              <Text className={cn(tokens.ctaBanner.description, "mt-4 max-w-xl")}>
                {description}
              </Text>
            </div>

            <div className={cn(tokens.ctaBanner.actions, "relative z-10 lg:flex-col xl:flex-row")}>
              <Button variant="secondary" className="w-full sm:w-auto">
                {secondaryLabel}
              </Button>
              <Button variant="primary" className="w-full sm:w-auto">
                {primaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
