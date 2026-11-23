"use client";

import Image from "next/image";

export default function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#0a0f0d]">
      <Image
        src="/images/background.webp"
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-[center_30%]"
      />
      {/* Left-to-right gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0d]/95 via-[#0a0f0d]/70 to-[#0a0f0d]/40" />
      
      {/* Top and bottom fades to blend into the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d]/80 via-transparent to-[#0a0f0d]" />
    </div>
  );
}