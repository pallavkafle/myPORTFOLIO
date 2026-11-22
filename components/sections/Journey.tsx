"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { journeyItems } from "@/lib/data/journey";

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="journey" className="relative z-10 mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          label="Journey"
          title={
            <>
              <span className="text-text">Education & </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Certifications.</span>
            </>
          }
          subtitle="Continuous learning and formal education."
        />
      </motion.div>

      <div ref={containerRef} className="relative mt-16 pl-8 md:pl-0">
        {/* Static background line */}
        <div className="absolute left-[1.05rem] top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
        
        {/* Scroll-linked animated line */}
        <motion.div
          className="absolute left-[1.05rem] top-0 bottom-0 w-px bg-emerald-400 md:left-1/2 md:-translate-x-1/2 origin-top"
          style={{ scaleY }}
        />

        <div className="flex flex-col gap-12">
          {journeyItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.id} className={`relative flex items-center md:justify-between md:even:flex-row-reverse`}>
                {/* Timeline dot */}
                <div className="absolute left-[-1.55rem] z-10 flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/30 bg-[#0a0f0d] md:left-1/2 md:-translate-x-1/2">
                  {item.type === "education" ? (
                    <GraduationCap size={14} className="text-emerald-400" />
                  ) : (
                    <Award size={14} className="text-gold" />
                  )}
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className={`w-full md:w-[45%] ${isEven ? "md:text-right" : "md:text-left"}`}
                >
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10">
                    <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">{item.date}</span>
                    <h4 className="mt-2 text-xl font-serif text-text">{item.title}</h4>
                    <p className="mt-1 text-sm font-medium text-white/60">{item.provider}</p>
                    {item.description && (
                      <p className="mt-3 text-sm leading-relaxed text-white/40">{item.description}</p>
                    )}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs text-gold hover:text-white transition-colors">
                        Verify <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}