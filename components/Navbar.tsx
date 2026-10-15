"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-3 pointer-events-none">
      <div
        className={`max-w-5xl mx-auto transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? "glass-panel rounded-full px-4 sm:px-6 py-2.5 shadow-[0_12px_32px_-6px_rgba(126,34,206,0.12)] border border-purple-200/60 bg-white/85 backdrop-blur-xl"
            : "bg-white/40 backdrop-blur-md rounded-full px-4 sm:px-6 py-3 border border-purple-100/60 shadow-xs"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Avatar & Gold Accent */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={handleNavClick}
          >
            <div className="relative w-9 h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-purple-600 via-amber-400 to-indigo-500 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full relative rounded-full overflow-hidden bg-purple-100">
                <Image
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  fill
                  sizes="36px"
                  style={{ objectPosition: "center 50%" }}
                  className="object-cover"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-gray-900 group-hover:text-purple-700 transition-colors">
                {personalInfo.name.split(" ")[0]}{" "}
                <span className="text-purple-700 font-bold">{personalInfo.name.split(" ")[1]}</span>
              </span>
              <span className="text-[9px] font-semibold tracking-wider uppercase text-purple-600/80 flex items-center gap-1">
                <span>Portfolio &amp; CV</span>
                <span className="text-amber-500 text-[10px]">✦</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-purple-50/60 px-2 py-1 rounded-full border border-purple-100/80 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-xs scale-102"
                      : "text-gray-600 hover:text-purple-900 hover:bg-white/80"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: View CV Pill */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-purple-950 bg-gradient-to-r from-purple-100 via-white to-amber-50 hover:from-purple-200 hover:to-amber-100 border border-purple-200 hover:border-amber-300/80 transition-all duration-300 hover:scale-[1.03] shadow-xs active:scale-[0.98] cursor-pointer"
              title="View Shalwa Febri Rahmatullah's CV (.pdf)"
            >
              <FileText className="w-3.5 h-3.5 text-purple-700" />
              <span>View CV</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-gray-700 hover:text-purple-800 hover:bg-purple-100/60 focus:outline-hidden transition-colors"
            aria-label={isMobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-purple-900" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Dropdown Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 px-3 rounded-3xl glass-panel shadow-xl border border-purple-200/80 bg-white/95 backdrop-blur-2xl animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-xs"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-purple-100 mt-2">
                <a
                  href={personalInfo.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-700 via-purple-600 to-amber-600 shadow-md transition-all active:scale-98"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View CV</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
