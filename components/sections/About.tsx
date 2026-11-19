"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-16">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="lg:sticky lg:top-32 h-fit"
        >
          <SectionHeading
            label="About"
            title={
              <>
                <span className="text-text">A path into </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">engineering.</span>
              </>
            }
            subtitle="Curious by nature. Disciplined by choice."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Card className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl">
            <div className="space-y-6 text-base leading-relaxed text-text/80 md:text-lg">
              <p>
                I am a Computer Engineering student at Himalaya College of Engineering, Tribhuvan University, based in Kathmandu. My path into engineering wasn&apos;t just about learning syntax—it was driven by a genuine excitement to understand how complex systems work beneath the surface.
              </p>
              <p>
                Today, I specialize in the <span className="text-emerald-400 font-medium">MERN stack</span> and build full-stack web applications. I care deeply about writing clean code and creating seamless user experiences. Whether it&apos;s building a secure expense tracker or exploring AI integrations, my focus is always on solving real problems with practical, production-ready solutions.
              </p>
              <p>
                I believe technology is freedom. My goal is to continually evolve—moving from Full Stack development into <span className="text-gold font-medium">AI Engineering</span>, and eventually building independent products that make a meaningful impact. I am detail-oriented, always exploring, and I prefer quality over quantity in everything I build.
              </p>
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}