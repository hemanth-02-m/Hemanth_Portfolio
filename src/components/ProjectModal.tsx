import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Network } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#09090B]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#18181B] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 sm:p-8 border-b border-[#27272A] bg-[#09090B]/80 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#A855F7]/20 text-[#C4B5FD] border border-[#A855F7]/40 uppercase">
                {project.categoryLabel}
              </span>
              <span
                className={`text-xs font-mono px-2.5 py-1 rounded-md ${
                  project.status === 'Completed'
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                }`}
              >
                {project.status}
              </span>
              {project.f1Score && (
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#A855F7] text-[#FAFAFA] font-semibold">
                  {project.f1Score} F1-Score
                </span>
              )}
            </div>
            <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-[#FAFAFA]">
              {project.title}
            </h2>
            <p className="text-sm text-[#A1A1AA] font-mono mt-1">{project.tagline}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#09090B] border border-[#27272A] p-5 rounded-xl">
              <h4 className="text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2">
                Problem Statement
              </h4>
              <p className="text-sm text-[#FAFAFA]/90 leading-relaxed">{project.problem}</p>
            </div>

            <div className="bg-[#09090B] border border-[#27272A] p-5 rounded-xl">
              <h4 className="text-xs uppercase font-mono tracking-wider text-[#C4B5FD] mb-2">
                Engineered Approach
              </h4>
              <p className="text-sm text-[#FAFAFA]/90 leading-relaxed">{project.approach}</p>
            </div>
          </div>

          {/* Architecture Pipeline Stages */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Network className="w-4 h-4 text-[#A855F7]" />
              <h3 className="text-base font-bold text-[#FAFAFA]">
                Technical Data Flow & Architecture
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.architectureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#09090B] border border-[#27272A] p-4 rounded-xl relative"
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-[#A855F7] font-semibold">Step {idx + 1}</span>
                    <span className="text-[#C4B5FD] text-[11px] bg-[#18181B] px-2 py-0.5 rounded border border-[#27272A]">
                      {step.tech}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#FAFAFA] mb-1">{step.label}</h4>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h3 className="text-base font-bold text-[#FAFAFA] mb-3">Key Implementation Details</h3>
            <div className="space-y-2">
              {project.keyHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#09090B] border border-[#27272A] text-sm text-[#FAFAFA]/90"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs uppercase font-mono tracking-wider text-[#A1A1AA] mb-2.5">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-[#A855F7]/15 text-[#C4B5FD] border border-[#A855F7]/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Deployment or Status Note */}
          {project.deploymentNote && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#A855F7]/10 border border-[#A855F7]/30 text-xs text-[#C4B5FD]">
              <AlertCircle className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#FAFAFA] block">Deployment Architecture:</span>
                <span>{project.deploymentNote}</span>
              </div>
            </div>
          )}

          {project.isUpcomingPlaceholder && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
              <span className="font-semibold text-amber-300 block mb-1">
                Data Engineering Roadmap Note:
              </span>
              This area represents ongoing technical practice with Spark, Databricks, and SQL pipeline logic. An end-to-end repository with automated orchestration will be published upon completion.
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-[#27272A] bg-[#09090B]/90 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium rounded-lg text-[#A1A1AA] hover:text-[#FAFAFA] bg-[#18181B] border border-[#27272A] hover:bg-[#27272A] transition-colors cursor-pointer"
          >
            Close
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg text-[#FAFAFA] bg-[#A855F7] hover:bg-[#9333EA] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
