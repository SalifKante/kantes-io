import { useTranslations } from "next-intl";

import { ProjectGallery } from "@/components/ui/project-gallery";
import { Section } from "@/components/ui/section";
import { projectGroups } from "@/content/projects";

export function Projects() {
  const t = useTranslations("projects");

  return (
    <Section
      id="projects"
      eyebrow={t("eyebrow")}
      title={t("title")}
      lead={t("lead")}
      variant="surface"
    >
      <div className="space-y-16">
        {projectGroups.map((group) => {
          const slides = group.items.map((item) => {
            const title = t(`items.${item.id}`);
            return {
              src: item.src,
              title: item.n ? `${title} — ${item.n}` : title,
            };
          });

          return (
            <div key={group.id}>
              <div className="mb-6 border-b border-border pb-4">
                <h3 className="font-display text-2xl text-pretty">
                  {t(`groups.${group.id}.title`)}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{group.stack}</p>
              </div>

              <ProjectGallery slides={slides} openLabel={t("openImage")} />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
