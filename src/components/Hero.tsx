import React from 'react';
import {
  ArrowRight,
  Eye,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Terminal,
  GraduationCap,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, certifications } from '../data/portfolioData';
import { PipelineVisualizer } from './PipelineVisualizer';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onOpenResume: () => void;
}

const heroStats = [
  {
    value: '200+',
    label: 'LeetCode Solved',
    subtext: 'DSA & Problem Solving',
  },
  {
    value: '97.1%',
    label: 'ML F1-Score',
    subtext: 'DistilBERT + XGBoost',
  },
  {
    value: '8.00',
    label: 'Current CGPA',
    subtext: 'B.E. CSE (2023–2027)',
  },
  {
    value: 'AWS',
    label: 'Cloud Architecting',
    subtext: 'Verified Credly Badge',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="top"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-grid-pattern border-b border-[#27272A]"
    >
      {/* Ambient Cyberpunk Neon Purple radial glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-[#A855F7]/12 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-60 right-10 w-[350px] h-[350px] bg-[#C4B5FD]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Main Hero Grid: Left Intro + Right Portrait & Personal Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (7 cols on lg) */}
          <ScrollReveal direction="left" durationMs={700} className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 transition-colors text-xs font-mono text-[#C4B5FD]">
              <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-ping" />
              <span className="w-2 h-2 rounded-full bg-[#A855F7] -ml-4" />
              <span>{personalInfo.availability}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-[#A1A1AA] font-mono text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-[#A855F7] shrink-0" />
                <span>{personalInfo.location}</span>
                <span className="text-[#27272A]">|</span>
                <span>B.E. CSE (Graduating {personalInfo.graduationDate})</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FAFAFA] leading-[1.1]">
                {personalInfo.name.split(' ')[0]}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#C4B5FD] to-[#A855F7]">
                  {personalInfo.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FAFAFA]/90 tracking-tight pt-1">
                {personalInfo.role}
              </p>
            </div>

            {/* Positioning Statement */}
            <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed max-w-2xl">
              {personalInfo.shortBio}
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-[#FAFAFA] bg-[#A855F7] hover:bg-[#9333EA] shadow-lg shadow-[#A855F7]/25 hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-[#C4B5FD] bg-[#18181B] hover:bg-[#27272A]/80 border border-[#A855F7]/40 hover:border-[#C4B5FD] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#A855F7]" />
                <span>Here Is My Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-[#A1A1AA] hover:text-[#FAFAFA] bg-[#18181B]/70 hover:bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/40 hover:-translate-y-0.5 transition-all"
              >
                <Mail className="w-4 h-4 text-[#A855F7]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Social & Verification Links */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs font-mono text-[#A1A1AA]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#C4B5FD] transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#FAFAFA]" />
                <span>github.com/hemanth-02-m</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#C4B5FD] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#A855F7]" />
                <span>linkedin.com/in/hemanth-02-m</span>
              </a>
              <a
                href={certifications[0].credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#C4B5FD] hover:text-[#FAFAFA] transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-[#A855F7]" />
                <span>Verified AWS Cloud Badge</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right Column (5 cols on lg): Circular Profile Photo + Complete Personal Details Below */}
          <ScrollReveal direction="right" delayMs={120} durationMs={700} className="lg:col-span-5 space-y-4">
            <div className="bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 rounded-2xl p-6 shadow-2xl relative overflow-hidden transition-colors duration-300">
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#A855F7]/15 rounded-full blur-2xl pointer-events-none" />

              {/* Circular Profile Photo at Top Center */}
              <div className="flex flex-col items-center text-center pb-5 border-b border-[#27272A]">
                <div className="relative mb-3.5">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#A855F7] via-[#C4B5FD] to-[#A855F7] shadow-xl shadow-[#A855F7]/20">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white ring-2 ring-[#09090B]">
                      <img
                        src={personalInfo.photoUrl}
                        alt={personalInfo.fullName}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <span
                    className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#09090B]"
                    title="Open to Opportunities"
                  />
                </div>

                <h2 className="text-lg font-bold text-[#FAFAFA] tracking-tight">
                  {personalInfo.fullName}
                </h2>
                <p className="text-xs font-mono text-[#C4B5FD] mt-0.5">
                  Software Development • AI/ML • Data & Cloud
                </p>

                {/* Personal Details directly below name: Mobile Number + Full Uncut Email + Degree + Location */}
                <div className="w-full mt-4 pt-3.5 border-t border-[#27272A] grid grid-cols-1 gap-2 text-left text-xs font-mono">
                  {/* Mobile Number */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[#A1A1AA] bg-[#09090B]/80 hover:border-[#A855F7]/40 px-3.5 py-2.5 rounded-xl border border-[#27272A] transition-colors">
                    <span className="text-[#A1A1AA] flex items-center gap-2 shrink-0">
                      <Phone className="w-3.5 h-3.5 text-[#A855F7]" /> Mobile:
                    </span>
                    <a
                      href={`tel:+91${personalInfo.phone}`}
                      className="text-[#FAFAFA] hover:text-[#C4B5FD] font-semibold transition-colors"
                    >
                      +91 {personalInfo.phone}
                    </a>
                  </div>

                  {/* Full Email Address (Completely Visible, Never Truncated) */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 text-[#A1A1AA] bg-[#09090B]/80 hover:border-[#A855F7]/40 px-3.5 py-2.5 rounded-xl border border-[#27272A] transition-colors">
                    <span className="text-[#A1A1AA] flex items-center gap-2 shrink-0">
                      <Mail className="w-3.5 h-3.5 text-[#A855F7]" /> Email:
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-[#C4B5FD] hover:text-[#FAFAFA] hover:underline font-medium break-all sm:text-right"
                    >
                      {personalInfo.email}
                    </a>
                  </div>

                  {/* Degree & CGPA */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[#A1A1AA] bg-[#09090B]/80 hover:border-[#A855F7]/40 px-3.5 py-2.5 rounded-xl border border-[#27272A] transition-colors">
                    <span className="text-[#A1A1AA] flex items-center gap-2 shrink-0">
                      <GraduationCap className="w-3.5 h-3.5 text-[#A855F7]" /> Degree:
                    </span>
                    <span className="text-[#FAFAFA] font-medium">
                      B.E. CSE ({personalInfo.cgpa} CGPA)
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[#A1A1AA] bg-[#09090B]/80 hover:border-[#A855F7]/40 px-3.5 py-2.5 rounded-xl border border-[#27272A] transition-colors">
                    <span className="text-[#A1A1AA] flex items-center gap-2 shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-[#A855F7]" /> Location:
                    </span>
                    <span className="text-[#FAFAFA]">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* 4 Key Metrics Grid */}
              <div className="pt-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#A855F7]" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] font-semibold">
                      Verified Engineering Highlights
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#A855F7]/15 text-[#C4B5FD] border border-[#A855F7]/30">
                    {personalInfo.graduationDate}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {heroStats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-[#09090B]/80 border border-[#27272A] hover:border-[#A855F7]/50 rounded-xl p-3 transition-all hover:-translate-y-0.5"
                    >
                      <div className="text-lg sm:text-xl font-extrabold text-[#FAFAFA] font-mono tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-[11px] font-semibold text-[#C4B5FD] mt-0.5">
                        {stat.label}
                      </div>
                      <div className="text-[10px] text-[#A1A1AA] mt-0.5 font-mono">
                        {stat.subtext}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Interactive Engineering Stack Explorer below the Hero intro */}
        <ScrollReveal direction="up" delayMs={200} className="mt-14 md:mt-16">
          <PipelineVisualizer />
        </ScrollReveal>
      </div>
    </section>
  );
};
