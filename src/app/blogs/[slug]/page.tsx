import { getPostData, getSortedPostsData } from "@/utils/blogs";
import { notFound } from "next/navigation";
import Header from "@/components/Header";

// Pre-generate slugs
export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = params;
    let post;
    try {
        post = await getPostData(slug);
    } catch (e) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />
            <main className="max-w-5xl mx-auto py-12 px-6 sm:px-12">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-8">{post.date}</p>
                <div className="markdown">
                    <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                </div>
            </main>
        </div>
    );
}

