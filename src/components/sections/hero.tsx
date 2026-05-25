import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { tokens } from "@/styles/tokens";

const trustedBy = [
  "SHELLS",
  "SmartFinder",
  "Zoomerr",
  "ArtVenue",
  "kontrastR",
  "WAVESMARATHON",
] as const;

export function Hero() {
  return (
    <Section className={tokens.hero.shell}>
      <Container>
        <div className={tokens.hero.content}>
          <p className={tokens.hero.eyebrow}>Fintech infrastructure</p>
          <Heading level={1} className="mt-4 max-w-xl">
            The new foundation of modern banking
          </Heading>
          <Text className={tokens.hero.lead}>
            We drive innovation and growth, provide seamless customer
            experience and operational excellence
          </Text>

          <div className={tokens.hero.ctaGroup}>
            <Button variant="primary" className="w-full sm:w-auto">
              REQUEST DEMO
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto">
              CONTACT US
            </Button>
          </div>

          <div className={tokens.hero.trustWrap} aria-label="Trusted by">
            <p className={tokens.hero.trustLabel}>Trusted by</p>
            <ul className={tokens.hero.trustList}>
              {trustedBy.map((brand) => (
                <li key={brand}>{brand}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
