import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FolderDown, Film, Image as ImageIcon } from 'lucide-react';
import { BEHANCE_PROFILE_URL, DRIVE_VIDEO_URL, DRIVE_STATIC_URL } from '../data/portfolioData';

export default function Navbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [driveDropdownOpen, setDriveDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setDriveDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = pageId === 'home' ? '' : pageId;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#142B4A]/10 shadow-sm py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none"
            aria-label="Go to homepage"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#142B4A] border border-bronze/40 flex items-center justify-center font-display font-bold text-white text-base sm:text-lg group-hover:border-bronze transition-luxury shadow-md shadow-[#142B4A]/10 flex-shrink-0">
              <span className="text-bronze-light">N</span>
            </div>
            <div>
              <span className="block font-display text-sm sm:text-base font-bold text-[#142B4A] tracking-wide group-hover:text-bronze transition-luxury">
                Mst. Opisultana Nira
              </span>
              <span className="block text-[10px] sm:text-[11px] font-sans font-semibold text-bronze uppercase tracking-wider">
                Motion & UI/UX Designer
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#142B4A]/10 shadow-sm">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 lg:px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-sans font-bold transition-luxury ${
                    isActive
                      ? 'text-white bg-[#142B4A] shadow-md shadow-[#142B4A]/20'
                      : 'text-[#142B4A] hover:text-bronze hover:bg-canvas-muted/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA (Drive Dropdown & Behance Quick Links) */}
          <div className="hidden lg:flex items-center gap-2.5 relative">
            {/* Drive Files Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDriveDropdownOpen(!driveDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-sans font-bold text-[#142B4A] hover:text-bronze bg-white/90 hover:bg-white border border-[#142B4A]/10 hover:border-bronze transition-luxury shadow-sm"
              >
                <FolderDown className="w-3.5 h-3.5 text-bronze" />
                <span>Drive Media</span>
              </button>

              {driveDropdownOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-56 bg-white border border-[#142B4A]/15 rounded-xl shadow-xl p-2 space-y-1 z-50 text-left animate-fadeIn"
                  onMouseLeave={() => setDriveDropdownOpen(false)}
                >
                  <a
                    href={DRIVE_VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-[#FAF7F2] text-xs font-bold text-[#142B4A] hover:text-bronze transition-luxury"
                  >
                    <Film className="w-4 h-4 text-bronze" />
                    <div>
                      <span>Video Projects Folder</span>
                      <span className="block text-[10px] text-[#627D98] font-normal font-mono">Commercial Motion Ads</span>
                    </div>
                  </a>
                  <a
                    href={DRIVE_STATIC_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-[#FAF7F2] text-xs font-bold text-[#142B4A] hover:text-bronze transition-luxury"
                  >
                    <ImageIcon className="w-4 h-4 text-bronze" />
                    <div>
                      <span>Static Posters Folder</span>
                      <span className="block text-[10px] text-[#627D98] font-normal font-mono">Commercial Poster Artwork</span>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a
              href={BEHANCE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-sans font-bold text-white bg-gradient-to-r from-bronze to-bronze-dark hover:from-bronze-light hover:to-bronze transition-luxury shadow-md shadow-bronze/20"
            >
              <span>Behance</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-[#142B4A]/10 text-[#142B4A] hover:text-bronze focus:outline-none transition-luxury shadow-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bottom-0 bg-[#F5F1E8]/98 backdrop-blur-xl border-b border-[#142B4A]/10 p-5 sm:p-6 flex flex-col justify-between animate-fadeIn z-40 overflow-y-auto">
          <div className="space-y-2.5">
            <div className="text-[11px] font-mono tracking-widest text-bronze uppercase mb-2 font-bold text-left">
              Navigation Menu
            </div>
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left font-display text-base sm:text-lg font-bold transition-luxury min-h-[44px] ${
                    isActive
                      ? 'bg-[#142B4A] text-white pl-4 shadow-sm'
                      : 'text-[#142B4A] hover:bg-white hover:text-bronze pl-3'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-bronze" />}
                </button>
              );
            })}
          </div>

          {/* Mobile Drive & Behance Links */}
          <div className="pt-5 border-t border-[#142B4A]/10 space-y-2.5">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#627D98] font-bold text-left">
              Google Drive Project Repositories
            </div>
            
            <a
              href={DRIVE_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-3 rounded-xl bg-white border border-[#142B4A]/10 text-[#142B4A] font-sans font-bold text-xs transition-luxury shadow-sm min-h-[44px]"
            >
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-bronze" />
                <span>Video Projects Drive</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-bronze" />
            </a>

            <a
              href={DRIVE_STATIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-3 rounded-xl bg-white border border-[#142B4A]/10 text-[#142B4A] font-sans font-bold text-xs transition-luxury shadow-sm min-h-[44px]"
            >
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-bronze" />
                <span>Static Posters Drive</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-bronze" />
            </a>

            <a
              href={BEHANCE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-bronze text-white font-display font-bold text-xs shadow-lg shadow-bronze/25 transition-luxury min-h-[44px]"
            >
              <span>View Behance Portfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
