"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-16 px-5 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        
        {/* Left Column: Sticky Statement & Facts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lg:sticky lg:top-32 h-fit"
        >
          <SectionHeading
            label="About"
            title={<span className="text-text">The person <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">behind the code.</span></span>}
          />
          
          <div className="mt-8 space-y-4 border-l border-white/10 pl-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-white/40">Location</p>
              <p className="text-sm text-white/80">Kathmandu, Nepal</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-white/40">Education</p>
              <p className="text-sm text-white/80">Himalaya College of Engineering</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-white/40">Currently Building</p>
              <p className="text-sm text-emerald-400">TaskSathi</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Scrolling Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="space-y-8 text-base leading-relaxed text-white/70 md:text-lg"
        >
          <p>
            I&apos;m a computer engineering student at Himalaya College of Engineering in Kathmandu.
          </p>
          <p>
            I started with the MERN stack because it let me build a whole app alone. Then I got curious about AI. <span className="text-white">TaskSathi</span> is where I&apos;m testing it, and the part I care about is making AI wait for a human yes.
          </p>
          <p>
            The photo behind this page is Annapurna. I&apos;m open to freelance work and internships, so if you have something to build, <a href="#contact" className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300">write to me.</a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}