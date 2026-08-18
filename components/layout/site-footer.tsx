import { useTranslations } from "next-intl";
import { LuArrowUp } from "react-icons/lu";

import { SectionLink } from "@/components/ui/section-link";
import { SOCIAL_ICONS } from "@/components/ui/social-icons";
import { TOP_ID } from "@/content/sections";
import { socials } from "@/content/site";

export function SiteFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm">{t("rights", { year })}</p>
          <p className="text-xs text-muted">{t("built")}</p>
        </div>

        <div className="flex items-center gap-4">
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
          <SectionLink
            section={TOP_ID}
            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            <LuArrowUp className="size-4" aria-hidden />
            {t("backToTop")}
          </SectionLink>
        </div>
      </div>
    </footer>
  );
}
