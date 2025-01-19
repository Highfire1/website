// import Image from "next/image";

// import Link from "next/link";
import { ProjectList } from "@/components/project-list";
import Header from "../components/header"
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-w-[200px]">

      <div className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] w-full px-4 flex gap-5 flex-col py-4">
        <Header />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="h-[200px] w-full object-cover" src="/sunrise.jpg" alt="picture of sunrise" />



        <div className="flex gap-8 w-full">

          <div className="flex-1 flex gap-4 flex-col w-full">

            <div className="border-2 border-gray-800 rounded p-2">
              <h1 className="font-bold">Welcome to my website!</h1>
              <p>This page contains some of the projects that I have worked on, as well as links to other places that I am on the internet.</p>
            </div>

            <div className="border-2 border-gray-800 rounded p-2">
              <h3 className="pb-2 font-bold">Projects:</h3>
              <ProjectList />
            </div>
          </div>


          <div className="w-[200px] hidden sm:flex flex-col gap-4">

            <div className="border-2 border-gray-800 rounded p-2">
              <h3 className="font-bold">Links</h3>
              <ul className="list-disc pl-5">
                <li><a className="hover:underline" href="https://www.linkedin.com/in/andersontseng/">LinkedIn</a></li>
                <li><a className="hover:underline" href="https://www.instagram.com/anderson_wootdidoo/">Instagram</a></li>
                <li><a className="hover:underline" href="https://github.com/highfire1">Github</a></li>
                <li><a className="hover:underline" href="https://devpost.com/Highfire1">Devpost</a></li>
              </ul>
            </div>

            <div className="border-2 border-gray-800 rounded p-2">
              <h3 className="font-bold">Quick Facts:</h3>
                <p>📍: Vancouver, Canada</p>
                <p>🏫: SFU</p>
            </div>

            <div className="border-2 border-gray-800 rounded p-2">
              <h3 className="font-bold">Interests:</h3>
              <ul className="list-disc pl-5">
                <li>D&D</li>
                <li>Vocaloid</li>
                <li>Clouds</li>
                <li>Gacha Games</li>
              </ul>
            </div>


          </div>



        </div>




        <Footer />
      </div>




    </div>
  );
}
