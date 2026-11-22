"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig } from "@/lib/data/site";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_auto] lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            Available for freelance and internships
          </div>

          <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-serif font-normal leading-[0.9] tracking-tight text-text drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Pallav Kafle<span className="text-gold">.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-start lg:justify-end"
        >
          <div className="relative h-[260px] w-[260px] overflow-hidden rounded-full border border-white/10 shadow-2xl md:h-[300px] md:w-[300px]">
            <Image
              src="/images/profile.webp"
              alt="Pallav Kafle"
              fill
              priority
              className="object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 mt-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <p className="max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            Computer engineering student in Kathmandu. I build web and Android apps, and I&apos;m learning to make AI features that behave.
          </p>

          <div className="flex items-center gap-6">
            <MagneticButton href="#contact">Let&apos;s Talk</MagneticButton>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-sm font-medium text-white/60 underline underline-offset-4 hover:text-white transition-colors">
              Download resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}