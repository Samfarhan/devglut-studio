'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const FloatingNav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 pointer-events-none transition-all duration-300">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* DEVGLUT Brand Mark */}
        <Link href="#hero" className="group flex items-center gap-3 text-white no-underline">
          <span className="w-2.5 h-2.5 bg-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#0033ff]" />
          <span className="text-[15px] font-bold tracking-[0.18em] uppercase">DEVGLUT</span>
        </Link>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 bg-[#0e0e12]/60 backdrop-blur-md px-7 py-2.5 rounded-full border border-white/[0.08]">
          <Link href="#work" className="text-xs uppercase tracking-[0.12em] font-medium text-[#90909e] hover:text-white transition-colors duration-200">
            Work
          </Link>
          <Link href="#capabilities" className="text-xs uppercase tracking-[0.12em] font-medium text-[#90909e] hover:text-white transition-colors duration-200">
            Capabilities
          </Link>
          <Link href="#studio" className="text-xs uppercase tracking-[0.12em] font-medium text-[#90909e] hover:text-white transition-colors duration-200">
            Studio
          </Link>
          <Link href="#contact" className="text-xs uppercase tracking-[0.12em] font-medium text-[#90909e] hover:text-white transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Right Action: Initiate Project */}
        <div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#050505] bg-white hover:bg-[#0033ff] hover:text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Initiate Project</span>
            <span className="text-sm">→</span>
          </Link>
        </div>

      </div>
    </header>
  );
};
