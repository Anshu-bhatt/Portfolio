"use client";
import { useEffect, useState } from "react";

export default function DataStream() {
    const [streams, setStreams] = useState<Array<{
        id: number;
        top: number;
        animationDelay: number;
        width: number;
    }>>([]);

    useEffect(() => {
        const newStreams = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            top: Math.random() * 100,
            animationDelay: Math.random() * 4,
            width: Math.random() * 200 + 100,
        }));
        setStreams(newStreams);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-10 opacity-30">
            {streams.map((stream) => (
                <div
                    key={stream.id}
                    className="data-stream"
                    style={{
                        top: `${stream.top}%`,
                        width: `${stream.width}px`,
                        animationDelay: `${stream.animationDelay}s`,
                    }}
                />
            ))}
        </div>
    );
}