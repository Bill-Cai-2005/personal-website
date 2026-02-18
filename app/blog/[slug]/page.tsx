import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { BLOG_POSTS } from "../posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return notFound();

  // Join content array into markdown string
  const markdownContent = post.content.join("\n\n");

  return (
    <article className="space-y-6">
      <div className="space-y-2">
        <Link href="/blog" className="underline text-sm">
          back
        </Link>
        <h1 className="text-2xl">{post.title}</h1>
        <div className="text-sm opacity-60">{post.date}</div>
      </div>

      <div className="space-y-4 text-sm leading-relaxed prose prose-sm max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-2xl font-bold mb-2 mt-6" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-xl font-bold mb-2 mt-6" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-lg font-bold mb-2 mt-4" {...props} />
            ),
            p: ({ node, ...props }) => <p className="mb-4" {...props} />,
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside mb-4 space-y-1" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal list-inside mb-4 space-y-1" {...props} />
            ),
            li: ({ node, ...props }) => <li className="ml-4" {...props} />,
            strong: ({ node, ...props }) => (
              <strong className="font-bold" {...props} />
            ),
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </article>
  );
}
