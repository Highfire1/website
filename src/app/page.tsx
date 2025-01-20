// import Image from "next/image";

// import Link from "next/link";
import { ProjectList } from "@/components/project-list";
import Header from "../components/header"
import Footer from "@/components/footer";

import HeroImage from '@/../public/sunrise.jpg'
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-w-[200px]">

      <div className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] w-full px-4 flex gap-4 flex-col py-2">
        <Header />

        <Image src={HeroImage} className="h-[200px] w-full object-cover" alt="picture of sunrise" priority />


        <div className="flex gap-4 w-full">

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
              <h3 className="font-bold">Links:</h3>
              <ul className="list-disc pl-5">
                <li><a className="hover:underline" href="https://www.linkedin.com/in/andersontseng/">LinkedIn</a></li>
                <li><a className="hover:underline" href="https://www.instagram.com/anderson_wootdidoo/">Instagram</a></li>
                <li><a className="hover:underline" href="https://github.com/highfire1">Github</a></li>
                <li><a className="hover:underline" href="https://devpost.com/Highfire1">Devpost</a></li>
              </ul>
            </div>

            <div className="border-2 border-gray-800 rounded p-2">
              <h3 className="font-bold">Quick Facts:</h3>
                <p>📍Vancouver, Canada</p>
                <p>🏫Studying Data Science @ Simon Fraser Univ.</p>
                <p>🖥️Windows 11 {"<"}3</p>
            </div>

            <div className="border-2 border-gray-800 rounded p-2">
              <h3 className="font-bold">Interests:</h3>
              <ul className="list-disc pl-5">
                <li>D&D</li>
                <li>Vocaloid</li>
                <li>Clouds</li>
                <li>(some) gacha games</li>
              </ul>
            </div>

            <div className="border-2 border-gray-800 rounded p-2">
              <h3 className="font-bold">Stack:</h3>
              <ul className="list-disc pl-5">
                <li>Preferred: Python, Next.js, Tailwind</li>
                <li>Proficient: Java, C++, Bash, PHP, SQL, QGIS</li>
                <li>Want to learn: Rust</li>
              </ul>
            </div>


          </div>



        </div>




        <Footer />
      </div>




    </div>
  );
}
