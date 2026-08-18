import { defineRouting } from "next-intl/routing";

export const locales = ["en", "fr", "ru"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ru: "Русский",
};

/** BCP-47 tags used for `<html lang>` and hreflang alternates. */
export const localeTags: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  ru: "ru",
};

/** Open Graph expects `language_TERRITORY`, not a bare language tag. */
export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  ru: "ru_RU",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});
