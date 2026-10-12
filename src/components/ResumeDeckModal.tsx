import React, { useState, useEffect } from 'react';
import {
  X,
  FileDown,
  Mail,
  Phone,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  FolderGit2,
  FileText,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import {
  personalInfo,
  resumeTracks,
  education,
  projects,
  experience,
  certifications,
  achievements,
} from '../data/portfolioData';

interface ResumeDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeDeckModal: React.FC<ResumeDeckModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'themed' | 'pdf'>('themed');

  const resume = resumeTracks[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Keep verified completed projects from the resume
  const completedProjects = projects.filter((p) => !p.isUpcomingPlaceholder);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-deck-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#09090B]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#18181B] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Deck Control Bar */}
        <div className="px-4 py-3.5 sm:px-6 sm:py-4 bg-[#09090B] border-b border-[#27272A] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#A855F7]/20 border border-[#A855F7]/40 flex items-center justify-center text-[#A855F7]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2
                id="resume-deck-title"
                className="text-sm sm:text-base font-bold text-[#FAFAFA] flex items-center gap-2"
              >
                <span>Here Is My Resume — {personalInfo.name}</span>
                <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#A855F7]/20 text-[#C4B5FD] border border-[#A855F7]/40">
                  Software Engineer
                </span>
              </h2>
              <p className="text-xs text-[#A1A1AA] font-mono">
                Interactive Web Theme & Official PDF
              </p>
            </div>
          </div>

          {/* Right Controls: View Mode + Download + Close */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center bg-[#18181B] p-1 rounded-xl border border-[#27272A] text-xs font-mono">
              <button
                type="button"
                onClick={() => setViewMode('themed')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'themed'
                    ? 'bg-[#A855F7] text-[#FAFAFA] font-semibold'
                    : 'text-[#A1A1AA] hover:text-[#C4B5FD]'
                }`}
              >
                Web Theme
              </button>
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'pdf'
                    ? 'bg-[#A855F7] text-[#FAFAFA] font-semibold'
                    : 'text-[#A1A1AA] hover:text-[#C4B5FD]'
                }`}
              >
                PDF View
              </button>
            </div>

            <a
              href={resume.pdfPath}
              download={resume.downloadName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#FAFAFA] bg-[#A855F7] hover:bg-[#9333EA] shadow-md shadow-[#A855F7]/20 transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download My Resume</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content Area */}
        {viewMode === 'pdf' ? (
          <div className="flex-1 bg-[#09090B] w-full h-[75vh]">
            <iframe
              src={resume.pdfPath}
              title={resume.label}
              className="w-full h-full border-0"
            />
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-grid-pattern">
            {/* Themed Resume Document Sheet */}
            <div className="max-w-4xl mx-auto bg-[#09090B] border border-[#27272A] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8">
              {/* Top glowing accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#A855F7] via-[#C4B5FD] to-[#A855F7]" />

              {/* 1. RESUME HEADER WITH CIRCULAR PHOTO & CONTACT */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 pb-6 border-b border-[#27272A]">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#A855F7] via-[#C4B5FD] to-[#A855F7] shadow-lg shadow-[#A855F7]/20">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white ring-2 ring-[#09090B]">
                        <img
                          src={personalInfo.photoUrl}
                          alt={personalInfo.fullName}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                    <span
                      className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#09090B]"
                      title="Available for Entry-Level Roles"
                    />
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#A855F7]/15 border border-[#A855F7]/30 text-[#C4B5FD] text-[11px] font-mono mb-2">
                      <Sparkles className="w-3 h-3 text-[#A855F7]" />
                      <span>{resume.roleTitle}</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FAFAFA] uppercase">
                      {personalInfo.fullName}
                    </h1>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] font-mono mt-1">
                      B.E. Computer Science & Engineering • {personalInfo.location}
                    </p>

                    {/* Contact Pills */}
                    <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs font-mono">
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 text-[#FAFAFA] hover:text-[#C4B5FD] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#A855F7]" />
                        <span>{personalInfo.email}</span>
                      </a>

                      <a
                        href={`tel:+91${personalInfo.phone}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 text-[#FAFAFA] hover:text-[#C4B5FD] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#A855F7]" />
                        <span>{personalInfo.phone}</span>
                      </a>

                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 text-[#FAFAFA] hover:text-[#C4B5FD] transition-colors"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5 text-[#A855F7]" />
                        <span>linkedin.com/in/hemanth-02-m</span>
                      </a>

                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 text-[#FAFAFA] hover:text-[#C4B5FD] transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-[#FAFAFA]" />
                        <span>github.com/hemanth-02-m</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. OBJECTIVE */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#C4B5FD] font-semibold mb-2.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                  <span>Objective</span>
                </h3>
                <p className="text-sm text-[#FAFAFA]/90 leading-relaxed bg-[#18181B] border border-[#27272A] p-4 rounded-xl">
                  {resume.objective}
                </p>
              </div>

              {/* 3. EDUCATION */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#C4B5FD] font-semibold mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#A855F7]" />
                  <span>Education</span>
                </h3>
                <div className="space-y-3">
                  {education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-[#18181B] border border-[#27272A]"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-[#FAFAFA]">{edu.degree}</h4>
                        <p className="text-xs text-[#A1A1AA]">
                          {edu.institution}, {edu.location}
                        </p>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <span className="text-xs font-mono text-[#A1A1AA] block">
                          {edu.period}
                        </span>
                        <span className="text-xs font-mono font-semibold text-[#C4B5FD]">
                          {edu.scoreLabel}: {edu.score}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. PROJECTS */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#C4B5FD] font-semibold mb-3 flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-[#A855F7]" />
                  <span>Projects</span>
                </h3>
                <div className="space-y-4">
                  {completedProjects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-5 rounded-xl bg-[#18181B] border border-[#27272A] space-y-2.5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-[#FAFAFA]">{proj.title}</h4>
                          {proj.f1Score && (
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#A855F7]/20 text-[#C4B5FD] border border-[#A855F7]/40">
                              {proj.f1Score} F1-Score
                            </span>
                          )}
                        </div>
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-[#C4B5FD] hover:text-[#FAFAFA]"
                          >
                            <span>GitHub Repo</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#FAFAFA]/90">
                        {proj.keyHighlights.slice(0, 3).map((bullet, i) => (
                          <li key={i} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-1 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-mono text-[#A1A1AA] mr-1">
                          Technologies used:
                        </span>
                        {proj.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#09090B] text-[#C4B5FD] border border-[#27272A]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. TECHNICAL SKILLS */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#C4B5FD] font-semibold mb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#A855F7]" />
                  <span>Technical Skills</span>
                </h3>
                <div className="bg-[#18181B] border border-[#27272A] rounded-xl divide-y divide-[#27272A]">
                  {resume.skillRows.map((row, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 px-4 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 text-xs sm:text-sm"
                    >
                      <span className="sm:col-span-4 font-mono font-semibold text-[#C4B5FD]">
                        {row.category}
                      </span>
                      <span className="sm:col-span-8 text-[#FAFAFA] font-medium">
                        {row.items}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. WORK EXPERIENCE */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#C4B5FD] font-semibold mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#A855F7]" />
                  <span>Work Experience</span>
                </h3>
                {experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#18181B] border border-[#27272A] space-y-2"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#FAFAFA]">
                          {exp.role}
                        </h4>
                        <p className="text-xs font-mono text-[#C4B5FD]">{exp.company}</p>
                      </div>
                      <div className="sm:text-right text-xs font-mono text-[#A1A1AA]">
                        <div>{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#FAFAFA]/90 leading-relaxed pt-1">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* 7. ACCOLADES & CERTIFICATIONS */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#C4B5FD] font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#A855F7]" />
                  <span>Accolades & Certifications</span>
                </h3>
                <div className="p-5 rounded-xl bg-[#18181B] border border-[#27272A] space-y-2.5 text-xs sm:text-sm text-[#FAFAFA]/90">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#27272A]"
                    >
                      <div>
                        <span className="font-semibold text-[#FAFAFA]">{cert.title}</span> —{' '}
                        <span className="text-[#A1A1AA]">
                          {cert.issuer} | {cert.year}
                        </span>
                      </div>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-[#C4B5FD] hover:text-[#FAFAFA]"
                      >
                        <span>Verify Credly Badge</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                  {achievements.map((ach, idx) => (
                    <div key={idx} className="leading-relaxed">
                      • <span className="font-semibold text-[#FAFAFA]">{ach.title}</span> —{' '}
                      <span className="text-[#A1A1AA]">
                        {ach.event}, {ach.organization} ({ach.year})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
