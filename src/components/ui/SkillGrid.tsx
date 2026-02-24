"use client";
import { motion, Variants } from "framer-motion";
import { resume } from "@/data/resume";

interface SkillCategory {
    index: string;
    title: string;
    icon: string;
    skills: string[];
}

const categories: SkillCategory[] = [
    {
        index: "01",
        title: "Languages",
        icon: "⚡",
        skills: resume.skills.languages,
    },
    {
        index: "02",
        title: "AI/ML & Data",
        icon: "🧠",
        skills: [...resume.skills.ai_ml, "Pandas", "NumPy", "Tableau", "Power BI"],
    },
    {
        index: "03",
        title: "Backend & Cloud",
        icon: "☁",
        skills: [
            ...resume.skills.frameworks,
            ...resume.skills.databases,
            "GCP Storage",
            "Secret Manager",
        ],
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 } as never,
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" } as never,
    },
};

export default function SkillGrid() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
            {categories.map((cat, i) => (
                <motion.div
                    key={cat.index}
                    variants={cardVariants}
                    whileHover={{
                        y: -8,
                        borderColor: "#ffffff",
                        backgroundColor: "#050505",
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(245, 166, 35, 0.2)",
                        transition: { duration: 0.3 }
                    }}
                    className="border border-[#2a2a2a] p-6 relative group transition-all bg-black overflow-hidden"
                >
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f5a623]/5 via-transparent to-[#f5a623]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Corner brackets for a more tech feel */}
                    <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#555555] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#555555] opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-5 border-b border-[#1a1a1a] group-hover:border-white/20 pb-4 transition-colors">
                        <h3 className="font-display text-xl text-white">
                            {cat.index} // {cat.title.toUpperCase()}
                        </h3>
                        <span className="text-lg opacity-60 group-hover:opacity-100 transition-opacity">{cat.icon}</span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                            <span
                                key={skill}
                                className="inline-flex items-center gap-1 px-2 py-1 border border-[#1a1a1a] text-[11px] font-mono tracking-wider text-[#888888] group-hover:text-white group-hover:border-[#333333] transition-all cursor-default"
                            >
                                <span className="text-[#333333] group-hover:text-[#f5a623]">
                                    •
                                </span>
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
