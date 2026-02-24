"use client";
import React from 'react';

interface StatusBarProps {
    left?: string;
    center?: string;
    right?: string;
    className?: string;
}

export default function StatusBar({
    left = "SYSTEM: ONLINE",
    center = "VER: 2.4.0",
    right = "SECURE CONNECTION",
    className = ""
}: StatusBarProps) {
    return (
        <div className={`border-t border-b border-[#1a1a1a] bg-black/50 backdrop-blur-sm py-2 px-6 w-full ${className}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center status-bar">
                <span>
                    {left === "SYSTEM: ONLINE" ? (
                        <>SYSTEM: <span className="text-[#4caf50]">ONLINE</span></>
                    ) : (
                        left
                    )}
                </span>
                <span className="hidden md:block opacity-50">{center}</span>
                <span className="text-right">{right}</span>
            </div>
        </div>
    );
}
