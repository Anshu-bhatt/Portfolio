"use client";
import { useState, useEffect } from "react";

interface GlitchTextProps {
    children: React.ReactNode;
    className?: string;
    glitchOnHover?: boolean;
}

export default function GlitchText({ 
    children, 
    className = "", 
    glitchOnHover = false 
}: GlitchTextProps) {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        if (!glitchOnHover) {
            const interval = setInterval(() => {
                setIsGlitching(true);
                setTimeout(() => setIsGlitching(false), 200);
            }, Math.random() * 5000 + 3000);

            return () => clearInterval(interval);
        }
    }, [glitchOnHover]);

    const handleMouseEnter = () => {
        if (glitchOnHover) {
            setIsGlitching(true);
        }
    };

    const handleMouseLeave = () => {
        if (glitchOnHover) {
            setIsGlitching(false);
        }
    };

    return (
        <span
            className={`${className} ${isGlitching ? 'glitch' : ''}`}
            data-text={typeof children === 'string' ? children : ''}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </span>
    );
}