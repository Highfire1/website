import Image from "next/image";

// import Link from "next/link";
import Header from "@/components/header"
import Footer from "@/components/footer";

// import Photos from "./photos";
import Interact from "./about";


export default function page() {
    return (
        <div className="flex flex-col items-center w-full min-w-[200px]">

            <div className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] w-full px-4 flex gap-4 flex-col py-2">
                <Header />

                <div className="relative h-52 w-full">
                    <Image
                        src="/clouds/purple.webp" fill={true}
                        className="object-cover rounded-sm" alt="picture of sunset" priority
                    />
                </div>


                <Interact />


                <Footer />
            </div>




        </div>
    );
}
