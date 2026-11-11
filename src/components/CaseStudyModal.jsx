import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Layers, Terminal } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy || {};
  const overview = caseStudy.overview || {};

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#0E1E34]/80 backdrop-blur-sm overflow-y-auto animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#142B4A]/10 overflow-hidden text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#FAF7F2] to-white border-b border-[#142B4A]/10 flex items-start justify-between gap-4">
          <div className="space-y-1.5 pr-8">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#142B4A] text-white">
                {project.categoryLabel}
              </span>
              <span className="text-xs font-mono font-bold text-bronze uppercase tracking-wider">
                {project.brand}
              </span>
            </div>
            <h2 id="modal-title" className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#142B4A] leading-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#486581] hover:text-[#142B4A] transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Cover Media Preview */}
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#142B4A]/10 flex items-center justify-center p-3">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-bronze hover:bg-bronze-dark text-white font-display font-bold text-xs shadow-md shadow-bronze/20 transition-colors"
              >
                <span>Open Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0E1E34] hover:bg-bronze text-white font-display font-bold text-xs transition-colors"
              >
                <span>Open Interactive Prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#142B4A]/15 text-[#142B4A] font-display font-bold text-xs transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-bronze" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.driveUrl && (
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#142B4A]/15 text-[#142B4A] font-display font-bold text-xs transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-bronze" />
                <span>Google Drive Assets</span>
              </a>
            )}
          </div>

          {/* Objective & Overview */}
          <div className="space-y-2">
            <h3 className="text-sm font-mono font-bold text-bronze uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Project Objective</span>
            </h3>
            <p className="text-sm sm:text-base text-[#334E68] font-sans leading-relaxed">
              {caseStudy.objective || project.description}
            </p>
          </div>

          {/* Deliverables */}
          {caseStudy.deliverables && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono font-bold text-bronze uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Key Deliverables</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {caseStudy.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#486581]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Production */}
          <div className="space-y-3 pt-2 border-t border-[#142B4A]/10">
            <h3 className="text-sm font-mono font-bold text-bronze uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Technology & Tooling</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-[#FAF7F2] text-[#142B4A] border border-[#142B4A]/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
