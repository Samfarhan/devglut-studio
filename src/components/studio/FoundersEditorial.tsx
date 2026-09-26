'use client';

import React from 'react';
import { leadershipData } from '@/lib/caseStudiesData';

export const FoundersEditorial: React.FC = () => {
  return (
    <section id="studio" className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 relative z-10">
      {/* Editorial Eyebrow */}
      <div className="mb-20">
        <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#52525c] mb-4">
          <span className="text-[#0033ff]">03</span> Studio Leadership
        </div>
        <h2 className="text-[clamp(2.2rem,4.5vw,4.2rem)] font-extrabold tracking-[-0.03em] uppercase text-white leading-tight">
          Farhan Khan × Harsh Rawat
        </h2>
      </div>

      {/* Studio Manifesto */}
      <div className="border-l-2 border-white pl-8 md:pl-12 mb-24">
        <blockquote className="text-[clamp(1.8rem,3.2vw,3.2rem)] font-bold leading-tight tracking-[-0.03em] uppercase text-white mb-6">
          “We build digital systems that feel alive.”
        </blockquote>
        <p className="text-base md:text-lg text-[#90909e] leading-relaxed max-w-3xl">
          DEVGLUT operates as a creative engineering laboratory. We combine rigorous software craftsmanship with progressive interaction design to build digital experiences that leave a lasting mark.
        </p>
        <div className="mt-6 font-mono text-xs text-[#52525c] tracking-[0.2em] uppercase">
          Creative Technology · AI · 3D · Engineering
        </div>
      </div>

      {/* Editorial Founders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/[0.08] pt-16">
        {leadershipData.map((founder) => (
          <div key={founder.name} className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-widest uppercase text-[#52525c]">
              {founder.role}
            </span>
            <h3 className="text-[clamp(2rem,3vw,3rem)] font-extrabold tracking-tight uppercase text-white">
              {founder.name}
            </h3>
            <p className="text-sm md:text-base text-[#90909e] leading-relaxed max-w-md">
              {founder.bio}
            </p>
            <div className="flex gap-2 font-mono text-xs text-[#52525c] mt-2">
              {founder.specialization.join(' · ')}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
