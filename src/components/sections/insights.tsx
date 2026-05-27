import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";
import { EditorialCard } from "../ui/editorialCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

        <div className="flex flex-col gap-4 w-1/2">
          <div className="grid gap-4 lg:grid-cols-2">
            {posts.map((post) => (
              <EditorialCard key={post.href} {...post} />
            ))}
          </div>
          <Link
            href={"#insights"}
            className="flex justify-end leading-[1.3] font-mono text-sm text-[#00B4FD] gap-2"
          >
            <span className="underline">READ</span> ALL INSIGHTS
            <ArrowRight height={16} width={16} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
