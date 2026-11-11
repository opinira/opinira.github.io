import React, { useState, useEffect } from 'react';
import { Sparkles, Filter, ExternalLink, ArrowUpRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projectsData, portfolioCategories, DRIVE_VIDEO_URL, DRIVE_STATIC_URL, BEHANCE_PROFILE_URL } from '../data/portfolioData';

export default function ProjectsPage({ initialCategory = 'all', onOpenCaseStudy }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filterTabs = [
    { id: 'all', label: 'All Work', count: projectsData.length },
    ...portfolioCategories.map((c) => ({
      id: c.id,
      label: c.label,
      count: projectsData.filter((p) => p.category === c.id).length,
    })),
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-10 sm:space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#142B4A]/10 text-left">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#142B4A]/10 text-xs font-mono font-bold text-bronze shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Portfolio</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142B4A] tracking-tight">
            Selected Work & Projects
          </h1>
          <p className="text-sm sm:text-base text-[#486581] leading-relaxed font-sans">
            Commercial motion graphics, UI/UX systems, reactive web applications, and mobile products.
          </p>
        </div>

        {/* External Repositories */}
        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={DRIVE_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#142B4A]/10 text-[#142B4A] font-sans font-semibold text-xs shadow-sm"
          >
            <span>Motion Drive</span>
            <ExternalLink className="w-3 h-3 text-bronze" />
          </a>
          <a
            href={BEHANCE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#142B4A]/10 text-[#142B4A] font-sans font-semibold text-xs shadow-sm"
          >
            <span>Behance</span>
            <ExternalLink className="w-3 h-3 text-bronze" />
          </a>
        </div>
      </div>

      {/* Category Filter Tabs Bar */}
      <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-2xl border border-[#142B4A]/10 shadow-sm w-full sm:w-fit">
        {filterTabs.map((tab) => {
          const isActive = selectedCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-sans font-bold transition-all min-h-[38px] ${
                isActive
                  ? 'bg-[#142B4A] text-white shadow-md'
                  : 'text-[#142B4A] hover:text-bronze hover:bg-[#FAF7F2]'
              }`}
            >
              {tab.id === 'all' && <Filter className="w-3.5 h-3.5" />}
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#FAF7F2] text-[#486581]'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={onOpenCaseStudy}
          />
        ))}
      </div>
    </div>
  );
}
