// import Image from "next/image";

// import Link from "next/link";
import { ProjectList } from "@/app/index/project-list";
import Header from "../components/header"
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { ExperienceList } from "./index/experience-list";

export default function Home() {
  return (
    <>
      {/* yes 200px is somewhat arbitrary idc */}
      <div className="flex flex-col items-center w-full min-w-50">

        <div className="xl:w-300 lg:w-250 md:w-3xl w-full px-4 flex gap-4 flex-col py-2">
          <Header />

          <PageHero src="/clouds/dark/IMG_3804.jpeg" alt="picture of sunrise" />

          <div className="flex gap-4 w-full">

            <div className="flex-1 flex gap-4 flex-col w-full">

              <div className="">
                <h1 className="text-xl font-bold">Welcome to my website!</h1>
                <p>This page contains some of the projects that I have worked on, as well as links to other places that I am on the internet.</p>
              </div>

              <div className="">
                <h3 className="pb-2 font-bold text-xl">Experience:</h3>
                <ExperienceList />
              </div>

              <div className="">
                <h3 className="pb-2 font-bold text-xl">Projects:</h3>
                <ProjectList />
              </div>
            </div>


            <div className="w-50 hidden sm:flex flex-col gap-4">

              <div className=" px-2 py-1">
                <h3 className="font-bold">Links:</h3>
                <ul className="list-disc pl-5">
                  <li><a className="hover:underline" href="https://www.linkedin.com/in/andersontseng/">Linkedin</a></li>
                  <li><a className="hover:underline" href="https://www.instagram.com/anderson_wootdidoo/">Instagram</a></li>
                  <li><a className="hover:underline" href="https://github.com/highfire1">Github</a></li>
                  <li><a className="hover:underline" href="https://devpost.com/Highfire1">Devpost</a></li>
                </ul>
              </div>

              <div className=" px-2 py-1">
                <h3 className="font-bold">Quick Facts:</h3>
                <p>📍 Vancouver, Canada</p>
                <p>🖥️ Windows 11</p>
              </div>

              <div className=" px-2 py-1">
                <h3 className="font-bold">Interests:</h3>
                <ul className="list-disc pl-5">
                  <li>D&D</li>
                  <li>Vocaloid</li>
                  <li>Clouds</li>
                  <li>(some) gacha games</li>
                </ul>
              </div>

              <div className=" px-2 py-1">
                <h3 className="font-bold">Tools:</h3>
                <ul className="list-disc pl-5">
                  <li>Preferred: Python, Next.js, Tailwind</li>
                  <li>Proficient: Java, C++, Bash, PHP, SQL, QGIS</li>
                  <li>Want to learn: Rust</li>
                </ul>
              </div>

              {/* <div className="">
              <iframe className="w-[180px] h-[180px] border-none" src="https://dimden.neocities.org/navlink/" name="neolink"></iframe>
            </div> */}


            </div>



          </div>




          <Footer />
        </div>




      </div>
    </>
  );
}
