import React from 'react';
import { ArrowUpRight, FolderDown, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-[#142B4A]/10 hover:border-bronze overflow-hidden flex flex-col transition-luxury shadow-lg hover:shadow-2xl hover:shadow-[#142B4A]/10">
      {/* 1:1 Aspect Ratio Square Image Container */}
      <div className="relative w-full aspect-square bg-slate-100 overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-luxury duration-700"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#142B4A]/80 via-[#142B4A]/20 to-transparent opacity-60 group-hover:opacity-75 transition-luxury" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-sans font-bold bg-[#142B4A]/90 text-white backdrop-blur-md shadow-md uppercase tracking-wider">
            {project.categoryLabel}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-sans font-bold bg-bronze text-white shadow-md">
              <Sparkles className="w-3 h-3" />
              <span>Featured</span>
            </span>
          )}
        </div>

        {/* Bottom Quick Trigger on Image */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between">
          <span className="text-[11px] font-mono text-white/90 bg-[#142B4A]/80 px-2 py-0.5 rounded backdrop-blur-sm">
            1:1 Artwork
          </span>
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bronze text-white text-xs font-bold shadow-lg shadow-bronze/30 hover:bg-bronze-dark transition-luxury"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
        <div className="space-y-2">
          <div className="text-[11px] font-mono font-bold text-bronze uppercase tracking-widest">
            {project.brand}
          </div>
          <h3
            onClick={() => onOpenCaseStudy(project)}
            className="font-display text-lg sm:text-xl font-bold text-[#142B4A] group-hover:text-bronze cursor-pointer transition-luxury leading-snug"
          >
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#486581] leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tools and Links Footer */}
        <div className="pt-3 border-t border-[#142B4A]/10 space-y-3">
          {/* Tools Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tools.slice(0, 3).map((tool, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-canvas-muted text-[#142B4A] border border-[#142B4A]/10"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-canvas-muted text-bronze font-bold border border-[#142B4A]/10">
                +{project.tools.length - 3}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="text-xs font-sans font-bold text-[#142B4A] hover:text-bronze flex items-center gap-1 transition-luxury"
            >
              <span>Read Full Breakdown</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-bronze" />
            </button>

            {project.driveUrl && (
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-sans font-semibold text-[#486581] hover:text-bronze transition-luxury"
                title="Open Google Drive Media Folder"
              >
                <FolderDown className="w-3.5 h-3.5 text-bronze" />
                <span>Drive</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
