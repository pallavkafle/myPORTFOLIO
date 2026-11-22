"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";
import { FormEvent, useState, useEffect, useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/data/site";

type FormState = { name: string; email: string; message: string; website: string };
const initialState: FormState = { name: "", email: "", message: "", website: "" };

export default function Contact() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  // Magnetic Button logic
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    setIsFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isFinePointer || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < width * 1.5) {
      x.set(distanceX * 0.3);
      y.set(distanceY * 0.3);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((current) => ({ ...current, [field]: e.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus("error"); setMessage("All fields are required."); return;
    }
    try {
      setStatus("loading"); setMessage("");
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (!response.ok) throw new Error("Contact request failed");
      setStatus("success"); setMessage("Message sent successfully. I'll be in touch!");
      setFormState(initialState);
    } catch {
      setStatus("error"); setMessage(`Failed to send. Email: ${siteConfig.email}`);
    }
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-5 py-16 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start">
        
        {/* Left Side */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="lg:sticky lg:top-32">
          <SectionHeading
            label="Contact"
            title={<span className="text-text">Let&apos;s build <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">something.</span></span>}
            subtitle="Got a project, an internship, or a question? I take freelance work: websites, web apps and AI features."
          />
          
          <div className="mt-10 space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-white/50 mb-2">Direct Email</p>
              <button onClick={handleCopyEmail} className="group flex items-center gap-3 text-lg font-medium text-text transition-colors hover:text-emerald-400">
                {siteConfig.email}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-emerald-400/30">
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-white/60 group-hover:text-emerald-400" />}
                </div>
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">GitHub</a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">LinkedIn</a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </motion.div>

        {/* Right Side (Form Panel) */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-[#0a0f0d]/80 p-6 md:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/60">Name</span>
                <input type="text" value={formState.name} onChange={handleChange("name")} className="w-full border-b border-white/20 bg-transparent pb-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-emerald-400 transition-colors" placeholder="Your name" required />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/60">Email</span>
                <input type="email" value={formState.email} onChange={handleChange("email")} className="w-full border-b border-white/20 bg-transparent pb-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-emerald-400 transition-colors" placeholder="Your email" required />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/60">Message</span>
              <textarea value={formState.message} onChange={handleChange("message")} rows={4} className="w-full resize-none border-b border-white/20 bg-transparent pb-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-emerald-400 transition-colors" placeholder="What are you working on?" required />
            </label>
            
            <div aria-hidden="true" className="hidden"><input type="text" name="website" tabIndex={-1} value={formState.website} onChange={handleChange("website")} /></div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
              <span role="status" aria-live="polite" className={`text-sm ${status === "success" ? "text-emerald-400" : status === "error" ? "text-red-400" : "text-white/50"}`}>{message}</span>
              
              {/* Magnetic Submit Button */}
              <motion.button
                ref={buttonRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ x: isFinePointer ? springX : 0, y: isFinePointer ? springY : 0 }}
                type="submit"
                disabled={status === "loading"}
                className="group relative flex h-[140px] w-[140px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-transparent text-sm font-medium text-text transition-colors hover:border-transparent focus:border-transparent disabled:opacity-50"
              >
                <div className="absolute inset-0 h-full w-full translate-y-full bg-text transition-transform duration-500 ease-in-out group-hover:translate-y-0 group-focus:translate-y-0" />
                <span className="relative z-10 flex flex-col items-center gap-1 transition-colors duration-500 group-hover:text-background group-focus:text-background">
                  {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Let's connect"}
                </span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}