import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { PageContent } from "@/components/page-content";
import { SECTION_IDS, isSectionId } from "@/content/sections";
import { locales, routing } from "@/i18n/routing";

type PageParams = { params: Promise<{ locale: string; section?: string[] }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => [
    { locale, section: [] as string[] },
    ...SECTION_IDS.map((section) => ({ locale, section: [section] })),
  ]);
}

/** `undefined` for the locale root, the section id for a section route. */
function readSection(segments: string[] | undefined) {
  if (!segments || segments.length === 0) return undefined;
  if (segments.length > 1) return null;
  return isSectionId(segments[0]) ? segments[0] : null;
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, section: segments } = await params;
  const section = readSection(segments);

  if (!hasLocale(routing.locales, locale) || section === null) {
    return {};
  }
  if (!section) {
    // The locale root inherits everything from the layout.
    return {};
  }

  const [nav, meta] = await Promise.all([
    getTranslations({ locale, namespace: "nav" }),
    getTranslations({ locale, namespace: "meta" }),
  ]);

  return {
    title: `${nav(section)} — ${meta("shortTitle")}`,
    // Every section route serves the same document, so search engines are
    // pointed back at the locale root rather than told about eight copies.
    alternates: { canonical: `/${locale}` },
  };
}

export default async function Page({ params }: PageParams) {
  const { locale, section: segments } = await params;
  const section = readSection(segments);

  if (!hasLocale(routing.locales, locale) || section === null) {
    notFound();
  }

  setRequestLocale(locale);

  return <PageContent section={section} />;
}
