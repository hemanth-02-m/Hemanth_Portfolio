import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Email draft builder state
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleLaunchEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject || 'Discussion Regarding Entry-Level Engineering Opportunity'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-b border-[#27272A] bg-[#09090B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[#C4B5FD] font-mono text-xs uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] tracking-tight">
            Contact & Connect
          </h2>
          <p className="mt-3 text-[#A1A1AA] text-base leading-relaxed">
            I am actively open to entry-level Software Developer, Full-Stack / Backend, AI/ML, Data Engineering, and Cloud Engineering roles. Reach out directly via email, phone, or professional networks.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Communication Channels (Left 6 cols) */}
          <ScrollReveal direction="left" delayMs={80} className="lg:col-span-6 space-y-4">
            {/* Email Card */}
            <div className="bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 hover:-translate-y-0.5 rounded-2xl p-6 transition-all group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#A855F7]/15 border border-[#A855F7]/30 flex items-center justify-center text-[#A855F7]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#A1A1AA] block">Direct Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-base font-semibold text-[#FAFAFA] hover:text-[#C4B5FD] transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-[#A855F7]/50 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-[11px] font-mono text-emerald-400 mt-2 pl-1">
                  ✓ Email address copied to clipboard
                </p>
              )}
            </div>

            {/* Phone Card */}
            <div className="bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 hover:-translate-y-0.5 rounded-2xl p-6 transition-all group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#A855F7]/15 border border-[#A855F7]/30 flex items-center justify-center text-[#C4B5FD]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#A1A1AA] block">Phone / Mobile</span>
                    <a
                      href={`tel:+91${personalInfo.phone}`}
                      className="text-base font-semibold text-[#FAFAFA] hover:text-[#C4B5FD] transition-colors font-mono"
                    >
                      +91 {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-[#A855F7]/50 transition-colors cursor-pointer"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedPhone && (
                <p className="text-[11px] font-mono text-emerald-400 mt-2 pl-1">
                  ✓ Phone number copied to clipboard
                </p>
              )}
            </div>

            {/* Professional Profiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 hover:-translate-y-0.5 p-5 rounded-xl transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#09090B] border border-[#27272A] flex items-center justify-center text-[#A855F7]">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1A1AA] block font-mono">LinkedIn</span>
                    <span className="text-sm font-semibold text-[#FAFAFA] group-hover:text-[#C4B5FD]">
                      hemanth-02-m
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#C4B5FD] transition-colors" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 hover:-translate-y-0.5 p-5 rounded-xl transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#09090B] border border-[#27272A] flex items-center justify-center text-[#FAFAFA]">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1A1AA] block font-mono">GitHub</span>
                    <span className="text-sm font-semibold text-[#FAFAFA] group-hover:text-[#C4B5FD]">
                      hemanth-02-m
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#C4B5FD] transition-colors" />
              </a>
            </div>
          </ScrollReveal>

          {/* Direct Email Draft Composer (Right 6 cols) */}
          <ScrollReveal direction="right" delayMs={150} className="lg:col-span-6">
            <div className="bg-[#18181B] border border-[#27272A] hover:border-[#A855F7]/50 transition-colors rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#27272A]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                  <h3 className="text-base font-bold text-[#FAFAFA]">Direct Email Composer</h3>
                </div>
                <span className="text-[11px] font-mono text-[#C4B5FD] bg-[#09090B] px-2.5 py-0.5 rounded border border-[#27272A]">
                  100% Client-Side
                </span>
              </div>

              <p className="text-xs text-[#A1A1AA] mb-5 leading-relaxed">
                Prefer writing directly? Use this form to pre-populate an email draft that opens straight in your personal email application (Gmail, Outlook, Apple Mail).
              </p>

              <form onSubmit={handleLaunchEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="email-subject"
                    className="block text-xs font-mono text-[#FAFAFA] mb-1.5 uppercase tracking-wider"
                  >
                    Subject Line
                  </label>
                  <input
                    id="email-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Software / AI / Data / Cloud Engineering Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09090B] border border-[#27272A] text-[#FAFAFA] placeholder-[#A1A1AA]/60 text-sm focus:outline-none focus:border-[#A855F7] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email-message"
                    className="block text-xs font-mono text-[#FAFAFA] mb-1.5 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="email-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Hemanth, I came across your engineering portfolio and would like to connect regarding..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09090B] border border-[#27272A] text-[#FAFAFA] placeholder-[#A1A1AA]/60 text-sm focus:outline-none focus:border-[#A855F7] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[#FAFAFA] font-semibold bg-[#A855F7] hover:bg-[#9333EA] shadow-lg shadow-[#A855F7]/25 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Email in Mail Client</span>
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
