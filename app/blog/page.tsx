import Link from "next/link";
import { BLOG_POSTS } from "./posts";

export default function BlogIndexPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl mb-2">Blog</h1>
        <p className="text-sm opacity-60">
          Thoughts worth archiving.
        </p>
        <p className="text-sm mt-3">
          <Link href="/" className="underline">
            home
          </Link>
        </p>
      </div>

      <div className="space-y-6">
        {BLOG_POSTS.map((p) => (
          <div key={p.slug} className="space-y-1">
            <Link href={`/blog/${p.slug}`} className="underline">
              {p.title}
            </Link>
            <div className="text-sm opacity-60">{p.date}</div>
            {p.summary ? <div className="text-sm">{p.summary}</div> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

