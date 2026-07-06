"use client";
import { Code2, Monitor, LayoutDashboard, Webhook, 
         ShieldCheck, Database, Sparkles, GitBranch } from 'lucide-react';
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const services = [
  {
    title: "Full Stack MERN Development",
    description: "Building end-to-end web applications with a practical, clean, and production-aware approach.",
    Icon: Code2
  },
  {
    title: "Responsive Website Development",
    description: "Creating interfaces that adapt smoothly across devices with a focus on clarity and performance.",
    Icon: Monitor
  },
  {
    title: "Dashboard Development",
    description: "Designing data-rich dashboards with readable layouts, strong structure, and useful interactions.",
    Icon: LayoutDashboard
  },
  {
    title: "REST API Development",
    description: "Developing reliable APIs with predictable structure, clean contracts, and maintainable logic.",
    Icon: Webhook
  },
  {
    title: "Authentication Systems (JWT)",
    description: "Implementing secure login flows and session handling with careful attention to user experience.",
    Icon: ShieldCheck
  },
  {
    title: "MongoDB Database Design",
    description: "Structuring schemas and data flow for scalable, practical, and real-world application needs.",
    Icon: Database
  },
  {
    title: "AI Integration into Web Apps",
    description: "Adding AI-powered features thoughtfully as a growing specialization while actively building expertise.",
    Icon: Sparkles
  },
  {
    title: "Workflow & Product Support",
    description: "Committed to quality delivery, honest communication, and steadily expanding technical depth.",
    Icon: GitBranch
  }
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-6xl px-5 py-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="mb-12 max-w-2xl"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-[#2d5d4f]" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2d5d4f]">Services</p>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <h2 className="mb-4 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
          <span className="text-[#f5f1e8]">What I can </span>
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">do for you.</span>
        </h2>
        <p className="mb-12 max-w-xl text-sm text-white/40 md:text-base">Built on MERN, growing toward AI.</p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <Card className="group relative overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#2d5d4f]/50 hover:bg-white/8 hover:shadow-[0_0_32px_rgba(45,93,79,0.14)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#2d5d4f] after:transition-all after:duration-300 hover:after:w-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2d5d4f]/30 bg-[#2d5d4f]/15 text-[#e8d48a] transition-colors group-hover:bg-[#2d5d4f]/20">
                <service.Icon size={20} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text">{service.title}</h3>
              <p className="mt-2.5 leading-7 text-text/72">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
