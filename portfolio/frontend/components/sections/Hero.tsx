"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Github, Instagram, Linkedin } from "lucide-react";

const roles = [
  "Computer Engineering Student",
  "MERN Stack Developer",
  "AI & Generative AI Enthusiast"
];

const socialLinks = [
  { icon: Github, href: "https://github.com/pallavkafle", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/pallav-kafle-97701727b/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/pallav_kafle", label: "Instagram" },
  { icon: Mail, href: "mailto:kaflepallav39@gmail.com", label: "Email" }
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top,rgba(45,93,79,0.16),transparent_35%),linear-gradient(180deg,rgba(10,15,13,0.12),rgba(10,15,13,0.68))]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-6xl items-center gap-10 px-5 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="order-2 max-w-3xl text-center lg:order-1 lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-[#b9dfd4] shadow-[0_0_22px_rgba(45,93,79,0.18)]">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.9)]" />
            Available for Freelance
          </div>

          <p className="mt-5 text-sm tracking-[0.24em] text-text/60 uppercase">Kathmandu, Nepal</p>

          <h1 className="text-[clamp(2.8rem,9vw,6rem)] font-black leading-[0.9] tracking-tight text-[#f5f1e8]">
            Pallav Kafle
          </h1>

          <div className="mt-6 min-h-[3.5rem]">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text font-mono text-xl font-semibold text-transparent md:text-2xl"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-7 text-text/78 md:text-lg">
            Building modern web applications and exploring intelligent systems.
          </p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start"
          >
            <a href="#projects" className="rounded-full bg-[#2d5d4f] px-6 py-3 text-sm font-semibold text-[#f5f1e8] transition-transform hover:-translate-y-0.5 hover:bg-[#356a5a]">
              View Projects
            </a>
            <a href="/resume.pdf" download="Pallav_Kafle_Resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-text/90 backdrop-blur-md transition-colors hover:bg-white/10">
              Download Resume
            </a>
            <a href="#contact" className="rounded-full px-2 py-3 text-sm font-semibold text-text/85 transition-colors hover:text-[#e8d48a]">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-col items-center gap-5 lg:items-start"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text/85 shadow-[0_0_0_rgba(0,0,0,0)] transition-all hover:-translate-y-0.5 hover:border-[#2d5d4f]/60 hover:text-[#e8d48a] hover:shadow-[0_0_18px_rgba(45,93,79,0.3)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-10 max-w-lg border-t border-white/8 pt-6"
            >
              <p className="text-sm leading-relaxed font-light italic text-white/30">
                "The people who are crazy enough to think they can change the world are the ones who do."
              </p>
              <p className="mt-1 text-xs tracking-widest text-white/20 uppercase">
                — Steve Jobs
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7 }}
          className="order-1 relative flex justify-center lg:order-2 lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 mx-auto h-[22rem] w-[22rem] rounded-full bg-[#2d5d4f]/20 blur-3xl" />

            <div className="relative h-[220px] w-[220px] md:h-[320px] md:w-[320px]">
              <div className="absolute inset-0 rounded-full bg-[#2d5d4f]/25 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[#2d5d4f] shadow-[0_0_60px_rgba(45,93,79,0.5)] after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-t after:from-[#0a0f0d] after:via-transparent after:to-transparent after:content-['']">
                <Image
                  src="/images/profile.jpg"
                  alt="Pallav Kafle"
                  width={320}
                  height={320}
                  priority
                  className="h-full w-full rounded-full object-cover object-top"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -right-3 top-4 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-text/90 shadow-[0_0_24px_rgba(0,0,0,0.2)] backdrop-blur-xl md:block"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-text/55">Status</p>
                <p className="mt-1 font-semibold">7th Semester</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.95 }}
                className="absolute -left-4 bottom-6 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-text/90 shadow-[0_0_24px_rgba(0,0,0,0.2)] backdrop-blur-xl md:block"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-text/55">Focus</p>
                <p className="mt-1 font-semibold">MERN Stack</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute -bottom-2 right-4 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-text/90 shadow-[0_0_24px_rgba(0,0,0,0.2)] backdrop-blur-xl md:block"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-text/55">Interest</p>
                <p className="mt-1 font-semibold">AI Enthusiast</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        
      </motion.div>
    </section>
  );
}
