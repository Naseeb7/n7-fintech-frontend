export const tokens = {
  color: {
    background: "#000d12",
    foreground: "#f5faff",
    muted: "#8aa0b4",
    border: "rgba(255, 255, 255, 0.08)",
    accent: "#2f7cf6",
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
      1: "text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl",
      2: "text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl",
      3: "text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl",
      4: "text-xl font-semibold tracking-tight text-balance text-white sm:text-2xl",
      5: "text-lg font-semibold tracking-tight text-balance text-white sm:text-xl",
      6: "text-base font-semibold tracking-tight text-balance text-white sm:text-lg",
    },
    text: {
      base: "text-base leading-7 text-slate-200 sm:text-[1.0625rem] sm:leading-8",
      muted: "text-base leading-7 text-slate-400 sm:text-[1.0625rem] sm:leading-8",
      sm: "text-sm leading-6 text-slate-200",
    },
  },
  button: {
    base:
      "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-[10px] px-5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    primary:
      "bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-950/10 hover:brightness-105",
    secondary:
      "border border-white/10 bg-white/5 text-white hover:bg-white/10",
  },
  card: {
    base:
      "rounded-[16px] border border-white/10 bg-slate-950/80 p-6 text-white shadow-sm shadow-slate-950/20 backdrop-blur-sm sm:p-8",
    minimal:
      "rounded-[16px] border border-white/10 bg-white/[0.02] p-6 text-white sm:p-8",
  },
  navbar: {
    shell: "sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8",
    container:
      "mx-auto w-full max-w-6xl rounded-[12px] border border-white/10 bg-slate-950/80 shadow-lg shadow-slate-950/20 backdrop-blur-xl",
    inner: "flex items-center gap-3 px-4 py-3 sm:px-5",
    brand:
      "inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-white uppercase",
    link:
      "text-sm font-medium tracking-wide text-slate-300 transition-colors duration-200 hover:text-white",
    mobilePanel:
      "border-t border-white/10 px-4 pb-4 pt-3 sm:hidden",
    mobileLink:
      "block rounded-[10px] px-3 py-2 text-sm font-medium text-slate-200 transition-colors duration-200 hover:bg-white/5 hover:text-white",
    toggle:
      "inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:hidden",
  },
  hero: {
    shell: "relative overflow-hidden",
    content: "max-w-2xl",
    eyebrow:
      "text-sm font-semibold uppercase tracking-[0.22em] text-sky-300",
    lead:
      "mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-[1.0625rem] sm:leading-8",
    ctaGroup: "mt-8 flex flex-col gap-3 sm:flex-row",
    trustWrap: "mt-12 border-t border-white/10 pt-8",
    trustLabel: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500",
    trustList:
      "mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-slate-400",
  },
} as const;

export type Tokens = typeof tokens;
