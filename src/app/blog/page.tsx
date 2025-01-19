import Image from "next/image";

// import Link from "next/link";
import Header from "@/components/header"
import Footer from "@/components/footer";

import HeroImage from '@/../public/sunset.jpg'

import { posts } from "@/app/blog/posts"

export default function page() {
    return (
        <div className="flex flex-col items-center w-full min-w-[200px]">

            <div className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] w-full px-4 flex gap-5 flex-col py-4">
                <Header />

                <Image src={HeroImage} className="h-[200px] w-full object-cover" alt="picture of sunset" />



                <div className="flex flex-col gap-4 w-full">


                    <div className="w-full border-2 border-gray-800 rounded p-2">
                        <div className="p-2">
                            <p>You have reached my blog.</p>
                            <p>I hope to post here more in the future.</p>
                        </div>
                    </div>

                    <div className="w-full border-2 border-gray-800 rounded p-4 flex flex-col gap-4" >
                        <h1>Writings:</h1>
                        {posts.map((post, index) => (
                            <div key={index} className="p-2 border rounded">
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




                <Footer />
            </div>




        </div>
    );
}
