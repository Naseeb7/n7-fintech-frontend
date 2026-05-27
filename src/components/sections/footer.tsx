import Image from "next/image";

import { Container } from "@/components/layout/container";
import { tokens } from "@/styles/tokens";

const solutionLinks = [
  "Core Banking CB7",
  "Digital Banking N7",
  "Open Banking",
  "Loan Origination System",
  "Loan Management System",
  "Digital Transformation",
] as const;

const n7BankingLinks = [
  "About Us",
  "Solutions",
  "Contact",
  "Company",
  "Careers",
  "Insights",
  "Core Team",
  "Brand Center",
] as const;

const socialLinks = ["LinkedIn", "X"] as const;

const officeAddresses = [
  {
    city: "London",
    address:
      "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge,TN14 6EP, England, United Kingdom.",
  },
  {
    city: "Dubai",
    address:
      "Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
  },
  {
    city: "Pune",
    address:
      "Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
  },
] as const;

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-[#00B4FD]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function FooterLinkList({
  heading,
  links,
}: {
  heading: string;
  links: readonly string[];
}) {
  return (
    <div className="w-2/3 leading-[1.3] flex flex-col gap-4">
      <h3 className="font-medium">{heading}</h3>
      <ul className="space-y-0">
        {links.map((link) => (
          <li
            key={link}
            className="group flex cursor-pointer items-center justify-between py-2 transition-opacity hover:opacity-80"
          >
            <span className="opacity-70 transition-opacity group-hover:opacity-100">
              {link}
            </span>
            <ArrowIcon />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="footer" className={tokens.footer.shell}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-112 w-[140vw] -translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,180,253,0.08),rgba(0,58,206,0.05)_36%,transparent_76%)] blur-[120px]"
      />

      <Container className="relative z-10">
        <div className="grid gap-12 py-16 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <Image
              src="/sections/images/footer/N7-footer.webp"
              alt="N7"
              width={420}
              height={132}
              className="h-auto w-full max-w-104 object-contain"
              priority={false}
            />
          </div>

          <div className="space-y-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 leading-[1.3]">
              {officeAddresses.map((address) => (
                <div key={address.city} className="space-y-2">
                  <p className=" font-medium">{address.city}</p>
                  <p className="text-wrap opacity-70">{address.address}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <FooterLinkList heading="Solutions" links={solutionLinks} />
              <FooterLinkList heading="N7 Banking" links={n7BankingLinks} />
              <FooterLinkList heading="Our Socials" links={socialLinks} />
            </div>
            <div className="mt-20">
              <p className="opacity-30 leading-[1.3]">
                Copyright © 2022 by Linktia Infosystems Limited — CB7 and N7 as
                Commercial Brand — Registered under the Companies Act 2006 in
                England and Wales | Number of Incorporation 13100992
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
