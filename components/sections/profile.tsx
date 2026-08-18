import { useTranslations } from "next-intl";

import { Section } from "@/components/ui/section";
import { site } from "@/content/site";

const FIELDS = [
  "position",
  "university",
  "laboratory",
  "programme",
  "location",
] as const;

export function Profile() {
  const t = useTranslations("profile");

  return (
    <Section
      id="position"
      eyebrow={t("eyebrow")}
      title={t("title")}
      variant="surface"
    >
      <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field} className="bg-background p-6">
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {t(`${field}.label`)}
            </dt>
            <dd className="mt-2 text-base leading-snug text-pretty">
              {t(`${field}.value`)}
            </dd>
          </div>
        ))}

        <div className="bg-background p-6">
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            {t("email.label")}
          </dt>
          <dd className="mt-2 text-base leading-snug">
            <a
              href={`mailto:${site.email}`}
              className="text-accent underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </dd>
        </div>
      </dl>
    </Section>
  );
}
