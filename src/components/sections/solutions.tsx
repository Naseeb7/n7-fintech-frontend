import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";

const solutions = [
  {
    title: "Core Banking CB7",
    body: "Modernize your banking operations with a resilient cloud-native core.",
    href: "#core-banking",
    accent: "CB7",
  },
  {
    title: "Digital Banking N7",
    body: "Build customer experiences that feel fast, intuitive, and secure.",
    href: "#insights",
    accent: "N7",
  },
  {
    title: "Open Banking",
    body: "Connect products, partners, and platforms through governed APIs.",
    href: "#features",
    accent: "API",
  },
  {
    title: "Loan Origination System",
    body: "Capture, validate, and route applications with less manual work.",
    href: "#case-studies",
    accent: "LOS",
  },
  {
    title: "Loan Management System",
    body: "Manage the full servicing lifecycle with operational clarity.",
    href: "#footer",
    accent: "LMS",
  },
] as const;

export function SolutionsSection() {
  return (
    <Section id="solutions" className="relative overflow-hidden">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className={tokens.section.intro}>
            <p className={tokens.section.eyebrow}>Solutions</p>
            <Heading level={2} className={cn(tokens.section.title, "mt-4 max-w-xl")}>
              All of our solutions are tailor-made to your needs
            </Heading>
            <Text className={tokens.section.description}>
              Modular banking products designed to adapt to your operating model,
              compliance requirements, and customer experience goals.
            </Text>

            <div className="mt-8">
              <Button variant="primary">REQUEST DEMO</Button>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-10 top-8 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {solutions.map((solution, index) => (
                <Card
                  key={solution.title}
                  variant="minimal"
                  className={cn(
                    "group p-5 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]",
                    index === 1 && "lg:translate-y-8",
                    index === 3 && "lg:-translate-y-6",
                    index === 4 && "sm:col-span-2 lg:col-span-1 lg:translate-y-2",
                  )}
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-white/10 bg-white/[0.04] text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                        {solution.accent}
                      </div>
                      <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                      {solution.title}
                    </h3>
                    <Text muted className="mt-3">
                      {solution.body}
                    </Text>

                    <Link href={solution.href} className={cn(tokens.section.link, "mt-6")}>
                      Learn more
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
