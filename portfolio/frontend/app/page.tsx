import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import GitHub from "@/components/sections/GitHub";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Navbar from "@/components/ui/Navbar";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Certifications />
      <Education />
      <Projects />
      <GitHub />
      <Contact />
      <Footer />
    </main>
  );
}
