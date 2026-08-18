"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

import { useSectionLink } from "@/components/section-router";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NAV_SECTIONS, TOP_ID } from "@/content/sections";

function NavLink({
  section,
  label,
  className,
  onNavigate,
}: {
  section: string;
  label: string;
  className: string;
  onNavigate: () => void;
}) {
  const props = useSectionLink(section, onNavigate);

  return (
    <a {...props} className={className}>
      {label}
    </a>
  );
}

export function SiteHeader() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-accent-contrast"
      >
        {t("skipToContent")}
      </a>

      <div className="container-page flex h-16 items-center justify-between gap-4">
        <NavLink
          section={TOP_ID}
          label="Salif Kanté"
          onNavigate={closeMenu}
          className="font-display text-lg tracking-tight"
        />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV_SECTIONS.map((section) => (
              <li key={section}>
                <NavLink
                  section={section}
                  label={t(section)}
                  onNavigate={closeMenu}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid size-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {menuOpen ? (
              <LuX className="size-4" aria-hidden />
            ) : (
              <LuMenu className="size-4" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="container-page flex flex-col py-2">
            {NAV_SECTIONS.map((section) => (
              <li key={section}>
                <NavLink
                  section={section}
                  label={t(section)}
                  onNavigate={closeMenu}
                  className="block py-3 text-sm text-muted transition-colors hover:text-foreground"
                />
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
