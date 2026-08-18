"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { LuCheck, LuGlobe } from "react-icons/lu";

import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, locales, type Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const t = useTranslations("nav");
  const activeLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const select = (locale: Locale) => {
    setOpen(false);
    router.replace(pathname, { locale });
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={t("language")}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        className="flex h-9 items-center gap-1.5 rounded-full border border-border px-3 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
      >
        <LuGlobe className="size-4" aria-hidden />
        <span className="uppercase">{activeLocale}</span>
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute end-0 z-50 mt-2 min-w-44 overflow-hidden rounded-xl border border-border bg-background p-1 shadow-lg"
        >
          {locales.map((locale) => (
            <button
              key={locale}
              type="button"
              role="menuitem"
              lang={locale}
              onClick={() => select(locale)}
              className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-start text-sm transition-colors hover:bg-surface-strong"
            >
              {localeNames[locale]}
              {locale === activeLocale ? (
                <LuCheck className="size-4 text-accent" aria-hidden />
              ) : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
