"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import {  Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import Card from "@/components/ui/Card";
import { SiGithub } from "react-icons/si";
import { siteConfig } from "@/lib/data/site";

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
  website: "",
};

const contactLinks = [
  { label: "GitHub", href: siteConfig.socials.github, icon: FaGithub },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: FaLinkedin },
  { label: "Instagram", href: siteConfig.socials.instagram, icon: FaInstagram },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];;

export default function Contact() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const reducedMotion = useReducedMotion();

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus("error");
      setMessage("All fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("loading");
      setMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setStatus("success");
      setMessage("Message sent successfully");
      setFormState(initialState);
    } catch {
      setStatus("error");
      setMessage(`Failed to send. Email: ${siteConfig.email}`);
    }
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-5 py-20 lg:px-8">
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reducedMotion ? 0 : 0.55 }}
        className="mb-12 max-w-2xl"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-accent" />
          <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-accent">Contact</p>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <h2 className="mb-4 text-4xl font-serif font-normal leading-[1.05] tracking-tight md:text-6xl">
          <span className="text-text">Let&apos;s </span>
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">connect.</span>
        </h2>
        <p className="mb-12 max-w-xl text-sm text-white/60 md:text-base">A message is the start of something.</p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.55 }}
        >
          <Card className="rounded-2xl border border-white/10 bg-black/40 p-5 font-mono text-sm text-text/80 shadow-[0_0_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4 text-text/55">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3">terminal — contact.sh</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block space-y-2">
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-text/55"><span className="text-accent">&gt;</span>Name</span>
                <input
                  type="text"
                  value={formState.name}
                  onChange={handleChange("name")}
                  className="w-full border-b border-white/10 bg-transparent px-0 py-2 text-text outline-none placeholder:text-text/50 focus:border-accent"
                  placeholder="Your name"
                />
              </label>

              <label className="block space-y-2">
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-text/55"><span className="text-accent">&gt;</span>Email</span>
                <input
                  type="email"
                  value={formState.email}
                  onChange={handleChange("email")}
                  className="w-full border-b border-white/10 bg-transparent px-0 py-2 text-text outline-none placeholder:text-text/50 focus:border-accent"
                  placeholder="name@example.com"
                />
              </label>

              <label className="block space-y-2">
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-text/55"><span className="text-accent">&gt;</span>Message</span>
                <textarea
                  value={formState.message}
                  onChange={handleChange("message")}
                  rows={6}
                  className="w-full border-b border-white/10 bg-transparent px-0 py-2 text-text outline-none placeholder:text-text/50 focus:border-accent"
                  placeholder="Type your message..."
                />
              </label>

              <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                <label>
                  Leave empty
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formState.website}
                    onChange={handleChange("website")}
                  />
                </label>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-sm text-text transition-colors hover:bg-[#356a5a] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      sending_<span className="inline-block h-4 w-2 animate-[blink_1s_steps(2,end)_infinite] bg-text" />
                    </>
                  ) : (
                    "send message ↵"
                  )}
                </button>

                <span className={`text-sm ${status === "success" ? "text-green-400" : status === "error" ? "text-red-400" : "text-text/55"}`}>
                  {status === "success" ? "✓ message sent successfully" : message}
                </span>
              </div>
            </form>

            <div className="mt-6 border-t border-white/10 pt-5 font-mono text-sm text-text/80">
              <div className="space-y-2">
                <p><Mail size={16} className="inline mr-2" /> <a className="text-gold" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
                <p><Phone size={16} className="inline mr-2" /> <a className="text-gold" href={`tel:+977${siteConfig.phone}`}>{siteConfig.phone}</a></p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {contactLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "Email" ? undefined : "_blank"}
                    rel={label === "Email" ? undefined : "noreferrer"}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text/80 transition-all hover:translate-y-[-1px] hover:border-accent/50 hover:text-accent hover:shadow-[0_0_18px_rgba(45,93,79,0.25)]"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.55 }}
        >
          <Card className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-sm font-medium tracking-[0.3em] text-text/50 uppercase">Availability</p>
            <p className="mt-4 leading-7 text-text/75">
              I am open to freelance work, internships, and collaborative builds where quality, honesty, and consistent progress matter.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <p className="text-sm font-medium tracking-[0.24em] text-text/50 uppercase">Quick note</p>
              <p className="mt-3 text-sm leading-7 text-text/70">
                If the form does not reach the backend, email me directly and I will respond as soon as possible.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}