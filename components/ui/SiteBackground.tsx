"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function SiteBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0a0f0d]">
      <motion.div
        initial={reducedMotion ? false : { scale: 1.04 }}
        animate={reducedMotion ? false : { scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
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

      {/* 1. Top edge vignette for navbar clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d]/80 via-transparent to-transparent" />
      
      {/* 2. Radial edge softening so center text pops */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0a0f0d_100%)] opacity-70" />
      
      {/* 3. Seamless bottom fade into the site's background color */}
      <div className="absolute inset-x-0 bottom-0 h-[25vh] bg-gradient-to-t from-[#0a0f0d] to-transparent" />
    </div>
  );
}