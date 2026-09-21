import React, { useState, useEffect } from 'react';
import { Film, Image as ImageIcon, Sparkles, FolderDown, ArrowUpRight, Filter } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projectsData, portfolioCategories, DRIVE_VIDEO_URL, DRIVE_STATIC_URL, BEHANCE_PROFILE_URL } from '../data/portfolioData';

export default function ProjectsPage({ initialCategory = 'all', onOpenCaseStudy }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-12 sm:space-y-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#142B4A]/10 text-left">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-bronze/30 text-xs font-mono font-bold text-bronze shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial Portfolio Gallery</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142B4A] tracking-tight">
            Selected Work & Commercial Campaigns
          </h1>
          <p className="text-sm sm:text-base text-[#486581] leading-relaxed font-medium">
            High-impact commercial video advertising, kinetic typography, promotional posters, and product brand showcases presented in high-fidelity 1:1 artwork formats.
          </p>
        </div>

        {/* Drive Quick Links */}
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={DRIVE_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white hover:bg-canvas-muted border border-[#142B4A]/10 hover:border-bronze/40 text-[#142B4A] font-sans font-semibold text-xs transition-luxury shadow-sm min-h-[44px]"
          >
            <Film className="w-3.5 h-3.5 text-bronze" />
            <span>Video Drive Folder</span>
            <ArrowUpRight className="w-3 h-3 text-bronze" />
          </a>
          <a
            href={DRIVE_STATIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white hover:bg-canvas-muted border border-[#142B4A]/10 hover:border-bronze/40 text-[#142B4A] font-sans font-semibold text-xs transition-luxury shadow-sm min-h-[44px]"
          >
            <ImageIcon className="w-3.5 h-3.5 text-bronze" />
            <span>Static Posters Drive</span>
            <ArrowUpRight className="w-3 h-3 text-bronze" />
          </a>
        </div>
      </div>

      {/* Category Filter Tabs Bar */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-white p-2 rounded-2xl border border-[#142B4A]/10 w-full sm:w-fit shadow-sm">
        {portfolioCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-sans font-bold transition-luxury focus:outline-none min-h-[40px] ${
                isActive
                  ? 'bg-[#142B4A] text-white shadow-md shadow-[#142B4A]/20'
                  : 'text-[#142B4A] hover:text-bronze hover:bg-canvas-muted'
              }`}
            >
              {cat.id === 'motion' && <Film className="w-3.5 h-3.5" />}
              {cat.id === 'poster' && <ImageIcon className="w-3.5 h-3.5" />}
              {cat.id === 'all' && <Filter className="w-3.5 h-3.5" />}
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white font-bold' : 'bg-canvas-muted text-[#142B4A]'
                }`}
              >
                {cat.id === 'all'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === cat.id).length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Current Category Explanation Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#142B4A]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#486581] shadow-sm">
        <div className="text-left">
          <span className="font-bold text-[#142B4A] font-display mr-2">
            Showing: {portfolioCategories.find((c) => c.id === selectedCategory)?.label}
          </span>
          <span>{portfolioCategories.find((c) => c.id === selectedCategory)?.description}</span>
        </div>
        <span className="font-mono text-bronze font-bold whitespace-nowrap">
          {filteredProjects.length} Projects Available
        </span>
      </div>

      {/* 1:1 Aspect Ratio Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={onOpenCaseStudy}
          />
        ))}
      </div>

      {/* Bottom Google Drive & Behance Callout */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#142B4A] text-white border border-bronze/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-left">
          <span className="text-xs font-mono text-bronze-light uppercase tracking-widest block font-bold">
            Cloud Repositories & Raw Project Masters
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
            Need High-Bitrate Video Files or Print Masters?
          </h3>
          <p className="text-xs sm:text-sm text-ivory/80 max-w-xl font-normal">
            View original 4K video exports, project timelines, and high-resolution print files across our dedicated Google Drive repositories.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full lg:w-auto">
          <a
            href={DRIVE_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-bronze text-white font-sans font-bold text-xs shadow-lg shadow-bronze/20 hover:bg-bronze-dark transition-luxury flex items-center justify-center gap-2 min-h-[44px]"
          >
            <Film className="w-4 h-4" />
            <span>Video Drive (4K)</span>
          </a>
          <a
            href={DRIVE_STATIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-bronze text-white font-sans font-bold text-xs shadow-lg shadow-bronze/20 hover:bg-bronze-dark transition-luxury flex items-center justify-center gap-2 min-h-[44px]"
          >
            <ImageIcon className="w-4 h-4" />
            <span>Posters Drive</span>
          </a>
          <a
            href={BEHANCE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-semibold text-xs transition-luxury flex items-center justify-center gap-2 backdrop-blur-sm min-h-[44px]"
          >
            <span>Behance Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-bronze-light" />
          </a>
        </div>
      </div>
    </div>
  );
}
