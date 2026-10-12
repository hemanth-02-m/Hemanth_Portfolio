import React, { useState, useEffect } from 'react';
import {
  Award,
  ExternalLink,
  Trophy,
  Code,
  ShieldCheck,
  FileBadge,
  Camera,
  X,
} from 'lucide-react';
import { certifications, achievements } from '../data/portfolioData';
import type { AchievementItem } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedAchievement) {
        setSelectedAchievement(null);
      }
    };
    if (selectedAchievement) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedAchievement]);

  const openMediaModal = (achievement: AchievementItem, index: number) => {
    setSelectedAchievement(achievement);
    setActiveMediaIndex(index);
  };

  return (
    <section
      id="achievements"
      className="py-20 md:py-28 relative border-b border-[#27272A] bg-[#09090B] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[#C4B5FD] font-mono text-xs uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
            <span>Honors & Validation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight">
            Certifications & Achievements
          </h2>
          <p className="mt-3 text-[#A1A1AA] text-base leading-relaxed">
            Verified cloud accreditation from AWS Academy and competitive collegiate awards reflecting problem-solving and software development capabilities.
          </p>
        </ScrollReveal>

        {/* Content Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cloud Certification Card (Prominent) */}
          <ScrollReveal direction="left" delayMs={80} className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] pl-1">
              Verified Cloud Certification
            </h3>

            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-[#18181B] border border-[#A855F7]/40 hover:border-[#C4B5FD] rounded-2xl p-6 sm:p-7 shadow-xl transition-all duration-200 hover:-translate-y-1 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#A855F7]/20 border border-[#A855F7]/40 flex items-center justify-center text-[#C4B5FD]">
                    <ShieldCheck className="w-6 h-6 text-[#A855F7]" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#09090B] text-[#C4B5FD] border border-[#27272A]">
                    {cert.year}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#FAFAFA] group-hover:text-[#C4B5FD] transition-colors">
                  {cert.title}
                </h4>
                <p className="text-xs font-mono text-[#C4B5FD] mt-1 mb-4">
                  {cert.issuer}
                </p>

                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {cert.description}
                </p>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg text-[#FAFAFA] bg-[#A855F7] hover:bg-[#9333EA] shadow-md shadow-[#A855F7]/20 transition-all"
                >
                  <span>Verify Credly Badge</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </ScrollReveal>

          {/* Achievements & Competitions */}
          <div className="lg:col-span-7 space-y-4">
            <ScrollReveal direction="right" delayMs={100}>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] pl-1">
                Collegiate Competitions & Algorithmic Practice
              </h3>
            </ScrollReveal>

            <div className="space-y-4">
              {achievements.map((item, index) => (
                <ScrollReveal key={index} direction="right" delayMs={120 + index * 90}>
                  <div className="bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 rounded-xl p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        {item.placement?.includes('1st') ? (
                          <Trophy className="w-4 h-4 text-amber-400" />
                        ) : item.placement?.includes('2nd') ? (
                          <Award className="w-4 h-4 text-[#A855F7]" />
                        ) : (
                          <Code className="w-4 h-4 text-[#C4B5FD]" />
                        )}
                        <h4 className="text-base font-bold text-[#FAFAFA]">
                          {item.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2">
                        {item.placement && (
                          <span
                            className={`text-[11px] font-mono px-2.5 py-0.5 rounded font-semibold ${
                              item.placement.includes('1st')
                                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                                : 'bg-[#A855F7]/20 text-[#C4B5FD] border border-[#A855F7]/40'
                            }`}
                          >
                            {item.placement}
                          </span>
                        )}
                        <span className="text-xs font-mono text-[#A1A1AA]">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs font-mono text-[#C4B5FD] mb-2">
                      {item.event} • {item.organization}
                    </p>

                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Action Buttons to View Certificate & Event Photo */}
                    {item.media && item.media.length > 0 && (
                      <div className="mt-4 pt-3.5 border-t border-[#27272A] flex flex-wrap items-center gap-2.5">
                        {item.media.map((mediaItem, mIdx) => (
                          <button
                            key={mIdx}
                            type="button"
                            onClick={() => openMediaModal(item, mIdx)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold bg-[#A855F7]/15 hover:bg-[#A855F7] text-[#C4B5FD] hover:text-[#FAFAFA] border border-[#A855F7]/40 transition-all cursor-pointer"
                          >
                            {mediaItem.type === 'certificate' ? (
                              <FileBadge className="w-3.5 h-3.5" />
                            ) : (
                              <Camera className="w-3.5 h-3.5" />
                            )}
                            <span>View {mediaItem.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate & Event Photo Showcase Modal */}
        {selectedAchievement && selectedAchievement.media && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="achievement-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#09090B]/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedAchievement(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-[#18181B] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="px-5 py-4 bg-[#09090B] border-b border-[#27272A] flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono text-[#C4B5FD] uppercase tracking-wider block">
                    {selectedAchievement.event} • {selectedAchievement.year}
                  </span>
                  <h3 id="achievement-modal-title" className="text-base sm:text-lg font-bold text-[#FAFAFA]">
                    {selectedAchievement.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {/* Switcher Pills if multiple media items exist */}
                  {selectedAchievement.media.length > 1 && (
                    <div className="flex items-center bg-[#18181B] p-1 rounded-xl border border-[#27272A] text-xs font-mono">
                      {selectedAchievement.media.map((m, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveMediaIndex(idx)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                            activeMediaIndex === idx
                              ? 'bg-[#A855F7] text-[#FAFAFA] font-semibold'
                              : 'text-[#A1A1AA] hover:text-[#C4B5FD]'
                          }`}
                        >
                          {m.type === 'certificate' ? (
                            <FileBadge className="w-3.5 h-3.5" />
                          ) : (
                            <Camera className="w-3.5 h-3.5" />
                          )}
                          <span>View {m.label}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedAchievement(null)}
                    className="p-2 rounded-lg bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Image Showcase Container */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-[#09090B]/60">
                <div className="w-full max-h-[65vh] rounded-xl overflow-hidden border border-[#27272A] bg-[#09090B] flex items-center justify-center">
                  <img
                    src={selectedAchievement.media[activeMediaIndex].url}
                    alt={selectedAchievement.media[activeMediaIndex].label}
                    className="max-w-full max-h-[65vh] object-contain"
                  />
                </div>

                {/* Caption & Open Original Link */}
                <div className="w-full mt-4 p-4 rounded-xl bg-[#09090B] border border-[#27272A] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-xs sm:text-sm text-[#FAFAFA]/90 leading-relaxed">
                    {selectedAchievement.media[activeMediaIndex].caption}
                  </p>
                  <a
                    href={selectedAchievement.media[activeMediaIndex].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C4B5FD] hover:text-[#FAFAFA] shrink-0"
                  >
                    <span>Open Full Resolution</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
