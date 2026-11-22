"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function SiteBackground() {
  const { scrollY } = useScroll();
  const reducedMotion = useReducedMotion();
  
  // Very slow parallax movement (0 to 100px over the whole scroll)
  const y = useTransform(scrollY, [0, 2000], [0, 100]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0a0f0d]">
      <motion.div style={{ y: reducedMotion ? 0 : y }} className="absolute inset-0 h-[110%] -top-[5%]">
        <Image 
          src="/images/background.webp" 
          alt="" 
          fill 
          priority 
          quality={85} 
          sizes="100vw" 
          className="object-cover object-[center_35%]" 
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0d]/95 via-[#0a0f0d]/70 to-[#0a0f0d]/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f0d]" />
    </div>
  );
}