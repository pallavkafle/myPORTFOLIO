"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const tags = ["Generative AI", "LLMs", "React Ecosystem", "Production Architecture"];

export default function Education() {
  return (
    <section id="education" className="relative z-10 mx-auto max-w-6xl px-5 py-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <SectionHeading
          label="Education"
          title={
            <>
              <span className="text-text">Where I&apos;m </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">learning.</span>
            </>
          }
          subtitle="Knowledge compounds. So does effort."
        />
      </motion.div>

      <div className="relative pl-8">
        <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-accent/80 via-white/10 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <span className="absolute -left-[1.05rem] top-7 h-4 w-4 rounded-full border border-accent/60 bg-accent shadow-[0_0_18px_rgba(45,93,79,0.35)]" />

            <p className="text-sm font-medium tracking-[0.3em] text-text/50 uppercase">Himalaya College of Engineering</p>
            <h3 className="mt-3 text-2xl font-semibold text-text">Tribhuvan University</h3>
            <p className="mt-2 text-lg text-text/80">B.E. Computer Engineering</p>

            <div className="mt-5 flex flex-wrap gap-3 text-sm text-text/75">
              <span className="rounded-full border border-white/10 bg-black/25 px-4 py-2">Currently Enrolled</span>
              <span className="rounded-full border border-white/10 bg-black/25 px-4 py-2">Expected Graduation: 2084 B.S.</span>
            </div>

            <p className="mt-5 leading-7 text-text/75">Focus: Full Stack Development + AI Engineering</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <Card className="mt-5 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-sm font-medium tracking-[0.3em] text-text/50 uppercase">Current Learning Focus</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-text/80">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}