import { useTranslations } from "next-intl";

import { Section } from "@/components/ui/section";
import { Tag, TagList } from "@/components/ui/tag";
import { skillGroups } from "@/content/skills";

export function Skills() {
  const t = useTranslations("skills");

  return (
    <Section
      id="skills"
      eyebrow={t("eyebrow")}
      title={t("title")}
      lead={t("lead")}
    >
      <div className="grid gap-10 sm:grid-cols-2 lg:gap-x-14">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {t(`groups.${group.id}`)}
            </h3>
            <div className="mt-4">
              <TagList>
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </TagList>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
