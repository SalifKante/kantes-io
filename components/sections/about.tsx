import Image from "next/image";
import { useTranslations } from "next-intl";

import { Section } from "@/components/ui/section";
import { site } from "@/content/site";

export function About() {
  const t = useTranslations("about");

  return (
    <Section id="about" eyebrow={t("eyebrow")} title={t("title")}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-14">
        <div className="max-w-64">
          <Image
            src={site.portrait}
            alt={t("portraitAlt")}
            width={site.portraitSize.width}
            height={site.portraitSize.height}
            sizes="(min-width: 1024px) 18rem, 16rem"
            priority
            className="rounded-2xl border border-border object-cover"
          />
        </div>

        <div className="space-y-5 text-base leading-relaxed text-pretty">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
          <p>{t("p4")}</p>
        </div>
      </div>
    </Section>
  );
}
