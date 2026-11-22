"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data/skills";
import { projects } from "@/lib/data/projects";

export default function Skills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoverable, setIsHoverable] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsHoverable(finePointer && !reducedMotion);
    // Default center position
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: rect.width / 2, y: rect.height / 2 });
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHoverable || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: rect.width / 2, y: rect.height / 2 });
    setActiveSkill(null);
  };

  const getProjectsForSkill = (skill: string) => {
    return projects
      .filter((p) => p.visible && p.skillsUsed.includes(skill))
      .map((p) => p.title);
  };

  // Renders the grid. If isSpotlight, it renders the fully opaque version.
  const SkillGrid = ({ isSpotlight = false }: { isSpotlight?: boolean }) => (
    <div className={`grid gap-x-12 gap-y-16 md:grid-cols-2 ${isSpotlight ? "pointer-events-none text-white" : "text-white/40"}`}>
      {skillGroups.map((group) => (
        <div key={group.category} className="space-y-4">
          <h3 className={`font-mono text-xs uppercase tracking-widest ${isSpotlight ? "text-emerald-400" : "text-emerald-400/40"}`}>
            {group.category}
          </h3>
          <div className="flex flex-col gap-3">
            {group.items.map((skill) => (
              <div 
                key={skill} 
                className="group flex items-center justify-between border-b border-white/5 pb-3"
                onMouseEnter={() => setActiveSkill(skill)}
              >
                <span className="font-serif text-[28px] leading-tight md:text-[32px] lg:text-[40px]">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="relative z-10 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionHeading
            label="Skills"
            title={<span className="text-text">What I build <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">with.</span></span>}
            subtitle="Grouped by what I used them for."
          />
        </motion.div>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative mt-12"
        >
          {/* Base Layer */}
          <SkillGrid />

          {/* Spotlight Layer */}
          {isHoverable && (
            <div 
              className="absolute inset-0 z-10"
              style={{
                maskImage: `radial-gradient(circle 260px at ${mousePosition.x}px ${mousePosition.y}px, white 20%, transparent 100%)`,
                WebkitMaskImage: `radial-gradient(circle 260px at ${mousePosition.x}px ${mousePosition.y}px, white 20%, transparent 100%)`,
              }}
            >
              <SkillGrid isSpotlight />
            </div>
          )}
        </div>
      </div>

      {/* Detail Panel - Fixed at bottom */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${activeSkill ? "translate-y-0" : "translate-y-full"}`}>
        <div className="mx-auto max-w-6xl border-t border-white/10 bg-[#0a0f0d]/95 px-5 py-4 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">Used in</span>
            <div className="flex flex-wrap gap-2">
              {activeSkill && getProjectsForSkill(activeSkill).length > 0 ? (
                getProjectsForSkill(activeSkill).map(p => (
                  <span key={p} className="rounded border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-xs text-emerald-400">{p}</span>
                ))
              ) : (
                <span className="text-sm text-white/40">No visible projects yet</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}