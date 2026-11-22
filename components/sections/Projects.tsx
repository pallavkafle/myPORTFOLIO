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

  return (
    <>
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            label="Projects"
            title={
              <>
                <span className="text-text">Selected </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Work.</span>
              </>
            }
            subtitle="Real problems. Real solutions. Real code."
          />
        </motion.div>

        <div className="mt-16 flex flex-col gap-24">
          {visibleProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isMobileApp = project.isMobile;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col gap-8 lg:items-center lg:gap-16 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                      {project.status}
                    </span>
                    <span className="text-xs font-medium tracking-widest text-white/40 uppercase">
                      {project.kind}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-serif text-text md:text-4xl">{project.title}</h3>
                  <p className="text-base leading-relaxed text-white/60 md:text-lg">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-text transition-colors hover:text-emerald-400"
                    >
                      View Case Study
                      <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm text-white/40 hover:text-white">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual Content */}
                <div className="flex-1">
                  {isMobileApp ? (
                    /* 3-Phone overlapping fan effect for mobile apps */
                    <div className="flex justify-center gap-2 md:gap-4 py-4 overflow-hidden">
                      {project.images.slice(0, 3).map((img, i) => (
                        <div
                          key={i}
                          className={`relative w-[110px] md:w-[160px] shrink-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black aspect-[9/19] shadow-2xl transition-transform duration-500 hover:scale-105 ${
                            i === 0 ? "translate-y-6" : i === 2 ? "-translate-y-6" : "z-10"
                          }`}
                        >
                          {img ? (
                            <Image src={img} alt={`${project.title} screen ${i + 1}`} fill className="object-cover" />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-white/5">
                              <span className="font-mono text-xs text-white/30">Img {i+1}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Single landscape image for web apps */
                    <div className="group relative w-full aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                      {project.images[0] ? (
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 to-transparent">
                          <span className="font-mono text-sm text-white/30">{project.title}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
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

// Accessible Modal Component
function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const focusableElements = modalRef.current?.querySelectorAll(
          'a[href], button, textarea, input, select'
        );
        if (!focusableElements?.length) return;
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;
  
  const isMobileApp = project.isMobile;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-md"
        >
          <motion.div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0a0f0d] p-6 shadow-2xl md:p-10"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-50 rounded-full border border-white/10 bg-black/50 p-2 text-white/70 backdrop-blur-sm transition-colors hover:border-white/30 hover:text-white"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="mb-8 pr-12">
              <p className="font-mono text-xs tracking-widest text-accent uppercase">{project.kind}</p>
              <h3 id="modal-title" className="mt-2 text-3xl font-serif text-text md:text-5xl">{project.title}</h3>
            </div>

            {/* Image Gallery */}
            {project.images.length > 0 && (
              <div className="mb-8 flex gap-4 overflow-x-auto pb-4 snap-x">
                {project.images.map((img, i) => (
                  <div 
                    key={i} 
                    className={`relative shrink-0 overflow-hidden rounded-xl border border-white/10 snap-center ${
                      isMobileApp 
                        ? "h-[300px] w-[150px] md:h-[400px] md:w-[200px] aspect-[9/19]" 
                        : "h-64 w-[80vw] md:h-96 md:w-[600px] aspect-video"
                    }`}
                  >
                    <Image src={img} alt={`${project.title} screenshot ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 font-mono text-sm tracking-widest text-gold uppercase">Problem</h4>
                  <p className="text-sm leading-relaxed text-white/70">{project.problem}</p>
                </div>
                <div>
                  <h4 className="mb-2 font-mono text-sm tracking-widest text-gold uppercase">Solution</h4>
                  <p className="text-sm leading-relaxed text-white/70">{project.solution}</p>
                </div>
                <div>
                  <h4 className="mb-2 font-mono text-sm tracking-widest text-gold uppercase">Tech Stack</h4>
                  <p className="text-sm leading-relaxed text-white/70">{project.stack.join(" · ")}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 font-mono text-sm tracking-widest text-gold uppercase">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-white/70">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-mono text-sm tracking-widest text-gold uppercase">My Role</h4>
                  <p className="text-sm leading-relaxed text-white/70">{project.role ?? "Full Stack Development"}</p>
                </div>
                <div>
                  <h4 className="mb-2 font-mono text-sm tracking-widest text-gold uppercase">Future Plans</h4>
                  <p className="text-sm leading-relaxed text-white/70">{project.future}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 border-t border-white/10 pt-6">
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10">
                  GitHub <ExternalLink size={16} />
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-emerald-300">
                  Live Demo <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}