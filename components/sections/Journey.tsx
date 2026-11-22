"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

const journeyItems = [
  {
    id: "bachelor",
    type: "education",
    title: "B.E. Computer Engineering",
    provider: "Himalaya College of Engineering, TU",
    date: "Expected 2084 B.S.",
    description: "Present",
    link: null,
    image: null,
  },
  {
    id: "mern-cert",
    type: "certificate",
    title: "MERN Stack",
    provider: "Broadway Infosys",
    date: "Completed",
    description: "45 hours. Comprehensive full-stack training.",
    link: null,
    image: null,
  },
  {
    id: "gen-ai-cert",
    type: "certificate",
    title: "Generative AI & LLMs",
    provider: "Broadway Infosys",
    date: "Completed",
    description: "45 hours. Deep dive into generative models.",
    link: null,
    image: null,
  },
  // ==========================================
  // TO ADD A NEW CERTIFICATE LATER:
  // Uncomment and fill this out.
  // ==========================================
  // {
  //   id: "new-cert-id",
  //   type: "certificate",
  //   title: "New Certificate",
  //   provider: "Provider",
  //   date: "Completed",
  //   description: "Short description.",
  //   link: "https://verify-link.com",
  //   image: "/images/certs/new-cert.jpg",
  // },
];

export default function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const reducedMotion = useReducedMotion();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} id="journey" className="relative z-10 mx-auto max-w-6xl px-5 py-16 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <SectionHeading
          label="Journey"
          title={<span className="text-text">Learn<span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">ing.</span></span>}
          subtitle="Education and certifications."
        />
      </motion.div>

      {/* Desktop: Clean 3-column Grid with scroll-drawn line */}
      <div className="relative mt-16 hidden md:block">
        {/* Static background line */}
        <div className="absolute top-[24px] left-10 right-10 h-px bg-white/10" />
        {/* Animated line */}
        <motion.div 
          style={{ scaleX: reducedMotion ? 1 : scaleX, transformOrigin: "left" }} 
          className="absolute top-[24px] left-10 right-10 h-px bg-emerald-400" 
        />
        
        <div className="grid grid-cols-3 gap-12">
          {journeyItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-[#0a0f0d] z-10">
                {item.type === "education" ? <GraduationCap size={20} className="text-emerald-400" /> : <Award size={20} className="text-gold" />}
              </div>
              
              <div className="flex w-full flex-col items-center">
                <span className="font-mono text-sm uppercase tracking-widest text-emerald-400 mb-2">{item.date}</span>
                <h3 className="text-2xl font-serif text-text">{item.title}</h3>
                <p className="mt-1 text-base text-white/80">{item.provider}</p>
                {item.description && <p className="mt-2 text-sm text-white/50">{item.description}</p>}

                {/* Big Certificate Image */}
                {item.type === "certificate" && (
                  <div className="mt-8 w-full aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5 flex items-center justify-center relative">
                    {item.image ? (
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    ) : (
                      <span className="font-mono text-sm text-white/30">Certificate image coming soon</span>
                    )}
                  </div>
                )}
                
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-white transition-colors">
                    Verify <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: Vertical timeline */}
      <div className="relative mt-12 md:hidden pl-6">
        <div className="absolute left-[7px] top-2 bottom-0 w-px bg-white/10" />
        <div className="flex flex-col gap-12">
          {journeyItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[1.65rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/30 bg-[#0a0f0d]">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">{item.date}</span>
                <h3 className="text-2xl font-serif text-text">{item.title}</h3>
                <p className="text-base text-white/80">{item.provider}</p>
                {item.description && <p className="text-sm text-white/50">{item.description}</p>}
                
                {item.type === "certificate" && (
                  <div className="mt-4 w-full aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5 flex items-center justify-center relative">
                    {item.image ? (
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    ) : (
                      <span className="font-mono text-xs text-white/30">Certificate image coming soon</span>
                    )}
                  </div>
                )}

                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm text-gold hover:text-white transition-colors">
                    Verify <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}