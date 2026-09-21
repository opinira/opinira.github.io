import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, ArrowUpRight, Send, MapPin } from 'lucide-react';
import { BEHANCE_PROFILE_URL } from '../data/portfolioData';
import { professionalProfile } from '../data/educationData';

export default function ContactForm() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial Video Advertising & Motion Design',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(professionalProfile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(professionalProfile.whatsappNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
      `Hi Nira,\n\nMy name is ${formData.name} (${formData.email}).\n\nProject Scope / Details:\n${formData.message}\n\nLooking forward to collaborating!`
    );
    window.location.href = `mailto:${professionalProfile.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hello Nira! I visited your creative portfolio website and would like to discuss a commercial project.`
    );
    window.open(`https://wa.me/8801312727685?text=${text}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
      {/* Left Column: Direct Channels & Information */}
      <div className="lg:col-span-5 space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-bronze font-bold">
            Direct Inquiries & Collaboration
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#142B4A] tracking-tight leading-tight">
            Let’s Create Something Meaningful.
          </h2>
          <p className="text-sm text-[#486581] leading-relaxed font-medium">
            Available for international creative collaborations, commercial video advertising, brand identity motion, luxury static posters, and freelance design opportunities worldwide.
          </p>
        </div>

        {/* Contact Channels Card */}
        <div className="space-y-3.5">
          {/* WhatsApp Direct Chat (Primary Featured Channel) */}
          <div
            onClick={handleWhatsAppChat}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-500/40 hover:border-emerald-600 transition-luxury cursor-pointer group shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-luxury">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-emerald-700 uppercase tracking-wider font-bold">
                      WhatsApp Direct
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-semibold">
                      Fast Response
                    </span>
                  </div>
                  <span className="text-base font-bold text-[#142B4A] font-display block group-hover:text-emerald-700 transition-luxury">
                    +880 1312-727685
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyPhone();
                  }}
                  className="p-2 rounded-lg bg-canvas-muted hover:bg-slate-200 text-[#142B4A] border border-[#142B4A]/10 transition-luxury"
                  title="Copy number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <ArrowUpRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-luxury" />
              </div>
            </div>
            {copiedPhone && (
              <p className="text-[11px] text-emerald-700 font-mono mt-2 pl-14 font-semibold">
                ✓ WhatsApp number copied: 01312727685
              </p>
            )}
          </div>

          {/* Email Card with Copy Action */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#142B4A]/10 hover:border-bronze transition-luxury space-y-2 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-canvas-muted border border-[#142B4A]/10 flex items-center justify-center text-bronze">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#627D98] uppercase tracking-wider font-semibold block">
                    Email Address
                  </span>
                  <span className="text-sm font-bold text-[#142B4A] font-display block">
                    {professionalProfile.email}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-canvas-muted hover:bg-slate-200 text-[#142B4A] border border-[#142B4A]/10 transition-luxury focus:outline-none"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copiedEmail && (
              <p className="text-[11px] text-emerald-700 font-mono pl-13 font-semibold">
                ✓ Email copied to clipboard!
              </p>
            )}
          </div>

          {/* Behance Link */}
          <a
            href={BEHANCE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#142B4A]/10 hover:border-blue-500 transition-luxury block group shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-display font-bold text-sm">
                  Bē
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#627D98] uppercase tracking-wider font-semibold block">
                    Behance Portfolio
                  </span>
                  <span className="text-sm font-bold text-[#142B4A] font-display block group-hover:text-blue-600 transition-luxury">
                    behance.net/opinira
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#627D98] group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-luxury" />
            </div>
          </a>
        </div>

        {/* Location / Status Badge */}
        <div className="p-4 rounded-2xl bg-white border border-[#142B4A]/10 text-xs text-[#486581] flex items-center gap-3 shadow-sm font-medium">
          <MapPin className="w-4 h-4 text-bronze flex-shrink-0" />
          <span>{professionalProfile.currentLocation}</span>
        </div>
      </div>

      {/* Right Column: Interactive Email Composer */}
      <div className="lg:col-span-7 bg-white border border-[#142B4A]/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <form onSubmit={handleSendEmail} className="space-y-5 relative z-10">
          <div className="space-y-1">
            <h3 className="font-display text-xl font-bold text-[#142B4A]">
              Send a Project Brief
            </h3>
            <p className="text-xs text-[#486581] font-medium">
              Directly launches your preferred email client with pre-formatted project details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-[#486581] font-bold block">
                Your Name / Brand
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Connor / Luxe Studio"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/15 focus:border-bronze text-[#142B4A] placeholder:text-[#486581]/40 text-sm focus:outline-none transition-luxury font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-[#486581] font-bold block">
                Your Email Address
              </label>
              <input
                type="email"
                required
                placeholder="e.g. sarah@brand.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/15 focus:border-bronze text-[#142B4A] placeholder:text-[#486581]/40 text-sm focus:outline-none transition-luxury font-medium"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono uppercase tracking-wider text-[#486581] font-bold block">
              Project Category of Interest
            </label>
            <select
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/15 focus:border-bronze text-[#142B4A] text-sm focus:outline-none transition-luxury font-medium"
            >
              <option value="Commercial Video Advertising & Motion Design">Commercial Video Advertising & Motion Design</option>
              <option value="Static Poster Design & Campaign Artwork">Static Poster Design & Campaign Artwork</option>
              <option value="UI/UX Design & Digital Prototyping">UI/UX Design & Digital Prototyping</option>
              <option value="AI-Augmented Creative Production">AI-Augmented Creative Production</option>
              <option value="Other Creative Opportunity">Other Creative Opportunity</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono uppercase tracking-wider text-[#486581] font-bold block">
              Project Details / Message
            </label>
            <textarea
              rows={4}
              required
              placeholder="Tell me about your project timeline, deliverables, brand vision, and requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#142B4A]/15 focus:border-bronze text-[#142B4A] placeholder:text-[#486581]/40 text-sm focus:outline-none transition-luxury resize-none font-medium"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-bronze to-bronze-dark hover:from-bronze-light hover:to-bronze text-white font-display font-bold text-sm shadow-lg shadow-bronze/25 transition-luxury"
            >
              <Send className="w-4 h-4" />
              <span>Send via Email</span>
            </button>
            <button
              type="button"
              onClick={handleWhatsAppChat}
              className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-sm shadow-lg shadow-emerald-700/20 transition-luxury"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          <p className="text-[11px] text-center text-[#486581] font-mono font-semibold">
            Direct WhatsApp: 01312727685 • Fast worldwide response
          </p>
        </form>
      </div>
    </div>
  );
}
