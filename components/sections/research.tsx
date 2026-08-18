import { useFormatter, useTranslations } from "next-intl";
import { LuArrowUpRight } from "react-icons/lu";

import { Section } from "@/components/ui/section";
import { preprint, publicationsByDate } from "@/content/publications";

export function Research() {
  const t = useTranslations("research");
  const format = useFormatter();

  return (
    <Section
      id="research"
      eyebrow={t("eyebrow")}
      title={t("title")}
      lead={t("lead")}
    >
      <ol className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
        {publicationsByDate.map((publication) => {
          const [year, month] = publication.date.split("-").map(Number);
          const presentedOn = new Date(Date.UTC(year, month - 1, 1));
          const originalKey = `items.${publication.id}.original`;

          return (
            <li
              key={publication.id}
              className="bg-background p-6 sm:p-7"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs uppercase tracking-[0.14em] text-muted">
                <time dateTime={publication.date} className="text-accent">
                  {format.dateTime(presentedOn, {
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span aria-hidden>·</span>
                <span>{t(`venues.${publication.venue}.city`)}</span>
              </div>

              <h3 className="mt-3 font-display text-xl leading-snug text-pretty">
                {t(`items.${publication.id}.title`)}
              </h3>

              <p className="mt-2 text-sm text-muted text-pretty">
                {t(`venues.${publication.venue}.name`)}
              </p>

              {t.has(originalKey) ? (
                <p className="mt-3 border-s-2 border-border ps-3 text-sm italic text-muted text-pretty">
                  <span className="not-italic">{t("originalTitle")}: </span>
                  <span lang="ru">{t(originalKey)}</span>
                </p>
              ) : null}
            </li>
          );
        })}
      </ol>

      <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {t("preprintTitle")}
        </p>
        <p className="mt-3 text-base text-pretty">{t("preprintDescription")}</p>
        <a
          href={preprint.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent underline-offset-4 hover:underline"
        >
          {t("preprintCta")}
          <span className="text-muted">({preprint.identifier})</span>
          <LuArrowUpRight className="size-4" aria-hidden />
        </a>
      </div>
    </Section>
  );
}
