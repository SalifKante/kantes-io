/**
 * The single page is addressed by real routes (`/en/research`) rather than
 * fragments. These ids are simultaneously the DOM ids of each section, the
 * route segments under `/[locale]`, and keys under `nav` in the catalogues.
 */
export const SECTION_IDS = [
  "about",
  "position",
  "research",
  "projects",
  "skills",
  "credentials",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

/** Subset shown in the header; the rest are reachable by scrolling. */
export const NAV_SECTIONS = [
  "about",
  "research",
  "projects",
  "skills",
  "contact",
] as const satisfies readonly SectionId[];

/** DOM id of the hero, the scroll target for the locale root. */
export const TOP_ID = "top";

export function isSectionId(value: string | undefined): value is SectionId {
  return SECTION_IDS.includes(value as SectionId);
}
