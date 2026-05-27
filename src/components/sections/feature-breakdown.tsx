import Image from "next/image";
import { Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";

const leftFeatures = [
  "Customer On-Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
] as const;

const rightFeatures = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
] as const;

function ChecklistGroup({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex w-full flex-col gap-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-[#00B4FD] to-[#003ACE]">
            <Check height={10} width={10} />
          </span>
          <span className="leading-[1.3]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FeatureBreakdownSection() {
  return (
    <Section
      id="features"
      className="relative flex min-h-[70dvh] flex-col justify-center overflow-hidden py-10 lg:py-10"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-[60vw] justify-start lg:flex">
        <Image
          src="/sections/images/featureBreakdown/featureBreakdown.webp"
          alt="Feature breakdown dashboard"
          width={720}
          height={560}
          className="h-auto w-auto max-w-none object-contain"
          priority
        />
      </div>

      <Container className="relative z-10 flex flex-col items-start justify-center gap-10 lg:items-end">
        <div className="relative z-10 flex w-full flex-col justify-center gap-4 lg:w-2/5">
          <Heading
            level={2}
            className={cn(tokens.section.title, "font-normal leading-[1.2]")}
          >
            Run a more efficient, flexible,and digitally connected corebanking
            system
          </Heading>

          <div className="flex flex-col gap-3">
            <div className="font-semibold">What you will get:</div>
            <div className="flex w-full flex-col gap-2 sm:flex-row">
              <ChecklistGroup items={leftFeatures} />
              <ChecklistGroup items={rightFeatures} />
            </div>
          </div>
        </div>

        <div className="relative flex w-full justify-center lg:hidden">
          <Image
            src="/sections/images/featureBreakdown/featureBreakdown.webp"
            alt="Feature breakdown dashboard"
            width={720}
            height={560}
            className="h-auto w-full max-w-[720px] object-contain"
            priority
          />
        </div>
      </Container>
    </Section>
  );
}
