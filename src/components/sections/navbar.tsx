"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { tokens } from "@/styles/tokens";
import { cn } from "@/utils/cn";

const navigationItems = [
  { label: "SOLUTIONS", href: "#solutions", hasDropdown: true },
  { label: "RESOURCES", href: "#resources", hasDropdown: true },
  { label: "ABOUT US", href: "#about-us", hasDropdown: false },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={tokens.navbar.shell}>
      <Container className="max-w-5xl px-0 mx-auto">
        <nav
          aria-label="Primary"
          className={cn(tokens.navbar.container, "font-mono")}
        >
          <div className={tokens.navbar.inner}>
            <Link href="/" className={cn(tokens.navbar.brand, "font-sans")}>
              N7
            </Link>

            <div className="hidden flex-1 items-center justify-center gap-8 sm:flex">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={tokens.navbar.link}
                >
                  <span className="flex items-center gap-1">
                    {item.label}
                    {item.hasDropdown ? (
                      <ChevronDown
                        aria-hidden="true"
                        size={13.73}
                        className="shrink-0"
                        strokeWidth={2.5}
                      />
                    ) : null}
                  </span>
                </Link>
              ))}
            </div>

            <div className="hidden sm:flex">
              <Button
                variant="secondary"
                className="py-1.25 text-xs w-full rounded-md"
              >
                REQUEST DEMO
              </Button>
            </div>

            <button
              type="button"
              className={tokens.navbar.toggle}
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
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
                <Link
                  key={item.label}
                  href={item.href}
                  className={tokens.navbar.mobileLink}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="secondary" className="mt-2 w-full">
                REQUEST DEMO
              </Button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
