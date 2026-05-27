import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { SolutionsSection } from "@/components/sections/solutions";
import { CoreBankingShowcase } from "@/components/sections/core-banking-showcase";
import { FeatureBreakdownSection } from "@/components/sections/feature-breakdown";
import { CtaBanner } from "@/components/sections/cta-banner";
import { InsightsSection } from "@/components/sections/insights";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="flex flex-col gap-32">
        <Hero />
        <SolutionsSection />
        <CoreBankingShowcase />
        <FeatureBreakdownSection />
        <CtaBanner
          variant="cb7"
          title="Take the full advantage of going paper-less now."
          description="CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations "
          primaryLabel="REQUEST DEMO"
          secondaryLabel="CONTACT US"
        />
        <InsightsSection />
        <CaseStudiesSection />
        <CtaBanner
          variant="n7"
          title="Take the full advantage of going paper-less now."
          description="N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations "
          primaryLabel="REQUEST DEMO"
          secondaryLabel="CONTACT US"
        />
      </main>

      <Footer />
    </div>
  );
}
