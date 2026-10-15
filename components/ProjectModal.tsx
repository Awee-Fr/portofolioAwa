"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, CheckCircle, Layers, Wrench, AlertCircle, Sparkles, Play, ExternalLink } from "lucide-react";
import { Project } from "@/data/portfolio-data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (project) {
      setSelectedImage(project.image);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-[2.5rem] shadow-2xl border-2 border-purple-200/90 p-6 sm:p-9 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gold line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-amber-400 to-indigo-600" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-gray-500 hover:text-purple-900 hover:bg-purple-100/80 transition-colors z-10 cursor-pointer"
          aria-label="Close Project Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pt-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>{project.category}</span>
          </div>
          <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-gray-950 leading-tight">
            {project.title}
          </h3>
        </div>

        {/* Media Preview (YouTube Video Embed or Image) */}
        {project.youtubeId ? (
          <div className="mb-6 space-y-2.5">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-purple-200/80 shadow-lg">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?rel=0`}
                title={`${project.title} Video Demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500 px-1">
              <span className="flex items-center gap-1.5 text-purple-700 font-semibold">
                <Play className="w-3.5 h-3.5 fill-current text-red-600" />
                Interactive Demo Video (YouTube)
              </span>
              {project.youtubeUrl && (
                <a
                  href={project.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-semibold hover:underline"
                >
                  <span>Open directly on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="mb-6 space-y-3">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-purple-200/80 shadow-md">
              <Image
                src={selectedImage || project.image}
                alt={project.title}
                fill
                className="object-contain"
                priority
              />
            </div>
            {project.gallery && project.gallery.length > 1 && (
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1 pt-0.5">
                {project.gallery.map((img, idx) => {
                  const isSelected = (selectedImage || project.image) === img;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-24 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        isSelected
                          ? "border-purple-600 ring-2 ring-purple-400/50 scale-102"
                          : "border-purple-200/80 opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`View screenshot ${idx + 1}`}
                    >
                      <Image
                        src={img}
                        alt={`Screenshot ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  );
                })}
                <span className="text-[11px] text-gray-500 font-medium">
                  • Click thumbnail to switch screenshot ({project.gallery.length} images)
                </span>
              </div>
            )}
          </div>
        )}

        {/* Problem and Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5 mb-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              Background &amp; Problem
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 flex items-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              Solution Approach
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-700" />
            Key Features &amp; Functionality
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Contribution */}
        <div className="p-4 rounded-2xl bg-purple-100/50 border border-purple-200 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-purple-950 flex items-center gap-1.5 mb-1.5">
            <Wrench className="w-4 h-4 text-purple-700" />
            Personal Contribution
          </h4>
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
            {project.personalContribution}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-6">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
            Technologies Used:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl bg-purple-50 text-purple-900 text-xs font-semibold border border-purple-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions / Links */}
        <div className="pt-5 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.youtubeUrl && (
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md active:scale-98"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.demoUrl && !project.youtubeUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white text-xs font-bold transition-all shadow-md active:scale-98"
              >
                <span>Open Project Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-950 border border-purple-200 text-xs font-bold shadow-2xs transition-all active:scale-98 cursor-pointer"
          >
            Close Dialog
          </button>
        </div>

      </div>
    </div>
  );
}
