import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";

export function CaseStudiesSection() {
  return (
    <Section id="case-studies" className="relative overflow-hidden">
      <Container>
        <div className="text-center">
          <p className={tokens.section.eyebrow}>Case studies</p>
          <Heading level={2} className={cn(tokens.section.title, "mx-auto mt-4 max-w-2xl")}>
            Our Case Studies
          </Heading>
          <Text className={cn(tokens.section.description, "mx-auto")}>
            A curated snapshot of outcomes, operating models, and product
            transformations across modern financial services teams.
          </Text>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-5xl">
            <Card
              variant="minimal"
              className="relative z-20 mx-auto max-w-3xl p-6 sm:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_auto] lg:items-end">
                <div>
                  <div className="inline-flex h-12 items-center rounded-[14px] border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold tracking-[0.2em] text-white">
                    Company / Logo
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                    Driving operational clarity for a modern banking stack
                  </h3>
                  <Text muted className="mt-4">
                    Static showcase card for the strongest implementation story,
                    with enough structure to support a later case-study deep dive.
                  </Text>
                  <Link href="#footer" className={cn(tokens.section.link, "mt-6")}>
                    Read more
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <div className="flex items-center justify-end gap-3">
                  <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/10"
                    aria-label="Previous case study"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/10"
                    aria-label="Next case study"
                  >
                    →
                  </button>
                </div>
              </div>
            </Card>

            <Card
              variant="minimal"
              className="absolute left-0 top-8 hidden w-56 -rotate-6 p-4 lg:block"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Preview
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Layered depth card for the backing visual system.
              </p>
            </Card>

            <Card
              variant="minimal"
              className="absolute right-0 top-16 hidden w-56 rotate-6 p-4 lg:block"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Context
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Decorative support card to establish spatial hierarchy.
              </p>
            </Card>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <span
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full border border-white/20",
                  index === 1 ? "bg-white" : "bg-white/20",
                )}
              />
            ))}
          </div>
          <Button variant="secondary">VIEW ALL</Button>
        </div>
      </Container>
    </Section>
  );
}
