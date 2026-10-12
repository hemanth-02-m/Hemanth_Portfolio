import React from 'react';
import { CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative border-b border-[#27272A] bg-[#09090B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[#C4B5FD] font-mono text-xs uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-[#A1A1AA] text-base leading-relaxed">
            A grounded overview of my computer science foundation, software development projects, AI/ML implementations, and cloud & data engineering skills.
          </p>
        </ScrollReveal>

        {/* Content Layout */}
        <div className="mt-10 space-y-8">
          {/* Narrative / Bio Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#A1A1AA] text-base leading-relaxed">
            {personalInfo.detailedBio.map((paragraph, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delayMs={index * 100}
              >
                <p className="h-full bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 hover:-translate-y-0.5 transition-all duration-200 p-5 rounded-xl text-[#FAFAFA]/90">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Core Engineering Pillars */}
          <div className="pt-2">
            <ScrollReveal direction="up">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C4B5FD] font-mono mb-4">
                Core Engineering Pillars
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: 'DSA & Software Design',
                  desc: 'Java, Python, OOP, and 200+ solved LeetCode algorithmic problems.',
                },
                {
                  title: 'Backend & Full-Stack APIs',
                  desc: 'FastAPI, Flask, React.js, REST APIs, and modular web architectures.',
                },
                {
                  title: 'Applied AI & Machine Learning',
                  desc: 'DistilBERT NLP, XGBoost classification, and intelligent chat systems.',
                },
                {
                  title: 'Databases, Data & AWS Cloud',
                  desc: 'Advanced SQL, MySQL, PySpark, and AWS (EC2, S3, VPC, IAM, RDS).',
                },
              ].map((pillar, idx) => (
                <ScrollReveal key={pillar.title} direction="up" delayMs={idx * 90}>
                  <div className="h-full flex items-start gap-3 p-4 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 hover:-translate-y-1 transition-all duration-200">
                    <CheckCircle className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-[#FAFAFA] block mb-1">
                        {pillar.title}
                      </span>
                      <span className="text-xs text-[#A1A1AA] leading-relaxed block">
                        {pillar.desc}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
