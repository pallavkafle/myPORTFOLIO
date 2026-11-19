"use client";
import { Code2, Monitor, LayoutDashboard, Webhook, 
         ShieldCheck, Database, Sparkles, GitBranch } from 'lucide-react';
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

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
      >
        <SectionHeading
          label="Services"
          title={
            <>
              <span className="text-text">What I can </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">do for you.</span>
            </>
          }
          subtitle="Built on MERN, growing toward AI."
        />
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
            <Card className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.08] hover:shadow-[0_0_32px_rgba(45,93,79,0.14)] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/15 text-gold transition-colors group-hover:bg-accent/20">
                <service.Icon size={20} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text">{service.title}</h3>
              <p className="mt-2.5 leading-7 text-text/70">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}