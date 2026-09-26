// import Link from "next/link";
import Header from "@/components/header"
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

// import Photos from "./photos";
import Interact from "./about";
import purpleClouds from "./IMG_2854.jpeg";


export default function page() {
    return (
        <div className="flex flex-col items-center w-full min-w-50">

            <div className="xl:w-300 lg:w-250 md:w-3xl w-full px-4 flex gap-4 flex-col py-2">
                <Header />

                <PageHero src={purpleClouds} alt="picture of sunset" />


                <Interact />


                <Footer />
            </div>




        </div>
    );
}
