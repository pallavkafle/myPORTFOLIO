"use client";

import Image from "next/image";

export default function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Image
        src="/images/background.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        quality={75}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[#0a0f0d]/40" />
    </div>
  );
}