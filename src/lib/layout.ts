export const layout = {
  shell: "mx-auto flex min-h-screen w-full max-w-[1440px] flex-col",
  container: "w-full max-w-9xl px-4 sm:px-6 lg:px-20",
  section: "w-full",
  stack: "flex flex-col gap-6",
} as const;

export type LayoutKey = keyof typeof layout;
