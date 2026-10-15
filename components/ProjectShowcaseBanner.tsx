"use client";

import Image from "next/image";
import { Check, Play, Lock, Sparkles, Laptop, Smartphone, Monitor, Palette } from "lucide-react";
import { Project } from "@/data/portfolio-data";

interface ProjectShowcaseBannerProps {
  project: Project;
}

interface ShowcaseConfig {
  tagline: string;
  badge: string;
  badgeColor: string;
  checkpoints: string[];
  gradientTheme: string;
  meshGlow: string;
  domainUrl?: string;
  deviceType: "browser" | "desktop" | "mobile" | "logo";
  secondaryImage?: string;
  secondaryTitle?: string;
}

const showcaseConfigs: Record<string, ShowcaseConfig> = {
  "ppdb-sekolah": {
    tagline: "School Admissions Portal (PPDB)",
    badge: "Web Application • Responsive",
    badgeColor: "bg-indigo-500/20 text-indigo-200 border-indigo-400/30",
    checkpoints: [
      "Multi-Step Student Registration Flow",
      "Online Digital Document Verification",
      "School Committee Review Dashboard",
    ],
    gradientTheme: "from-slate-950 via-indigo-950 to-purple-950",
    meshGlow: "bg-indigo-600/25",
    domainUrl: "ppdb-sekolah.sch.id",
    deviceType: "browser",
  },
  "si-organisasi": {
    tagline: "HIMA TI Information Portal",
    badge: "Official Portal • Executive Cabinet",
    badgeColor: "bg-amber-500/20 text-amber-200 border-amber-400/30",
    checkpoints: [
      "Official Informatics Department Profile",
      "Showcase of 7 Executive Divisions",
      "Department Event Agenda & Updates",
    ],
    gradientTheme: "from-stone-950 via-amber-950 to-orange-950",
    meshGlow: "bg-amber-600/20",
    domainUrl: "himati.polinpdg.ac.id",
    deviceType: "browser",
    secondaryImage: "/projects/hmj-tekinfo-divisi.jpg",
    secondaryTitle: "7 Organization Divisions",
  },
  "perpustakaan-mini-desktop": {
    tagline: "Mini Library Management System",
    badge: "Windows Desktop App • .NET",
    badgeColor: "bg-sky-500/20 text-sky-200 border-sky-400/30",
    checkpoints: [
      "4 Interactive Core Navigation Modules",
      "Member Management & Input Validation",
      "Book Lending & Return Circulation",
    ],
    gradientTheme: "from-slate-950 via-blue-950 to-indigo-950",
    meshGlow: "bg-blue-600/20",
    deviceType: "desktop",
    secondaryImage: "/projects/perpustakaan-anggota.jpg",
    secondaryTitle: "Member Form",
  },
  "student-academic-mobile-app": {
    tagline: "Figma Mobile App Prototype",
    badge: "UI/UX Prototype • 10 Screens",
    badgeColor: "bg-fuchsia-500/20 text-fuchsia-200 border-fuchsia-400/30",
    checkpoints: [
      "Tap-to-Attend Live Attendance Clock",
      "GPA Summary & Assignment Dashboard",
      "Course Materials & Syllabus Catalog",
    ],
    gradientTheme: "from-slate-950 via-purple-950 to-fuchsia-950",
    meshGlow: "bg-fuchsia-600/25",
    deviceType: "mobile",
  },
  "logo-anugerah-motor": {
    tagline: "Anugerah Motor Identity",
    badge: "Brand Identity • Vector Art",
    badgeColor: "bg-red-500/20 text-red-200 border-red-400/30",
    checkpoints: [
      "Symbolic Mechanical Gear & Wrench",
      "Industrial Automotive Typography",
      "Print-Ready Precision Signage Vector",
    ],
    gradientTheme: "from-zinc-950 via-stone-950 to-red-950",
    meshGlow: "bg-red-600/20",
    deviceType: "logo",
    secondaryImage: "/projects/logo-anugerah-motor-alt.jpg",
    secondaryTitle: "Silver Steel Gear",
  },
};

export default function ProjectShowcaseBanner({ project }: ProjectShowcaseBannerProps) {
  const config = showcaseConfigs[project.id] || {
    tagline: project.title,
    badge: project.category,
    badgeColor: "bg-purple-500/20 text-purple-200 border-purple-400/30",
    checkpoints: project.features.slice(0, 3),
    gradientTheme: "from-slate-950 via-purple-950 to-indigo-950",
    meshGlow: "bg-purple-600/20",
    deviceType: "browser" as const,
  };

  return (
    <div
      className={`relative w-full aspect-[16/10] sm:aspect-video overflow-hidden bg-gradient-to-br ${config.gradientTheme} p-3 sm:p-4 select-none flex flex-col justify-between`}
    >
      {/* Background Ambient Glows */}
      <div
        className={`absolute -top-12 -left-12 w-48 h-48 rounded-full ${config.meshGlow} blur-3xl pointer-events-none`}
      />
      <div
        className={`absolute -bottom-12 -right-12 w-48 h-48 rounded-full ${config.meshGlow} blur-3xl pointer-events-none`}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" 
      />

      {/* Main Showcase Layout: 2 Columns */}
      <div className="relative z-10 grid grid-cols-12 gap-2.5 sm:gap-3.5 h-full items-center">
        
        {/* Left Column: Presentation Branding & Selling Points */}
        <div className="col-span-5 sm:col-span-5 flex flex-col justify-center h-full pr-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[9px] sm:text-[10px] font-semibold tracking-wide backdrop-blur-md mb-1.5 w-fit shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="truncate max-w-[120px] sm:max-w-none">{config.badge}</span>
          </div>

          {/* Tagline / Big Title */}
          <h4 className="text-xs sm:text-base font-extrabold text-white tracking-tight leading-tight mb-2 drop-shadow-sm line-clamp-2">
            {config.tagline}
          </h4>

          {/* 3 Checkpoint Bullets */}
          <ul className="space-y-1 mb-2.5 hidden sm:block">
            {config.checkpoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-[10px] sm:text-[11px] text-gray-200/90 leading-tight">
                <div className="w-3.5 h-3.5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/20">
                  <Check className="w-2.5 h-2.5 text-emerald-400 stroke-[3]" />
                </div>
                <span className="line-clamp-1">{point}</span>
              </li>
            ))}
          </ul>

          {/* Mini Tech Stack Pills */}
          <div className="flex flex-wrap gap-1 mt-auto sm:mt-0">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-1.5 py-0.5 rounded-md bg-white/10 text-white/90 text-[8px] sm:text-[9px] font-medium backdrop-blur-xs border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-1 py-0.5 rounded-md bg-white/5 text-gray-300 text-[8px] sm:text-[9px]">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Right Column: Device Frame Mockup */}
        <div className="col-span-7 sm:col-span-7 h-full flex items-center justify-center relative">
          
          {/* DEVICE TYPE 1: BROWSER MOCKUP (PPDB & HIMA TI) */}
          {config.deviceType === "browser" && (
            <div className="relative w-full h-[88%] flex items-center justify-center">
              {/* Main Browser Window */}
              <div className="relative w-[92%] h-full rounded-xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl shadow-black/80 flex flex-col group-hover:scale-[1.02] transition-transform duration-300">
                {/* Browser Top Bar */}
                <div className="h-4 sm:h-5 bg-slate-800/90 border-b border-white/10 px-2 flex items-center gap-1.5 shrink-0">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/90" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/90" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/90" />
                  </div>
                  {config.domainUrl && (
                    <div className="mx-auto flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/40 text-[7px] sm:text-[8px] text-gray-300 font-mono border border-white/5">
                      <Lock className="w-2 h-2 text-emerald-400" />
                      <span>{config.domainUrl}</span>
                    </div>
                  )}
                </div>

                {/* Browser Content Screenshot */}
                <div className="relative flex-1 w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Secondary Floating Overlapping Card (if available, e.g., HIMA TI Divisi) */}
              {config.secondaryImage && (
                <div className="absolute -bottom-1 -right-1 w-[46%] aspect-[16/10] rounded-lg overflow-hidden border border-white/30 shadow-xl shadow-black/90 bg-slate-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 hidden sm:block">
                  <div className="h-3 bg-slate-800/90 px-1.5 flex items-center gap-1 border-b border-white/10">
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                    <span className="text-[6px] text-gray-300 font-semibold truncate">{config.secondaryTitle}</span>
                  </div>
                  <div className="relative w-full h-[calc(100%-12px)]">
                    <Image
                      src={config.secondaryImage}
                      alt={config.secondaryTitle || "Detail"}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              )}

              {/* Video Badge Overlay if Project has YouTube Demo */}
              {project.youtubeId && (
                <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-red-600/95 text-white text-[9px] font-bold shadow-lg backdrop-blur-xs border border-white/20">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  <span>Demo Video</span>
                </div>
              )}
            </div>
          )}

          {/* DEVICE TYPE 2: DESKTOP APP WINDOW MOCKUP (Perpustakaan Mini) */}
          {config.deviceType === "desktop" && (
            <div className="relative w-full h-[88%] flex items-center justify-center">
              {/* Main Desktop Window */}
              <div className="relative w-[92%] h-full rounded-xl overflow-hidden bg-slate-900 border border-blue-400/30 shadow-2xl shadow-black/80 flex flex-col group-hover:scale-[1.02] transition-transform duration-300">
                {/* Desktop App Window Titlebar */}
                <div className="h-4 sm:h-5 bg-gradient-to-r from-blue-950 to-slate-900 border-b border-blue-400/20 px-2 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Monitor className="w-2.5 h-2.5 text-blue-400" />
                    <span className="text-[7px] sm:text-[8px] text-gray-200 font-medium">Mini Library System</span>
                  </div>
                  <div className="flex items-center gap-1 text-[8px] text-gray-400 font-mono">
                    <span>─</span>
                    <span>□</span>
                    <span className="text-red-400">✕</span>
                  </div>
                </div>

                {/* Desktop Screenshot */}
                <div className="relative flex-1 w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Overlapping Floating Member Form Window */}
              {config.secondaryImage && (
                <div className="absolute -bottom-1 -right-1 w-[46%] aspect-[16/11] rounded-lg overflow-hidden border border-blue-300/40 shadow-xl shadow-black/90 bg-slate-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 hidden sm:block">
                  <div className="h-3.5 bg-blue-900/90 px-1.5 flex items-center justify-between border-b border-white/10">
                    <span className="text-[7px] text-blue-200 font-semibold truncate">Member Management Form</span>
                    <span className="text-[7px] text-gray-300">✕</span>
                  </div>
                  <div className="relative w-full h-[calc(100%-14px)] bg-white">
                    <Image
                      src={config.secondaryImage}
                      alt="Member Form"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* DEVICE TYPE 3: MOBILE APP MOCKUP (Student Academic App Figma) */}
          {config.deviceType === "mobile" && (
            <div className="relative w-full h-[92%] flex items-center justify-center">
              {/* Smartphone Frame Container */}
              <div className="relative h-full aspect-[9/16] rounded-2xl p-1 bg-gradient-to-b from-stone-800 via-stone-900 to-black border border-white/30 shadow-2xl shadow-purple-950/80 flex flex-col group-hover:scale-105 transition-transform duration-300">
                {/* Speaker / Notch Pill */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-white/20 z-20" />
                
                {/* Inner Screen */}
                <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Floating Badge "10 Screens • Figma" */}
              <div className="absolute -bottom-1 -right-1 px-2.5 py-1 rounded-xl bg-purple-900/90 backdrop-blur-md border border-purple-400/40 text-[9px] font-bold text-white shadow-lg flex items-center gap-1.5">
                <Smartphone className="w-3 h-3 text-fuchsia-400" />
                <span>10 Screens Prototype</span>
              </div>
            </div>
          )}

          {/* DEVICE TYPE 4: LOGO SHOWCASE CANVAS MOCKUP (Anugerah Motor) */}
          {config.deviceType === "logo" && (
            <div className="relative w-full h-[90%] flex items-center justify-center">
              {/* Studio Canvas Board */}
              <div className="relative w-[90%] h-full rounded-2xl overflow-hidden bg-gradient-to-b from-stone-900 to-zinc-950 border border-red-500/30 shadow-2xl shadow-black/80 flex items-center justify-center p-2 group-hover:scale-[1.02] transition-transform duration-300">
                {/* Subtle Grid Guidelines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:12px_12px]" />
                
                {/* Logo Image Preview with subtle glow */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-white/95 p-1 shadow-inner flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-1 drop-shadow-md"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Overlapping Secondary Logo Badge (Silver Steel Gear) */}
              {config.secondaryImage && (
                <div className="absolute -bottom-1 -right-1 w-[38%] aspect-square rounded-xl overflow-hidden border border-red-400/40 shadow-xl bg-white p-1 hidden sm:flex items-center justify-center group-hover:scale-105 transition-transform">
                  <div className="relative w-full h-full">
                    <Image
                      src={config.secondaryImage}
                      alt="Silver Gear Variant"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
