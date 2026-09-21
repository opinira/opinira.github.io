import React from 'react';
import { Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { workExperience } from '../data/experienceData';

export default function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {workExperience.map((exp) => (
        <div
          key={exp.id}
          className="relative bg-white border border-[#142B4A]/10 hover:border-bronze rounded-3xl p-6 sm:p-10 transition-luxury shadow-xl overflow-hidden text-left"
        >
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#142B4A]/10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{exp.status}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#142B4A] tracking-tight">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 text-sm text-bronze font-bold">
                <Building2 className="w-4 h-4" />
                <span>{exp.company}</span>
              </div>
            </div>

            {/* Duration & Location Meta */}
            <div className="flex flex-wrap lg:flex-col lg:items-end gap-3 text-xs font-mono text-[#486581]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#142B4A]/10 font-bold">
                <Calendar className="w-3.5 h-3.5 text-bronze" />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#142B4A]/10 font-bold">
                <MapPin className="w-3.5 h-3.5 text-bronze" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="py-6">
            <p className="text-sm sm:text-base text-[#334E68] leading-relaxed font-medium">
              {exp.summary}
            </p>
          </div>

          {/* Key Responsibilities Breakdown */}
          <div className="space-y-4 pt-2">
            <h4 className="font-display text-sm font-bold text-bronze uppercase tracking-wider">
              Key Marketing & Design Responsibilities
            </h4>
            <div className="grid grid-cols-1 gap-3.5">
              {exp.keyResponsibilities.map((resp, idx) => {
                const parts = resp.split(': ');
                const title = parts[0];
                const desc = parts[1] || '';

                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#142B4A]/10 flex items-start gap-3.5 hover:border-bronze transition-luxury"
                  >
                    <CheckCircle2 className="w-5 h-5 text-bronze flex-shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="text-xs sm:text-sm font-bold text-[#142B4A] font-display block">
                        {title}
                      </span>
                      {desc && (
                        <p className="text-xs sm:text-sm text-[#486581] leading-relaxed font-medium">
                          {desc}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Highlight Tools */}
          <div className="mt-8 pt-6 border-t border-[#142B4A]/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#627D98] mr-2 uppercase tracking-wider font-bold">
              Primary Toolchain:
            </span>
            {exp.highlightTools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white text-[#142B4A] border border-[#142B4A]/15 font-bold shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
