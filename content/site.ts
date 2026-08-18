export const site = {
  url: "https://www.kantes.me",
  name: "Salif Kanté",
  email: "salif.kante.pro@gmail.com",
  cv: "/cv/CV_Salif_KANTE_2026_FR.pdf",
  portrait: "/images/profile/portrait.jpg",
  portraitSize: { width: 600, height: 600 },
} as const;

export const socials = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/SalifKante",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    // Vanity slug taken from the 2026 CV: `salif-kanté-66720118b`.
    href: "https://www.linkedin.com/in/salif-kant%C3%A9-66720118b",
  },
  {
    id: "discord",
    label: "Discord",
    href: "https://discord.com/users/695396084280852511",
  },
] as const;

/** Structured data consumed by search engines (schema.org/Person). */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Salif Kanté",
  alternateName: ["Salif Kante", "Канте Салиф"],
  url: site.url,
  image: `${site.url}${site.portrait}`,
  email: `mailto:${site.email}`,
  jobTitle: "Engineer",
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: "Tomsk State University of Control Systems and Radioelectronics (TUSUR)",
    url: "https://tusur.ru",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tomsk",
    addressCountry: "RU",
  },
  knowsLanguage: ["fr", "en", "ru"],
  sameAs: socials.map((social) => social.href),
} as const;
