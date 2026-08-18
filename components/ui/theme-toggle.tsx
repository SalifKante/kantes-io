"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { LuMoon, LuSun } from "react-icons/lu";

export function ThemeToggle() {
  const t = useTranslations("nav");
  const { resolvedTheme, setTheme } = useTheme();

  // Both icons are rendered and swapped by the `dark` class that next-themes
  // sets before first paint. This keeps the server and client markup identical,
  // so no mounted-guard (and no icon flash) is needed.
  return (
    <button
      type="button"
      aria-label={t("theme")}
      title={t("theme")}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid size-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <LuSun className="hidden size-4 dark:block" aria-hidden />
      <LuMoon className="size-4 dark:hidden" aria-hidden />
    </button>
  );
}
