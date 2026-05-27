import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";

export function CoreBankingShowcase() {
  return (
    <Section
      id="core-banking"
      className="relative overflow-hidden py-10 lg:min-h-[70dvh] lg:py-4"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden left-[-20%] lg:block"
      >
        <Image
          src="/sections/images/coreBanking/CB7.webp"
          alt=""
          fill
          className="object-contain object-top-left"
        />
      </div>

      <Container className="relative z-10 flex h-full flex-col gap-10 lg:gap-9">
        <div className="relative z-10 flex w-full flex-col justify-center gap-4 lg:h-full lg:w-2/5">
          <Heading
            level={2}
            className={cn(
              tokens.section.title,
              "text-wrap font-normal leading-[1.2]",
            )}
          >
            A complete cloud-based core banking.
          </Heading>
          <Text className={cn(tokens.section.description, "max-w-full lg:max-w-3/5")}>
            Faster time to market with our cloud-based core banking services
          </Text>
        </div>

        <div className="flex w-full flex-col gap-4 lg:w-2/5">
          <Button variant="primary" className="w-full sm:w-1/2 lg:w-2/5">
            REQUEST DEMO
          </Button>
          <Link
            href={"#"}
            className="inline-flex items-center gap-2 font-mono text-sm text-[#00B4FD] transition-colors duration-200 hover:text-foreground"
          >
            LEARN MORE
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="relative mt-6 flex justify-center lg:hidden">
          <Image
            src="/sections/images/coreBanking/cloudBasebCoreBanking.webp"
            alt="Core banking dashboard"
            width={720}
            height={560}
            className="h-auto w-full max-w-[720px] object-contain"
            priority
          />
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[60vw] justify-end lg:flex">
        <Image
          src="/sections/images/coreBanking/cloudBasebCoreBanking.webp"
          alt="Core banking dashboard"
          width={720}
          height={560}
          className="h-auto w-auto max-w-none object-contain"
          priority
        />
      </div>
    </Section>
  );
}
