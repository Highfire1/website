// import Link from "next/link";
import Header from "@/components/header"
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

import Photos from "./photos";


export default function page() {
    return (
        <div className="flex flex-col items-center w-full min-w-[200px]">

            <div className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] w-full px-4 flex gap-4 flex-col py-2">
                <Header />

                <PageHero src="/clouds/purple.webp" alt="picture of sunset" />


                <Photos />


                <Footer />
            </div>
        </div>
    );
}
