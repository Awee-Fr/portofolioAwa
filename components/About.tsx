import { 
  Laptop, 
  Database, 
  PenTool, 
  Sparkles, 
  Layers, 
  Target,
  GraduationCap,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { aboutHighlights } from "@/data/portfolio-data";

export default function About() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Laptop":
        return <Laptop className="w-5 h-5 text-purple-700" />;
      case "Database":
        return <Database className="w-5 h-5 text-indigo-700" />;
      case "PenTool":
        return <PenTool className="w-5 h-5 text-amber-600" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-purple-700" />;
      default:
        return <Target className="w-5 h-5 text-purple-700" />;
    }
  };

  return (
    <section 
      id="about" 
      className="py-24 bg-gradient-to-b from-[#F1E8FB] via-[#FAF6FE] to-[#F5EEFC] relative overflow-hidden scroll-mt-28"
    >
      {/* Ambient background decoration */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 -left-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 border border-purple-200/80 text-purple-950 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span>About Me</span>
            <span className="text-amber-500 font-bold">✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-4 leading-tight">
            Building Digital Solutions with{" "}
            <span className="text-purple-700">Structured Code</span> &amp;{" "}
            <span className="text-amber-700">Distinctive Design</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Discover my dedication to integrating software engineering logic, structured data modeling, and refined visual aesthetics.
          </p>
        </div>

        {/* Narrative & Quick Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story Box */}
          <div className="lg:col-span-7 glass-card rounded-[2rem] p-7 sm:p-9 relative border border-purple-200/80 shadow-[0_15px_35px_-10px_rgba(126,34,206,0.08)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/25 rounded-bl-full pointer-events-none" />
            
            <h3 className="text-xl font-bold text-gray-950 mb-4 flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-purple-600" />
              Professional Profile &amp; Dedication
            </h3>
            
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              I am an undergraduate student majoring in{" "}
              <strong className="text-purple-950 font-bold">Informatics Management at Politeknik Negeri Padang</strong>. 
              My passion lies in engineering software and information systems that are not only robust, reliable, and secure, but also deliver intuitive, pleasing user experiences.
            </p>
            
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              In every project, I place strong emphasis on logical architecture, clean code structure, normalized relational database schemas via ERD, and contemporary UI elements that are proportional and user-friendly.
            </p>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-5 border-t border-purple-100">
              <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200/60">
                <span className="text-[10px] font-bold text-purple-700 uppercase block mb-1">
                  Academic Status
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-purple-950 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Active Student
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200/60">
                <span className="text-[10px] font-bold text-purple-700 uppercase block mb-1">
                  Institution
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-purple-950 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
                  PNP Padang
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200/60 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold text-purple-700 uppercase block mb-1">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-purple-950 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-purple-700" />
                  Padang, West Sumatra
                </span>
              </div>
            </div>
          </div>

          {/* Core Values / Focus Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Focus Pillars */}
            <div className="glass-panel p-6 sm:p-7 rounded-[2rem] border border-purple-200/80 shadow-xs">
              <h3 className="text-base font-bold text-gray-900 mb-2.5 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-700" />
                Core Areas of Focus
              </h3>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                Four main pillars defining my technical exploration and ongoing skill development:
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-950 text-xs font-bold border border-purple-200/80 shadow-2xs">
                  Web Development
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-950 text-xs font-bold border border-indigo-200/80 shadow-2xs">
                  Database Management
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-violet-100 text-violet-950 text-xs font-bold border border-violet-200/80 shadow-2xs">
                  Desktop App (C# / Java)
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-bold border border-amber-200/80 shadow-2xs">
                  Graphic Design (AI &amp; Figma)
                </span>
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-6 sm:p-7 rounded-[2rem] bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-900 text-white shadow-xl relative overflow-hidden border border-purple-400/20">
              <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-amber-400/10 blur-xl pointer-events-none" />
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                Work Ethic &amp; Philosophy
              </div>
              <p className="text-xs sm:text-sm font-medium text-purple-100 leading-relaxed italic">
                &ldquo;Great technology doesn&apos;t just perform reliably behind the scenes—it delivers seamless simplicity and an enjoyable aesthetic experience for the user.&rdquo;
              </p>
            </div>

          </div>

        </div>

        {/* 4 Highlights Feature Cards with Hover Lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutHighlights.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-3xl p-6 relative group border border-purple-200/70"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-100/90 group-hover:bg-purple-200/90 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105 shadow-2xs">
                {getIcon(item.icon)}
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-purple-800 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
