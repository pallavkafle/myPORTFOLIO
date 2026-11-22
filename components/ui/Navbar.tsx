"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) setIsHidden(true);
    else setIsHidden(false);
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isHidden ? -100 : 0, opacity: isHidden ? 0 : 1 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[95%] max-w-4xl"
      >
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-[#0a0f0d]/80 px-6 py-3 shadow-lg backdrop-blur-md">
          <Link href="/" className="font-serif text-xl tracking-tight text-text hover:text-emerald-400 transition-colors">
            Pallav Kafle.
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-white/60 transition-colors hover:text-white">
                {link.name}
              </Link>
            ))}
            <Link href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-400 border border-emerald-400/30 transition-all hover:bg-emerald-400/20">
              Resume
            </Link>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <Link href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-400/30">
              Resume
            </Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-expanded={isMobileMenuOpen} aria-label="Toggle menu" className="text-white/70 hover:text-white">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0a0f0d]/95 backdrop-blur-lg lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-white/80 hover:text-emerald-400 transition-colors">
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}