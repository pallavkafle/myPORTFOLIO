"use client";

import { motion } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";
import { FormEvent, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/data/site";

type FormState = { name: string; email: string; message: string; website: string };
const initialState: FormState = { name: "", email: "", message: "", website: "" };

export default function Contact() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

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
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <SectionHeading
            label="Contact"
            title={<span className="text-text">Let&apos;s build <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">something.</span></span>}
            subtitle="Got a project, an internship, or a question? Write to me."
          />
          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">Direct Email</p>
            <button onClick={handleCopyEmail} className="group flex items-center gap-3 text-lg font-medium text-text transition-colors hover:text-emerald-400">
              {siteConfig.email}
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-emerald-400/30">
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-white/60 group-hover:text-emerald-400" />}
              </div>
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#0a0f0d]/80 p-6 md:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/50">Name</span>
                <input type="text" value={formState.name} onChange={handleChange("name")} className="w-full border-b border-white/20 bg-transparent pb-2 text-sm text-text outline-none placeholder:text-white/30 focus:border-emerald-400" placeholder="Your name" required />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/50">Email</span>
                <input type="email" value={formState.email} onChange={handleChange("email")} className="w-full border-b border-white/20 bg-transparent pb-2 text-sm text-text outline-none placeholder:text-white/30 focus:border-emerald-400" placeholder="Your email" required />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-white/50">Message</span>
              <textarea value={formState.message} onChange={handleChange("message")} rows={4} className="w-full resize-none border-b border-white/20 bg-transparent pb-2 text-sm text-text outline-none placeholder:text-white/30 focus:border-emerald-400" placeholder="What are you working on?" required />
            </label>
            <div aria-hidden="true" className="hidden"><input type="text" name="website" tabIndex={-1} value={formState.website} onChange={handleChange("website")} /></div>
            <div className="flex items-center justify-between gap-4 pt-2">
              <button type="submit" disabled={status === "loading"} className="rounded-full bg-text px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100">
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              <span role="status" aria-live="polite" className={`text-sm ${status === "success" ? "text-emerald-400" : status === "error" ? "text-red-400" : "text-white/40"}`}>{message}</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}