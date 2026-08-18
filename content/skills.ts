export interface SkillGroup {
  /** Key under `skills.groups` in the message catalogue. */
  id: string;
  /** Technology names — proper nouns, deliberately not translated. */
  items: string[];
}

/**
 * Kept strictly to what is evidenced by the CV, the certifications and the
 * projects below. Nothing is listed here that is not backed by one of those.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    items: ["Python", "JavaScript", "PHP", "Java", "C", "C++", "SQL", "HTML", "CSS"],
  },
  {
    id: "ml",
    items: [
      "TensorFlow",
      "Deep learning",
      "Machine learning with Python",
      "Spark MLlib",
    ],
  },
  {
    id: "data",
    items: ["Hadoop", "Hive", "Apache Spark", "Beeline", "Cloud storage clusters"],
  },
  {
    id: "web",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Django",
      "Laravel",
      "Flask",
      "Streamlit",
      "Bootstrap",
      "jQuery",
    ],
  },
  {
    id: "cloud",
    items: ["AWS", "Git", "Vercel"],
  },
  {
    id: "research",
    items: [
      "Electromagnetic compatibility",
      "Equivalent-circuit method",
      "Modified nodal analysis",
      "Enclosure shielding analysis",
      "Antenna current prediction",
    ],
  },
];
