"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data/skills";

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Detect mobile for layout/keyboard navigation
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle arrow key navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isMobile) return;
    
    const cols = 3;
    let nextIndex = activeIndex;

    if (e.key === "ArrowRight") nextIndex = activeIndex + 1;
    else if (e.key === "ArrowLeft") nextIndex = activeIndex - 1;
    else if (e.key === "ArrowDown") nextIndex = activeIndex + cols;
    else if (e.key === "ArrowUp") nextIndex = activeIndex - cols;
    else return;

    e.preventDefault(); // Prevent page scroll

    if (nextIndex >= 0 && nextIndex < skills.length) {
      setActiveIndex(nextIndex);
    }
  };

  const ActiveIcon = skills[activeIndex].Icon;

  return (
    <section id="skills" className="px-6 py-24 md:px-16 bg-black/20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="Skills"
            title={
              <>
                <span className="text-text">The </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Keyboard.</span>
              </>
            }
            subtitle="Navigate with arrow keys to explore the stack."
          />
        </motion.div>

        <div className="mt-12 flex flex-col items-center gap-10">
          
          {/* Keyboard Tray */}
          <div 
            ref={gridRef}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="grid grid-cols-3 gap-4 rounded-[2rem] border border-white/5 bg-[#0a0f0d] p-6 shadow-2xl outline-none focus:ring-2 focus:ring-emerald-400/50 md:gap-6 md:p-8"
            aria-label="Skills keyboard"
          >
            {skills.map((skill, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={skill.name}
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`relative flex h-20 w-20 flex-col items-center justify-center rounded-2xl border transition-all duration-150 md:h-28 md:w-28 ${
                    isActive
                      ? "translate-y-[2px] border-emerald-400/50 bg-[#1a1f1c] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                      : "border-white/10 bg-[#131815] shadow-[0_6px_0_#000,inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#1a1f1c]"
                  }`}
                  aria-pressed={isActive}
                  aria-label={`${skill.name}, ${skill.category}`}
                >
                  <skill.Icon className={`mb-2 text-2xl md:text-4xl ${isActive ? "text-emerald-400" : "text-white/60"}`} />
                  <span className={`text-[10px] font-mono md:text-xs ${isActive ? "text-white" : "text-white/40"}`}>
                    {skill.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* LCD Description Panel */}
          <div 
            className="w-full max-w-2xl rounded-2xl border border-white/10 bg-black/60 p-6 font-mono shadow-inner backdrop-blur-md"
            aria-live="polite"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <ActiveIcon className="text-2xl text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-bold text-white">{skills[activeIndex].name}</h4>
                  <span className="rounded border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] uppercase tracking-widest text-emerald-400">
                    {skills[activeIndex].category}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {skills[activeIndex].desc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}