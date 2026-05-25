"use client";

import { useState } from "react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";

const navigationItems = [
  { label: "SOLUTIONS", href: "#solutions" },
  { label: "RESOURCES", href: "#resources" },
  { label: "ABOUT US", href: "#about-us" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={tokens.navbar.shell}>
      <Container className="max-w-6xl px-0">
        <nav
          aria-label="Primary"
          className={tokens.navbar.container}
        >
          <div className={tokens.navbar.inner}>
            <Link href="/" className={tokens.navbar.brand}>
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500"
              />
              NOVA
            </Link>

            <div className="hidden flex-1 items-center justify-center gap-8 sm:flex">
              {navigationItems.map((item) => (
                <Link key={item.label} href={item.href} className={tokens.navbar.link}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="ml-auto hidden sm:block">
              <Button variant="secondary" className="border-white/10 bg-white/5 text-white hover:bg-white/10">
                REQUEST DEMO
              </Button>
            </div>

            <button
              type="button"
              className={tokens.navbar.toggle}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="primary-navigation"
              onClick={() => setOpen((current) => !current)}
            >
              <span className="relative block h-4 w-4">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition-transform duration-200",
                    open ? "translate-y-1.5 rotate-45" : "translate-y-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1.5 h-0.5 w-4 rounded-full bg-current transition-opacity duration-200",
                    open ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-3 h-0.5 w-4 rounded-full bg-current transition-transform duration-200",
                    open ? "-translate-y-1.5 -rotate-45" : "translate-y-0",
                  )}
                />
              </span>
            </button>
          </div>

          <div
            id="primary-navigation"
            className={cn(tokens.navbar.mobilePanel, open ? "block" : "hidden")}
          >
            <div className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <Link key={item.label} href={item.href} className={tokens.navbar.mobileLink} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Button
                variant="secondary"
                className="mt-2 w-full border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                REQUEST DEMO
              </Button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
