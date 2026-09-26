'use client';

import React from 'react';
import { capabilitiesData } from '@/lib/caseStudiesData';

export const CapabilitiesGrid: React.FC = () => {
  return (
    <section id="capabilities" className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 relative z-10">
      {/* Editorial Header */}
      <div className="mb-20">
        <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#52525c] mb-4">
          <span className="text-[#0033ff]">02</span> Disciplines
        </div>
        <h2 className="text-[clamp(2.2rem,4.5vw,4.2rem)] font-bold tracking-[-0.03em] uppercase text-white leading-tight max-w-3xl">
          Engineered for speed, immersion, and scale.
        </h2>
      </div>

      {/* 4 Premium Disciplines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {capabilitiesData.map((discipline) => (
          <div
            key={discipline.number}
            className="group bg-[#0a0a0d] hover:bg-[#101015] border border-white/[0.08] hover:border-white/20 p-10 md:p-14 rounded-sm transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-xs text-[#52525c] tracking-widest mb-8">
                {discipline.number}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-6">
                {discipline.title}
              </h3>
            </div>

            <ul className="flex flex-col gap-3.5 border-t border-white/[0.08] pt-6 mt-8">
              {discipline.services.map((service, i) => (
                <li key={i} className="text-sm text-[#90909e] flex items-center gap-3">
                  <span className="text-[#52525c]">―</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
