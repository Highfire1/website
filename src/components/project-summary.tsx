import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export interface ProjectSummaryProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    dateWorked?: string;
    className?: string;
    url: string;
    stack?: string[];
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({
    imageUrl,
    imageAlt,
    title,
    description,
    dateWorked,
    className,
    url,
    stack,
}) => {
    return (
        <div className={className}>
            <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full h-full"
            >
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className="object-cover rounded"
                />
                <div className="absolute inset-0 dark:bg-black bg-white opacity-80"></div>
                <div className="relative z-10 p-2">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className="text-sm">{dateWorked}</p>
                    <p className="text-sm pt-2" dangerouslySetInnerHTML={{ __html: description }}></p>
                    {stack && <p className="text-sm pt-2">Stack: {stack.join(", ")}</p>}
                </div>
            </Link>
        </div>
    );
}

export default ProjectSummary;