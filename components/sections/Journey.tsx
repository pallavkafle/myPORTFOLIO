"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

const journeyItems: {
  id: string;
  type: "education" | "certificate";
  title: string;
  provider: string;
  date: string;
  description: string;
  link: string | null;
  image: string | null;
}[] = [
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
    description: "45 hours.",
    link: null,
    image: null,
  },
  {
    id: "gen-ai-cert",
    type: "certificate",
    title: "Generative AI & LLMs",
    provider: "Broadway Infosys",
    date: "Completed",
    description: "45 hours.",
    link: null,
    image: null,
  },
  {
    id: "reserved",
    type: "certificate",
    title: "Reserved Slot",
    provider: "",
    date: "",
    description: "",
    link: null,
    image: null,
  }
];

export default function Journey() {
  return (
    <section id="journey" className="relative z-10 mx-auto max-w-6xl px-5 py-16 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <SectionHeading
          label="Journey"
          title={<span className="text-text">Learn<span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">ing.</span></span>}
          subtitle="Education and certifications."
        />
      </motion.div>

      {/* Desktop: Horizontal timeline */}
      <div className="relative mt-16 hidden md:block">
        <div className="absolute top-[40%] left-0 right-0 h-px bg-white/10" />
        <div className="grid grid-cols-4 gap-6">
          {journeyItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/30 bg-[#0a0f0d] z-10">
                {item.type === "education" ? <GraduationCap size={16} className="text-emerald-400" /> : <Award size={16} className="text-gold" />}
              </div>
              
              <div className="flex w-full flex-col items-center">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">{item.date}</span>
                <h3 className="mt-2 text-lg font-serif text-text">{item.title}</h3>
                <p className="mt-1 text-sm text-white/60">{item.provider}</p>
                {item.description && <p className="mt-1 text-xs text-white/40">{item.description}</p>}

                {/* Landscape Certificate Image Placeholder */}
                {item.type === "certificate" && item.id !== "reserved" && (
                  <div className="mt-6 w-[115%] -ml-[7.5%] aspect-video overflow-hidden rounded-lg border border-white/10 bg-white/5 flex items-center justify-center relative">
                    {item.image ? (
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    ) : (
                      <span className="font-mono text-xs text-white/40">Certificate image</span>
                    )}
                  </div>
                )}
                
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs text-gold hover:text-white transition-colors">
                    Verify <ExternalLink size={12} />
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
        <div className="flex flex-col gap-10">
          {journeyItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[1.65rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-emerald-400/30 bg-[#0a0f0d]">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">{item.date}</span>
                <h3 className="text-xl font-serif text-text">{item.title}</h3>
                <p className="text-sm text-white/60">{item.provider}</p>
                {item.description && <p className="text-sm text-white/40">{item.description}</p>}
                
                {item.type === "certificate" && item.id !== "reserved" && (
                  <div className="mt-4 w-full aspect-video overflow-hidden rounded-lg border border-white/10 bg-white/5 flex items-center justify-center relative">
                    {item.image ? (
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    ) : (
                      <span className="font-mono text-xs text-white/40">Certificate image</span>
                    )}
                  </div>
                )}

                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs text-gold hover:text-white transition-colors">
                    Verify <ExternalLink size={12} />
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