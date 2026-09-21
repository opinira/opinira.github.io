import React from 'react';
import { ArrowUpRight, MessageSquare, FolderDown, Film, Image as ImageIcon } from 'lucide-react';
import { BEHANCE_PROFILE_URL, DRIVE_VIDEO_URL, DRIVE_STATIC_URL } from '../data/portfolioData';

export default function Footer({ setActivePage }) {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="relative bg-[#142B4A] border-t border-[#142B4A]/20 pt-14 sm:pt-16 pb-12 overflow-hidden text-white text-left">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-bronze/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-14 border-b border-white/10">
          {/* Left Column: Brand & Title */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0E1E34] border border-bronze/50 flex items-center justify-center font-display font-bold text-white text-base shadow-sm">
                <span className="text-bronze-light">N</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white tracking-tight">
                Mst. Opisultana Nira
              </h3>
            </div>
            <p className="text-xs uppercase tracking-widest text-bronze-light font-bold">
              Motion Graphics Designer & UI/UX Designer
            </p>
            <p className="text-sm text-ivory/80 leading-relaxed max-w-sm font-normal">
              Creating high-impact commercial visuals, promotional campaigns, and thoughtful digital experiences for international export brands and creative marketing teams.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E1E34] border border-bronze/30 text-xs text-ivory font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Worldwide Remote Contracts
              </span>
            </div>
          </div>

          {/* Middle Column: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-bronze-light">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-ivory/80 hover:text-bronze-light transition-luxury text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('experience')}
                  className="text-ivory/80 hover:text-bronze-light transition-luxury text-left"
                >
                  Work Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-ivory/80 hover:text-bronze-light transition-luxury text-left"
                >
                  About & Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('projects')}
                  className="text-ivory/80 hover:text-bronze-light transition-luxury text-left"
                >
                  Featured Projects & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-ivory/80 hover:text-bronze-light transition-luxury text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column: Connect & Channels */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-bronze-light">
              Portfolios & Media Repositories
            </h4>
            <div className="space-y-2.5">
              {/* WhatsApp Direct */}
              <button
                onClick={handleWhatsAppChat}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 hover:border-emerald-400 text-white hover:text-emerald-300 transition-luxury group text-left min-h-[44px]"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold">WhatsApp: 01312727685</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-luxury" />
              </button>

              {/* Video Drive */}
              <a
                href={DRIVE_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#0E1E34] border border-white/10 hover:border-bronze/50 text-white hover:text-bronze-light transition-luxury group min-h-[44px]"
              >
                <div className="flex items-center gap-2.5">
                  <Film className="w-4 h-4 text-bronze-light" />
                  <span className="text-xs sm:text-sm font-semibold">Video Projects (Google Drive)</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ivory/60 group-hover:text-bronze-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-luxury" />
              </a>

              {/* Static Posters Drive */}
              <a
                href={DRIVE_STATIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#0E1E34] border border-white/10 hover:border-bronze/50 text-white hover:text-bronze-light transition-luxury group min-h-[44px]"
              >
                <div className="flex items-center gap-2.5">
                  <ImageIcon className="w-4 h-4 text-bronze-light" />
                  <span className="text-xs sm:text-sm font-semibold">Static Posters (Google Drive)</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ivory/60 group-hover:text-bronze-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-luxury" />
              </a>

              {/* Behance */}
              <a
                href={BEHANCE_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#0E1E34] border border-white/10 hover:border-blue-400 text-white hover:text-blue-300 transition-luxury group min-h-[44px]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-display font-bold text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    Bē
                  </span>
                  <span className="text-xs sm:text-sm font-semibold">Behance Portfolio Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ivory/60 group-hover:text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-luxury" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60 font-sans text-center sm:text-left">
          <p>© {currentYear} Mst. Opisultana Nira. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-ivory/60">
            <span>Direct WhatsApp: 01312727685</span>
            <span>•</span>
            <span className="text-bronze-light">Motion Graphics & UI/UX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
