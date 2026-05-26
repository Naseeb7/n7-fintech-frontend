import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/utils/cn";
import { tokens } from "@/styles/tokens";

const solutions = [
  {
    title: "Core Banking CB7",
    body: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    href: "#",
    icon: "/sections/svgs/solutions/coreBanking.svg",
  },
  {
    title: "Digital Banking N7",
    body: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
    href: "#",
    icon: "/sections/svgs/solutions/digitalBanking.svg",
  },
  {
    title: "Open Banking",
    body: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    href: "#",
    icon: "/sections/svgs/solutions/openBanking.svg",
  },
  {
    title: "Loan Origination System",
    body: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
    href: "#",
    icon: "/sections/svgs/solutions/loanOrigination.svg",
  },
  {
    title: "Loan Management System",
    body: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
    href: "#",
    icon: "/sections/svgs/solutions/loanManagement.svg",
  },
];

export function SolutionsSection() {
  return (
    <Section id="solutions" className="overflow-hidden">
      <Container className="relative flex justify-between">
        <div
          aria-hidden="true"
          className={cn(
            tokens.section.glow,
            "pointer-events-none absolute right-0 bottom-[20%] h-80 w-[20rem] rounded-full blur-[80px] sm:h-96 sm:w-[24rem]",
          )}
        />
        <div className="flex flex-col gap-12 ">
          <Heading className="font-normal text-4xl leading-[1.2]">
            All of our solutions are tailor-made to your needs
          </Heading>

          <div className="w-1/3">
            <Button variant="secondary">REQUEST DEMO</Button>
          </div>
        </div>

        <div className="grid w-1/2 sm:gap-x-19 sm:gap-y-13 sm:grid-cols-2">
          {solutions.map((solution) => (
            <Card
              key={solution.title}
              variant="minimal"
              className=" transition-transform duration-200 hover:scale-101 sm:p-0 flex flex-col gap-6.5"
            >
              <Image src={solution.icon} alt="" width={47} height={49} />

              <div className="flex flex-col gap-8">
                <h3 className="text-[22px] leading-[1.2]">{solution.title}</h3>
                <div className=" leading-[1.3] w-full">{solution.body}</div>
              </div>

              <Link
                href={solution.href}
                className=" inline-flex items-center gap-2 text-sm text-[#00B4FD] transition-colors duration-200 hover:text-foreground font-mono"
              >
                LEARN MORE
                <span aria-hidden="true">→</span>
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
