"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { resume } from "@/data/resume";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const navLinks = [
        { label: "Hero", href: "#hero" },
        { label: "Tech Arsenal", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -80, opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1a1a] bg-black/95 backdrop-blur-sm"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-14">
                {/* Logo */}
                <Link href="#hero" className="flex items-center gap-2 group">
                    <span className="text-white font-bold text-xs tracking-widest uppercase select-none">
                        <span className="inline-block w-3 h-3 bg-white mr-2 align-middle" />
                        {resume.profile.name}
                    </span>
                </Link>

                {/* Nav Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.li 
                            key={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                        >
                            <Link
                                href={link.href}
                                className="text-[10px] uppercase tracking-[0.2em] text-[#888888] hover:text-white transition-all duration-300 font-mono relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#f5a623] group-hover:w-full transition-all duration-300" />
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Social Icon Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <div className="w-px h-5 bg-[#2a2a2a]" />
                    <motion.a
                        href={resume.profile.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 border border-[#2a2a2a] text-[10px] font-bold tracking-widest uppercase text-[#888888] transition-all duration-200 relative overflow-hidden group"
                        title="GitHub"
                        whileHover={{
                            borderColor: "#ffffff",
                            color: "#ffffff",
                            scale: 1.1
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">GH</span>
                        <div className="absolute inset-0 bg-[#f5a623] scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                    </motion.a>
                    <motion.a
                        href={resume.profile.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 border border-[#2a2a2a] text-[10px] font-bold tracking-widest uppercase text-[#888888] transition-all duration-200 relative overflow-hidden group"
                        title="LinkedIn"
                        whileHover={{
                            borderColor: "#ffffff",
                            color: "#ffffff",
                            scale: 1.1
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">LI</span>
                        <div className="absolute inset-0 bg-[#f5a623] scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                    </motion.a>
                </div>
            </div>
        </motion.nav>
    );
}
