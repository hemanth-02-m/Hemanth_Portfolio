import React, { useState, useEffect } from 'react';
import { Menu, X, Eye } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

const navLinks = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section while scrolling
      const scrollPos = window.scrollY + 180;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
      if (window.scrollY < 250) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 group/nav ${
        isScrolled
          ? 'bg-[#09090B]/90 backdrop-blur-xl border-b border-[#27272A] hover:border-[#A855F7]/60 shadow-lg shadow-black/60 hover:shadow-[0_4px_30px_rgba(168,85,247,0.18)] py-3'
          : 'bg-[#09090B]/60 hover:bg-[#09090B]/90 backdrop-blur-md border-b border-transparent hover:border-[#27272A] py-4'
      }`}
    >
      {/* Subtle top neon glow line on panel hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A855F7] to-transparent opacity-40 group-hover/nav:opacity-100 transition-opacity duration-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation Pill Panel with Interactive Hover Effects */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl bg-[#18181B]/90 border border-[#27272A] hover:border-[#A855F7]/50 shadow-inner transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-xs lg:text-sm font-medium rounded-xl transition-all duration-200 group overflow-hidden ${
                    isActive
                      ? 'text-[#FAFAFA] bg-[#A855F7]/20 border border-[#A855F7]/50 shadow-sm shadow-[#A855F7]/20'
                      : 'text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#09090B]/80 border border-transparent hover:border-[#A855F7]/30'
                  }`}
                >
                  <span className="relative z-10 group-hover:text-[#C4B5FD] transition-colors">
                    {link.label}
                  </span>
                  {/* Animated bottom neon bar on hover / active */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#A855F7] via-[#C4B5FD] to-[#A855F7] rounded-full transition-all duration-300 ${
                      isActive ? 'w-3/4 opacity-100' : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Quick Actions with Hover Lift & Neon Glow */}
          <div className="hidden md:flex items-center gap-2.5 ml-auto">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 text-[#A1A1AA] hover:text-[#FAFAFA] bg-[#18181B]/80 hover:bg-[#18181B] rounded-xl transition-all duration-200 border border-[#27272A] hover:border-[#A855F7] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 text-[#A1A1AA] hover:text-[#C4B5FD] bg-[#18181B]/80 hover:bg-[#18181B] rounded-xl transition-all duration-200 border border-[#27272A] hover:border-[#A855F7] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* View Interactive Resume Button */}
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl text-[#FAFAFA] bg-[#A855F7] hover:bg-[#9333EA] border border-[#C4B5FD]/30 hover:border-[#C4B5FD] shadow-md shadow-[#A855F7]/25 hover:shadow-[0_0_22px_rgba(168,85,247,0.5)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Here Is My Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg text-[#FAFAFA] bg-[#A855F7] hover:bg-[#9333EA] shadow-sm shadow-[#A855F7]/30"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Here Is My Resume</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#A1A1AA] hover:text-[#FAFAFA] bg-[#18181B] hover:border-[#A855F7] border border-[#27272A] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090B]/95 backdrop-blur-xl border-b border-[#27272A] px-4 pt-3 pb-6 mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-[#A1A1AA] hover:text-[#C4B5FD] rounded-xl bg-[#18181B]/60 hover:bg-[#18181B] border border-transparent hover:border-[#A855F7]/40 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#27272A] flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl text-[#FAFAFA] bg-[#A855F7] hover:bg-[#9333EA]"
            >
              <Eye className="w-4 h-4" />
              <span>Here Is My Resume</span>
            </button>

            <div className="flex items-center justify-center gap-4 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#FAFAFA]"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-[#C4B5FD]"
              >
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
