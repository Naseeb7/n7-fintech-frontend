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

      <main>
        <Hero />
        <SolutionsSection />
        <CoreBankingShowcase />
        <FeatureBreakdownSection />
        <CtaBanner
          title="Take the full advantage of going paper-less now."
          description="Digitize the parts of your banking workflow that slow teams down and unlock a cleaner operating rhythm."
          primaryLabel="REQUEST DEMO"
          secondaryLabel="CONTACT US"
          backgroundLabel="Paperless"
        />
        <InsightsSection />
        <CaseStudiesSection />
        <CtaBanner
          compact
          title="Take the full advantage of going paper-less now."
          description="Keep the same premium structure in a simpler close-to-footer format for final conversion."
          primaryLabel="REQUEST DEMO"
          secondaryLabel="CONTACT US"
          backgroundLabel="Scale"
        />
      </main>

      <Footer />
    </div>
  );
}
