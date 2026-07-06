'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // ── Scroll detection ──
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setScrollProgress((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);

      // Detect active section (for highlight)
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'services', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Navigation links ──
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
        style={{ width: `${scrollProgress}%`, opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />

      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : 'shadow-none'
        }`}
        style={{
          background: isScrolled
            ? 'rgba(13, 12, 16, 0.88)'
            : 'rgba(13, 12, 16, 0.55)',
          backdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${isScrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)'}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex-shrink-0 text-lg font-semibold tracking-tight text-[#f5f1e8] hover:text-emerald-400 transition-colors duration-200 group flex items-center gap-1"
            >
              <span className="relative">
                Pallav Kafle
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/5 ${
                      isActive ? 'text-white' : 'text-[#b0aab5] hover:text-white'
                    }`}
                  >
                    {link.name}
                    {/* Active indicator */}
                    <motion.span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? '70%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                );
              })}
              <Link
                href="/resume"
                className="ml-2 px-4 py-2 text-sm font-medium text-emerald-400 border border-emerald-400/30 rounded-full hover:bg-emerald-400/10 hover:border-emerald-400/60 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(52,211,153,0.1)] hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]"
              >
                Resume
              </Link>
            </nav>

            {/* ── Mobile Menu Button ── */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#b0aab5] hover:text-white hover:bg-white/5 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden overflow-hidden bg-[#0d0c10]/95 backdrop-blur-lg border-t border-white/5"
        >
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-[#b0aab5] hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/resume"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-medium text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-colors duration-200"
            >
              Resume
            </Link>
          </div>
        </motion.div>
      </motion.header>

      {/* ── Spacer ── */}
      <div className="h-16" />
    </>
  );
}