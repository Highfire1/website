import Header from "@/components/header";
import Footer from "@/components/footer";
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
        <div className="flex flex-col items-center w-full min-w-[200px]">
            <div className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] w-full px-4 flex gap-5 flex-col py-4">
                <Header />

                <div className="w-full">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <p className="p-0 m-0">Published on {new Date(post.published).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                    </p>
                    <div
                        className="mt-4"
                        dangerouslySetInnerHTML={{ __html: post.post }}
                    />
                </div>

                <Footer />
            </div>
        </div>
    );
}