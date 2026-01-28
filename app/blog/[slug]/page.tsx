import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "../posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="space-y-6">
      <div className="space-y-2">
        <Link href="/blog" className="underline text-sm">
          back
        </Link>
        <h1 className="text-2xl">{post.title}</h1>
        <div className="text-sm opacity-60">{post.date}</div>
      </div>

      <div className="space-y-4 text-sm leading-relaxed">
        {post.content.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </article>
  );
}

