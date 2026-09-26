"use client";

import Image, { type ImageProps } from "next/image";
import { Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState, ViewTransition } from "react";

type PageHeroProps = {
    src: ImageProps["src"];
    alt: string;
};

type Rect = {
    top: number;
    left: number;
    width: number;
    height: number;
};

const ANIMATION_MS = 650;

function getExpandedRect(width: number, height: number): Rect {
    const aspectRatio = width / height;
    const maxWidth = window.innerWidth * 0.92;
    const maxHeight = window.innerHeight * 0.86;
    const expandedWidth = Math.min(maxWidth, maxHeight * aspectRatio);
    const expandedHeight = expandedWidth / aspectRatio;

    return {
        top: (window.innerHeight - expandedHeight) / 2,
        left: (window.innerWidth - expandedWidth) / 2,
        width: expandedWidth,
        height: expandedHeight,
    };
}

export default function PageHero({ src, alt }: PageHeroProps) {
    const heroRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<HTMLDivElement>(null);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [heroDimensions, setHeroDimensions] = useState({ width: 16, height: 9 });
    const [initialRect, setInitialRect] = useState<Rect | null>(null);

    const openViewer = () => {
        const rect = heroRef.current?.getBoundingClientRect();
        if (!rect) return;

        setInitialRect({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        });
        setIsClosing(false);
        setIsViewerOpen(true);
    };

    const closeViewer = useCallback(() => {
        if (!initialRect || !frameRef.current) return;

        setIsClosing(true);
        frameRef.current.style.top = `${initialRect.top}px`;
        frameRef.current.style.left = `${initialRect.left}px`;
        frameRef.current.style.width = `${initialRect.width}px`;
        frameRef.current.style.height = `${initialRect.height}px`;
    }, [initialRect]);

    const reverseClose = () => {
        if (!isClosing || !frameRef.current) return;

        const rect = frameRef.current.getBoundingClientRect();
        setInitialRect({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        });
        setIsClosing(false);
    };

    useEffect(() => {
        if (!isViewerOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeViewer();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [closeViewer, isViewerOpen]);

    useEffect(() => {
        if (!isViewerOpen || !initialRect || !frameRef.current || isClosing) return;

        const expandedRect = getExpandedRect(heroDimensions.width, heroDimensions.height);
        const frame = frameRef.current;

        frame.style.top = `${initialRect.top}px`;
        frame.style.left = `${initialRect.left}px`;
        frame.style.width = `${initialRect.width}px`;
        frame.style.height = `${initialRect.height}px`;
        frame.getBoundingClientRect();

        requestAnimationFrame(() => {
            frame.style.top = `${expandedRect.top}px`;
            frame.style.left = `${expandedRect.left}px`;
            frame.style.width = `${expandedRect.width}px`;
            frame.style.height = `${expandedRect.height}px`;
        });
    }, [isViewerOpen, initialRect, heroDimensions, isClosing]);

    return (
        <>
            <div
                className={`fixed inset-0 z-40 bg-black/75 transition-opacity duration-500 ${isViewerOpen && !isClosing ? "opacity-100" : "pointer-events-none opacity-0"}`}
                aria-hidden={!isViewerOpen}
                onClick={closeViewer}
            />

            {isViewerOpen && !isClosing && (
                <button
                    type="button"
                    onClick={closeViewer}
                    className="fixed right-4 top-4 z-[60] rounded-lg bg-black/60 p-3 text-white transition-[background-color,box-shadow] hover:bg-black/85 hover:ring-2 hover:ring-white/70 focus-visible:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="Close full-size image"
                >
                    <X size={24} aria-hidden="true" />
                </button>
            )}

            {isViewerOpen && initialRect && (
                <div
                    ref={frameRef}
                    className="fixed z-50 overflow-hidden rounded-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Full-size image"
                    style={{
                        top: initialRect.top,
                        left: initialRect.left,
                        width: initialRect.width,
                        height: initialRect.height,
                        transition: `top ${ANIMATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1), left ${ANIMATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1), width ${ANIMATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1), height ${ANIMATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
                    }}
                    onClick={(event) => {
                        event.stopPropagation();
                        reverseClose();
                    }}
                    onTransitionEnd={(event) => {
                        if (isClosing && event.target === event.currentTarget && event.propertyName === "width") {
                            setIsViewerOpen(false);
                            setIsClosing(false);
                        }
                    }}
                >
                    <Image
                        src={src}
                        fill
                        className="object-cover"
                        alt={alt}
                        sizes="92vw"
                    />
                </div>
            )}

            <ViewTransition name="page-hero" share="morph" default="none">
                <div
                    ref={heroRef}
                    className={`group relative h-52 w-full cursor-zoom-in overflow-hidden rounded-sm ${isViewerOpen ? "opacity-0" : "opacity-100"}`}
                    role="button"
                    tabIndex={0}
                    aria-label="Open full-size image"
                    onClick={openViewer}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            openViewer();
                        }
                    }}
                >
                    <Image
                        src={src}
                        fill
                        className="object-cover transition-[filter] duration-500 group-hover:brightness-100 group-focus-visible:brightness-100"
                        alt={alt}
                        sizes="92vw"
                        preload
                        onLoad={(event) => {
                            setHeroDimensions({
                                width: event.currentTarget.naturalWidth,
                                height: event.currentTarget.naturalHeight,
                            });
                        }}
                    />
                    <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-black/65 px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
                        <Maximize2 size={16} aria-hidden="true" />
                        {/* <span>View full image</span> */}
                    </span>
                </div>
            </ViewTransition>
        </>
    );
}
