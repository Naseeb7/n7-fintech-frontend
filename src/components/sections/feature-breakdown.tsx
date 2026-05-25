import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";

const featuresLeft = [
  "Customer On-Boarding",
  "Transaction management",
  "CRM Activities",
];

const featuresRight = [
  "Loan management",
  "Payments processing",
  "Configuring banking products",
];

function ChecklistGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <Card variant="minimal" className="p-5">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/10 text-[10px] font-semibold text-sky-200">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function FeatureBreakdownSection() {
  return (
    <Section id="features" className="relative overflow-hidden">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-6 top-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl"
              />
              <Card variant="default" className="relative overflow-hidden p-6 sm:p-8">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        Banking operations
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Connected enterprise overview
                      </p>
                    </div>
                    <div className="h-11 w-11 rounded-full border border-white/10 bg-white/5" />
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        Queue status
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">148</p>
                    </div>
                    <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        Processing
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">99.4%</p>
                    </div>
                    <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4 sm:col-span-2">
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
                      </div>
                      <p className="mt-3 text-sm text-slate-400">
                        Systems operating in sync across service, risk, and
                        payment flows.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className={tokens.section.eyebrow}>Feature breakdown</p>
            <Heading level={2} className={cn(tokens.section.title, "mt-4 max-w-xl")}>
              Run a more efficient, flexible,and digitally connected corebanking system
            </Heading>
            <Text className={tokens.section.description}>
              Enterprise-grade banking capabilities arranged for clear adoption
              paths and easy operational scanning.
            </Text>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ChecklistGroup title="Core operations" items={featuresLeft} />
              <ChecklistGroup title="Platform flows" items={featuresRight} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
