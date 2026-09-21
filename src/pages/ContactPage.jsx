import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="space-y-4 text-left max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-bronze/30 text-xs font-mono font-bold text-bronze shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#142B4A] tracking-tight leading-tight">
          Let’s Create Something Meaningful.
        </h1>
        <p className="text-base sm:text-lg text-[#486581] leading-relaxed font-medium">
          Available for creative collaborations, commercial video advertising, promotional motion design, and freelance design opportunities worldwide.
        </p>
      </div>

      {/* Main Contact Form & Channels Component */}
      <ContactForm />

      {/* Verification & Trust Banner */}
      <div className="p-6 rounded-2xl bg-white border border-[#142B4A]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#486581] shadow-md font-medium">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Direct communication channels verified • Fast turnaround for international client inquiries</span>
        </div>
        <span className="font-mono text-bronze font-bold">Timezone: UTC+6 (Available Globally)</span>
      </div>
    </div>
  );
}
