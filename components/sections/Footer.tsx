"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import { siteConfig } from "@/lib/data/site";

const socials = [
  { label: "GitHub", href: siteConfig.socials.github, icon: FaGithub },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: FaLinkedin },
  { label: "Instagram", href: siteConfig.socials.instagram, icon: FaInstagram },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export default function Footer() {
  const reducedMotion = useReducedMotion();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 400);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-5 py-8 lg:px-8">
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reducedMotion ? 0 : 0.45 }}
      >
        <Card className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg font-semibold text-text">Pallav Kafle</p>
            <div className="flex flex-wrap items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text/80 transition-colors hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-5 text-center">
            <p className="text-sm italic text-white/50">Technology is not just tools. It is freedom.</p>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/50">
            <p>© {new Date().getFullYear()} {siteConfig.name}</p>
            <p>Built with Next.js + Tailwind</p>
          </div>
        </Card>
      </motion.div>

      {showTopButton ? (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 rounded-full border border-accent/30 bg-accent/20 p-2 text-text transition-colors hover:bg-accent/40"
        >
          <ArrowUp size={18} />
        </button>
      ) : null}
    </footer>
  );
}
