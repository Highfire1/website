import Image from "next/image";

// import Link from "next/link";
import Header from "@/components/header"
import Footer from "@/components/footer";

import HeroImage from '@/../public/purple.jpg'


export default function page() {
    return (
        <div className="flex flex-col items-center w-full min-w-[200px]">

            <div className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] w-full px-4 flex gap-4 flex-col py-2">
                <Header />

                <Image src={HeroImage} className="h-[200px] w-full object-cover" alt="picture of sunset" priority />



                <div className="flex flex-row gap-4 w-full">

                    <div className="h-[300px] min-w-[200px] border-2 border-slate-600 rounded z-10">
                        <Image src={"/about/anderson_1.jpeg"} height='300' width='200' className="h-[297px] w-[200px] object-cover rounded-sm z-0" alt="picture of anderson tseng" priority />
                    </div>

                    <div className="w-full border-2 border-gray-800 rounded p-2">
                        <div className="">
                            <p className="font-bold">Who is Anderson Tseng?</p>

                            <p>🚧under construction 🚧</p>
                            <p>.....come back later.</p>
                        </div>
                    </div>

                </div>

                <div className="h-[200px] w-full border-2 border-gray-800 rounded">

                </div>






                <Footer />
            </div>




        </div>
    );
}
