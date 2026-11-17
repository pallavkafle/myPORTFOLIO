"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useState } from "react";
import Card from "@/components/ui/Card";

type Project = {
  title: string;
  stack: string[];
  statusLabel: string;
  problem: string;
  solution: string;
  features: string[];
  status: string;
  future: string;
  github?: string;
  team?: string;
  role?: string;
};

const projects: Project[] = [
  {
    title: "Expense Tracker",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Context API"],
    statusLabel: "Completed",
    problem: "No simple full-stack expense tool with auth and analytics",
    solution: "Built MERN app with secure auth and real-time dashboard",
    features: [
      "Add/Edit/Delete/Search expenses",
      "Real-time balance",
      "Pie chart analytics",
      "Glassmorphism UI",
      "Toast notifications",
      "Responsive dashboard"
    ],
    status: "Built — currently undeployed (free hosting inactive)",
    future: "AI spending insights, budgeting, receipt scanning",
    github: "https://github.com/pallavkafle"
  },
  {
    title: "ShapeLogic",
    stack: ["Android", "Decision Tree", "Generative Vision API"],
    statusLabel: "Minor College Project",
    problem: "Early childhood geometry learning lacks interactivity",
    solution: "Multimodal Android app with sketch recognition",
    features: ["Freehand sketch recognition", "Geometric categorization"],
    status: "Team of 4 members | My Role: Backend Development",
    future: "Offline inference, adaptive learning, voice interaction",
    team: "4 members",
    role: "Backend Development"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-[#2d5d4f]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2d5d4f]">Projects</p>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <h2 className="mb-4 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
            <span className="text-[#f5f1e8]">Things I've </span>
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">built.</span>
          </h2>
          <p className="mb-12 max-w-xl text-sm text-white/40 md:text-base">Real problems. Real solutions. Real code.</p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Card
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[rgba(255,255,255,0.03)] p-5 text-left backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#2d5d4f]/50"
              >
                <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#2d5d4f] to-[#1a7a4a]" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text">{project.title}</h3>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      project.statusLabel === "Completed"
                        ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                        : "border border-[#e8d48a]/30 bg-[#e8d48a]/10 text-[#e8d48a]"
                    }`}
                  >
                    {project.statusLabel}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-[#2d5d4f]/15 px-3 py-1 text-xs text-text/80">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-sm text-text/65">Hover for summary. Click to open.</p>
                  <span className="text-sm font-medium text-[#2d5d4f]">View Case Study →</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0b1010] p-6 text-text shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 p-2 text-text/80 transition-colors hover:border-[#2d5d4f]/50 hover:text-[#f5f1e8]"
                aria-label="Close project modal"
              >
                <X size={18} />
              </button>

              <div className="pr-10">
                <p className="text-sm font-medium tracking-[0.3em] text-text/50 uppercase">Case Study</p>
                <h3 className="mt-2 text-3xl font-semibold">{selectedProject.title}</h3>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-[#e8d48a]">Problem</p>
                    <p className="mt-2 leading-7 text-text/75">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#e8d48a]">Solution</p>
                    <p className="mt-2 leading-7 text-text/75">{selectedProject.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#e8d48a]">Tech Stack</p>
                    <p className="mt-2 leading-7 text-text/75">{selectedProject.stack.join(" · ")}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-[#e8d48a]">Features</p>
                    <ul className="mt-2 space-y-2 text-text/75">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2d5d4f]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#e8d48a]">My Role</p>
                    <p className="mt-2 leading-7 text-text/75">{selectedProject.role ?? selectedProject.status}</p>
                  </div>

                  {selectedProject.team ? (
                    <div>
                      <p className="text-sm font-semibold text-[#e8d48a]">Team</p>
                      <p className="mt-2 leading-7 text-text/75">{selectedProject.team}</p>
                    </div>
                  ) : null}

                  <div>
                    <p className="text-sm font-semibold text-[#e8d48a]">Future Plans</p>
                    <p className="mt-2 leading-7 text-text/75">{selectedProject.future}</p>
                  </div>

                  {selectedProject.github ? (
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text/85 transition-colors hover:border-[#2d5d4f]/50 hover:text-[#f5f1e8]">
                      GitHub <ExternalLink size={16} />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
