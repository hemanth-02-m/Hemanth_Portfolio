import React from 'react';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Education: React.FC = () => {
  const primaryDegree = education.find((e) => e.isPrimary);
  const secondarySchooling = education.filter((e) => !e.isPrimary);

  return (
    <section id="education" className="py-20 md:py-28 relative border-b border-[#27272A] bg-[#09090B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[#C4B5FD] font-mono text-xs uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-[#A1A1AA] text-base leading-relaxed">
            Formal engineering degree with computer science fundamentals, accompanied by a consistent academic track record.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Primary Bachelor's Degree Card */}
          {primaryDegree && (
            <ScrollReveal direction="left" delayMs={80} className="lg:col-span-8">
              <div className="bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/60 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#A855F7]/20 text-[#C4B5FD] border border-[#A855F7]/40 uppercase font-semibold">
                    Undergraduate Degree (In Progress)
                  </span>
                  <span className="text-xs font-mono text-[#A1A1AA] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#A855F7]" />
                    {primaryDegree.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#FAFAFA] mb-1">
                  {primaryDegree.degree}
                </h3>
                <p className="text-sm font-medium text-[#C4B5FD] font-mono mb-6">
                  {primaryDegree.institution}, {primaryDegree.location}
                </p>

                {/* CGPA Highlight */}
                <div className="inline-flex items-center gap-3 p-3.5 px-5 rounded-xl bg-[#09090B] border border-[#27272A] mb-6">
                  <Award className="w-5 h-5 text-[#A855F7] shrink-0" />
                  <div>
                    <span className="text-xs text-[#A1A1AA] block font-mono">Current Academic Grade</span>
                    <span className="text-lg font-bold text-[#FAFAFA] font-mono">{primaryDegree.score}</span>
                  </div>
                </div>

                {/* Highlights */}
                {primaryDegree.highlights && (
                  <div className="space-y-2.5 pt-4 border-t border-[#27272A]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                      Focus & Highlights:
                    </h4>
                    {primaryDegree.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FAFAFA]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          )}

          {/* Secondary Schooling Cards (Compact) */}
          <ScrollReveal direction="right" delayMs={160} className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] pl-1">
              Previous Schooling
            </h4>

            {secondarySchooling.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA] mb-2">
                  <span>{item.period}</span>
                  <span className="text-[#C4B5FD] font-semibold bg-[#A855F7]/15 px-2 py-0.5 rounded border border-[#A855F7]/30">
                    {item.score}
                  </span>
                </div>

                <h5 className="text-sm font-bold text-[#FAFAFA] mb-1">{item.degree}</h5>
                <p className="text-xs text-[#A1A1AA]">
                  {item.institution}, {item.location}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
