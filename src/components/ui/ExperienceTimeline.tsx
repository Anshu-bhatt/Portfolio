"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";

const ALL_ENTRIES = [
    ...resume.experience.map((e) => ({ ...e, type: "EXPERIENCE" as const })),
    ...resume.extracurricular.slice(2, 3).map((e) => ({
        company: e.role,
        role: "Open Source Contributor",
        period: "Aug 2025 - Oct 2025",
        type: "EXPERIENCE" as const,
    })),
];

function TimelineRow({
    period,
    type,
    title,
    subtitle,
    index,
    isDiamond = false,
}: {
    period: string;
    type: string;
    title: string;
    subtitle?: string;
    index: number;
    isDiamond?: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative grid grid-cols-[180px_40px_1fr] gap-0 border-b border-[#1a1a1a] py-8"
        >
            {/* Left: Date + type */}
            <div className="flex flex-col gap-1 pr-4">
                <span className="inline-block border border-[#333333] px-2 py-0.5 text-[10px] font-mono tracking-wider text-white w-fit">
                    {period}
                </span>
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#444444] mt-1">
                    {type}
                </span>
            </div>

            {/* Center: Vertical line + diamond marker */}
            <div className="flex flex-col items-center">
                <div className="w-px flex-1 bg-[#2a2a2a]" />
                <div
                    className={`w-3 h-3 border border-[#555555] rotate-45 ${isDiamond ? "bg-white" : "bg-black"
                        }`}
                />
                <div className="w-px flex-1 bg-[#2a2a2a]" />
            </div>

            {/* Right: Role + Company */}
            <div className="flex flex-col gap-1 pl-8">
                <h3 className="font-sans text-xl font-bold text-white tracking-tight">
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-[#555555] font-mono text-xs tracking-wider">
                        {subtitle}
                    </p>
                )}
            </div>
        </motion.div>
    );
}

export default function ExperienceTimeline() {
    return (
        <div className="text-left">
            {/* Experience entries */}
            <div>
                {ALL_ENTRIES.map((exp, index) => (
                    <TimelineRow
                        key={index}
                        index={index}
                        period={exp.period}
                        type={exp.type}
                        title={"role" in exp ? exp.role : ""}
                        subtitle={exp.company}
                        isDiamond={index === 1}
                    />
                ))}
            </div>

            {/* Education separator */}
            <div className="relative flex items-center justify-center py-8">
                <div className="absolute left-0 right-0 border-t border-[#1a1a1a]" />
                <span className="relative bg-black px-6 text-[10px] font-mono uppercase tracking-[0.3em] text-[#444444]">
                    Education
                </span>
            </div>

            {/* Education entries */}
            <div>
                {resume.education.map((edu, index) => (
                    <motion.div
                        key={`edu-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative grid grid-cols-[180px_40px_1fr] gap-0 border-b border-[#1a1a1a] py-8"
                    >
                        {/* Left */}
                        <div className="flex flex-col gap-1 pr-4">
                            <span className="inline-block border border-[#333333] px-2 py-0.5 text-[10px] font-mono tracking-wider text-white w-fit">
                                {edu.year}
                            </span>
                            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#444444] mt-1">
                                EDUCATION
                            </span>
                        </div>

                        {/* Center */}
                        <div className="flex flex-col items-center">
                            <div className="w-px flex-1 bg-[#2a2a2a]" />
                            <div className="w-3 h-3 border border-[#555555] rotate-45 bg-black" />
                            <div className="w-px flex-1 bg-[#2a2a2a]" />
                        </div>

                        {/* Right */}
                        <div className="flex flex-col gap-1 pl-8">
                            <h3 className="font-sans text-xl font-bold text-white tracking-tight">
                                {edu.degree}
                            </h3>
                            <p className="text-[#555555] font-mono text-xs tracking-wider">
                                {edu.university}
                            </p>
                            {edu.grade && (
                                <p className="text-[#444444] font-mono text-xs mt-1">
                                    {edu.grade}
                                </p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
