"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { siteConfig } from "@/lib/data/site";

const roles = [
  "Computer Engineering Student",
  "MERN Stack Developer",
  "AI & Generative AI Enthusiast"
];

const socialLinks = [
  { icon: FaGithub, href: siteConfig.socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: siteConfig.socials.instagram, label: "Instagram" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

const textReveal = {
  hidden: { y: "100%" },
  visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const } },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(45,93,79,0.15),transparent_40%)]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        
        {/* Left: Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="order-2 lg:order-1"
        >
          {/* Availability Badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            Available for work
          </motion.div>

          {/* Line-Reveal Name */}
          <div className="mt-6 mb-2 overflow-hidden">
            <motion.h1
              variants={textReveal}
              className="text-[clamp(3.5rem,10vw,7.5rem)] font-serif font-normal leading-[0.9] tracking-tight text-text"
            >
              Pallav Kafle<span className="text-gold">.</span>
            </motion.h1>
          </div>

          {/* Typing Role */}
          <div className="mb-6 h-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-sm tracking-wide text-emerald-400 md:text-base"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mb-8 max-w-md text-sm leading-relaxed text-white/60 md:text-base"
          >
            Based in Kathmandu. I build full-stack applications with the MERN stack and explore the frontiers of AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-text px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              GitHub
            </a>
          </motion.div>

          {/* Socials & Location */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-12 flex items-center gap-4 border-t border-white/10 pt-6"
          >
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/30 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="h-4 w-px bg-white/10" />
            <p className="text-xs text-white/40 uppercase tracking-widest">Kathmandu, NP</p>
          </motion.div>
        </motion.div>

        {/* Right: Portrait Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl md:max-w-[400px]">
            <Image
              src="/images/profile.jpg"
              alt="Pallav Kafle"
              fill
              priority
              className="object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
            {/* Subtle overlay gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-50" />
            {/* Gold accent line */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-accent to-gold" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}