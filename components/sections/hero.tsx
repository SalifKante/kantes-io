import { useTranslations } from "next-intl";
import { LuArrowDown, LuDownload, LuMail } from "react-icons/lu";

import { SectionLink } from "@/components/ui/section-link";
import { SOCIAL_ICONS } from "@/components/ui/social-icons";
import { site, socials } from "@/content/site";
import { TOP_ID } from "@/content/sections";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id={TOP_ID}
      className="relative overflow-hidden border-b border-border"
    >
      {/* Soft accent wash — replaces the former full-bleed photo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_20%_-10%,var(--color-accent),transparent_60%)] opacity-[0.12]"
      />

      <div className="container-page py-24 sm:py-32">
        <div className="max-w-3xl animate-rise">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {t("eyebrow")}
          </p>

          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {t("name")}
          </h1>

          <p className="mt-5 text-lg text-muted text-pretty sm:text-xl">
            {t("role")}
          </p>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg">
            {t("statement")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
            >
              <LuMail className="size-4" aria-hidden />
              {t("contact")}
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <LuDownload className="size-4" aria-hidden />
              {t("cv")}
            </a>

            <div className="ms-1 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.id];
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    <Icon className="size-5" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          <SectionLink
            section="about"
            className="mt-14 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <LuArrowDown className="size-4" aria-hidden />
            {t("scroll")}
          </SectionLink>
        </div>
      </div>
    </section>
  );
}
