"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
    showCursor?: boolean;
}

export default function Typewriter({
    text,
    delay = 0,
    speed = 50,
    className = "",
    showCursor = true
}: TypewriterProps) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = currentIndex === 0 ? delay : speed;
            const timer = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, timeout);
            return () => clearTimeout(timer);
        } else {
            setIsComplete(true);
        }
    }, [currentIndex, text, delay, speed]);

    return (
        <span className={className}>
            {displayText}
            {showCursor && !isComplete && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-[#f5a623]"
                >
                    |
                </motion.span>
            )}
        </span>
    );
}