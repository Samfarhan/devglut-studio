'use client';

import React from 'react';
import Link from 'next/link';
import { StudioHeroSculpture } from '@/components/3d/StudioHeroSculpture';

export const StudioHero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-end px-6 md:px-12 pt-36 pb-16 overflow-hidden">
      {/* 3D Engineered Sculpture Layer */}
      <StudioHeroSculpture />

      {/* Hero Typography & Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Pretitle */}
        <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#52525c] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0033ff]" />
          <span>Creative Technology Studio</span>
        </div>

        {/* Large Confident Headline */}
        <h1 className="text-[clamp(2.8rem,7.5vw,7.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] uppercase text-white max-w-[1100px] mb-8">
          Creative Technology.<br />
          <span className="text-[#3b3b45]">Engineered Experiences.</span>
        </h1>

        {/* Supporting Narrative */}
        <p className="text-[clamp(1.05rem,1.5vw,1.35rem)] font-normal leading-relaxed text-[#90909e] max-w-[640px] mb-12">
          We design and engineer high-performance digital products, immersive web experiences, and intelligent systems.
        </p>

        {/* Primary & Secondary Action Triggers */}
        <div className="flex items-center gap-5 flex-wrap">
          <Link
            href="#work"
            className="inline-flex items-center justify-center text-xs font-semibold tracking-[0.1em] uppercase text-[#050505] bg-white hover:bg-[#0033ff] hover:text-white px-9 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            Explore Work
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center text-xs font-medium tracking-[0.1em] uppercase text-white hover:border-white hover:bg-white/[0.04] px-9 py-4 rounded-full border border-white/[0.08] transition-all duration-200"
          >
            Initiate Project
          </Link>
        </div>

        {/* Metadata Footer Bar */}
        <div className="mt-20 pt-8 border-t border-white/[0.08] flex justify-between items-center flex-wrap gap-6 text-xs uppercase tracking-[0.18em] text-[#52525c] font-mono">
          <div>India · Remote</div>
          <div>Web · AI · 3D · Systems</div>
        </div>
      </div>
    </section>
  );
};
