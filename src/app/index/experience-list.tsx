import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


export interface ExperienceSummaryProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    dateWorked?: string;
    className?: string;
    url: string;
}

export function ExperienceList() {
    const projects: ExperienceSummaryProps[] = [
        {
            imageUrl: '/projects/lcsc.png',
            imageAlt: '',
            title: 'Langara Computer Science Club',
            description: "Revived and presided over the LCSC, hosting 50+ events and two in-person hackathons.",
            dateWorked: 'Fall 2022 - Fall 2024',
            url: 'https://www.instagram.com/langaracpsc',
        },
        {
            imageUrl: '/projects/vshacks.png',
            imageAlt: 'vsHacks Website Screenshot',
            title: 'vsHacks',
            description: "Lead organizer of Vancouver Students Hackathon, a virtual hackathon for high school students across Greater Vancouver.",
            dateWorked: 'Spring 2022',
            url: 'https://vshacks.github.io/',
        },
    ];

    return (
        <div className='grid grid-cols-1 min-[450px]:grid-cols-2  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
            {projects.map((project) => (
                <Link
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full h-full border-2 dark:border-white border-black rounded"
            >
                <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fill
                    className="object-cover rounded"
                />
                <div className="w-full h-full relative z-10 p-2 hover:opacity-0  dark:bg-black bg-white opacity-80  transition-opacity duration-500">
                    <h2 className="text-lg font-bold">{project.title}</h2>
                    <p className="text-sm pb-2">{project.dateWorked}</p>
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                </div>
            </Link>
            ))}
        </div>
    );
}
