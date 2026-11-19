import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
        extend: {
      backdropBlur: {
        xs: "2px"
      },
      colors: {
        background: "#0a0f0d",
        secondary: "#1a1f1c",
        card: "rgba(255,255,255,0.05)",
        accent: "#2d5d4f",
        gold: "#e8d48a",
        text: "#f5f1e8"
      },
            fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      }
    }
  },
  plugins: []
};

export default config;
