import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { posts } from "@/app/blog/posts";
import Link from "next/link";

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.url,
    }));
}


export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    const post = posts.find((p) => p.url === slug);
    
    if (!post) {
        return <div className="p-10">
            Post not found. Go back to <Link href="/blog">all blog posts</Link>?
            </div>;

    }

    return (
        <div className="flex flex-col items-center w-full min-w-50">
            <div className="xl:w-300 lg:w-250 md:w-3xl w-full px-4 flex gap-5 flex-col py-4">
                <Header />

                <PageHero src="/clouds/sunset.webp" alt="picture of sunset" />

                <div className="w-full">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-700">← Back to all posts</Link>

                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <p className="p-0 m-0">Published on {new Date(post.published).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}.
                    </p>
                    <div
                        className="mt-4 postcontainer"
                        dangerouslySetInnerHTML={{ __html: post.post }}
                    />
                </div>

                <Footer />
            </div>
        </div>
    );
}