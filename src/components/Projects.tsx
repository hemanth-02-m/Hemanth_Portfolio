import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative border-b border-[#27272A] bg-[#09090B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#C4B5FD] font-mono text-xs uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
              <span>Verified Implementations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight">
              Featured Projects & Technical Work
            </h2>
            <p className="mt-3 text-[#A1A1AA] text-base leading-relaxed">
              End-to-end applications built across AI/ML threat detection, full-stack spatial web dashboards, and analytical SQL/data workflows.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#18181B] border border-[#27272A] self-start md:self-end">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#A855F7] text-[#FAFAFA] shadow-sm font-semibold'
                  : 'text-[#A1A1AA] hover:text-[#C4B5FD]'
              }`}
            >
              All ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('ml-ai')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeFilter === 'ml-ai'
                  ? 'bg-[#A855F7] text-[#FAFAFA] shadow-sm font-semibold'
                  : 'text-[#A1A1AA] hover:text-[#C4B5FD]'
              }`}
            >
              AI & Backend
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('cloud-system')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeFilter === 'cloud-system'
                  ? 'bg-[#A855F7] text-[#FAFAFA] shadow-sm font-semibold'
                  : 'text-[#A1A1AA] hover:text-[#C4B5FD]'
              }`}
            >
              Full-Stack & ML
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('data-engineering')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeFilter === 'data-engineering'
                  ? 'bg-[#A855F7] text-[#FAFAFA] shadow-sm font-semibold'
                  : 'text-[#A1A1AA] hover:text-[#C4B5FD]'
              }`}
            >
              Data & SQL
            </button>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delayMs={idx * 110} className="h-full">
              <ProjectCard
                project={project}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Modal for Deep Architecture Review */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
