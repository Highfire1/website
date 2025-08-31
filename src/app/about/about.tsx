import Image from 'next/image';

// Static, server-rendered version of the first "About" entry for SEO.
export default function Interact() {
    return (
        <article className="flex flex-col">
            
            <header>
                <h1 className="text-2xl font-bold pb-2">Who is Anderson Tseng?</h1>
            </header>

            <div className="flex flex-col md:flex-row gap-6 items-start">
                
                <figure className="w-full md:w-1/3">
                    <div className="relative h-80 w-full rounded overflow-hidden border border-gray-200">
                        <Image
                            src="/about/anderson_2.jpg"
                            alt="Portrait of Anderson Tseng"
                            fill={true}
                            className="object-cover"
                            priority
                        />
                    </div>
                    <figcaption className="mt-2 text-sm text-gray-600">Anderson Tseng @ Tech Crew</figcaption>
                </figure>

                <div className="md:w-2/3 flex flex-col gap-4">
                    <p>
                        I am a data science student at Simon Fraser University. I&apos;m passionate about making the world a better place by using the power of technology.
                    </p>

                    <p>
                        I&apos;m interested in event management and have been involved in the organization of several hackathons as well as a local anime festival.
                    </p>

                    <p>
                        I also built the Langara Course Planner, a tool that many students have used to plan their courses at Langara College.
                    </p>

                    <p>
                        Outside of those things, I enjoy photography, reading manga, and exploring the Lower Mainland.
                    </p>
                </div>
            </div>

            {/* spacer */}
            <div className='min-h-[180px]'>

            </div>
        </article>
    );
}