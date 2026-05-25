import { Navbar } from "@/components/sections/navbar";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_34%),linear-gradient(180deg,_#020617_0%,_#0f172a_100%)] text-white">
      <Navbar />

      <main>
        <Section className="pb-24 pt-28 sm:pt-32 lg:pt-36">
          <Container>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/30 backdrop-blur-sm sm:p-10 lg:p-12">
              <div className="max-w-2xl">
                <Heading level={1} className="text-white">
                  Landing page placeholder for layout validation.
                </Heading>
                <Text className="mt-4 max-w-xl text-slate-300">
                  The navbar is now integrated at the root and this temporary
                  content block is preserving the premium fintech aesthetic
                  while the rest of the landing page is built.
                </Text>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  );
}
