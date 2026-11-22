"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/lib/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const visibleProjects = projects.filter((p) => p.visible);
  const earlierProject = projects.find((p) => p.slug === "expense-tracker");

  return (
    <>
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <SectionHeading
            label="Work"
            title={<span className="text-text">Selected <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">work.</span></span>}
            subtitle="Three projects I built, and what each one taught me."
          />
        </motion.div>

        <div className="mt-12 flex flex-col gap-16">
          {visibleProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col gap-8 lg:items-center lg:gap-12 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Text Side */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-400">{project.status}</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-white/50">{project.kind}</span>
                  </div>
                  <h3 className="text-3xl font-serif text-text md:text-4xl">{project.title}</h3>
                  <p className="text-base leading-relaxed text-white/70">{project.summary}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/60">{item}</span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button onClick={() => setSelectedProject(project)} className="group inline-flex items-center gap-2 text-sm font-medium text-text transition-colors hover:text-emerald-400">
                      View case study
                      <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1">
                  {project.isMobile ? (
                    <div className="relative mx-auto aspect-[9/19] w-full max-w-[240px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0f0d] shadow-2xl">
                      <div className="absolute top-0 left-1/2 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-white/10 z-10" />
                      {project.images[0] ? (
                        <Image src={project.images[0]} alt={project.title} fill className="object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-white/[0.02]">
                          <span className="font-mono text-xs text-white/30">{project.title}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f0d] shadow-2xl">
                      <div className="absolute top-0 left-0 flex w-full items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                        <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      </div>
                      {project.images[0] ? (
                        <Image src={project.images[0]} alt={project.title} fill className="object-cover pt-8" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-white/[0.02] pt-8">
                          <span className="font-mono text-xs text-white/30">{project.title}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKeyDown); };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-md">
        <motion.div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-h-[85vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0a0f0d] p-6 shadow-2xl md:p-8 scrollbar-thin scrollbar-thumb-white/20"
        >
          <button onClick={onClose} className="sticky top-0 float-right rounded-full border border-white/10 bg-black/50 p-2 text-white/70 hover:text-white" aria-label="Close modal">
            <X size={20} />
          </button>

          <div className="mt-4 grid gap-8 md:grid-cols-2">
            {/* Left Side Text */}
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs tracking-widest text-emerald-400 uppercase">{project.kind}</p>
                <h3 className="mt-1 font-serif text-3xl text-text md:text-4xl">{project.title}</h3>
              </div>
              <div>
                <h4 className="mb-2 font-mono text-xs tracking-widest text-gold uppercase">Problem</h4>
                <p className="text-sm leading-relaxed text-white/70">{project.problem}</p>
              </div>
              <div>
                <h4 className="mb-2 font-mono text-xs tracking-widest text-gold uppercase">Solution</h4>
                <p className="text-sm leading-relaxed text-white/70">{project.solution}</p>
              </div>
              <div>
                <h4 className="mb-2 font-mono text-xs tracking-widest text-gold uppercase">Stack</h4>
                <p className="text-sm leading-relaxed text-white/70">{project.stack.join(" · ")}</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-white hover:bg-white/10">GitHub <ExternalLink size={14} /></a>}
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-black hover:bg-emerald-300">Live Demo <ExternalLink size={14} /></a>}
              </div>
            </div>

            {/* Right Side Features & Gallery */}
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-mono text-xs tracking-widest text-gold uppercase">Features</h4>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />{f}
                    </li>
                  ))}
                </ul>
              </div>
              
              {project.images.length > 0 && (
                <div>
                  <h4 className="mb-2 font-mono text-xs tracking-widest text-gold uppercase">Gallery</h4>
                  <div className="flex gap-2 overflow-x-auto max-h-[40vh] snap-x pb-2">
                    {project.images.map((img, i) => (
                      <div key={i} className={`relative shrink-0 overflow-hidden rounded-lg border border-white/10 ${project.isMobile ? "aspect-[9/19] h-[40vh]" : "aspect-video h-[40vh]"}`}>
                        <Image src={img} alt={`Screenshot ${i+1}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}