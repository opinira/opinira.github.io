import React, { useEffect } from 'react';
import { X, ArrowUpRight, FolderDown, Sparkles, CheckCircle2, Layers, Wrench, FileText } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const cs = project.caseStudy || {};
  const overview = cs.overview || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#142B4A]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-[#142B4A]/15 rounded-2xl shadow-2xl shadow-[#142B4A]/30 overflow-hidden my-auto max-h-[94vh] flex flex-col z-10 animate-fadeIn text-left">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#142B4A]/10 bg-[#FAF7F2] backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-bronze text-white uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-[#486581] font-medium hidden sm:inline">
              Case Study & Creative Breakdown
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white hover:bg-canvas-muted text-[#142B4A] hover:text-bronze border border-[#142B4A]/10 transition-luxury focus:outline-none min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8 sm:space-y-10 custom-scrollbar bg-white">
          {/* Hero Banner with 1:1 Media Container */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl border border-[#142B4A]/10">
            {/* Square 1:1 Image Container */}
            <div className="md:col-span-5 relative w-full aspect-square rounded-xl overflow-hidden border border-[#142B4A]/10 shadow-lg group">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-luxury duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142B4A]/60 via-transparent to-transparent opacity-40" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="inline-block px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono font-bold bg-[#142B4A]/90 text-white backdrop-blur-sm">
                  1:1 Ratio Master Artwork
                </span>
              </div>
            </div>

            {/* Quick Summary Info */}
            <div className="md:col-span-7 space-y-3 sm:space-y-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-bronze font-mono font-bold">
                  {overview.projectType || 'Commercial Design Project'}
                </span>
                <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#142B4A] tracking-tight leading-tight">
                  {project.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#486581] leading-relaxed">
                {project.description}
              </p>

              {/* Client & Timeline Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 text-xs">
                <div className="p-3 rounded-lg bg-white border border-[#142B4A]/10 shadow-sm">
                  <span className="block text-[#627D98] text-[10px] uppercase tracking-wider font-semibold">Client / Brand</span>
                  <span className="block font-bold text-[#142B4A] mt-0.5">{project.brand}</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#142B4A]/10 shadow-sm">
                  <span className="block text-[#627D98] text-[10px] uppercase tracking-wider font-semibold">Deliverable Type</span>
                  <span className="block font-bold text-[#142B4A] mt-0.5">{project.deliverableType}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
                {project.driveUrl && (
                  <a
                    href={project.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-bronze text-white font-sans font-bold text-xs shadow-lg shadow-bronze/20 hover:bg-bronze-dark transition-luxury min-h-[44px]"
                  >
                    <FolderDown className="w-4 h-4" />
                    <span>Open Drive Project Media</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.behanceUrl && (
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-canvas-muted border border-[#142B4A]/15 text-[#142B4A] font-sans font-semibold text-xs transition-luxury shadow-sm min-h-[44px]"
                  >
                    <span>View on Behance</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-bronze" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: Project Objective */}
          {cs.objective && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-bronze">
                <FileText className="w-5 h-5 flex-shrink-0" />
                <h3 className="font-display text-sm sm:text-base font-bold text-[#142B4A] uppercase tracking-wider">
                  01. Project Objective
                </h3>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/10 text-xs sm:text-sm text-[#486581] leading-relaxed font-medium">
                {cs.objective}
              </div>
            </div>
          )}

          {/* Section 3: Creative Approach */}
          {cs.creativeApproach && (
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-bronze">
                <Sparkles className="w-5 h-5 flex-shrink-0" />
                <h3 className="font-display text-sm sm:text-base font-bold text-[#142B4A] uppercase tracking-wider">
                  02. Creative Approach & Visual Direction
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/10 space-y-1.5 sm:space-y-2">
                  <span className="text-xs font-bold text-bronze uppercase tracking-wider block">Visual Direction</span>
                  <p className="text-xs text-[#486581] leading-relaxed">{cs.creativeApproach.visualDirection}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/10 space-y-1.5 sm:space-y-2">
                  <span className="text-xs font-bold text-bronze uppercase tracking-wider block">Composition</span>
                  <p className="text-xs text-[#486581] leading-relaxed">{cs.creativeApproach.composition}</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/10 space-y-1.5 sm:space-y-2">
                  <span className="text-xs font-bold text-bronze uppercase tracking-wider block">Motion / Static Style</span>
                  <p className="text-xs text-[#486581] leading-relaxed">{cs.creativeApproach.motionStyle}</p>
                </div>
              </div>
            </div>
          )}

          {/* Section 4: Design & Production Process */}
          {cs.productionProcess && (
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-bronze">
                <Layers className="w-5 h-5 flex-shrink-0" />
                <h3 className="font-display text-sm sm:text-base font-bold text-[#142B4A] uppercase tracking-wider">
                  03. Design & Production Process
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {cs.productionProcess.map((proc, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/10 space-y-1">
                    <span className="text-xs font-mono font-bold text-[#142B4A] block">{proc.step}</span>
                    <p className="text-xs text-[#486581] leading-relaxed">{proc.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 5: Tools Used */}
          {cs.toolsUsed && (
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-bronze">
                <Wrench className="w-5 h-5 flex-shrink-0" />
                <h3 className="font-display text-sm sm:text-base font-bold text-[#142B4A] uppercase tracking-wider">
                  04. Tools & Software Pipeline
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
                {cs.toolsUsed.map((tool, idx) => (
                  <div key={idx} className="p-3 sm:p-3.5 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/10 flex items-start gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-bronze mt-1.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-[#142B4A] block">{tool.name}</span>
                      <span className="text-[11px] text-[#486581] leading-tight block mt-0.5">{tool.purpose}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 6 & 7: Deliverables & Reflection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Deliverables */}
            {cs.deliverables && (
              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/10 space-y-3">
                <span className="text-xs font-display font-bold text-bronze uppercase tracking-wider block">
                  Final Deliverables
                </span>
                <ul className="space-y-2">
                  {cs.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#486581] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Reflection */}
            {cs.reflection && (
              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF7F2] border border-bronze/30 space-y-2">
                <span className="text-xs font-display font-bold text-bronze uppercase tracking-wider block">
                  Creative Reflection
                </span>
                <p className="text-xs text-[#486581] leading-relaxed italic">
                  "{cs.reflection}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-[#FAF7F2] border-t border-[#142B4A]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#486581]">
          <span className="font-mono text-[11px] font-semibold text-center sm:text-left">Mst. Opisultana Nira • Portfolio Project</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#142B4A] hover:bg-[#1E3C66] text-white font-semibold transition-luxury shadow-sm min-h-[40px]"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
