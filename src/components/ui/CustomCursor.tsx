"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Small sharp square dot — terminal cursor */}
            <motion.div
                className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
                animate={{
                    x: mousePosition.x - (isHovered ? 20 : 4),
                    y: mousePosition.y - (isHovered ? 20 : 4),
                    width: isHovered ? 40 : 8,
                    height: isHovered ? 40 : 8,
                    borderColor: isHovered ? "#ffffff" : "#ffffff",
                    backgroundColor: isHovered ? "transparent" : "#ffffff",
                }}
                transition={{ type: "spring", stiffness: 600, damping: 32 }}
                style={{
                    border: isHovered ? "1px solid #ffffff" : "none",
                }}
            />
        </>
    );
}
