"use client";
import { useEffect, useState } from "react";

export default function MatrixRain() {
    const [drops, setDrops] = useState<Array<{
        id: number;
        left: number;
        animationDelay: number;
        char: string;
    }>>([]);

    useEffect(() => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?`~";
        const newDrops = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDelay: Math.random() * 3,
            char: characters[Math.floor(Math.random() * characters.length)],
        }));
        setDrops(newDrops);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
            {drops.map((drop) => (
                <div
                    key={drop.id}
                    className="matrix-rain absolute"
                    style={{
                        left: `${drop.left}%`,
                        animationDelay: `${drop.animationDelay}s`,
                    }}
                >
                    {drop.char}
                </div>
            ))}
        </div>
    );
}