"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";
import { EditorialCard } from "../ui/editorialCard";
import { Button } from "../ui/button";

const caseStudies = [
  {
    company: "/sections/images/hero/trustedBy/zoomerr.webp",
    title: "Driving operational clarity for a modern banking stack",
    author: "N7 Editorial",
    date: "May 2026",
    href: "#footer",
    image: true,
  },
  {
    company: "/sections/images/hero/trustedBy/zoomerr.webp",
    title: "Reducing complexity across lending and servicing flows",
    author: "Priya Anand",
    date: "April 2026",
    href: "#insights",
    image: true,
  },
  {
    company: "/sections/images/hero/trustedBy/zoomerr.webp",
    title: "Scaling a digital-first platform without sacrificing control",
    author: "Mia Chen",
    date: "March 2026",
    href: "#solutions",
    image: true,
  },
] as const;

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousIndex =
    (activeIndex + caseStudies.length - 1) % caseStudies.length;
  const nextIndex = (activeIndex + 1) % caseStudies.length;

  const goPrevious = () =>
    setActiveIndex((current) =>
      current === 0 ? caseStudies.length - 1 : current - 1,
    );

  const goNext = () =>
    setActiveIndex((current) =>
      current === caseStudies.length - 1 ? 0 : current + 1,
    );

  const visibleStudies = [
    caseStudies[previousIndex],
    caseStudies[activeIndex],
    caseStudies[nextIndex],
  ];

  return (
    <Section id="case-studies" className="relative overflow-hidden">
      <Container className="flex flex-col gap-18">
        <div className="text-center">
          <Heading level={2} className={cn(tokens.section.title, "")}>
            Our Case Studies
          </Heading>
        </div>

        <div className="relative ">
          <div className="relative mx-auto h-[32rem] w-full sm:h-[36rem] lg:h-87.5 lg:w-2/3">
            {visibleStudies.map((study, index) => {
              const isActive = index === 1;
              const offsetClass =
                index === 0
                  ? "-translate-x-[16%] scale-[0.94] opacity-45 blur-[1px]"
                  : index === 2
                    ? "translate-x-[16%] scale-[0.94] opacity-45 blur-[1px]"
                    : "translate-x-0 scale-100 opacity-100";

              return (
                <div
                  key={study.title}
                  className={cn(
                    "absolute inset-0 transition-all duration-500 ease-out",
                    offsetClass,
                  )}
                  style={{ zIndex: isActive ? 2 : 1 }}
                >
                  <EditorialCard {...study} />
                </div>
              );
            })}
          </div>

          <div className="flex  items-center justify-center gap-4 mt-4 sm:mt-0 ">
            <Button
              aria-label="Previous case study"
              variant="secondary"
              onClick={goPrevious}
              className="inline-flex h-11 w-11 min-w-11 items-center justify-center rounded-full border border-sky-500 text-sky-500 transition-colors duration-200"
            >
              <ArrowLeft size={18} />
            </Button>

            <div className="flex items-center gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to case study ${index + 1}`}
                  aria-current={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-200",
                    index === activeIndex
                      ? "w-8 bg-[#0B4B63]"
                      : "w-2.5 border border-[#0B4B63]",
                  )}
                />
              ))}
            </div>

            <Button
              aria-label="Next case study"
              variant="secondary"
              onClick={goNext}
              className="inline-flex h-11 w-11 min-w-11 items-center justify-center rounded-full border border-sky-500 text-sky-500 transition-colors duration-200"
            >
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
