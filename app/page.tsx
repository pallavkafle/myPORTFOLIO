import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Now from "@/components/sections/Now";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/ui/Navbar";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Now />
      <About />
      <Skills />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}