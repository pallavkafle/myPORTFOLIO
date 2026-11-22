"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data/site";

const socials = [
  { label: "GitHub", href: siteConfig.socials.github, icon: FaGithub },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: FaLinkedin },
  { label: "Instagram", href: siteConfig.socials.instagram, icon: FaInstagram },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export default function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 500);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="relative z-10 bg-gradient-to-t from-[#0a0f0d] to-transparent pt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 pb-8 md:flex-row lg:px-8">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-sm font-medium text-white/80">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
            <p className="text-xs text-white/50">
              Kathmandu, Nepal
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"} aria-label={label} className="text-white/40 transition-colors hover:text-emerald-400">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {showTopButton && (
        <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition-colors hover:border-emerald-400/50 hover:text-emerald-400">
          <ArrowUp size={18} />
        </motion.button>
      )}
    </>
  );
}