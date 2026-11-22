import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/ui/Navbar";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-emerald-400 focus:px-4 focus:py-2 focus:text-black focus:font-semibold">
        Skip to content
      </a>
      <main id="main-content">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Journey />
        <Contact />
        <Footer />
      </main>
    </>
  );
}