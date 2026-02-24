"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    index: number;
    image?: string;
}

// Monochrome abstract SVG placeholders per project
const PROJECT_BG_CLASSES = [
    "bg-[#111111]",
    "bg-[#0d0d0d]",
    "bg-[#080808]",
    "bg-[#0f0f0f]",
];

export default function ProjectCard({
    title,
    description,
    tags,
    link,
    index,
    image,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            whileHover={{
                y: -8,
                transition: { duration: 0.3 }
            }}
            className="flex flex-col border border-[#1a1a1a] group hover:border-[#333333] transition-all duration-300 relative overflow-hidden h-full"
        >
            {/* Project Image / Graphic Area */}
            <div className="relative h-48 overflow-hidden bg-black">
                {image ? (
                    <div className="relative w-full h-full">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                        />
                        {/* High-tech color overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:from-orange-500/10 transition-colors duration-300" />
                    </div>
                ) : (
                    <div className={`w-full h-full ${PROJECT_BG_CLASSES[index % PROJECT_BG_CLASSES.length]}`}>
                        <svg
                            className="absolute inset-0 w-full h-full opacity-20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <pattern
                                    id={`grid-${index}`}
                                    width="20"
                                    height="20"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path
                                        d="M 20 0 L 0 0 0 20"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="0.5"
                                    />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                        </svg>
                    </div>
                )}

                {/* Scan line effect on image */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity">
                    <div className="w-full h-2 bg-white absolute -top-2 animate-scan" style={{ animation: 'scan 2s linear infinite' }} />
                </div>

                {/* Corner label */}
                <div className="absolute bottom-3 left-3 z-10">
                    <div className="flex gap-2">
                        {tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 border border-[#444444] text-[9px] font-mono uppercase tracking-wider text-[#cccccc] bg-black/80 backdrop-blur-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4 flex-1 bg-[#050505]">
                <h3 className="font-display text-2xl text-white leading-tight group-hover:text-orange-500 transition-colors">
                    {title.toUpperCase()}
                </h3>
                <p className="text-[#666666] text-xs leading-relaxed font-mono flex-1">
                    {description}
                </p>

                {/* Link */}
                <div className="pt-4 border-t border-[#1a1a1a]">
                    {link ? (
                        <Link
                            href={`https://${link}`}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#888888] hover:text-white transition-colors duration-200"
                        >
                            View Code <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : (
                        <Link
                            href="https://github.com/Anshu-Bhatt"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#444444] hover:text-white transition-colors duration-200"
                        >
                            GitHub Profile <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
