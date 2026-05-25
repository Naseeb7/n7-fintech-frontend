import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";

const posts = [
  {
    category: "Strategy",
    title: "How fintech teams can ship faster without compromising control",
    author: "N7 Editorial",
    date: "May 2026",
    href: "#case-studies",
    featured: true,
  },
  {
    category: "Operations",
    title: "What modern banking infrastructure needs to support at scale",
    author: "Priya Anand",
    date: "April 2026",
    href: "#solutions",
  },
  {
    category: "Product",
    title: "Designing customer journeys for regulated digital products",
    author: "Mia Chen",
    date: "March 2026",
    href: "#features",
  },
] as const;

function EditorialCard({
  post,
  featured = false,
}: {
  post: (typeof posts)[number];
  featured?: boolean;
}) {
  return (
    <Card
      variant="minimal"
      className={cn(
        "group p-5 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]",
        featured && "lg:col-span-2",
      )}
    >
      <article className={cn("grid gap-5", featured ? "sm:grid-cols-[1.1fr_0.9fr]" : "")}>
        <div className="flex min-h-[180px] items-end rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_42%),linear-gradient(180deg,_rgba(15,23,42,0.92)_0%,_rgba(2,6,23,0.98)_100%)] p-5">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-sky-300">
              {post.category}
            </span>
            <div className="h-2 w-24 rounded-full bg-white/20" />
            <div className="h-2 w-16 rounded-full bg-sky-400/70" />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white">
              {post.title}
            </h3>
            <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
              <span>{post.author}</span>
              <span aria-hidden="true">•</span>
              <span>{post.date}</span>
            </div>
            <Text muted className="mt-4">
              Short editorial insights for modern banking teams building with
              speed and discipline.
            </Text>
          </div>

          <Link href={post.href} className={cn(tokens.section.link, "mt-6")}>
            Read more
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    </Card>
  );
}

export function InsightsSection() {
  return (
    <Section id="insights" className="relative overflow-hidden">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className={tokens.section.intro}>
            <p className={tokens.section.eyebrow}>Insights</p>
            <Heading level={2} className={cn(tokens.section.title, "mt-4 max-w-xl")}>
              Get yourself up-to-speed on all the things happening in fintech
            </Heading>
            <Text className={tokens.section.description}>
              Editorial coverage, product perspectives, and operational
              guidance for teams building financial experiences.
            </Text>

            <div className="mt-8">
              <Button variant="secondary">INSIGHTS</Button>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <EditorialCard post={posts[0]} featured />
            <EditorialCard post={posts[1]} />
            <EditorialCard post={posts[2]} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
