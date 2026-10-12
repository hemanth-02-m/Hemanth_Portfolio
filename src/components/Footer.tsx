import React from 'react';
import { ArrowUp, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090B] border-t border-[#27272A] py-12 text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#27272A]">
          {/* Brand & Focus */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-[#FAFAFA] font-mono font-bold text-lg">
              <div className="w-7 h-7 rounded-lg bg-[#A855F7]/20 border border-[#A855F7]/40 flex items-center justify-center text-[#A855F7]">
                <Database className="w-3.5 h-3.5" />
              </div>
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-xs font-mono text-[#A1A1AA] mt-1">
              Software Development | AI & ML | Data Engineering | AWS Cloud
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 text-[#A1A1AA] hover:text-[#C4B5FD] transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#A855F7] border border-[#A855F7] text-[#FAFAFA] hover:bg-[#9333EA] transition-colors cursor-pointer"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#A1A1AA] gap-3 text-center sm:text-left">
          <p>© {CURRENT_YEAR} Hemanth Eagambaram M. All rights reserved.</p>
          <p className="text-[#A1A1AA]">
            Crafted for scalable software, intelligent systems, and purposeful engineering impact.
          </p>
        </div>
      </div>
    </footer>
  );
};
