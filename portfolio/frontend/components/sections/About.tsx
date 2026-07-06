"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const cards = [
  {
    icon: "👤",
    title: "Who I Am",
    content:
      "Computer Engineering student, 7th sem, Himalaya College of Engineering, Tribhuvan University, Kathmandu"
  },
  {
    icon: "⚡",
    title: "Why Engineering",
    content: "Genuine excitement about technology and how systems work"
  },
  {
    icon: "🎯",
    title: "What Drives Me",
    content: "Curiosity, continuous learning, building things that solve real problems"
  },
  {
    icon: "🚀",
    title: "Career Vision",
    content: "Full Stack → AI Engineer → independent product builder"
  },
  {
    icon: "💡",
    title: "Personal Philosophy",
    content: "Technology is freedom"
  },
  {
    icon: "📚",
    title: "Learning Mindset",
    content: "Quality over quantity, detail-oriented, always exploring"
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="mb-10 max-w-2xl"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-[#2d5d4f]" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2d5d4f]">About</p>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <h2 className="mb-4 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
          <span className="text-[#f5f1e8]">A path into </span>
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">engineering.</span>
        </h2>
        <p className="mb-12 max-w-xl text-sm text-white/40 md:text-base">Curious by nature. Disciplined by choice.</p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <Card className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#2d5d4f]/50 hover:bg-white/8 hover:shadow-[0_0_35px_rgba(45,93,79,0.16)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#2d5d4f] after:transition-all after:duration-300 hover:after:w-full">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#e8d48a]">
                {card.icon} {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#f5f1e8]/70">{card.content}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
