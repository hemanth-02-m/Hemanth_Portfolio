import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div className="bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/60 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:shadow-[#A855F7]/15 flex flex-col justify-between group">
      <div>
        {/* Top Header Bar inside Card */}
        <div className="p-6 pb-4 border-b border-[#27272A]">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span
              className={`text-[11px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold ${
                project.status === 'Completed'
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'bg-[#A855F7]/15 text-[#C4B5FD] border border-[#A855F7]/30'
              }`}
            >
              {project.status}
            </span>

            {project.f1Score && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#A855F7]/20 text-[#C4B5FD] border border-[#A855F7]/40 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>{project.f1Score} F1-Score</span>
              </span>
            )}

            {project.isUpcomingPlaceholder && (
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                Technical Blueprint
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-[#FAFAFA] group-hover:text-[#C4B5FD] transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-[#A1A1AA] font-mono mt-1.5">{project.tagline}</p>
        </div>

        {/* Body Description & Highlights */}
        <div className="p-6 py-4 space-y-4">
          <p className="text-sm text-[#FAFAFA]/90 leading-relaxed">
            {project.description}
          </p>

          {/* Key highlights preview (first 2) */}
          <div className="space-y-2 pt-1">
            {project.keyHighlights.slice(0, 2).map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A855F7] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#09090B] text-[#A1A1AA] border border-[#27272A]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 pt-4 border-t border-[#27272A] bg-[#09090B]/60 flex items-center justify-between gap-3">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors p-2 rounded-lg hover:bg-[#18181B]"
            title="View GitHub Repository"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Repository</span>
          </a>
        ) : (
          <span className="text-xs font-mono text-[#A1A1AA] px-2 py-1">
            Data Engineering Practice
          </span>
        )}

        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-[#A855F7] hover:bg-[#9333EA] text-[#FAFAFA] shadow-sm shadow-[#A855F7]/20 transition-all cursor-pointer"
        >
          <span>Architecture & Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
