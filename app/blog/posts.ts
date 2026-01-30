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
    summary: "Placeholder.",
    content: [
      "Placeholder.",
    ],
  },
];

