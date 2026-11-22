"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/lib/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const visibleProjects = projects.filter((p) => p.visible);

  return (
    <>
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <SectionHeading
            label="Work"
            title={<span className="text-text">Selected <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">work.</span></span>}
            subtitle="Three projects: what they do, and how I built them."
          />
        </motion.div>

        <div className="mt-16 flex flex-col gap-[96px]">
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
                <div className="flex-1 max-w-[520px] space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-400">{project.status}</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-white/50">{project.type}</span>
                  </div>
                  <h3 className="text-3xl font-serif text-text md:text-4xl">{project.title}</h3>
                  <p className="text-base leading-relaxed text-white/70 line-clamp-2">{project.summary}</p>
                  
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

                <div className="flex-1 w-full">
                  <ProjectCarousel project={project} />
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

function ProjectCarousel({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = project.type === "Mobile app";
  
  if (project.images.length === 0) {
    return (
      <div className={`relative mx-auto flex items-center justify-center rounded-2xl border border-white/10 bg-[#0a0f0d] ${isMobile ? "aspect-[9/19] max-w-[240px]" : "aspect-video w-full max-w-[600px]"}`}>
        {isMobile && <div className="absolute top-0 left-1/2 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-white/10" />}
        <span className="font-mono text-xs text-white/30">Screenshot coming</span>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className={`relative mx-auto overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f0d] ${isMobile ? "aspect-[9/19] max-w-[240px]" : "aspect-video w-full max-w-[600px]"}`}>
        {isMobile && <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-white/10" />}
        <Image src={project.images[currentIndex]} alt={project.title} fill className="object-cover" />
      </div>
      
      {project.images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          <button onClick={() => setCurrentIndex((i) => i > 0 ? i - 1 : project.images.length - 1)} className="p-1 text-white/50 hover:text-white"><ChevronLeft size={16} /></button>
          {project.images.map((_, i) => (
            <div key={i} className={`h-1.5 w-1.5 rounded-full ${i === currentIndex ? "bg-emerald-400" : "bg-white/20"}`} />
          ))}
          <button onClick={() => setCurrentIndex((i) => i < project.images.length - 1 ? i + 1 : 0)} className="p-1 text-white/50 hover:text-white"><ChevronRight size={16} /></button>
        </div>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "behaves">("overview");

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
          className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f0d] shadow-2xl flex flex-col"
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-[#0a0f0d] p-6 z-10 sticky top-0">
            <div>
              <p className="font-mono text-xs tracking-widest text-emerald-400 uppercase">{project.type} • {project.status}</p>
              <h3 className="mt-1 font-serif text-3xl text-text md:text-4xl">{project.title}</h3>
            </div>
            <button onClick={onClose} className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white" aria-label="Close modal">
              <X size={20} />
            </button>
          </div>

          <div className="overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-white/20">
            <div className="grid gap-12 lg:grid-cols-[1fr_350px]">
              <div className="space-y-8">
                <div>
                  <h4 className="mb-3 font-mono text-xs tracking-widest text-gold uppercase">Overview</h4>
                  <p className="text-sm leading-relaxed text-white/80">{project.summary}</p>
                </div>
                <div>
                  <h4 className="mb-3 font-mono text-xs tracking-widest text-gold uppercase">The Problem</h4>
                  <p className="text-sm leading-relaxed text-white/80">{project.problem}</p>
                </div>
                <div>
                  <h4 className="mb-3 font-mono text-xs tracking-widest text-gold uppercase">What I Built</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.features.map(f => (
                      <div key={f.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-text">{f.name}</span>
                          <span className={`rounded px-2 py-0.5 text-[10px] font-mono uppercase ${f.status === "Done" ? "bg-emerald-400/10 text-emerald-400" : f.status === "In progress" ? "bg-gold/10 text-gold" : "bg-white/10 text-white/50"}`}>{f.status}</span>
                        </div>
                        <p className="text-xs text-white/60">{f.what}</p>
                        <p className="text-xs text-white/40 mt-1">{f.how}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex border-b border-white/10 gap-6">
                  <button onClick={() => setActiveTab("overview")} className={`pb-2 text-sm font-medium transition-colors ${activeTab === "overview" ? "text-white border-b-2 border-emerald-400" : "text-white/50 hover:text-white"}`}>Details</button>
                  <button onClick={() => setActiveTab("behaves")} className={`pb-2 text-sm font-medium transition-colors ${activeTab === "behaves" ? "text-white border-b-2 border-emerald-400" : "text-white/50 hover:text-white"}`}>How it behaves</button>
                </div>

                {activeTab === "overview" ? (
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 font-mono text-xs tracking-widest text-gold uppercase">My Part</h4>
                      <p className="text-sm text-white/80">{project.myPart}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-mono text-xs tracking-widest text-gold uppercase">What I Learned</h4>
                      <p className="text-sm text-white/80">{project.learned}</p>
                    </div>
                    {project.credits && (
                      <div>
                        <h4 className="mb-2 font-mono text-xs tracking-widest text-gold uppercase">Credits</h4>
                        <p className="text-sm text-white/60">{project.credits}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 font-mono text-xs tracking-widest text-emerald-400 uppercase">Code vs AI</h4>
                      <p className="text-sm text-white/80">{project.behaves.codeVsAi}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-mono text-xs tracking-widest text-emerald-400 uppercase">Failure Modes</h4>
                      <p className="text-sm text-white/80">{project.behaves.failure}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-mono text-xs tracking-widest text-emerald-400 uppercase">Trade-offs</h4>
                      <p className="text-sm text-white/80">{project.behaves.tradeoff}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-8">
                {project.images.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs tracking-widest text-white/50 uppercase">Gallery</h4>
                    <div className="flex flex-col gap-3">
                      {project.images.map((img, i) => (
                        <div key={i} className={`relative overflow-hidden rounded-lg border border-white/10 ${project.type === "Mobile app" ? "aspect-[9/19] max-h-[400px]" : "aspect-video"}`}>
                          <Image src={img} alt={`Shot ${i+1}`} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-4 pt-4">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/5 py-3 text-sm text-white hover:bg-white/10 transition-colors">
                      <ExternalLink size={16} /> GitHub Repository
                    </a>
                  )}
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 py-3 text-sm font-semibold text-black hover:bg-emerald-300 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {!project.repo && !project.liveDemo && (
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                      <p className="text-xs text-white/50">Links not available yet</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}