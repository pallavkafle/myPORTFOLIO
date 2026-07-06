"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Card from "@/components/ui/Card";

const certifications = [
  {
    provider: "Broadway Infosys",
    title: "Professional MERN Stack Training",
    meta: "45 Hours | 11 June – 11 July 2025",
    verify: "verify.broadwayinfosys.com",
    completed: true
  },
  {
    provider: "Broadway Infosys",
    title: "Generative AI & Large Language Models",
    meta: "Currently Pursuing | Expected: Soon",
    verify: null,
    completed: false
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 mx-auto max-w-6xl px-5 py-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="mb-10 max-w-2xl"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-[#2d5d4f]" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2d5d4f]">Certifications</p>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <h2 className="mb-4 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
          <span className="text-[#f5f1e8]">Proof of </span>
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">the work.</span>
        </h2>
        <p className="mb-12 max-w-xl text-sm text-white/40 md:text-base">Learning never stops — here's the receipts.</p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <Card className={`relative overflow-hidden rounded-2xl border bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#2d5d4f]/50 hover:shadow-[0_0_34px_rgba(45,93,79,0.14)] ${
              cert.completed ? "border-[#2d5d4f]/40 shadow-[0_0_24px_rgba(45,93,79,0.12)]" : "border-white/8"
            }`}>
              <div className={`absolute left-0 top-0 h-[3px] w-full ${cert.completed ? "bg-[#2d5d4f]" : "bg-[#e8d48a]"}`} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-[0.3em] text-text/50 uppercase">{cert.provider}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-text">{cert.title}</h3>
                </div>
                {cert.completed ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#2d5d4f]/30 bg-[#2d5d4f]/15 px-3 py-1 text-xs text-[#b9dfd4] shadow-[0_0_18px_rgba(45,93,79,0.2)]">
                    <BadgeCheck size={14} /> VERIFIED
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#e8d48a]/30 bg-[#e8d48a]/10 px-3 py-1 text-xs text-[#e8d48a]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#e8d48a]" /> IN PROGRESS
                  </span>
                )}
              </div>

              <div className="mt-5 space-y-2 text-sm text-text/75">
                <p>Issuer: <span className="text-text/90">{cert.provider}</span></p>
                <p>{cert.meta}</p>
                {cert.completed ? <p>Duration: 45 Hours</p> : <p>Status: Currently Pursuing</p>}
              </div>

              {cert.verify ? (
                <div className="mt-5">
                  <a href={`https://${cert.verify}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-[#e8d48a] transition-colors hover:text-[#f5f1e8]">
                    {cert.verify} <ArrowUpRight size={16} />
                  </a>
                </div>
              ) : null}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
