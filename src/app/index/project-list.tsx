import ProjectSummary, { type ProjectSummaryProps } from '@/app/index/project-summary'

export function ProjectList() {
    const projects: ProjectSummaryProps[] = [
        {
            imageUrl: '/projects/planner.png',
            imageAlt: 'Langara College Planner Screenshot',
            title: 'Langara College Course Planner',
            description: 'A web app that helps students plan their courses at Langara College.',
            // dateWorked: '2022 - 2025',
            url: 'https://langaracourses.ca',
            stack: ['Python', 'FastAPI', 'Next.js', 'Tailwind'],
        },
        {
            imageUrl: '/projects/insight4.jpg',
            imageAlt: '',
            title: 'Insight4',
            description: "A wearable hat capable of sensing obstacles around the person wearing it (submitted to Hack the North 2022)",
            url: 'https://devpost.com/software/insight4',
            stack: ['Arduino']
        },
        {
            imageUrl: '/projects/joreborn.png',
            imageAlt: '',
            title: 'John Oliver Secondary Rebuilt',
            description: "A vision of what a Vancouver high school could look like in 2030",
            url: 'https://docs.google.com/presentation/d/1fJHVHmz8y-ZnxIGpJp4rnQSlpwh1IuEoknndpDag3so',
            stack: ['Minecraft']
        },
        {
            imageUrl: '/projects/diceplugin.png',
            imageAlt: 'picture of ',
            title: 'diceplugin',
            description: "A minecraft plugin that lets you roll dice ingame.",
            url: 'https://github.com/Highfire1/diceplugin',
            stack: ['Java', 'Minecraft', 'Paper']
        },
    ];

    return (
        <div className='grid grid-cols-1 min-[450px]:grid-cols-2  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
            {projects.map((project) => (
            <ProjectSummary
            key={project.title}
            {...project}
            className='border-2 dark:border-white border-black rounded'
            />
            ))}
        </div>
    );
}
