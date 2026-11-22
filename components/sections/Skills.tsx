"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data/skills";

const badgeStyle: Record<string, string> = {
  Frontend: "border-blue-400/30 text-blue-400 bg-blue-400/5",
  Backend: "border-emerald-400/30 text-emerald-400 bg-emerald-400/5",
  Database: "border-green-400/30 text-green-400 bg-green-400/5",
  Fullstack: "border-purple-400/30 text-purple-400 bg-purple-400/5",
  Mobile: "border-orange-400/30 text-orange-400 bg-orange-400/5",
  AI: "border-gold/30 text-gold bg-gold/5",
  Tools: "border-white/30 text-white/70 bg-white/5"
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-16 md:px-16 bg-black/20">
      <div className="mx-auto max-w-6xl">
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
                <span className="text-text">Skills in </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">My Arsenal</span>
              </>
            }
            subtitle="The technologies and tools I use to build production-ready applications."
          />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.Icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgba(45,93,79,0.12)]"
              >
                {/* Subtle top gradient line */}
                <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/40 shadow-inner transition-colors duration-300 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/5">
                    <Icon className="h-7 w-7 text-white/70 transition-colors duration-300 group-hover:text-emerald-400" />
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${badgeStyle[skill.category] ?? "border-white/20 bg-white/5 text-white/50"}`}>
                    {skill.category}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-serif text-text">{skill.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {skill.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}