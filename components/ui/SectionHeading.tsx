"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({ label, title, subtitle, className = "" }: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();

  return (
    <div ref={ref} className={`mb-8 max-w-2xl ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        <div className="h-px w-8 bg-emerald-400" />
        <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-emerald-400">
          {label}
        </p>
        <div className="h-px flex-1 bg-white/5" />
      </div>
      
      <div className="overflow-hidden py-1">
        <motion.h2
          initial={reducedMotion ? false : { y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-4xl font-serif font-normal leading-[1.05] tracking-tight md:text-6xl"
        >
          {title}
        </motion.h2>
      </div>
      
      {subtitle && (
        <p className="mt-4 max-w-xl text-sm text-white/70 md:text-base">{subtitle}</p>
      )}
    </div>
  );
}