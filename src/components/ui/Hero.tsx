"use client";
import { motion, Variants } from "framer-motion";
import { resume } from "@/data/resume";
import Link from "next/link";

import Typewriter from "./Typewriter";
import GlitchText from "./GlitchText";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.2 } as never,
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as never },
};

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen bg-black grid-bg flex flex-col"
        >
            {/* Corner brackets */}
            <span className="corner-bracket corner-bracket-tl" style={{ top: 72, left: 20 }} />
            <span className="corner-bracket corner-bracket-br" style={{ bottom: 20, right: 20 }} />

            <div className="max-w-7xl mx-auto w-full px-6 pt-28 pb-16 flex flex-col md:flex-row items-center gap-16 flex-1">
                {/* LEFT: Text content */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col gap-6"
                >
                    {/* Tagline */}
                    <motion.div variants={item} className="flex items-center gap-3">
                        <span className="block w-8 h-px bg-white" />
                        <span className="status-bar text-[#555555]">
                            <Typewriter
                                text="AI/ML Engineer // Backend Developer"
                                delay={400}
                                speed={15}
                                showCursor={false}
                            />
                        </span>
                    </motion.div>

                    {/* Big Name */}
                    <motion.h1
                        variants={item}
                        className="font-display text-[15vw] md:text-[9vw] text-white leading-none"
                    >
                        {resume.profile.name.split(" ").map((word, i) => (
                            <span key={i} className="block">
                                <GlitchText className="inline-block" glitchOnHover={true}>
                                    {word}
                                </GlitchText>
                            </span>
                        ))}
                    </motion.h1>

                    {/* Description */}
                    <motion.div
                        variants={item}
                        className="font-mono text-[#888888] text-sm leading-relaxed max-w-md"
                    >
                        <Typewriter
                            text="Building intelligent systems with Python, Scikit-Learn, and FastAPI. Transforming complex data into real-time decisions. 100+ LeetCode problems solved. Golden Badge HackerRank."
                            delay={1000}
                            speed={10}
                            showCursor={false}
                        />
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div variants={item} className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#e0e0e0] transition-colors duration-200"
                        >
                            Download Resume
                        </a>
                        <a
                            href={resume.profile.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-200"
                        >
                            View GitHub
                        </a>
                    </motion.div>
                </motion.div>

                {/* RIGHT: Tech Dashboard / System Visualization */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="relative flex-shrink-0 w-full md:w-[400px] h-[450px] border border-[#1a1a1a] bg-[#030303] overflow-hidden group"
                >
                    {/* Header info bar */}
                    <div className="border-b border-[#1a1a1a] px-4 py-2 flex items-center justify-between bg-[#080808]">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500 pulse" />
                            <span className="status-bar text-[9px]">Neural_Core_v2.4</span>
                        </div>
                        <span className="status-bar text-[9px] opacity-40">LOC: 23.02 / 72.57</span>
                    </div>

                    {/* Content area */}
                    <div className="p-4 flex flex-col h-full gap-4">
                        {/* Abstract Network Visualization */}
                        <div className="flex-1 relative border border-[#111111] bg-black/40 overflow-hidden flex items-center justify-center">
                            <svg className="w-full h-full opacity-30" viewBox="0 0 200 200">
                                <defs>
                                    <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#333" strokeWidth="0.5" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#smallGrid)" />

                                {/* Moving lines / nodes simulation */}
                                <motion.circle
                                    cx="100" cy="100" r="40"
                                    fill="none" stroke="#555" strokeWidth="0.5" strokeDasharray="4 4"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.path
                                    d="M60 100 L140 100 M100 60 L100 140"
                                    stroke="#333" strokeWidth="0.5"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>

                            {/* Central node component */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="w-24 h-24 border border-orange-500/30 rounded-full"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-orange-500 font-mono text-[10px] tracking-tighter">DATA_SYNCING</span>
                                    </div>
                                </div>
                            </div>

                            {/* Scanning line */}
                            <div className="scan-line opacity-20" />
                        </div>

                        {/* System Log / Metadata */}
                        <div className="h-32 font-mono text-[10px] text-[#444444] space-y-1 overflow-hidden leading-tight">
                            <p className="text-[#666666] flex justify-between">
                                <span>[SESSION_INIT]</span>
                                <span className="text-orange-900/40">OK</span>
                            </p>
                            <p className="flex justify-between">
                                <span>&gt; LOADING_MDS_REPRESENTATION...</span>
                                <span>100%</span>
                            </p>
                            <p className="flex justify-between">
                                <span>&gt; VERIFYING_ENCRYPTION_KEYS...</span>
                                <span className="text-green-900/50">VALID</span>
                            </p>
                            <p className="text-[#333333]">&gt; MTU_DETECTION: ETH0 / 1500</p>
                            <p className="text-[#333333]">&gt; CACHE_STRATEGY: LRU_ENABLED</p>
                            <div className="pt-1 flex gap-2">
                                <span className="px-1 bg-[#111111]">MEM: 12.4GB</span>
                                <span className="px-1 bg-[#111111]">PID: 8492</span>
                                <span className="blink">_</span>
                            </div>
                        </div>
                    </div>

                    {/* Hover focus corners */}
                    <span className="corner-bracket corner-bracket-tl opacity-0 group-hover:opacity-100 transition-opacity border-orange-500" />
                    <span className="corner-bracket corner-bracket-br opacity-0 group-hover:opacity-100 transition-opacity border-orange-500" />
                </motion.div>
            </div>

            {/* Bottom status strip */}
            <div className="border-t border-[#1a1a1a] px-6 py-2 max-w-7xl mx-auto w-full flex justify-between items-center">
                <span className="status-bar">
                    SYSTEM: <span className="text-[#4caf50] pulse">ONLINE</span>
                </span>
                <span className="status-bar">BASED IN INDIA</span>
                <span className="status-bar">VER: 2.4.0</span>
            </div>
        </section>
    );
}
