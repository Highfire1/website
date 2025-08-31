"use client"

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SiGithub, SiLinkedin, SiInstagram, SiDevpost, SiBluesky, SiLastdotfm, SiTumblr, SiChessdotcom, SiX, SiArchiveofourown, SiReddit, SiYoutube, SiTwitch, SiSpotify } from 'react-icons/si';

type Social = { id: string; name: string; href?: string; logo?: string; hidden?: boolean };


const SOCIALS: Social[] = [
    { id: "linkedin", name: "LinkedIn", href: "https://www.linkedin.com/in/andersontseng/" },
    { id: "instagram", name: "Instagram", href: "https://www.instagram.com/anderson_wootdidoo/" },
    { id: "github", name: "GitHub", href: "https://github.com/highfire1" },
    { id: "devpost", name: "Devpost", href: "https://devpost.com/Highfire1" },
    { id: "reddit", name: "Reddit", href: "https://www.reddit.com/user/Highfire1/" },


    // hidden / discoverable
    { id: "bluesky", name: "Bluesky", href: "https://bsky.app/profile/highfire1.bsky.social", hidden: true },
    { id: "lastfm", name: "Last.fm", href: "https://www.last.fm/user/highfire1", hidden: true },
    { id: "tumblr", name: "No. XD", hidden: true },
    { id: "chesscom", name: "Chess.com", hidden: true, href: "https://www.chess.com/member/highfire1"},
    { id: "archiveofourown", name: "I know what you are.", hidden: true},
    { id: "x", name: "Twitter", href: "https://x.com/highfire13", hidden: true },
    { id: "youtube", name: "YouTube", hidden: true },
    { id: "twitch", name: "Twitch", hidden: true },
    { id: "spotify", name: "Spotify", hidden: true }
];

// Map each social id to a react-icons component
const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    github: SiGithub,
    linkedin: SiLinkedin,
    instagram: SiInstagram,
    devpost: SiDevpost,
    bluesky: SiBluesky,
    lastfm: SiLastdotfm,
    tumblr: SiTumblr,
    chesscom: SiChessdotcom,
    x: SiX,
    archiveofourown: SiArchiveofourown,
    reddit: SiReddit,
    youtube: SiYoutube,
    twitch: SiTwitch,
    spotify: SiSpotify,
};

export default function Page() {
    const [query, setQuery] = useState("");

    const visible = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return SOCIALS.filter((s) => !s.hidden);
        return SOCIALS.filter((s) => {
            const id = s.id.toLowerCase();
            // const name = s.name.toLowerCase();

            // match id prefix
            if (id.startsWith(q)) return true;

            // match if any word in the name starts with the query
            // const words = name.split(/\s+/);
            // if (words.some((w) => w.startsWith(q))) return true;

            return false;
        });
    }, [query]);

    return (
        <div className="flex flex-col items-center w-full min-w-[200px]">
            <div className="xl:w-[1200px] lg:w-[1000px] md:w-[768px] w-full px-4 flex gap-4 flex-col py-2">
                <Header />

                <div className="relative h-52 w-full">
                    <Image src="/clouds/purple.webp" fill={true} className="object-cover rounded-sm" alt="picture of sunset" priority />
                </div>

                <section className="py-6">
                    <h2 className="text-xl font-semibold mb-3">Socials</h2>

                    <div className="max-w-md mb-4">
                        <input
                            aria-label="Search socials"
                            placeholder="Find something (e.g. Bluesky)"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                        />
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        {visible.map((s) => (
                            <div key={s.id} className="flex items-center gap-2 p-2">
                                {/* icon (react-icons) */}
                                <div className="w-9 h-9 flex items-center justify-center text-gray-700 dark:text-gray-200">
                                    {ICONS[s.id] ? (
                                        (() => {
                                            const IconComp = ICONS[s.id];
                                            return <IconComp size={20} className="text-gray-700 dark:text-gray-200" />;
                                        })()
                                    ) : (
                                        <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded" />
                                    )}
                                </div>

                                {/* if href exists, render a link; otherwise render name only*/}
                                {s.href ? (
                                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                                        {s.name}
                                    </a>
                                ) : (
                                    <span className="text-sm text-gray-700 dark:text-gray-300">{s.name}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
