import { 
  Code, 
  Database, 
  Palette, 
  Layout, 
  Check, 
  Layers,
  Sparkles
} from "lucide-react";
import { skillCategories } from "@/data/portfolio-data";

export default function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-5 h-5 text-purple-700" />;
      case "Database":
        return <Database className="w-5 h-5 text-indigo-700" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-violet-700" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-amber-600" />;
      default:
        return <Layers className="w-5 h-5 text-purple-700" />;
    }
  };

  return (
    <section 
      id="skills" 
      className="py-24 bg-gradient-to-b from-[#F5EEFC] via-[#FAF7FD] to-[#F2E8FA] relative overflow-hidden scroll-mt-28"
    >
      {/* Background Ambient Subtle Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 right-0 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-200/15 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-purple-200/90 text-purple-950 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span>Skills &amp; Tools</span>
            <span className="text-amber-500 font-bold">✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-3.5 leading-tight">
            Technical Competencies
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Technologies and toolsets actively applied across web engineering, relational database management, and visual design.
          </p>
        </div>

        {/* 4 Categories Grid: Web Development, Database, Desktop/Mobile Development, Graphic Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card rounded-[2rem] p-6 sm:p-7 relative overflow-hidden border border-purple-200/80 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-purple-100">
                  <div className="w-11 h-11 rounded-2xl bg-purple-100/90 flex items-center justify-center border border-purple-200/80 shadow-2xs shrink-0">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List in Category */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-white/90 border border-purple-100/90 transition-all flex items-start justify-between gap-3 shadow-2xs hover:border-purple-300"
                    >
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center mt-0.5 shrink-0">
                          <Check className="w-2.5 h-2.5 text-purple-700 stroke-[3]" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                            {skill.name}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-gray-600 mt-0.5 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-purple-50 text-purple-900 border border-purple-200/80">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
