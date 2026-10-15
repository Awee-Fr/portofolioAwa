"use client";

import { 
  ArrowUp, 
  MapPin, 
  Mail, 
  Building2,
  GraduationCap
} from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer 
      id="social-footer" 
      className="bg-[#170C2A] text-white border-t border-purple-500/20 pt-16 pb-10 relative overflow-hidden"
    >
      {/* Ambient background subtle glows */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-10 w-[400px] h-[250px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 3 Columns Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-purple-500/20 items-start">
          
          {/* Column 1: Brand & Profile Bio (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 via-purple-500 to-amber-400 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                SF
              </div>
              <h3 className="text-lg font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed pr-2 sm:pr-4">
              Informatics Management student at Politeknik Negeri Padang. Focused on responsive web development, relational database architecture, and visual design aesthetics.
            </p>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 text-purple-200 hover:text-white border border-white/10 transition-all duration-200 flex items-center justify-center hover:scale-105 shadow-xs"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 text-purple-200 hover:text-white border border-white/10 transition-all duration-200 flex items-center justify-center hover:scale-105 shadow-xs"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 text-purple-200 hover:text-white border border-white/10 transition-all duration-200 flex items-center justify-center hover:scale-105 shadow-xs"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span>Page Navigation</span>
              <span className="text-amber-400 text-xs">✦</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-purple-200/80">
              <li>
                <Link href="#home" className="hover:text-amber-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-amber-300 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-amber-300 transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-amber-300 transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-amber-300 transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-amber-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Campus Details (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span>Contact &amp; Campus</span>
              <span className="text-purple-400 text-xs">✦</span>
            </h4>
            <ul className="space-y-2 text-xs text-purple-200/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Padang, West Sumatra, Indonesia</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>Politeknik Negeri Padang (Informatics Management)</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-amber-300 transition-colors underline decoration-purple-500/50 underline-offset-2 break-all"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-3.5 h-3.5 text-emerald-400 font-bold shrink-0 mt-0.5 text-center leading-none">✆</span>
                <a 
                  href="https://wa.me/6282390521671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors underline decoration-purple-500/50 underline-offset-2"
                >
                  {personalInfo.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-purple-300/70 text-center sm:text-left">
          <p>
            &copy; {currentYear} {personalInfo.name}. All Rights Reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-purple-300 hover:text-amber-300 transition-colors cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
