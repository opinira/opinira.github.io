import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, MessageSquare, Mail, Layers } from 'lucide-react';
import portraitImg from '../assets/images/portrait.png';
import TypingTagline from '../components/TypingTagline';
import CategoryBanner from '../components/CategoryBanner';
import ProjectCard from '../components/ProjectCard';
import { projectsData, portfolioCategories } from '../data/portfolioData';
import { professionalProfile } from '../data/educationData';

export default function HomePage({ setActivePage, onOpenCaseStudy, onSelectCategory }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = pageId === 'home' ? '' : pageId;
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hello Nira! I visited your creative portfolio website and would like to discuss a project.`
    );
    window.open(`https://wa.me/8801312727685?text=${text}`, '_blank');
  };

  const handleCategoryCardClick = (catId) => {
    setSelectedFilter(catId);
    const projectsElem = document.getElementById('projects-section');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All Work' },
    ...portfolioCategories.map((c) => ({ id: c.id, label: c.label })),
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.category === selectedFilter;
  });

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-32">
      {/* 1. Hero Section */}
      <section className="relative pt-10 sm:pt-16 lg:pt-20 pb-4 sm:pb-8 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-bronze/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Text & Typing Headline (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#142B4A]/10 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-mono font-bold text-[#142B4A] tracking-wide">
                  Available for Remote & International Contracts
                </span>
              </div>

              {/* Name & Headline */}
              <div className="space-y-2">
                <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#142B4A] tracking-tight leading-[1.12]">
                  Mst. Opisultana Nira
                </h1>

                {/* Animated Typing Tagline */}
                <TypingTagline />
              </div>

              {/* Concise Introduction: Exactly one factual sentence */}
              <p className="text-sm sm:text-base lg:text-lg text-[#334E68] leading-relaxed max-w-2xl font-sans font-medium">
                I design intuitive interfaces and build responsive web experiences.
              </p>

              {/* Two Clear Primary Actions + WhatsApp */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <a
                  href="#work-categories"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-bronze hover:bg-bronze-dark text-white font-display font-bold text-sm shadow-xl shadow-bronze/25 transition-all duration-200 group min-h-[46px]"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#142B4A]/15 hover:border-bronze text-[#142B4A] font-display font-bold text-sm transition-all duration-200 shadow-sm min-h-[46px]"
                >
                  <Mail className="w-4 h-4 text-bronze" />
                  <span>Get in Touch</span>
                </button>

                <button
                  onClick={handleWhatsAppChat}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-sm shadow-md transition-all duration-200 min-h-[46px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>

              {/* Institutional & Current Brand Affiliation */}
              <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#486581] font-mono font-semibold border-t border-[#142B4A]/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-bronze flex-shrink-0" />
                  <span>Royal Hair Wigs & Roylux (Worldwide Export Brands)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>Varendra University (B.Sc. in CSE)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Main Portrait (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group max-w-sm sm:max-w-md w-full">
                {/* Subtle Luxury Outer Glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-bronze/40 via-bronze/10 to-navy/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Portrait Card */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-bronze/40 p-2 sm:p-2.5 shadow-2xl">
                  <img
                    src={portraitImg}
                    alt="Mst. Opisultana Nira Portrait"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover rounded-xl sm:rounded-2xl block"
                  />

                  {/* Corner Brand Pill */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#142B4A]/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-white flex items-center justify-between text-xs">
                    <span className="font-display font-bold">Nira</span>
                    <span className="text-[11px] font-mono text-bronze-light font-medium">Front-End Developer & UI/UX Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Work Categories Section ("Explore My Work") */}
      <section id="work-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryBanner onSelectCategory={handleCategoryCardClick} />
      </section>

      {/* 3. Project Collection with Filter Toolbar */}
      <section id="projects-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#142B4A]/10 text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#142B4A]/10 text-xs font-mono font-bold text-bronze uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Project Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#142B4A] tracking-tight">
              Featured Work
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-[#142B4A]/10 shadow-sm">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              const count = tab.id === 'all'
                ? projectsData.length
                : projectsData.filter((p) => p.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-sans font-bold transition-all duration-200 min-h-[38px] ${
                    isActive
                      ? 'bg-[#142B4A] text-white shadow-md'
                      : 'text-[#142B4A] hover:text-bronze hover:bg-[#FAF7F2]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#FAF7F2] text-[#486581]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>
      </section>

      {/* 4. Short About & Verified Skills Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#142B4A]/10 p-6 sm:p-10 lg:p-12 shadow-sm text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FAF7F2] text-bronze border border-[#142B4A]/10 inline-block">
                About Me
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#142B4A]">
                About Me
              </h3>
              <p className="text-sm sm:text-base text-[#486581] font-sans leading-relaxed">
                I’m Nira, a front-end developer and UI/UX designer. I create clear interfaces and responsive websites, combining thoughtful design with practical development to make digital experiences easy to use.
              </p>
              
              <div className="pt-2 space-y-2">
                <span className="text-xs font-mono font-bold text-[#142B4A] uppercase tracking-wider block">Skills</span>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-[#142B4A]">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'HTML/CSS', 'After Effects', 'Flutter'].map((s, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#142B4A]/10 font-bold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#142B4A]/10 space-y-1">
                <span className="text-[10px] font-mono font-bold text-bronze uppercase">Current Role</span>
                <span className="text-sm font-bold text-[#142B4A] block">UI/UX Designer & Developer</span>
                <span className="text-xs text-[#627D98] block">Royal Hair Wigs & Roylux</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#142B4A]/10 space-y-1">
                <span className="text-[10px] font-mono font-bold text-bronze uppercase">Education</span>
                <span className="text-sm font-bold text-[#142B4A] block">B.Sc. in CSE (Ongoing)</span>
                <span className="text-xs text-[#627D98] block">Varendra University, Rajshahi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#142B4A] text-white rounded-3xl border border-bronze/40 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-bronze/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0E1E34] text-bronze-light border border-bronze/30 inline-block">
                Get in Touch
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Let’s Connect
              </h3>
              <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed max-w-xl">
                Let’s collaborate on your next digital product or web experience.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-end">
              <button
                onClick={handleWhatsAppChat}
                className="w-full px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs shadow-lg transition-all text-center flex items-center justify-center gap-2 min-h-[46px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: 01312727685</span>
              </button>

              <a
                href={`mailto:${professionalProfile.email}`}
                className="w-full px-5 py-3.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#142B4A] font-display font-bold text-xs shadow-md transition-all text-center flex items-center justify-center gap-2 min-h-[46px]"
              >
                <Mail className="w-4 h-4 text-bronze" />
                <span>{professionalProfile.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
