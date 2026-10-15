"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Play, Check, ExternalLink, Info, Star } from "lucide-react";
import { projects, Project } from "@/data/portfolio-data";
import ProjectModal from "./ProjectModal";

const categories = [
  "All",
  "Web Development",
  "Desktop App",
  "Graphic Design",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = projects.find((p) => p.id === "ppdb-sekolah");

  const filteredProjects = activeCategory === "All"
    ? projects.filter((p) => p.id !== "ppdb-sekolah")
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section 
      id="projects" 
      className="py-24 bg-gradient-to-b from-[#F2E8FA] via-[#F8F2FE] to-[#F1E8FB] relative overflow-hidden scroll-mt-28"
    >
      {/* Background Ambient Glows */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-purple-300/20 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-purple-200/90 text-purple-950 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span>Featured Project Portfolio</span>
            <span className="text-amber-500 font-bold">✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-3.5 leading-tight">
            Real-World Projects &amp; Digital Works
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
            A curated showcase of software applications, information systems, and visual designs crafted with an emphasis on functionality, data architecture, and aesthetics.
          </p>
        </div>

        {/* FEATURED PROJECT SHOWCASE (PPDB SEKOLAH) */}
        {featuredProject && activeCategory === "All" && (
          <div className="mb-14">
            <div className="glass-card rounded-[2.5rem] overflow-hidden border-2 border-purple-300/80 shadow-xl shadow-purple-900/5 relative group">
              {/* Golden Accent Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-amber-400 to-indigo-600 z-10" />

              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                
                {/* Left Column: Authentic Browser Mockup Screenshot */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-center">
                  <div className="rounded-2xl overflow-hidden bg-slate-900 border border-purple-200/60 shadow-lg relative group">
                    
                    {/* Browser Mockup Top Bar */}
                    <div className="h-7 bg-slate-800/95 px-3 flex items-center justify-between border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/90" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/90" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/90" />
                      </div>
                      <div className="text-[10px] text-gray-300 font-mono bg-black/40 px-3 py-0.5 rounded-full border border-white/5">
                        ppdb-sekolah.sch.id
                      </div>
                      <span className="w-8" />
                    </div>

                    {/* Real Screenshot Preview */}
                    <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(featuredProject)}>
                      <Image
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        fill
                        priority
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 550px"
                      />
                      
                      {/* Video Play Badge Overlay */}
                      {featuredProject.youtubeId && (
                        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600/95 text-white text-xs font-bold shadow-lg backdrop-blur-xs hover:bg-red-700 transition-colors">
                          <Play className="w-3 h-3 fill-current" />
                          <span>Demo Video Available</span>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Right Column: Project Highlights & Actions */}
                <div className="lg:col-span-6 p-6 sm:p-8 lg:pl-2 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-950 border border-amber-300/80 shadow-2xs">
                        <Star className="w-3 h-3 text-amber-600 fill-amber-500" />
                        <span>Featured Project</span>
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-100 text-purple-950 border border-purple-200">
                        {featuredProject.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-950 leading-tight mb-3">
                      {featuredProject.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                      {featuredProject.shortDescription}
                    </p>

                    {/* Feature Checkpoints */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                      {featuredProject.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                          <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5 text-purple-700 font-bold">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {featuredProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-full text-xs font-bold bg-white text-purple-950 border border-purple-200 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-purple-100">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(featuredProject)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <Info className="w-4 h-4" />
                      <span>View Full Details</span>
                    </button>

                    {featuredProject.youtubeUrl && (
                      <a
                        href={featuredProject.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-red-50 text-red-700 font-bold text-xs sm:text-sm border border-red-200 shadow-2xs hover:border-red-300 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Demo Video</span>
                        <ExternalLink className="w-3 h-3 text-red-400" />
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-md shadow-purple-600/20 scale-105"
                  : "bg-white/80 text-gray-700 hover:bg-purple-100 hover:text-purple-900 border border-purple-200/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid with Clean Screenshots & Full Titles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-[2rem] overflow-hidden flex flex-col justify-between group border border-purple-200/80 shadow-md hover:shadow-xl hover:border-purple-300 transition-all duration-300"
            >
              <div>
                {/* Real Project Screenshot Container */}
                <div 
                  className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900 border-b border-purple-100 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Category Pill Top Left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-purple-950 shadow-xs border border-purple-200/80 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Video/Demo indicator if available */}
                  {project.youtubeId && (
                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold shadow-md">
                      <Play className="w-2.5 h-2.5 fill-current" />
                      <span>Demo Video</span>
                    </div>
                  )}
                </div>

                {/* Card Content Details */}
                <div className="p-6">
                  
                  {/* Full Title (Never Truncated) */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-950 group-hover:text-purple-700 transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Contribution Highlight Snippet */}
                  <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-100/90 mb-4 text-left">
                    <span className="text-[10px] font-extrabold text-purple-950 uppercase tracking-wide block mb-0.5">
                      Contribution &amp; Implementation:
                    </span>
                    <p className="text-xs text-gray-700 line-clamp-2 leading-relaxed">
                      {project.personalContribution}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-purple-950 border border-purple-200 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="px-6 pb-6 pt-2 border-t border-purple-100/80 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-purple-100/80 hover:bg-purple-200/90 text-purple-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-purple-700" />
                  <span>View Project Details</span>
                </button>

                {project.youtubeUrl && (
                  <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 font-bold text-xs transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Demo</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal Component */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}
