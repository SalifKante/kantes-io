export interface CertificationGroup {
  /**
   * Issuing body where the source records one, otherwise `null` — rendered
   * from `credentials.certifications.other`. Providers are not guessed.
   */
  provider: string | null;
  /** Certificate titles are left in the language they were issued in. */
  items: string[];
}

export const certificationGroups: CertificationGroup[] = [
  {
    provider: "CDOSS",
    items: [
      "Big Data Analytics with Hive Query Language and Beeline",
      "Managing Big Data in a Hadoop Cluster",
      "Hadoop Cluster Installation and Administration",
      "Machine Learning with Spark",
      "Machine Learning with Python",
      "Deep Learning with Python",
    ],
  },
  {
    provider: "Coursera",
    items: [
      "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
      "Analyzing Big Data with SQL",
      "Managing Big Data in Clusters and Cloud Storage",
      "AWS Cloud Technical Essentials",
    ],
  },
];

export interface Community {
  /** Key under `credentials.communities.items` in the message catalogue. */
  id: string;
  name: string;
  url: string;
  since: number;
}

export const communities: Community[] = [
  { id: "doniyaso", name: "Doniyaso", url: "https://www.doniyaso.com", since: 2023 },
  { id: "aimali", name: "IA Mali", url: "https://www.aimali.ai", since: 2025 },
];

export interface SpokenLanguage {
  /** Key under `credentials.languages.items` in the message catalogue. */
  id: string;
  native?: boolean;
  /** CEFR level, where one has been certified. */
  level?: string;
  /** Certification detail — proper nouns, not translated. */
  certification?: string;
}

export const spokenLanguages: SpokenLanguage[] = [
  { id: "bm", native: true },
  { id: "fr" },
  { id: "en", level: "B2", certification: "IELTS 6.0 — 2022" },
  { id: "ru", level: "B1+", certification: "TUSUR" },
];
