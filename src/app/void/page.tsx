
// import Link from "next/link";
import Header from "@/components/header"
// import Footer from "@/components/footer";


export default function page() {
    return (
        <div className="flex flex-col items-center w-full min-w-50">

            <div className="xl:w-300 lg:w-250 md:w-3xl w-full min-h-screen px-4 flex gap-4 flex-col justify-between py-2">
                <Header />
                
                <div className="grow"></div>

                {/* <Footer /> */}
            </div>

        </div>
    );
}
