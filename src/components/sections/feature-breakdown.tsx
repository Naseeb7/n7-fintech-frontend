import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";
import { Check } from "lucide-react";

const leftFeatures = [
  "Customer On-Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

const rightFeatures = [
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

function ChecklistGroup({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1 w-full">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-[#00B4FD] to-[#003ACE] mt-1">
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
      className="relative overflow-hidden min-h-[70dvh] py-10 flex flex-col justify-center"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-[60vw] justify-start">
        <Image
          src="/sections/images/featureBreakdown/featureBreakdown.webp"
          alt="Feature breakdown dashboard"
          width={720}
          height={560}
          className="h-auto w-auto max-w-none object-contain"
          priority
        />
      </div>

      <Container className="relative z-10 flex flex-col items-end justify-center ">
        <div className="flex flex-col w-2/5 justify-center gap-9">
          <Heading
            level={2}
            className={cn(tokens.section.title, "font-normal sm:text-[27px]")}
          >
            Run a more efficient, flexible,and digitally connected corebanking
            system
          </Heading>

          <div className="flex flex-col gap-3">
            <div className="font-semibold">What you will get:</div>
            <div className="flex flex-col gap-1 sm:gap-2 sm:flex-row">
              <ChecklistGroup items={leftFeatures} />
              <ChecklistGroup items={rightFeatures} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
