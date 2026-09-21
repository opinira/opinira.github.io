import React from 'react';
import { Film, Layout, Sparkles } from 'lucide-react';
import { categorizedSkills } from '../data/experienceData';

export default function SkillGroup() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Film':
        return <Film className="w-5 h-5 text-bronze" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-bronze" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-bronze" />;
      default:
        return <Sparkles className="w-5 h-5 text-bronze" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categorizedSkills.map((group) => (
        <div
          key={group.id}
          className="bg-white border border-[#142B4A]/10 hover:border-bronze rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-luxury shadow-lg hover:shadow-xl space-y-6 group text-left"
        >
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-canvas-muted border border-[#142B4A]/10 flex items-center justify-center group-hover:border-bronze transition-luxury">
                {getIcon(group.iconName)}
              </div>
              <h3 className="font-display text-lg font-bold text-[#142B4A] tracking-tight">
                {group.categoryName}
              </h3>
            </div>

            <p className="text-xs text-[#486581] leading-relaxed">
              {group.description}
            </p>

            {/* Skills List */}
            <div className="space-y-2 pt-2">
              {group.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/10 flex items-center justify-between text-xs"
                >
                  <span className="font-bold text-[#142B4A]">{skill.name}</span>
                  <span className="text-[10px] font-mono text-bronze-dark font-bold px-2 py-0.5 rounded bg-bronze/10 border border-bronze/30">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[#142B4A]/10 text-[11px] font-mono text-[#627D98] flex items-center justify-between font-semibold">
            <span>Verified Proficiencies</span>
            <span className="text-bronze">CV Documented</span>
          </div>
        </div>
      ))}
    </div>
  );
}
