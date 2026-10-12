import { useState } from 'react';
import { FileDown } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeDeckModal } from './components/ResumeDeckModal';
import { resumeTracks } from './data/portfolioData';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const primaryResume = resumeTracks[0];

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] selection:bg-[#A855F7]/30 selection:text-[#C4B5FD] antialiased">
      {/* Sticky Top Navigation */}
      <Navbar onOpenResume={openResumeModal} />

      {/* Main Content Flow */}
      <main>
        <Hero onOpenResume={openResumeModal} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom-Right "Download My Resume" Popup Button */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
        <a
          href={primaryResume.pdfPath}
          download={primaryResume.downloadName}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-[#18181B]/95 backdrop-blur-md border border-[#A855F7]/50 hover:border-[#C4B5FD] shadow-2xl shadow-[#A855F7]/20 hover:shadow-[#A855F7]/40 transition-all duration-200 hover:-translate-y-0.5"
          title="Download Official PDF Resume"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C4B5FD] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A855F7]" />
          </span>
          <div className="w-8 h-8 rounded-xl bg-[#A855F7] group-hover:bg-[#9333EA] flex items-center justify-center text-[#FAFAFA] shadow-md shadow-[#A855F7]/30 transition-colors">
            <FileDown className="w-4 h-4" />
          </div>
          <div className="text-left pr-1">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-[#C4B5FD] leading-none">
              Official PDF
            </span>
            <span className="block text-xs sm:text-sm font-bold text-[#FAFAFA] group-hover:text-[#C4B5FD] transition-colors leading-tight mt-0.5">
              Download My Resume
            </span>
          </div>
        </a>
      </div>

      {/* Interactive Web-Themed & PDF Resume Modal */}
      <ResumeDeckModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
