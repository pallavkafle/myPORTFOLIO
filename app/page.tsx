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
    <main>
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
  );
}
