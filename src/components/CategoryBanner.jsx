import React from 'react';
import { ArrowRight, Film, Image as ImageIcon, FolderDown } from 'lucide-react';
import motionCoverImg from '../assets/images/motion_cover.jpg';
import posterCoverImg from '../assets/images/poster_cover.jpg';
import { DRIVE_VIDEO_URL, DRIVE_STATIC_URL } from '../data/portfolioData';

export default function CategoryBanner({ onSelectCategory }) {
  const categories = [
    {
      id: 'motion',
      title: 'Motion Graphics & Video',
      subtitle: 'Commercial Video Advertising & Motion Design',
      description: 'Commercial video ads, luxury product showcases, promotional reels, kinetic typography, and fluid visual storytelling.',
      image: motionCoverImg,
      icon: Film,
      tag: 'Category 01',
      stats: 'Commercial Video Ads • Kinetic Type • 3D Motion',
      driveUrl: DRIVE_VIDEO_URL,
      driveLabel: 'Video Drive Folder',
    },
    {
      id: 'poster',
      title: 'Static Poster Design',
      subtitle: 'Commercial Advertising & Campaign Art',
      description: 'Product promotional posters, luxury campaign visuals, e-commerce banners, social media creatives, and commercial graphic design.',
      image: posterCoverImg,
      icon: ImageIcon,
      tag: 'Category 02',
      stats: 'Product Posters • Digital Banners • Visual Identity',
      driveUrl: DRIVE_STATIC_URL,
      driveLabel: 'Static Drive Folder',
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      {categories.map((cat) => {
        const IconComponent = cat.icon;
        return (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="group relative bg-white rounded-3xl border border-[#142B4A]/10 hover:border-bronze p-5 sm:p-7 lg:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-luxury shadow-lg hover:shadow-2xl hover:shadow-[#142B4A]/10"
          >
            {/* Ambient background glow on hover */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-bronze/10 rounded-full blur-3xl group-hover:bg-bronze/20 transition-luxury pointer-events-none" />

            <div className="space-y-5 sm:space-y-6 relative z-10">
              {/* Header Badge & Drive Link */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#142B4A] text-white shadow-sm">
                  {cat.tag}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={cat.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-sans font-bold bg-[#FAF7F2] hover:bg-white text-bronze hover:text-bronze-dark border border-[#142B4A]/10 transition-luxury shadow-sm"
                    title={`Open ${cat.driveLabel}`}
                  >
                    <FolderDown className="w-3.5 h-3.5" />
                    <span>{cat.driveLabel}</span>
                  </a>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-canvas-muted/60 border border-[#142B4A]/10 flex items-center justify-center text-[#142B4A] group-hover:text-bronze group-hover:border-bronze transition-luxury">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>

              {/* 1:1 Aspect Ratio Square Image Container */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-[#142B4A]/10 group-hover:border-bronze/40 transition-luxury shadow-inner">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-luxury duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142B4A]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-luxury" />
                
                {/* 1:1 ratio tag */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-mono bg-[#142B4A]/90 text-white backdrop-blur-sm font-semibold">
                    1:1 Square Cover
                  </span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-sans font-bold bg-bronze text-white shadow-md flex items-center gap-1 group-hover:bg-bronze-dark transition-luxury">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-luxury" />
                  </span>
                </div>
              </div>

              {/* Text Information */}
              <div className="space-y-1.5 sm:space-y-2 pt-1 text-left">
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#142B4A] group-hover:text-bronze transition-luxury tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-xs uppercase font-mono tracking-wider text-bronze font-bold">
                  {cat.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#486581] leading-relaxed pt-1">
                  {cat.description}
                </p>
              </div>
            </div>

            {/* Bottom Footer Details */}
            <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-[#142B4A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#627D98] relative z-10 text-left">
              <span className="truncate">{cat.stats}</span>
              <span className="text-bronze font-sans font-bold flex items-center gap-1 group-hover:underline whitespace-nowrap">
                View Works ➔
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
