import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import SiteBackground from "@/components/ui/SiteBackground";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-serif", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const SITE_URL = "https://pallavkafle.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pallav Kafle — MERN Developer & AI Enthusiast",
    template: "%s · Pallav Kafle",
  },
  description:
    "Computer Engineering student at Himalaya College of Engineering building full stack and AI-powered applications.",
  keywords: ["MERN stack", "React", "Node.js", "AI", "Nepal developer", "Pallav Kafle"],
  authors: [{ name: "Pallav Kafle", url: SITE_URL }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: "Pallav Kafle",
    title: "Pallav Kafle — MERN Developer & AI Enthusiast",
    description:
      "Computer Engineering student at Himalaya College of Engineering building full stack and AI-powered applications.",
    url: SITE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Pallav Kafle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pallav Kafle — MERN Developer & AI Enthusiast",
    description:
      "Computer Engineering student at Himalaya College of Engineering building full stack and AI-powered applications.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.ico", apple: "/apple-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}