"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data/skills";

const badgeStyle: Record<string, string> = {
  Frontend: "border-blue-400/30 text-blue-400 bg-blue-400/5",
  Backend: "border-emerald-400/30 text-emerald-400 bg-emerald-400/5",
  Database: "border-green-400/30 text-green-400 bg-green-400/5",
  Fullstack: "border-purple-400/30 text-purple-400 bg-purple-400/5",
  Tools: "border-orange-400/30 text-orange-400 bg-orange-400/5"
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-accent" />
          <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-accent">Skills</p>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <h2 className="mb-4 text-4xl font-serif font-normal leading-[1.05] tracking-tight md:text-6xl">
          <span className="text-text">Skills in </span>
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">My Arsenal</span>
        </h2>
        <p className="mb-12 max-w-xl text-sm text-white/50 md:text-base">
          hover each card to explore the craft behind the code
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.Icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-colors duration-300 hover:border-accent/60"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:border-accent/50 transition-all duration-300">
                    <Icon className="h-6 w-6 text-text group-hover:text-emerald-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text">{skill.name}</h3>
                    <span className={`mt-1 inline-block w-fit rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-widest ${badgeStyle[skill.category] ?? "border-white/20 bg-white/5 text-white/50"}`}>
                      {skill.category}
                    </span>
                  </div>
                </div>

                <p className="mt-4 max-h-0 overflow-hidden text-xs leading-relaxed text-white/60 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-24 group-hover:opacity-100">
                  {skill.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}