"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  GraduationCap, 
  Mail,
  Code2,
  Database,
  Palette
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF5FE] via-[#F6F0FD] to-[#F1E8FB] scroll-mt-28"
    >
      {/* Ambient Subtle Radial Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[450px] md:w-[850px] md:h-[550px] bg-gradient-to-tr from-purple-300/25 via-violet-200/20 to-amber-200/15 rounded-full blur-3xl -z-10 pointer-events-none"
      />

      {/* Subtle Dot Mesh Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#9333ea14_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Clear Typography & Concise Intro */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Pill Badge with Gold Accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-purple-200/90 shadow-2xs mb-5 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-purple-950 tracking-wide">
                Active Student • Informatics Management
              </span>
              <span className="text-amber-600 text-xs font-bold">✦ PNP</span>
            </div>

            {/* Main Name & Clear Hierarchy */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 leading-[1.18] mb-4">
              Hello, I&apos;m{" "}
              <span className="gold-gradient-text block mt-1 drop-shadow-2xs">
                {personalInfo.name}
              </span>
            </h1>

            {/* Concise Role Subtitle */}
            <p className="text-base sm:text-lg font-semibold text-purple-950/90 mb-3 max-w-xl leading-snug">
              Web Development • Relational Databases • Graphic Design
            </p>

            {/* Streamlined Bio Paragraph */}
            <p className="text-sm md:text-base text-gray-600 mb-8 max-w-lg leading-relaxed">
              Student at Padang State Polytechnic passionate about building functional digital solutions—combining structured code, optimized database architecture, and polished modern user interfaces.
            </p>

            {/* Action Buttons: 3 Main CTA Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 w-full sm:w-auto">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-purple-700/20 hover:shadow-lg hover:shadow-purple-700/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <a
                href={personalInfo.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-purple-50 text-purple-950 font-bold text-xs sm:text-sm border border-purple-200/90 shadow-2xs hover:border-amber-400/70 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                title="View Shalwa Febri Rahmatullah's CV (.pdf)"
              >
                <FileText className="w-4 h-4 text-purple-700" />
                <span>View CV</span>
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-amber-50 hover:bg-amber-100/90 text-amber-950 font-bold text-xs sm:text-sm border border-amber-300/80 shadow-2xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Mail className="w-4 h-4 text-amber-700" />
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Social Links Strip */}
            <div className="flex items-center gap-3 pt-3 border-t border-purple-200/60 w-full justify-center lg:justify-start">
              <span className="text-xs font-semibold text-purple-900/70 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white hover:bg-purple-100 text-gray-700 hover:text-purple-900 border border-purple-200/70 transition-all duration-200 shadow-2xs hover:scale-105"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white hover:bg-purple-100 text-gray-700 hover:text-purple-900 border border-purple-200/70 transition-all duration-200 shadow-2xs hover:scale-105"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white hover:bg-purple-100 text-gray-700 hover:text-purple-900 border border-purple-200/70 transition-all duration-200 shadow-2xs hover:scale-105"
                  aria-label="Instagram Profile"
                  title="Instagram Profile"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Balanced Profile Portrait Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer soft halo */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-purple-500/20 via-violet-400/15 to-amber-300/20 blur-xl -z-10" />

              {/* Main Profile Presentation Card */}
              <div className="glass-card rounded-[2.5rem] p-3 sm:p-4 border border-purple-200/90 shadow-xl shadow-purple-950/5 relative overflow-hidden group">
                
                {/* Decorative golden ribbon top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-amber-400 to-indigo-600 z-10" />

                {/* Photo Frame Container */}
                <div className="relative w-full h-[360px] sm:h-[400px] rounded-[2rem] overflow-hidden bg-purple-100 shadow-inner">
                  <Image
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    style={{ objectPosition: "center 53%" }}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Top corner status indicator */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wide border border-white/20 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Informatics Management
                    </span>
                  </div>
                </div>

                {/* Profile Details & Competency Strip */}
                <div className="pt-3.5 pb-1 px-1">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-gray-900 leading-tight">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs text-purple-800 flex items-center gap-1 font-semibold mt-0.5">
                        <GraduationCap className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{personalInfo.major} • {personalInfo.institution}</span>
                      </p>
                    </div>
                  </div>

                  {/* 3 Pillar Micro Badges */}
                  <div className="grid grid-cols-3 gap-1.5 p-2 bg-purple-50/80 rounded-xl border border-purple-200/70 text-center">
                    <div className="p-1">
                      <div className="flex items-center justify-center gap-1 text-purple-900 mb-0.5">
                        <Code2 className="w-3 h-3 text-purple-700" />
                        <span className="text-[10px] font-extrabold uppercase">Web Dev</span>
                      </div>
                      <p className="text-[10px] text-gray-600 font-medium">PHP &amp; Next.js</p>
                    </div>
                    <div className="p-1 border-x border-purple-200/70">
                      <div className="flex items-center justify-center gap-1 text-indigo-900 mb-0.5">
                        <Database className="w-3 h-3 text-indigo-700" />
                        <span className="text-[10px] font-extrabold uppercase">Database</span>
                      </div>
                      <p className="text-[10px] text-gray-600 font-medium">MySQL &amp; ERD</p>
                    </div>
                    <div className="p-1">
                      <div className="flex items-center justify-center gap-1 text-amber-900 mb-0.5">
                        <Palette className="w-3 h-3 text-amber-700" />
                        <span className="text-[10px] font-extrabold uppercase">Design</span>
                      </div>
                      <p className="text-[10px] text-gray-600 font-medium">AI &amp; Figma</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
