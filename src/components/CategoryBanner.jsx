import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { portfolioCategories } from '../data/portfolioData';

export default function CategoryBanner({ onSelectCategory }) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#142B4A]/10 text-xs font-mono font-bold text-bronze uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Disciplines</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#142B4A] tracking-tight">
            Explore My Work
          </h2>
          <p className="text-sm sm:text-base text-[#486581] max-w-2xl font-sans mt-1">
            Browse creative commercial projects across four dedicated disciplines.
          </p>
        </div>
      </div>

      {/* 4 Category Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6">
        {portfolioCategories.map((cat) => {
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative bg-white rounded-2xl sm:rounded-3xl border border-[#142B4A]/10 hover:border-bronze p-4 sm:p-5 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#142B4A]/5 hover:-translate-y-1"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCategory(cat.id);
                }
              }}
            >
              {/* Card Container Interior */}
              <div className="space-y-4">
                {/* STRICT 1:1 Aspect Ratio Square Image Region */}
                <div
                  className="relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#142B4A]/5 group-hover:border-bronze/30 transition-colors duration-300"
                  style={{ aspectRatio: '1 / 1' }}
                >
                  <img
                    src={cat.coverImage}
                    alt={`${cat.title} Category Cover Artwork`}
                    width={1024}
                    height={1024}
                    className="w-full h-full object-contain object-center block transition-transform duration-500 group-hover:scale-102"
                    loading="lazy"
                  />
                  {/* Subtle category tag pill */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#142B4A]/85 text-white backdrop-blur-md shadow-sm">
                      {cat.tag}
                    </span>
                  </div>
                </div>

                {/* Text Information beneath the image */}
                <div className="space-y-1.5 text-left pt-1">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#142B4A] group-hover:text-bronze transition-colors duration-300 tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#627D98] font-sans leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Action Button Link */}
              <div className="pt-4 mt-4 border-t border-[#142B4A]/10 flex items-center justify-between text-xs font-sans font-bold text-[#142B4A] group-hover:text-bronze transition-colors duration-300">
                <span>View {cat.count} {cat.count === 1 ? 'Project' : 'Projects'}</span>
                <span className="inline-flex items-center gap-1 text-bronze group-hover:translate-x-1 transition-transform duration-300">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
