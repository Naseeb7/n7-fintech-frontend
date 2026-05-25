export const tokens = {
  color: {
    background: "#ffffff",
    foreground: "#0f172a",
    muted: "#64748b",
    border: "#e2e8f0",
    accent: "#0f766e",
  },
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 2px rgba(15, 23, 42, 0.06)",
    md: "0 8px 24px rgba(15, 23, 42, 0.08)",
  },
  spacing: {
    gutter: "1rem",
    content: "1.5rem",
    sectionY: "5rem",
  },
  typography: {
    heading: {
      1: "text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl",
      2: "text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl",
      3: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl",
      4: "text-xl font-semibold tracking-tight text-balance sm:text-2xl",
      5: "text-lg font-semibold tracking-tight text-balance sm:text-xl",
      6: "text-base font-semibold tracking-tight text-balance sm:text-lg",
    },
    text: {
      base: "text-base leading-7 text-slate-700 sm:text-[1.0625rem] sm:leading-8",
      muted: "text-base leading-7 text-slate-500 sm:text-[1.0625rem] sm:leading-8",
      sm: "text-sm leading-6 text-slate-700",
    },
  },
  button: {
    base:
      "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-[10px] px-5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    primary:
      "bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-950/10 hover:brightness-105",
    secondary:
      "border border-slate-200 bg-transparent text-slate-900 hover:bg-slate-50",
  },
} as const;

export type Tokens = typeof tokens;
