import React, { useState } from 'react';
import { Code2, Layers, Cpu, Cloud, CheckCircle2 } from 'lucide-react';

interface Stage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  technologies: string[];
  description: string;
  operations: string[];
}

const engineeringPillars: Stage[] = [
  {
    id: 'core',
    number: '01',
    title: 'Core Logic & Algorithms',
    subtitle: 'Foundational Engineering',
    icon: <Code2 className="w-5 h-5" />,
    technologies: ['Java', 'Python', 'DSA (200+ LeetCode)', 'OOP'],
    description: 'Writing clean, modular, object-oriented code backed by strong algorithmic problem-solving.',
    operations: ['Data Structures & Algorithms', 'Object-Oriented Design', 'Modular Code Architecture'],
  },
  {
    id: 'fullstack',
    number: '02',
    title: 'Backend, APIs & Web UI',
    subtitle: 'Application Layer',
    icon: <Layers className="w-5 h-5" />,
    technologies: ['FastAPI', 'Flask', 'React.js', 'REST APIs'],
    description: 'Building responsive frontend interfaces and low-latency RESTful backend services.',
    operations: ['RESTful API Design', 'Interactive React Dashboards', 'Full-Stack Integration'],
  },
  {
    id: 'ai-data',
    number: '03',
    title: 'AI/ML & Data Systems',
    subtitle: 'Intelligence & Analytics',
    icon: <Cpu className="w-5 h-5" />,
    technologies: ['DistilBERT & XGBoost', 'SQL (MySQL / MSSQL)', 'PySpark', 'NLP'],
    description: 'Developing high-accuracy ML models (97.1% F1), analytical SQL queries, and data workflows.',
    operations: ['NLP & ML Classification', 'Complex SQL (CTEs & Windows)', 'PySpark Data Transformations'],
  },
  {
    id: 'cloud',
    number: '04',
    title: 'Cloud & Infrastructure',
    subtitle: 'AWS & Deployment',
    icon: <Cloud className="w-5 h-5" />,
    technologies: ['AWS EC2 & S3', 'VPC & IAM', 'Amazon RDS', 'Git / GitHub'],
    description: 'Applying AWS Cloud Architecting principles for scalable compute, storage, and security.',
    operations: ['AWS Cloud Architecture', 'Relational DB Hosting (RDS)', 'Version Control & CI Workflows'],
  },
];

export const PipelineVisualizer: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('fullstack');

  const activeStage =
    engineeringPillars.find((s) => s.id === activeStageId) || engineeringPillars[0];

  return (
    <div className="w-full bg-[#18181B] border border-[#27272A] rounded-2xl p-5 md:p-7 shadow-2xl relative overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#A855F7]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#C4B5FD]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#27272A] relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#A855F7] animate-pulse" />
          <span className="text-xs uppercase tracking-wider font-mono text-[#C4B5FD] font-semibold">
            Interactive Engineering Stack Explorer
          </span>
        </div>
        <span className="text-xs text-[#A1A1AA] font-mono">
          Software ➔ Full-Stack APIs ➔ AI & Data ➔ AWS Cloud
        </span>
      </div>

      {/* The 4-Pillar Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 my-6 relative z-10">
        {engineeringPillars.map((stage, idx) => {
          const isSelected = stage.id === activeStageId;
          return (
            <div
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`group cursor-pointer rounded-xl p-4 transition-all duration-200 relative border ${
                isSelected
                  ? 'bg-[#09090B] border-[#A855F7] shadow-lg shadow-[#A855F7]/15'
                  : 'bg-[#09090B]/60 border-[#27272A] hover:border-[#C4B5FD]/50 hover:bg-[#09090B]'
              }`}
            >
              {/* Top indicator & step number */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`font-mono text-xs font-semibold px-2 py-0.5 rounded ${
                    isSelected
                      ? 'bg-[#A855F7]/20 text-[#C4B5FD] border border-[#A855F7]/40'
                      : 'bg-[#18181B] text-[#A1A1AA]'
                  }`}
                >
                  {stage.number}
                </span>
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-[#A855F7] text-[#FAFAFA]'
                      : 'bg-[#18181B] text-[#A1A1AA] group-hover:text-[#C4B5FD]'
                  }`}
                >
                  {stage.icon}
                </div>
              </div>

              {/* Title & subtitle */}
              <h3
                className={`text-sm font-semibold tracking-tight ${
                  isSelected ? 'text-[#FAFAFA]' : 'text-[#FAFAFA]/90 group-hover:text-[#C4B5FD]'
                }`}
              >
                {stage.title}
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-0.5 font-mono">{stage.subtitle}</p>

              {/* Small pill preview */}
              <div className="mt-3 flex flex-wrap gap-1">
                {stage.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-[#18181B] text-[#A1A1AA] border border-[#27272A] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Flow connector on desktop */}
              {idx < engineeringPillars.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-6 h-6 rounded-full bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[10px] text-[#C4B5FD]">
                    ➔
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Dynamic Detail Panel for the Selected Pillar */}
      <div className="bg-[#09090B] border border-[#27272A] rounded-xl p-4 md:p-5 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#27272A] pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#A855F7] font-semibold">
                PILLAR {activeStage.number} CAPABILITIES
              </span>
              <span className="text-[#27272A]">•</span>
              <span className="text-sm font-semibold text-[#FAFAFA]">{activeStage.title}</span>
            </div>
            <p className="text-xs text-[#A1A1AA] mt-1">{activeStage.description}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {activeStage.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#A855F7]/15 text-[#C4B5FD] border border-[#A855F7]/30"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Operations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
          {activeStage.operations.map((op, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs text-[#FAFAFA]/90 bg-[#18181B] border border-[#27272A] px-3 py-2 rounded-lg"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#A855F7] shrink-0" />
              <span>{op}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
