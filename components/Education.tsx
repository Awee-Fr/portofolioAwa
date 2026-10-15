import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2,
  Building2
} from "lucide-react";
import { educationInfo } from "@/data/portfolio-data";

export default function Education() {
  return (
    <section 
      id="education" 
      className="py-24 bg-gradient-to-b from-[#F1E8FB] via-[#FAF6FE] to-[#F3EAFA] relative overflow-hidden scroll-mt-28"
    >
      {/* Background Ambient Subtle Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 w-72 h-72 bg-purple-300/15 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-0 w-72 h-72 bg-amber-200/15 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-purple-200/90 text-purple-950 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span>Educational Background</span>
            <span className="text-amber-500 font-bold">✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight mb-3.5 leading-tight">
            Formal Education
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Vocational academic foundation shaping system engineering expertise, structured data modeling, and professional discipline.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-[2.5rem] p-6 sm:p-9 border border-purple-200/90 shadow-lg shadow-purple-950/5 relative overflow-hidden">
            
            {/* Golden top decorative ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-amber-400 to-indigo-600" />

            {/* Institution & Status Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pb-6 border-b border-purple-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-amber-500 p-[1.5px] shadow-sm shrink-0">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-purple-700" />
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{educationInfo.status}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 leading-tight">
                    {educationInfo.degree}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-purple-800 flex items-center gap-1.5 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>{educationInfo.institution}</span>
                  </p>
                </div>
              </div>

              {/* Period & Location Pills */}
              <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs text-gray-600 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/90 text-purple-950 font-bold border border-purple-200">
                  <Calendar className="w-3 h-3 text-purple-700" />
                  <span>{educationInfo.period}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-gray-700 font-semibold border border-gray-200">
                  <MapPin className="w-3 h-3 text-gray-500" />
                  <span>{educationInfo.location}</span>
                </span>
              </div>
            </div>

            {/* Core Focus Areas */}
            <div className="pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-950 mb-3.5 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-purple-700" />
                <span>Core Study Focus Areas:</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {educationInfo.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
