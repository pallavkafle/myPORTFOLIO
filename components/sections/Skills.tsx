"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data/skills";

export default function Skills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoverable, setIsHoverable] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsHoverable(finePointer && !reducedMotion);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHoverable || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // The text content rendered twice (once for baseline, once for the spotlight mask)
  const SkillList = ({ isSpotlight = false }: { isSpotlight?: boolean }) => (
    <div className={`space-y-12 ${isSpotlight ? "pointer-events-none text-white" : "text-white/70"}`}>
      {skillGroups.map((group) => (
        <div key={group.category} className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-8">
          <div>
            <h3 className={`font-mono text-xs uppercase tracking-widest ${isSpotlight ? "text-emerald-400" : "text-emerald-400/40"}`}>
              {group.category}
            </h3>
          </div>
          <div className="space-y-3">
            {group.items.map((item) => (
              <div key={item.name} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-white/5 pb-3">
                <span className="text-lg font-serif">{item.name}</span>
                <span className="text-sm font-mono mt-1 sm:mt-0">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="relative z-10 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
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
          className="relative mt-12"
        >
          {/* Base Layer */}
          <SkillList />

          {/* Spotlight Layer */}
          {isHoverable && (
            <div 
              className="absolute inset-0 z-10"
              style={{
                maskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, white 10%, transparent 100%)`,
                WebkitMaskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, white 10%, transparent 100%)`,
              }}
            >
              <SkillList isSpotlight />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}