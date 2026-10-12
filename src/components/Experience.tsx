import React from 'react';
import { Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative border-b border-[#27272A] bg-[#09090B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[#C4B5FD] font-mono text-xs uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
            <span>Practical Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight">
            Work Experience & Training
          </h2>
          <p className="mt-3 text-[#A1A1AA] text-base leading-relaxed">
            Hands-on technical trainee experience with relational databases, analytical SQL queries, and structured data transformations.
          </p>
        </ScrollReveal>

        {/* Experience Timeline / Cards */}
        <div className="mt-12 max-w-4xl">
          {experience.map((exp, index) => (
            <ScrollReveal key={index} direction="left" delayMs={100}>
              <div className="bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/60 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-0.5 relative">
                {/* Type Badge & Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#A855F7]/20 text-[#C4B5FD] border border-[#A855F7]/40 uppercase font-semibold">
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-4 text-xs font-mono text-[#A1A1AA]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#A855F7]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#A855F7]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role & Company */}
                <h3 className="text-2xl font-bold text-[#FAFAFA] mb-1">{exp.role}</h3>
                <p className="text-sm font-medium text-[#C4B5FD] font-mono mb-4">
                  {exp.company}
                </p>

                {/* Core summary */}
                <p className="text-sm text-[#FAFAFA]/90 leading-relaxed bg-[#09090B] p-4 rounded-xl border border-[#27272A] mb-5">
                  "{exp.description}"
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                    Hands-On Tasks & Query Engineering:
                  </h4>
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FAFAFA]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Skills applied */}
                <div className="pt-4 border-t border-[#27272A] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-[#A1A1AA] mr-2 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-[#A855F7]" /> Skills Applied:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#09090B] text-[#C4B5FD] border border-[#27272A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
