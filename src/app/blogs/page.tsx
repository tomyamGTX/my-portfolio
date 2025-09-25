import Header from "@/components/Header";
import Link from "next/link";
import { getSortedPostsData } from "@/utils/blogs"; // adjust path if needed

// ✅ Make it async so we can load posts
export default async function Blogs() {
  const posts = getSortedPostsData(); // reads /blogs/*.md

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
      <Header /> {/* Same header at top */}
      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          My Blogs
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Here are some articles I’ve written about Flutter, Next.js, and web
          development.
        </p>

        <div className="grid gap-6">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={`/blogs/${post.slug}`} // dynamic route
              className="block p-6 rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {post.description}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {post.date}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
