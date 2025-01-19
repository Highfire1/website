// import Image from "next/image";

// import Link from "next/link";
import Header from "@/components/header"
import Footer from "@/components/footer";

import { posts } from "@/app/blog/posts"

export default function page() {
    return (
        <div className="flex flex-col items-center w-full min-w-[200px]">

            <div className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] w-full px-4 flex gap-5 flex-col py-4">
                <Header />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="h-[200px] w-full object-cover" src="/sunrise.jpg" alt="picture of sunrise" />



                <div className="flex gap-8 w-full">


                    <div className="w-full border-2 border-gray-800 rounded p-2">
                        <p>You have reached my blog.</p>
                        <p>I hope to post more here in the future.</p>
                        <div className="">
                            {posts.map((post, index) => (
                                <div key={index} className="mt-4 p-4 border rounded">
                                    <a href={`/blog/${post.url}`}>
                                        <h2 className="text-xl font-bold">{post.title}</h2>
                                        <p className="text-sm">{new Date(post.published).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}</p>
                                        <p className="text-sm">{post.teaser}</p>
                                    </a>
                                    {/* <p dangerouslySetInnerHTML={{ __html: post.post }} /> */}
                                </div>
                            ))}
                        </div>
                    </div>






                </div>




                <Footer />
            </div>




        </div>
    );
}
