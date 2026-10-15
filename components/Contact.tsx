"use client";

import { 
  ArrowRight, 
  FileText, 
  Share2, 
  FileCode, 
  Mail, 
  Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio-data";

export default function Contact() {
  const gmailDirectUrl = `https://mail.google.com/mail/u/0/?to=${personalInfo.email}&su=Meeting+Request&fs=1&tf=cm`;

  return (
    <section 
      id="contact" 
      className="py-24 bg-gradient-to-b from-[#F3EAFA] via-[#F8F2FE] to-[#F1E6FA] relative overflow-hidden scroll-mt-28"
    >
      {/* Background Ambient Subtle Glows */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-purple-300/20 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-10 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Quick Action Pill Strip */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300/70 to-purple-300/70 hidden sm:block" />
          
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {/* Pill 1: View CV */}
            <a
              href={personalInfo.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white hover:bg-purple-50 text-purple-950 font-bold text-xs sm:text-sm border border-purple-200 hover:border-amber-400 shadow-2xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              title="View Shalwa Febri Rahmatullah's CV (.pdf)"
            >
              <FileText className="w-3.5 h-3.5 text-purple-700" />
              <span>View CV (PDF)</span>
            </a>

            {/* Pill 2: View Social Media */}
            <a
              href="#social-footer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white hover:bg-purple-50 text-purple-950 font-bold text-xs sm:text-sm border border-purple-200 hover:border-amber-400 shadow-2xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Social Media</span>
            </a>

            {/* Pill 3: GitHub Repo */}
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white hover:bg-purple-50 text-purple-950 font-bold text-xs sm:text-sm border border-purple-200 hover:border-amber-400 shadow-2xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <FileCode className="w-3.5 h-3.5 text-fuchsia-600" />
              <span>GitHub Repository</span>
            </a>
          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-purple-300/70 to-purple-300/70 hidden sm:block" />
        </div>

        {/* Large Statement Call-to-Action Banner */}
        <div className="max-w-5xl mx-auto rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-[#1E1138] via-[#2A164D] to-[#170C2D] border border-purple-400/25 p-7 sm:p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-purple-950/30">
          
          {/* Subtle Grid Overlay */}
          <div 
            className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-30" 
          />

          <div className="relative z-10">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Collaboration &amp; Contact</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
              Ready to Collaborate? Let&apos;s Build Digital Solutions Together
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-purple-200/90 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
              Open to software engineering projects, relational database design discussions, and creative graphic design collaborations.
            </p>

            {/* Focused CTA Action Buttons: Email & WhatsApp */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
              <a
                href={gmailDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-200 text-purple-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-amber-400/25 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-purple-950" />
                <span>Send Message via Email</span>
                <ArrowRight className="w-4 h-4 text-purple-950" />
              </a>

              <a
                href="https://wa.me/6282390521671"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                title="WhatsApp Direct Contact"
              >
                <span>WhatsApp: {personalInfo.phone}</span>
              </a>
            </div>

            {/* Social Media Link Buttons in Banner */}
            <div className="flex items-center justify-center gap-3 pt-5 border-t border-purple-400/20 max-w-md mx-auto">
              <span className="text-xs text-purple-300/80 font-medium">Find me on:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-purple-600 text-white transition-all duration-200 hover:scale-105"
                  aria-label="GitHub"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-purple-600 text-white transition-all duration-200 hover:scale-105"
                  aria-label="LinkedIn"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={personalInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-purple-600 text-white transition-all duration-200 hover:scale-105"
                  aria-label="Instagram"
                  title="Instagram Profile"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
