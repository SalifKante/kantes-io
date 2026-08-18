import { useTranslations } from "next-intl";
import { LuDownload, LuMail } from "react-icons/lu";

import { Section } from "@/components/ui/section";
import { SOCIAL_ICONS } from "@/components/ui/social-icons";
import { site, socials } from "@/content/site";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <Section
      id="contact"
      eyebrow={t("eyebrow")}
      title={t("title")}
      lead={t("lead")}
    >
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90"
        >
          <LuMail className="size-4" aria-hidden />
          {t("emailCta")}
        </a>
        <a
          href={site.cv}
          download
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          <LuDownload className="size-4" aria-hidden />
          {t("cvCta")}
        </a>
      </div>

      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        <li>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {site.email}
          </a>
        </li>
        {socials.map((social) => {
          const Icon = SOCIAL_ICONS[social.id];
          return (
            <li key={social.id}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                <Icon className="size-4" aria-hidden />
                {social.label}
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
