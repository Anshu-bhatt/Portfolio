"use client";
import { motion, useInView, Variant } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
    text: string;
    className?: string;
    tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
    delay?: number;
    duration?: number;
    splitBy?: "words" | "characters";
}

export default function TextReveal({
    text,
    className,
    tag: Tag = "div" as any,
    delay = 0,
    duration = 0.8,
    splitBy = "words",
}: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const container: Record<string, Variant> = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: splitBy === "characters" ? 0.03 : 0.1, delayChildren: delay },
        },
    };

    const child: Record<string, Variant> = {
        hidden: {
            y: "110%", // Start slightly below the container
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            },
        },
        visible: {
            y: "0%",
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                duration: duration,
            },
        },
    };

    const elements = splitBy === "characters" ? text.split("") : text.split(" ");

    return (
        <Tag ref={ref} className={className} style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", wordBreak: "break-word" }}>
            <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`flex flex-wrap ${splitBy === "words" ? "gap-x-[0.2em]" : ""}`} // Add gap only for words
            >
                {elements.map((el, i) => (
                    <span key={i} className="inline-block overflow-hidden relative" style={{ whiteSpace: el === " " ? "pre" : "normal" }}>
                        <motion.span variants={child} className="inline-block relative">
                            {el}
                        </motion.span>
                    </span>
                ))}
            </motion.div>
        </Tag>
    );
}
