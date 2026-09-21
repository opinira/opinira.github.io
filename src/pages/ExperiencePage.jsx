import React from 'react';
import { Briefcase, Sparkles, ArrowUpRight, FolderDown } from 'lucide-react';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillGroup from '../components/SkillGroup';
import { DRIVE_PROJECTS_URL, BEHANCE_PROFILE_URL } from '../data/portfolioData';

export default function ExperiencePage({ setActivePage }) {
  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="space-y-4 text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-bronze/30 text-xs font-mono font-bold text-bronze shadow-sm">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Background</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#142B4A] tracking-tight">
          Work Experience & Core Competencies
        </h1>
        <p className="text-base sm:text-lg text-[#486581] leading-relaxed font-medium">
          Documented professional experience leading motion graphics advertising, commercial poster design, and UI/UX creative workflows for international luxury export brands.
        </p>
      </div>

      {/* Main Experience Section */}
      <section className="space-y-6 text-left">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-bronze" />
            <h2 className="font-display text-2xl font-bold text-[#142B4A] tracking-tight">
              Professional Experience Timeline
            </h2>
          </div>
          <span className="text-xs font-mono text-bronze font-bold">2023 — Present</span>
        </div>

        <ExperienceTimeline />
      </section>

      {/* Skills & Tools Pillars */}
      <section className="space-y-8">
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-bronze" />
            <h2 className="font-display text-2xl font-bold text-[#142B4A] tracking-tight">
              Categorized Skill Pillars
            </h2>
          </div>
          <p className="text-sm text-[#486581] max-w-2xl font-medium">
            Proficiencies across motion choreography, video editing software, static commercial design, and generative AI creative suites.
          </p>
        </div>

        <SkillGroup />
      </section>

      {/* External Verified Portfolio Badges */}
      <section className="p-8 rounded-3xl bg-[#142B4A] text-white border border-bronze/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-left">
          <h3 className="font-display text-xl font-bold text-white">
            Need to Review Source Project Files?
          </h3>
          <p className="text-xs sm:text-sm text-ivory/80 font-normal">
            Access commercial video masters, raw poster artworks, and design assets on Google Drive & Behance.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={DRIVE_PROJECTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-bronze text-white font-sans font-bold text-xs shadow-lg shadow-bronze/20 hover:bg-bronze-dark transition-luxury flex items-center gap-2"
          >
            <FolderDown className="w-4 h-4" />
            <span>Open Google Drive Media Folder</span>
          </a>
          <a
            href={BEHANCE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-semibold text-xs transition-luxury flex items-center gap-2 backdrop-blur-sm"
          >
            <span>Behance Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-bronze-light" />
          </a>
        </div>
      </section>
    </div>
  );
}
