import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import SiteBackground from "@/components/ui/SiteBackground";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pallavkafle.com"),
  title: "Pallav Kafle — MERN Developer & AI Enthusiast",
  description:
    "Computer Engineering student at Himalaya College of Engineering building full stack and AI-powered applications.",
  keywords: ["MERN stack", "React", "Node.js", "AI", "Nepal developer"],
  alternates: {
    canonical: "https://pallavkafle.dev"
  },
  openGraph: {
    title: "Pallav Kafle — MERN Developer & AI Enthusiast",
    description:
      "Computer Engineering student at Himalaya College of Engineering building full stack and AI-powered applications.",
    url: "/",
    images: ["/images/profile.jpg"]
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <svg className="fixed inset-0 z-[9999] h-full w-full pointer-events-none opacity-[0.035]" aria-hidden="true">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}