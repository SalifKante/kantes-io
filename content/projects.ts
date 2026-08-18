/** Every screenshot in the archive is a 1366×768 capture. */
export const PROJECT_IMAGE = { width: 1366, height: 768 } as const;

export interface ProjectItem {
  /** Key under `projects.items` in the message catalogue. */
  id: string;
  src: string;
  /** Ordinal appended to the title when a project has several captures. */
  n?: number;
}

export interface ProjectGroup {
  /** Key under `projects.groups` in the message catalogue. */
  id: string;
  /** Technology line — a proper noun list, deliberately not translated. */
  stack: string;
  items: ProjectItem[];
}

export const projectGroups: ProjectGroup[] = [
  {
    id: "web",
    stack: "HTML · CSS · Bootstrap · JavaScript · jQuery · React",
    items: [
      { id: "corso", src: "/images/js/corso_wesite.png" },
      { id: "ebook", src: "/images/js/ebook_website.png" },
      { id: "vera", src: "/images/js/vera_website.png" },
      { id: "yavin", src: "/images/js/yavin_website.png" },
      { id: "quiz", src: "/images/js/quizapp_1.png" },
      { id: "quizThemed", src: "/images/js/quizapp_2.png" },
      { id: "calculator", src: "/images/js/calculator.png" },
      { id: "colorFlipper", src: "/images/js/color_flipper.png" },
      { id: "countdown", src: "/images/js/countdown.png" },
      { id: "counter", src: "/images/js/counter.png" },
      { id: "guessNumber", src: "/images/js/guess_number.png" },
      { id: "pigGame", src: "/images/js/piggame.png" },
      { id: "modal", src: "/images/js/modal_1.png", n: 1 },
      { id: "modal", src: "/images/js/modal_2.png", n: 2 },
    ],
  },
  {
    id: "python",
    stack: "Python · Django",
    items: [
      { id: "blog", src: "/images/python/blog_1.png", n: 1 },
      { id: "blog", src: "/images/python/blog_2.png", n: 2 },
      { id: "blog", src: "/images/python/blog_3.png", n: 3 },
      { id: "blog", src: "/images/python/blog_4.png", n: 4 },
      { id: "blog", src: "/images/python/blog_5.png", n: 5 },
    ],
  },
  {
    id: "node",
    stack: "MongoDB · Express · React · Node.js",
    items: [
      { id: "store", src: "/images/nodejs/salifcom_1.png", n: 1 },
      { id: "store", src: "/images/nodejs/salifcom_2.png", n: 2 },
    ],
  },
  {
    id: "php",
    stack: "PHP · Laravel",
    items: [
      { id: "jobBoard", src: "/images/php/job_1.png", n: 1 },
      { id: "jobBoard", src: "/images/php/job_2.png", n: 2 },
    ],
  },
  {
    id: "ai",
    stack: "Python · Machine learning · Flask · Streamlit",
    items: [
      { id: "sentiment", src: "/images/ai/sent_1.png", n: 1 },
      { id: "sentiment", src: "/images/ai/sent_2.png", n: 2 },
    ],
  },
];
