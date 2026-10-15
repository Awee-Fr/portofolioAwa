import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7FD] text-[#1C1435] selection:bg-[#E9D5FF] selection:text-[#3B0764]">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Minimalist Footer & Back to Top */}
      <Footer />
    </div>
  );
}
