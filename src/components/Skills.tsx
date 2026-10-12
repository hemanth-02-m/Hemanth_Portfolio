import React from 'react';
import {
  Code2,
  DatabaseZap,
  Cloud,
  Server,
  GitBranch,
  Binary,
  Layers,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

// Map icon string name to Lucide component
const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-[#A855F7]" />,
  DatabaseZap: <DatabaseZap className="w-5 h-5 text-[#A855F7]" />,
  Cloud: <Cloud className="w-5 h-5 text-[#A855F7]" />,
  Server: <Server className="w-5 h-5 text-[#A855F7]" />,
  GitBranch: <GitBranch className="w-5 h-5 text-[#A855F7]" />,
  Binary: <Binary className="w-5 h-5 text-[#A855F7]" />,
  Layers: <Layers className="w-5 h-5 text-[#A855F7]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#A855F7]" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative border-b border-[#27272A] bg-[#09090B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[#C4B5FD] font-mono text-xs uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-[#A1A1AA] text-base leading-relaxed">
            A balanced multi-disciplinary stack spanning Software Development, Full-Stack APIs, Machine Learning, Relational Databases, Data Engineering, and AWS Cloud Infrastructure.
          </p>
        </ScrollReveal>

        {/* Skill Category Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <ScrollReveal
              key={category.title}
              direction="up"
              delayMs={idx * 90}
              className="h-full"
            >
              <div className="h-full group bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/60 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#A855F7]/15 relative flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#09090B] border border-[#27272A] flex items-center justify-center group-hover:border-[#A855F7]/50 transition-colors">
                      {iconMap[category.iconName] || <Layers className="w-5 h-5 text-[#A855F7]" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#FAFAFA] group-hover:text-[#C4B5FD] transition-colors">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed mb-5">
                    {category.description}
                  </p>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          skill.highlight
                            ? 'bg-[#A855F7]/15 text-[#C4B5FD] border border-[#A855F7]/40 font-medium'
                            : 'bg-[#09090B] text-[#A1A1AA] border border-[#27272A]'
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] inline-block" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom tag indicator */}
                <div className="mt-5 pt-3 border-t border-[#27272A] flex items-center justify-between text-[11px] text-[#A1A1AA] font-mono">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-[#C4B5FD]">verified in projects</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Learning & Focus Banner */}
        <ScrollReveal direction="up" delayMs={150} className="mt-10">
          <div className="p-5 rounded-2xl bg-[#18181B] border border-[#A855F7]/30 hover:border-[#A855F7]/60 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#A855F7]/20 text-[#C4B5FD] shrink-0">
                <Sparkles className="w-5 h-5 text-[#A855F7]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#FAFAFA]">Continuous Engineering Growth</h4>
                <p className="text-xs text-[#A1A1AA]">
                  Combining strong Java/Python DSA foundations with practical backend APIs, machine learning models, SQL analytics, and AWS cloud architecture.
                </p>
              </div>
            </div>
            <div className="sm:self-center">
              <a
                href="#projects"
                className="text-xs font-mono font-semibold text-[#C4B5FD] hover:text-[#FAFAFA] inline-flex items-center gap-1"
              >
                See applied implementations ➔
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
