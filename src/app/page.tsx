"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import ProjectCard from "@/components/ui/ProjectCard";
import ExperienceTimeline from "@/components/ui/ExperienceTimeline";
import SkillGrid from "@/components/ui/SkillGrid";
import GlitchText from "@/components/ui/GlitchText";
import MagneticButton from "@/components/ui/MagneticButton";
import { resume } from "@/data/resume";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Hero />

        {/* ─── TECH ARSENAL ─── */}
        <section id="skills" className="py-20 border-t border-[#1a1a1a]">
          {/* System status bar */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12 status-bar">
              <span>SYSTEM: <span className="text-[#4caf50] pulse">ONLINE</span></span>
              <span>VER: 2.4.0</span>
              <span>SECURE CONNECTION</span>
            </div>

            {/* Section heading */}
            <div className="mb-8">
              <h2 className="font-display text-5xl md:text-7xl text-white mb-4 flex items-baseline gap-3">
                <span className="text-[#555555]">&gt;</span>
                <GlitchText>
                  SYSTEM CAPABILITIES
                </GlitchText>
                <span className="blink text-[#555555]">|</span>
              </h2>
              <p className="font-mono text-[#666666] text-sm max-w-lg leading-relaxed">
                Core competencies in algorithm-driven development and machine
                learning pipelines.
              </p>
            </div>

            <div className="w-full border-t border-[#1a1a1a] mb-10" />

            <SkillGrid />
          </div>

          {/* Bottom scanline row */}
          <div className="mt-12 border-t border-[#0d0d0d] overflow-hidden">
            <div className="flex">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-2 border-r border-[#0d0d0d] bg-[#050505]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── DEPLOYED PROJECTS ─── */}
        <section id="projects" className="py-20 border-t border-[#1a1a1a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <p className="status-bar mb-3">ENGINEERING &amp; MACHINE LEARNING PORTFOLIO</p>
              <h2 className="font-display text-6xl md:text-8xl text-white mb-6">
                DEPLOYED PROJECTS
              </h2>
              <div className="w-full border-t border-[#1a1a1a]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resume.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  index={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  link={project.link}
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── OPERATIONAL HISTORY ─── */}
        <section id="experience" className="py-20 border-t border-[#1a1a1a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <p className="status-bar mb-3">CAREER &amp; ACADEMIC TIMELINE</p>
              <h2 className="font-display text-6xl md:text-8xl text-white mb-6">
                OPERATIONAL HISTORY
              </h2>
              <div className="w-full border-t border-[#1a1a1a]" />
            </div>
            <ExperienceTimeline />
          </div>
        </section>

        {/* ─── CONTACT / INITIATE PROTOCOL ─── */}
        <section
          id="contact"
          className="py-20 border-t border-[#1a1a1a] bg-[#050505]"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2 className="font-display text-6xl md:text-8xl text-white mb-3 flex items-baseline gap-3">
                <GlitchText>
                  INITIATE PROTOCOL
                </GlitchText>
                <span className="blink">—</span>
              </h2>
              <p className="font-mono text-[#666666] text-sm max-w-sm leading-relaxed">
                Open for opportunities in AI, Machine Learning, and Backend
                Development.
              </p>
            </div>
            <div className="w-full border-t border-[#1a1a1a] mb-10" />

            <div className="flex flex-col items-center text-center max-w-2xl mx-auto py-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative p-10 border border-[#1a1a1a] bg-black/40 backdrop-blur-sm w-full group overflow-hidden"
              >
                {/* Techy corner brackets */}
                <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-orange-500/50" />
                <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange-500/50" />
                <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-orange-500/50" />
                <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-orange-500/50" />

                {/* System Status Row */}
                <div className="flex justify-between items-center mb-10 pb-4 border-b border-[#1a1a1a] status-bar">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4caf50] pulse" />
                    COMMS_READY
                  </span>
                  <span>IP: 127.0.0.1</span>
                  <span className="opacity-40">SYNC_OK</span>
                </div>

                {/* Main Contact Action */}
                <div className="space-y-8">
                  <div>
                    <p className="status-bar mb-3 text-[#555555]">PRIMARY_UPLINK</p>
                    <a
                      href={`mailto:${resume.profile.contact.email}`}
                      className="font-display text-4xl md:text-5xl text-white hover:text-orange-500 transition-all duration-300 block tracking-tight"
                    >
                      {resume.profile.contact.email.toUpperCase()}
                    </a>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <p className="status-bar text-[#444444]">SECURE_LINE</p>
                    <a
                      href={`tel:${resume.profile.contact.phone}`}
                      className="font-mono text-lg text-[#888888] hover:text-white transition-colors"
                    >
                      {resume.profile.contact.phone}
                    </a>
                  </div>

                  {/* Social Matrix */}
                  <div className="flex justify-center gap-6 pt-6">
                    <MagneticButton>
                      <a
                        href={resume.profile.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 border border-[#333333] text-[10px] font-bold uppercase tracking-[0.3em] text-[#aaaaaa] hover:border-orange-500 hover:text-white transition-all duration-300"
                      >
                        LinkedIn
                      </a>
                    </MagneticButton>
                    <MagneticButton>
                      <a
                        href={resume.profile.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 border border-[#333333] text-[10px] font-bold uppercase tracking-[0.3em] text-[#aaaaaa] hover:border-orange-500 hover:text-white transition-all duration-300"
                      >
                        GitHub
                      </a>
                    </MagneticButton>
                  </div>
                </div>

                {/* Animated scan line for the block */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                  <div className="w-full h-1 bg-white/20 absolute -top-1 animate-scan" style={{ animation: 'scan 4s linear infinite' }} />
                </div>
              </motion.div>

              <div className="mt-12 text-[9px] font-mono text-[#333333] uppercase tracking-widest">
                Terminating connection... Waiting for user response...
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="status-bar">
            © {new Date().getFullYear()} {resume.profile.name}
          </span>
          <span className="status-bar">SYSTEM ONLINE // ALL RIGHTS RESERVED</span>
          <span className="status-bar">BUILT WITH NEXT.JS</span>
        </div>
      </footer>
    </div>
  );
}
