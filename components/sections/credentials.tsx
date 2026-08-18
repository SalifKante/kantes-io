import { useTranslations } from "next-intl";
import { LuArrowUpRight } from "react-icons/lu";

import { Section } from "@/components/ui/section";
import {
  certificationGroups,
  communities,
  spokenLanguages,
} from "@/content/credentials";

export function Credentials() {
  const t = useTranslations("credentials");

  return (
    <Section
      id="credentials"
      eyebrow={t("eyebrow")}
      title={t("title")}
      variant="surface"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <h3 className="font-display text-2xl">
            {t("certifications.title")}
          </h3>

          <div className="mt-6 space-y-7">
            {certificationGroups.map((group) => (
              <div key={group.provider ?? "other"}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {group.provider ?? t("certifications.other")}
                </p>
                <ul className="mt-3 space-y-2">
                  {group.items.map((name) => (
                    <li
                      key={name}
                      className="border-s-2 border-border ps-3 text-sm leading-relaxed text-pretty"
                      lang="en"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="font-display text-2xl">{t("communities.title")}</h3>
            <ul className="mt-6 space-y-5">
              {communities.map((community) => (
                <li key={community.id}>
                  <a
                    href={community.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-accent underline-offset-4 hover:underline"
                  >
                    {community.name}
                    <LuArrowUpRight className="size-3.5" aria-hidden />
                  </a>
                  <p className="mt-1 text-sm text-muted text-pretty">
                    {t(`communities.items.${community.id}`)}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                    {t("communities.since", { year: community.since })}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl">{t("languages.title")}</h3>
            <ul className="mt-6 space-y-3">
              {spokenLanguages.map((language) => (
                <li
                  key={language.id}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border pb-3"
                >
                  <span className="text-sm font-medium">
                    {t(`languages.items.${language.id}`)}
                  </span>
                  <span className="text-sm text-muted">
                    {language.native
                      ? t("languages.native")
                      : language.level
                        ? `${language.level} — ${language.certification}`
                        : t("languages.working")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
