import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Film, Image as ImageIcon, CheckCircle2, MessageSquare, Compass, Layout } from 'lucide-react';
import portraitImg from '../assets/images/portrait.png';
import CategoryBanner from '../components/CategoryBanner';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/portfolioData';
import { professionalProfile, servicesData } from '../data/educationData';

export default function HomePage({ setActivePage, onOpenCaseStudy, onSelectCategory }) {
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

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Film':
        return <Film className="w-5 h-5 sm:w-6 sm:h-6 text-bronze" />;
      case 'Image':
        return <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6 text-bronze" />;
      case 'Layout':
        return <Layout className="w-5 h-5 sm:w-6 sm:h-6 text-bronze" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-bronze" />;
      default:
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-bronze" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-32">
      {/* 1. Hero Section */}
      <section className="relative pt-10 sm:pt-16 lg:pt-20 pb-4 sm:pb-6 overflow-hidden">
        {/* Ambient warm glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-bronze/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-bronze/40 shadow-sm backdrop-blur-md max-w-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-mono font-bold text-[#142B4A] tracking-wide truncate">
                  Motion Graphics & UI/UX Specialist • Available for Hire
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#142B4A] tracking-tight leading-[1.15]">
                Designing Visual Stories That <span className="text-transparent bg-clip-text bg-gradient-to-r from-bronze via-bronze-dark to-[#142B4A]">Move Brands Forward.</span>
              </h1>

              {/* Subtitle / Intro */}
              <p className="text-sm sm:text-base lg:text-lg text-[#334E68] leading-relaxed max-w-2xl font-sans font-medium">
                {professionalProfile.heroSubheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button
                  onClick={() => handleNavClick('projects')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-bronze to-bronze-dark hover:from-bronze-light hover:to-bronze text-white font-display font-bold text-sm shadow-xl shadow-bronze/25 transition-luxury group min-h-[44px]"
                >
                  <span>View Case Studies</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-luxury" />
                </button>

                <button
                  onClick={handleWhatsAppChat}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-sm shadow-lg shadow-emerald-700/20 transition-luxury min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: 01312727685</span>
                </button>

                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-canvas-muted border border-[#142B4A]/15 hover:border-bronze text-[#142B4A] font-display font-bold text-sm transition-luxury shadow-sm min-h-[44px]"
                >
                  <span>Contact Form</span>
                  <ArrowUpRight className="w-4 h-4 text-bronze" />
                </button>
              </div>

              {/* Brand Bar */}
              <div className="pt-4 sm:pt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#486581] font-mono font-semibold border-t border-[#142B4A]/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-bronze flex-shrink-0" />
                  <span>Royal Hair Wigs & Roylux (Worldwide Export)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-bronze flex-shrink-0" />
                  <span>Varendra University CSE</span>
                </div>
              </div>
            </div>

            {/* Right Content: Professional Portrait (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] rounded-3xl p-2.5 sm:p-3 bg-white border border-[#142B4A]/10 shadow-2xl shadow-[#142B4A]/10 group">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 relative">
                  <img
                    src={portraitImg}
                    alt="Mst. Opisultana Nira"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-luxury duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142B4A]/50 via-transparent to-transparent opacity-40" />
                </div>

                {/* Floating Info Pill */}
                <div className="absolute -bottom-3 sm:-bottom-4 left-4 right-4 sm:left-6 sm:right-6 p-3 rounded-2xl bg-[#142B4A] border border-bronze/40 shadow-xl backdrop-blur-md flex items-center justify-between text-white">
                  <div className="text-left">
                    <span className="text-xs font-bold text-white font-display block">
                      Mst. Opisultana Nira
                    </span>
                    <span className="text-[10px] font-mono text-bronze-light block">
                      Motion & UI/UX Designer
                    </span>
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0E1E34] border border-bronze/40 flex items-center justify-center text-bronze-light flex-shrink-0">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Primary 2-Category Spotlight Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-bronze" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-bronze">
              Core Creative Disciplines
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#142B4A] tracking-tight">
            Commercial Motion & Static Visuals
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-[#486581] max-w-2xl font-medium">
            Explore curated work crafted with precision for international luxury export brands, promotional marketing campaigns, and digital product experiences.
          </p>
        </div>

        {/* 1:1 Equal-Sized Category Banner Containers */}
        <CategoryBanner onSelectCategory={onSelectCategory} />
      </section>

      {/* 3. Featured Commercial Case Studies (2 Main Projects) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 text-left">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-bronze">
              Case Study Breakdowns
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#142B4A] tracking-tight">
              Selected Commercial Projects
            </h2>
          </div>
          <button
            onClick={() => handleNavClick('projects')}
            className="inline-flex items-center gap-2 text-sm font-sans font-bold text-bronze hover:text-bronze-dark transition-luxury min-h-[44px] self-start sm:self-auto"
          >
            <span>Explore Project Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 1:1 Square Grid for the 2 Main Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>
      </section>

      {/* 4. Creative Services / What I Do Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#142B4A]/10 p-5 sm:p-8 lg:p-12 space-y-8 sm:space-y-12 shadow-xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-bronze/5 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-muted border border-bronze/30 text-xs font-mono font-bold text-bronze">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Creative Capabilities & Offerings</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#142B4A] tracking-tight">
              Comprehensive Design & Motion Services
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#486581] leading-relaxed font-medium">
              Tailored creative solutions designed to help creative agencies, product brands, and digital marketers capture attention and accelerate conversion.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="p-5 sm:p-7 rounded-2xl bg-[#FAF7F2] border border-[#142B4A]/10 hover:border-bronze hover:bg-white transition-luxury space-y-4 sm:space-y-5 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#142B4A]/10 flex items-center justify-center group-hover:border-bronze transition-luxury shadow-sm">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] sm:text-xs font-mono text-bronze uppercase tracking-wider font-bold">
                      Service Area
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#142B4A] group-hover:text-bronze transition-luxury">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-bronze-dark font-semibold mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#486581] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables checklist */}
                <div className="pt-3.5 sm:pt-4 border-t border-[#142B4A]/10 space-y-2">
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#627D98] uppercase tracking-wider font-bold block">
                    Core Deliverables:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {service.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#334E68] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#142B4A]/10">
            <span className="text-xs text-[#486581] font-semibold text-center sm:text-left">
              Have a custom project or unique deliverable in mind?
            </span>
            <button
              onClick={handleWhatsAppChat}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-luxury min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss on WhatsApp (01312727685)</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. "About Me" Spotlight Section on Homepage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#142B4A]/10 p-5 sm:p-8 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Portrait side */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[240px] sm:max-w-xs aspect-[4/5] rounded-2xl p-2 bg-[#FAF7F2] border border-[#142B4A]/10 shadow-lg">
                <img
                  src={portraitImg}
                  alt="Mst. Opisultana Nira"
                  className="w-full h-full object-cover object-top rounded-xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-3 left-3 right-3 sm:left-4 sm:right-4 p-2.5 rounded-xl bg-[#142B4A] border border-bronze/40 text-center text-white shadow-md">
                  <span className="text-xs font-display font-bold text-white block">
                    Mst. Opisultana Nira
                  </span>
                  <span className="text-[10px] font-mono text-bronze-light">
                    CSE Undergraduate & Creative Designer
                  </span>
                </div>
              </div>
            </div>

            {/* Bio & Details side */}
            <div className="lg:col-span-8 space-y-5 sm:space-y-6 text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-muted border border-bronze/30 text-xs font-mono font-bold text-bronze">
                  <Compass className="w-3.5 h-3.5" />
                  <span>About The Designer</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#142B4A] tracking-tight">
                  Creative Vision Driven by Engineering Precision
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#334E68] leading-relaxed font-medium">
                <p>
                  I am a <strong className="text-[#142B4A] font-bold">Motion Graphics Designer & UI/UX Designer</strong> currently pursuing a <strong className="text-[#142B4A] font-bold">B.Sc. in Computer Science & Engineering</strong> at Varendra University.
                </p>
                <p>
                  Since November 2023, I have been designing commercial video advertisements, luxury product showcases, static promotional posters, and e-commerce UI interfaces for <strong className="text-[#142B4A] font-bold">Royal Hair Wigs & Roylux</strong> (worldwide export brands), serving international clients across North America, Europe, and global markets.
                </p>
              </div>

              {/* Quick Info Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1">
                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/10">
                  <span className="text-[10px] font-mono text-bronze uppercase font-bold block">Experience</span>
                  <span className="text-xs font-bold text-[#142B4A] font-display block mt-0.5">Nov 2023 – Present</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/10">
                  <span className="text-[10px] font-mono text-bronze uppercase font-bold block">Education</span>
                  <span className="text-xs font-bold text-[#142B4A] font-display block mt-0.5">B.Sc. in CSE (VU)</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/10">
                  <span className="text-[10px] font-mono text-bronze uppercase font-bold block">WhatsApp</span>
                  <span className="text-xs font-bold text-emerald-600 font-display block mt-0.5">01312727685</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/10">
                  <span className="text-[10px] font-mono text-bronze uppercase font-bold block">Behance</span>
                  <span className="text-xs font-bold text-blue-600 font-display block mt-0.5">opinira</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-bronze text-white font-display font-bold text-xs shadow-md hover:bg-bronze-dark transition-luxury min-h-[44px]"
                >
                  Read Full About Story ➔
                </button>
                <button
                  onClick={() => handleNavClick('experience')}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white border border-[#142B4A]/15 hover:border-bronze text-[#142B4A] font-sans font-semibold text-xs transition-luxury shadow-sm min-h-[44px]"
                >
                  View Experience Timeline
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Direct Contact Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#142B4A] text-white rounded-3xl border border-bronze/40 p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-bronze/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3 text-left">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0E1E34] text-bronze-light border border-bronze/30 inline-block">
                Start a Conversation
              </span>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Let’s Collaborate on Your Next Brand Campaign.
              </h3>
              <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed max-w-2xl font-normal">
                Available for commercial video advertising, brand motion reels, luxury promotional posters, and UI/UX design. Reach out directly on WhatsApp or Email for fast turnaround.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end w-full">
              <button
                onClick={handleWhatsAppChat}
                className="w-full px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs shadow-lg shadow-emerald-950/30 transition-luxury text-center flex items-center justify-center gap-2 min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: 01312727685</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans font-semibold text-xs transition-luxury text-center backdrop-blur-sm min-h-[44px]"
              >
                Open Contact Form
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
