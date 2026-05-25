import Link from "next/link";

import { Container } from "@/components/layout/container";
import { tokens } from "@/styles/tokens";

const solutionLinks = [
  "Core Banking",
  "Digital Banking",
  "Open Banking",
  "Lending Suite",
] as const;

const companyLinks = [
  "About Us",
  "Careers",
  "Insights",
  "Contact",
] as const;

const socialLinks = [
  "LinkedIn",
  "X / Twitter",
  "Dribbble",
] as const;

const officeLinks = [
  "New York",
  "London",
  "Singapore",
] as const;

export function Footer() {
  return (
    <footer id="footer" className={tokens.footer.shell}>
      <Container>
        <div className="grid gap-12 border-t border-white/10 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:gap-10">
          <div>
            <p className={tokens.footer.brand}>N7</p>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Premium fintech infrastructure for teams that need clarity,
              resilience, and speed at the same time.
            </p>
          </div>

          <div>
            <h2 className={tokens.footer.title}>Office</h2>
            <ul className="mt-5 space-y-3">
              {officeLinks.map((item) => (
                <li key={item}>
                  <Link href="#footer" className={tokens.footer.link}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={tokens.footer.title}>Solutions</h2>
            <ul className="mt-5 space-y-3">
              {solutionLinks.map((item) => (
                <li key={item}>
                  <Link href="#solutions" className={tokens.footer.link}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={tokens.footer.title}>Company</h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link href="#insights" className={tokens.footer.link}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className={tokens.footer.title + " mt-8"}>Socials</h2>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((item) => (
                <li key={item}>
                  <Link href="#footer" className={tokens.footer.link}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 N7 Financial Systems. All rights reserved.</p>
          <p>Built for premium digital banking experiences.</p>
        </div>
      </Container>
    </footer>
  );
}
