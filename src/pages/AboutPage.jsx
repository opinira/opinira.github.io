import React from 'react';
import { User, GraduationCap, Compass } from 'lucide-react';
import portraitImg from '../assets/images/portrait.png';
import { educationData } from '../data/educationData';

export default function AboutPage({ setActivePage }) {
  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Profile Header */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Portrait Container (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl p-3 bg-white border border-[#142B4A]/10 shadow-2xl shadow-[#142B4A]/10 group">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 relative">
              <img
                src={portraitImg}
                alt="Mst. Opisultana Nira"
                className="w-full h-full object-cover object-top group-hover:scale-102 transition-luxury duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142B4A]/50 via-transparent to-transparent opacity-40" />
            </div>

            <div className="absolute -bottom-4 left-6 right-6 p-3 rounded-xl bg-[#142B4A] border border-bronze/40 shadow-lg backdrop-blur-md flex items-center justify-between text-white">
              <span className="text-xs font-display font-bold text-white">
                Mst. Opisultana Nira
              </span>
              <span className="text-[11px] font-mono text-bronze-light font-semibold">
                Rajshahi, Bangladesh
              </span>
            </div>
          </div>
        </div>

        {/* Narrative & Background (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-bronze/30 text-xs font-mono font-bold text-bronze shadow-sm">
            <User className="w-3.5 h-3.5" />
            <span>Creative Profile & Philosophy</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#142B4A] tracking-tight leading-tight">
            Bridging Computational Precision & Visual Artistry.
          </h1>

          <div className="space-y-4 text-[#334E68] text-sm sm:text-base leading-relaxed font-medium">
            <p>
              I am a <strong className="text-[#142B4A] font-bold">Motion Graphics Designer and UI/UX Designer</strong> currently pursuing my <strong className="text-[#142B4A] font-bold">B.Sc. in Computer Science & Engineering</strong> at Varendra University.
            </p>
            <p>
              Since November 2023, I have been working with the marketing team at <strong className="text-[#142B4A] font-bold">Royal Hair Wigs & Roylux</strong> (worldwide export brands), designing commercial video advertisements, luxury product showcases, promotional posters, and e-commerce digital experiences for international clients across North America, Europe, and global regions.
            </p>
            <p>
              My background in Computer Science allows me to approach creative design with systematic rigor—understanding responsive web systems, design tokens, visual hierarchy, and leveraging state-of-the-art generative AI workflows to augment commercial video production.
            </p>
          </div>

          {/* Key Traits Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white border border-[#142B4A]/10 shadow-sm">
              <span className="text-[10px] font-mono uppercase text-bronze font-bold block">Focus</span>
              <span className="text-xs font-bold text-[#142B4A] font-display block mt-0.5">Motion & Video Ads</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#142B4A]/10 shadow-sm">
              <span className="text-[10px] font-mono uppercase text-bronze font-bold block">Experience</span>
              <span className="text-xs font-bold text-[#142B4A] font-display block mt-0.5">Worldwide Export</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#142B4A]/10 shadow-sm">
              <span className="text-[10px] font-mono uppercase text-bronze font-bold block">Education</span>
              <span className="text-xs font-bold text-[#142B4A] font-display block mt-0.5">B.Sc. in CSE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Philosophy Section */}
      <section className="bg-white border border-[#142B4A]/10 rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl">
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-bronze" />
            <h2 className="font-display text-2xl font-bold text-[#142B4A] tracking-tight">
              Design Philosophy & Visual Principles
            </h2>
          </div>
          <p className="text-sm text-[#486581] max-w-2xl font-medium">
            Core principles guiding every video animation, promotional poster, and digital campaign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#142B4A]/10 space-y-3">
            <span className="text-xs font-mono font-bold text-bronze block">01. Intentional Motion</span>
            <h3 className="font-display text-lg font-bold text-[#142B4A]">Story-Driven Animation</h3>
            <p className="text-xs text-[#486581] leading-relaxed font-medium">
              Every keyframe, transition, and kinetic typography effect exists to direct the viewer’s eye and communicate product value within seconds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#142B4A]/10 space-y-3">
            <span className="text-xs font-mono font-bold text-bronze block">02. Luxury Editorial Aesthetics</span>
            <h3 className="font-display text-lg font-bold text-[#142B4A]">Artisanal Polish</h3>
            <p className="text-xs text-[#486581] leading-relaxed font-medium">
              Balancing warm ivory textures, specular lighting, sophisticated typography, and balanced negative space to elevate brand authority.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#142B4A]/10 space-y-3">
            <span className="text-xs font-mono font-bold text-bronze block">03. AI-Augmented Workflows</span>
            <h3 className="font-display text-lg font-bold text-[#142B4A]">Accelerated Production</h3>
            <p className="text-xs text-[#486581] leading-relaxed font-medium">
              Leveraging generative tools for concept ideation, background enhancement, and texture synthesis while preserving full creative ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Education Background Section */}
      <section className="space-y-6">
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-bronze" />
            <h2 className="font-display text-2xl font-bold text-[#142B4A] tracking-tight">
              Education & Academic Background
            </h2>
          </div>
          <p className="text-sm text-[#486581] font-medium">
            Academic achievements documented from professional CV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#142B4A]/10 hover:border-bronze transition-luxury space-y-3 shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-bronze font-bold uppercase tracking-wider">
                  {edu.type}
                </span>
                <span className="text-[11px] font-mono text-[#142B4A] px-2 py-0.5 rounded bg-canvas-muted border border-[#142B4A]/10 font-bold">
                  {edu.status}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-[#142B4A] leading-snug">
                {edu.degree}
              </h3>
              <p className="text-xs text-bronze font-bold">
                {edu.institution} {edu.discipline ? `(${edu.discipline})` : ''}
              </p>
              {edu.description && (
                <p className="text-xs text-[#486581] leading-relaxed pt-1">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#142B4A] text-white border border-bronze/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-left">
          <h3 className="font-display text-2xl font-bold text-white">
            Ready to discuss a project?
          </h3>
          <p className="text-xs sm:text-sm text-ivory/80 font-normal">
            Available for remote contracts, motion design commissions, and UI/UX design.
          </p>
        </div>

        <button
          onClick={() => {
            setActivePage('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.location.hash = 'contact';
          }}
          className="px-6 py-3.5 rounded-xl bg-bronze text-white font-display font-bold text-sm shadow-xl shadow-bronze/20 hover:bg-bronze-dark transition-luxury whitespace-nowrap"
        >
          Get In Touch ➔
        </button>
      </section>
    </div>
  );
}
