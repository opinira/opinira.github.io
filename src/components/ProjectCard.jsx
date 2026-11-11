import React from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, Eye } from 'lucide-react';

export default function ProjectCard({ project, onOpenCaseStudy }) {
  const getPrimaryAction = () => {
    if (project.liveUrl) {
      return (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-bronze hover:bg-bronze-dark text-white text-xs font-bold transition-all duration-200 shadow-sm shadow-bronze/20"
        >
          <span>Live Preview</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      );
    }
    if (project.figmaUrl) {
      return (
        <a
          href={project.figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0E1E34] hover:bg-bronze text-white text-xs font-bold transition-all duration-200 shadow-sm"
        >
          <span>View Prototype</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      );
    }
    if (project.driveUrl) {
      return (
        <a
          href={project.driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-bronze hover:bg-bronze-dark text-white text-xs font-bold transition-all duration-200 shadow-sm"
        >
          <span>View Work</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      );
    }
    return (
      <button
        onClick={() => onOpenCaseStudy(project)}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-bronze hover:bg-bronze-dark text-white text-xs font-bold transition-all duration-200 shadow-sm"
      >
        <span>View Details</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    );
  };

  return (
    <div className="group relative bg-white rounded-2xl sm:rounded-3xl border border-[#142B4A]/10 hover:border-bronze overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#142B4A]/5 hover:-translate-y-1">
      {/* Visual Frame */}
      <div className="relative w-full aspect-[16/10] bg-[#FAF7F2] overflow-hidden flex items-center justify-center p-2 sm:p-3">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-102"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#142B4A]/90 text-white backdrop-blur-md shadow-sm uppercase tracking-wider">
            {project.categoryLabel}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-sans font-bold bg-bronze text-white shadow-sm">
              <Sparkles className="w-3 h-3" />
              <span>Featured</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
        <div className="space-y-2">
          <div className="text-[11px] font-mono font-bold text-bronze uppercase tracking-wider">
            {project.brand}
          </div>
          <h3
            onClick={() => onOpenCaseStudy(project)}
            className="font-display text-lg sm:text-xl font-bold text-[#142B4A] group-hover:text-bronze cursor-pointer transition-colors leading-snug"
          >
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#486581] font-sans leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tools and Links Footer */}
        <div className="pt-4 border-t border-[#142B4A]/10 space-y-3.5">
          {/* Tools Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tools.slice(0, 4).map((tool, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FAF7F2] text-[#142B4A] border border-[#142B4A]/10"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="text-xs font-sans font-bold text-[#142B4A] hover:text-bronze flex items-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-bronze" />
              <span>View Details</span>
            </button>

            {getPrimaryAction()}
          </div>
        </div>
      </div>
    </div>
  );
}
