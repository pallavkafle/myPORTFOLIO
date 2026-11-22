"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const journeyItems = [
  {
    id: "bachelor",
    type: "education",
    title: "B.E. Computer Engineering",
    provider: "Himalaya College of Engineering, TU",
    date: "Present",
    description: "Expected graduation 2084 B.S.",
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
];

export default function Journey() {
  return (
    <section id="journey" className="relative z-10 mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <SectionHeading
          label="Journey"
          title={<span className="text-text">Learn<span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">ing.</span></span>}
        />
      </motion.div>

      <div className="relative mt-12 pl-6 md:pl-8">
        <div className="absolute left-[3px] top-2 bottom-0 w-px bg-white/10 md:left-[7px]" />

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
              <div className="absolute -left-[1.65rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-emerald-400/30 bg-[#0a0f0d] md:-left-[2.15rem]">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">{item.date}</span>
                <h3 className="text-xl font-serif text-text">{item.title}</h3>
                <p className="text-sm text-white/60">{item.provider}</p>
                {item.description && <p className="text-sm text-white/40 mt-1">{item.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}