export type BlogPost = {
  slug: string;
  title: string;
  date: string; // keep as display string to stay simple
  summary?: string;
  content: string[]; // paragraphs
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "hello",
    title: "Hello",
    date: "2026-01-28",
    summary: "First post.",
    content: [
      "This is my blog. Posts are hard-coded into the repo — no database, no backend.",
      "I’ll use this space for short notes on building at the intersection of tech and finance.",
    ],
  },
  {
    slug: "notes-on-building",
    title: "Notes on building",
    date: "2026-01-28",
    summary: "A few principles I keep coming back to.",
    content: [
      "Move fast, but keep the surface area small.",
      "Prefer simple interfaces and explicit tradeoffs.",
      "Write things down when they’re fresh.",
    ],
  },
];

