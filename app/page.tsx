import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import GitHub from "@/components/sections/GitHub";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Navbar from "@/components/ui/Navbar";
import Now from "@/components/sections/Now";

export default function HomePage() {
  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-emerald-400 focus:px-4 focus:py-2 focus:text-black focus:font-semibold"
      >
        Skip to content
      </a>
    <main id="main-content">
      <Navbar />
      <Hero />
      <Projects />
      <Now />
      <About />
      <Skills />
      <Services />
      <Journey />
      <GitHub />
      <Contact />
      <Footer />
    </main>
    </>
  );
}
