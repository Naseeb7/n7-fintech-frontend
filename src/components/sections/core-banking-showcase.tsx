import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";

export function CoreBankingShowcase() {
  return (
    <Section id="core-banking" className="relative overflow-hidden">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center">
          <div className="relative">
            <p className={tokens.section.eyebrow}>Core banking</p>
            <Heading level={2} className={cn(tokens.section.title, "mt-4 max-w-xl")}>
              A complete cloud-based core banking.
            </Heading>
            <Text className={tokens.section.description}>
              Faster time to market with our cloud-based core banking services
              built for modern product teams and regulated operations.
            </Text>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary">REQUEST DEMO</Button>
              <Button variant="secondary">LEARN MORE</Button>
            </div>
          </div>

          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className={cn(tokens.section.outline, "text-[clamp(5rem,16vw,12rem)] font-black leading-none tracking-[0.18em]")}>
                CB7
              </span>
            </div>
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/15 blur-3xl"
            />

            <Card variant="default" className="relative overflow-hidden p-6 sm:p-8">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Core banking dashboard
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      Cloud-native operations
                    </p>
                  </div>
                  <div className="h-11 w-11 rounded-full border border-white/10 bg-white/5" />
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_42%),linear-gradient(180deg,_rgba(15,23,42,0.9)_0%,_rgba(2,6,23,0.96)_100%)] p-5">
                    <div className="grid gap-3">
                      <div className="h-3 w-3/4 rounded-full bg-slate-300/40" />
                      <div className="h-3 w-5/6 rounded-full bg-slate-300/25" />
                      <div className="h-3 w-2/3 rounded-full bg-sky-400/70" />
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {["Accounts", "Payments", "Risk"].map((label) => (
                        <div key={label} className="rounded-[16px] border border-white/10 bg-white/[0.04] p-3">
                          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                            {label}
                          </p>
                          <p className="mt-2 text-lg font-semibold text-white">
                            Active
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Throughput
                      </p>
                      <p className="mt-3 text-3xl font-semibold text-white">98%</p>
                      <p className="mt-2 text-sm text-slate-400">
                        Operational automation across the stack.
                      </p>
                    </div>
                    <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Connectivity
                      </p>
                      <p className="mt-3 text-3xl font-semibold text-white">24/7</p>
                      <p className="mt-2 text-sm text-slate-400">
                        Built for always-on financial products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
