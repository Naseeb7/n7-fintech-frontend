export const layout = {
  shell: "mx-auto flex min-h-screen w-full max-w-[1440px] flex-col",
  container: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  section: "py-16 sm:py-20 lg:py-24",
  stack: "flex flex-col gap-6",
} as const;

export type LayoutKey = keyof typeof layout;
