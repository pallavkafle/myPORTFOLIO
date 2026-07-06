"use client";

import Image from "next/image";

export default function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Himalayan background photo */}
      <Image src="/images/background.jpg" alt="" fill priority className="object-cover object-center" quality={90} />
      {/* Dark overlay — keeps text readable */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Subtle emerald tint */}
      <div className="absolute inset-0 bg-[#0a0f0d]/40" />
    </div>
  );
}
