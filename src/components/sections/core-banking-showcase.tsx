import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function CoreBankingShowcase() {
  return (
    <Section id="core-banking" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 left-[-20%]"
      >
        <Image
          src="/sections/images/coreBanking/CB7.webp"
          alt=""
          fill
          className="object-contain object-top-left"
        />
      </div>

      <Container className="relative z-10 h-full gap-9 flex flex-col">
        <div className="relative z-10 flex h-full w-2/5 flex-col justify-center gap-4">
          <Heading
            level={2}
            className={cn(
              tokens.section.title,
              "text-wrap font-normal leading-[1.2]",
            )}
          >
            A complete cloud-based core banking.
          </Heading>
          <Text className={cn(tokens.section.description, "max-w-3/5")}>
            Faster time to market with our cloud-based core banking services
          </Text>
        </div>

        <div className="flex flex-col gap-4 w-2/5">
          <Button variant="primary" className="w-2/5">
            REQUEST DEMO
          </Button>
          <Link
            href={"#"}
            className=" inline-flex items-center gap-2 text-sm text-[#00B4FD] transition-colors duration-200 hover:text-foreground font-mono"
          >
            LEARN MORE
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-[60vw] justify-end">
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
