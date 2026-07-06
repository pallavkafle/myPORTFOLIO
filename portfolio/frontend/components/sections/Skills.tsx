"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", category: "Frontend", emoji: "⚛️", color: "blue", desc: "Component-based UI with hooks, virtual DOM, and rich ecosystem for interactive web apps." },
  { name: "JavaScript", category: "Frontend", emoji: "⚡", color: "yellow", desc: "ES6+, async/await, closures, and functional programming for dynamic web experiences." },
  { name: "Node.js", category: "Backend", emoji: "🟢", color: "green", desc: "JavaScript runtime for fast, scalable server-side apps and RESTful APIs." },
  { name: "Python", category: "Backend", emoji: "🐍", color: "emerald", desc: "Scripting, data processing, web backends, and exploring AI/ML integrations." },
  { name: "MongoDB", category: "Database", emoji: "🍃", color: "green", desc: "NoSQL document database with flexible schemas for modern apps and rapid iteration." },
  { name: "Next.js", category: "Fullstack", emoji: "▲", color: "purple", desc: "React framework with SSR, SSG, API routes, and file-based routing for production apps." },
  { name: "Express.js", category: "Backend", emoji: "🚂", color: "emerald", desc: "Minimal Node.js framework for building clean REST APIs and middleware chains." },
  { name: "Git", category: "Tools", emoji: "🔧", color: "orange", desc: "Version control for tracking changes, branching strategies, and team collaboration." },
  { name: "HTML/CSS", category: "Frontend", emoji: "🎨", color: "blue", desc: "Semantic markup and modern CSS including Flexbox, Grid, and animations." }
];

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
          <div className="h-px w-8 bg-[#2d5d4f]" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2d5d4f]">Skills</p>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <h2 className="mb-4 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
          <span className="text-[#f5f1e8]">⚔️ Skills in </span>
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">My Arsenal</span>
        </h2>
        <p className="mb-12 max-w-xl text-sm text-white/40 md:text-base">
          hover each card to explore the craft behind the code
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{
                rotateX: 3,
                rotateY: -3,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group skills-tilt-card relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-colors duration-300 hover:border-[#2d5d4f]/60"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2d5d4f]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-[#2d5d4f] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex items-center gap-3">
                <span className="text-3xl">{skill.emoji}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#f5f1e8]">{skill.name}</h3>
                  <span
                    className={`mt-1 inline-block w-fit rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-widest ${badgeStyle[skill.category] ?? "border-white/20 bg-white/5 text-white/50"}`}
                  >
                    {skill.category}
                  </span>
                </div>
              </div>

              <p className="mt-3 max-h-0 overflow-hidden text-xs leading-relaxed text-white/50 opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-24 group-hover:opacity-100">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-md">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#2d5d4f]">
            Core Strengths
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "REST APIs",
              "JWT Auth",
              "Responsive Design",
              "Prompt Engineering",
              "LLM Fundamentals",
              "Context API",
              "Agile/SCRUM"
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#2d5d4f]/30 bg-[#2d5d4f]/10 px-3 py-1.5 text-xs text-[#f5f1e8]/70 transition-all duration-200 hover:border-[#2d5d4f]/60 hover:text-[#f5f1e8]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}