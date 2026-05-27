import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { tokens } from "@/styles/tokens";

const trustedBy = [
  {
    src: "/sections/hero/trustedBy/shells.webp",
    alt: "SHELLS",
    width: 73,
    height: 19,
  },
  {
    src: "/sections/hero/trustedBy/smartfinder.webp",
    alt: "SmartFinder",
    width: 102,
    height: 19,
  },
  {
    src: "/sections/hero/trustedBy/zoomerr.webp",
    alt: "Zoomerr",
    width: 77,
    height: 19,
  },
  {
    src: "/sections/hero/trustedBy/artvenue.webp",
    alt: "ArtVenue",
    width: 96,
    height: 19,
  },
  {
    src: "/sections/hero/trustedBy/kontrastr.webp",
    alt: "kontrastR",
    width: 76,
    height: 17,
  },
  {
    src: "/sections/hero/trustedBy/wavesmarathon.webp",
    alt: "WAVESMARATHON",
    width: 108,
    height: 19,
  },
] as const;

export function Hero() {
  return (
    <Section className={tokens.hero.shell}>
      <Container className={tokens.hero.split}>
        <div className="flex flex-col gap-12 lg:contents">
          <div className={tokens.hero.content}>
            <div className={tokens.hero.contentWrapper}>
              <Heading
                level={1}
                className="max-w-xl text-[42px] font-medium leading-[1.15] sm:text-[54px] lg:text-[67px] lg:leading-[1.2]"
              >
                The new foundation of modern banking
              </Heading>
              <Text className={tokens.hero.lead}>
                We drive innovation and growth, provide seamless customer
                experience and operational excellence
              </Text>
            </div>

            <div className={tokens.hero.ctaGroup}>
              <Button variant="primary" className="w-full sm:w-1/2 lg:w-1/3">
                REQUEST DEMO
              </Button>
              <Button variant="secondary" className="w-full sm:w-1/2 lg:w-1/3">
                CONTACT US
              </Button>
            </div>
          </div>

          <div className={tokens.hero.mediaWrap}>
            <div
              aria-hidden="true"
              className={tokens.hero.mediaShadow}
              style={{
                background:
                  "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
                backdropFilter: "blur(100px)",
                WebkitBackdropFilter: "blur(100px)",
                opacity: 0.5,
              }}
            />
            <Image
              src="/sections/hero/hero.webp"
              alt="Fintech platform dashboard illustration"
              width={626}
              height={315}
              priority
              className={tokens.hero.mediaImage}
            />
          </div>
        </div>

        <div
          className={tokens.hero.trustWrap + " lg:col-span-2"}
          aria-label="Trusted by"
        >
          <p className={tokens.hero.trustLabel}>Trusted By:</p>
          <ul className={tokens.hero.trustList}>
            {trustedBy.map((brand) => (
              <li key={brand.alt}>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  className="h-auto w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
