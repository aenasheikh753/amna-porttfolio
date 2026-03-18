import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-bg min-h-screen">
      {/* Background ambient orbs */}
      <div className="orb w-[600px] h-[600px] bg-accent-blue/[0.04] -top-52 -right-52" style={{ animationDelay: "0s" }} />
      <div className="orb w-[500px] h-[500px] bg-accent-violet/[0.05] top-[60vh] -left-48" style={{ animationDelay: "-5s" }} />
      <div className="orb w-[400px] h-[400px] bg-accent-rose/[0.03] top-[130vh] right-0" style={{ animationDelay: "-10s" }} />
      <div className="orb w-[350px] h-[350px] bg-accent-emerald/[0.03] top-[200vh] left-1/4" style={{ animationDelay: "-3s" }} />

      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
