import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";
import { EditorialCard } from "../ui/editorialCard";

const posts = [
  {
    title: "How to transition from a traditional to a digital bank",
    author: "N7 Editorial",
    date: "May 2026",
    href: "#case-studies",
    image: true,
  },
  {
    title: "How to transition from a traditional to a digital bank",
    author: "Priya Anand",
    date: "April 2026",
    href: "#solutions",
  },
  {
    title: "How to transition from a traditional to a digital bank",
    author: "Mia Chen",
    date: "March 2026",
    href: "#features",
  },
] as const;

export function InsightsSection() {
  return (
    <Section id="insights" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className={cn(
          tokens.section.glow,
          "pointer-events-none absolute left-[10%] bottom-0 h-[120%] w-1/3 rounded-full blur-[70px]",
        )}
      />
      <Container className="flex justify-between">
        <div className={"flex flex-col gap-12 w-1/3"}>
          <Heading level={2} className={cn(tokens.section.title, "text-wrap")}>
            Get yourself up-to-speed on all the things happening in fintech
          </Heading>

          <Button variant="secondary" className="w-2/5">
            INSIGHTS
          </Button>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 w-1/2">
          <EditorialCard {...posts[0]} />
          <EditorialCard {...posts[1]} />
          <EditorialCard {...posts[2]} />
        </div>
      </Container>
    </Section>
  );
}
