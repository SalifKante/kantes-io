export interface Publication {
  /** Key under `research.items` in the message catalogue. */
  id: string;
  /** Key under `research.venues` in the message catalogue. */
  venue: "itmo" | "tusur";
  /** ISO year-month of presentation. */
  date: string;
  /**
   * Set when the paper was published in Russian; the original title is then
   * shown beneath the translated one in the `en` and `fr` catalogues.
   */
  originalLanguage?: "ru";
}

export const publications: Publication[] = [
  { id: "dipole", venue: "itmo", date: "2025-04" },
  { id: "platform", venue: "tusur", date: "2025-05" },
  { id: "shielding", venue: "itmo", date: "2026-04" },
  { id: "shieldingRu", venue: "tusur", date: "2026-05", originalLanguage: "ru" },
];

/** Ordered newest first for display. */
export const publicationsByDate = [...publications].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const preprint = {
  url: "https://arxiv.org/abs/2506.02443",
  identifier: "arXiv:2506.02443",
  authorPosition: 9,
} as const;
