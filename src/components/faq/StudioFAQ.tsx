'use client';

import React from 'react';

export const StudioFAQ: React.FC = () => {
  const faqs = [
    {
      q: 'How do Farhan Khan and Harsh Rawat work with clients?',
      a: 'Farhan Khan and Harsh Rawat personally architect, develop, and lead every studio project. There are no junior hand-offs or generic account managers. You collaborate directly with the technology leads from initial design scoping to final production deployment.'
    },
    {
      q: 'What technical stack does DEVGLUT specialize in?',
      a: 'Our core engineering stack comprises Next.js 14, React, Three.js, WebGL, custom GLSL shaders, TypeScript, Tailwind CSS, Rust WebAssembly, and native browser Web Audio API for zero-dependency sound synthesis.'
    },
    {
      q: 'Can DEVGLUT integrate 3D or AI into an existing codebase?',
      a: 'Yes. While we build full end-to-end platforms from scratch, we frequently collaborate with established product engineering teams to integrate bespoke WebGL 3D viewports, spatial audio engines, or applied AI reasoning pipelines into existing systems.'
    },
    {
      q: 'Where is the studio located, and do you work globally?',
      a: 'DEVGLUT is based in India and operates fully remotely with partners, venture-backed startups, and brands across North America, Europe, Asia-Pacific, and globally.'
    },
    {
      q: 'What is the typical timeline for a studio engagement?',
      a: 'Flagship 3D web experiences and AI products typically require 3 to 6 weeks from technical architecture to live production release. We operate in rapid sprint cycles with continuous deployment staging previews.'
    }
  ];

  return (
    <section id="faq" className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Header Left */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#52525c] mb-4">
            <span className="text-[#0033ff]">// 05</span> FAQ
          </div>
          <h2 className="text-[clamp(2.4rem,4vw,3.8rem)] font-extrabold tracking-[-0.03em] uppercase text-white leading-tight">
            Frequently Asked <span className="font-serif italic text-[#9bb7ff]">Questions</span>
          </h2>
          <p className="text-base text-[#90909e] mt-6 leading-relaxed max-w-md">
            Everything you need to know about partnering with DEVGLUT for your engineering and creative technology needs.
          </p>
        </div>

        {/* Accordion Right */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group bg-[#0a0a0f] border border-white/[0.08] hover:border-white/20 open:border-white/30 rounded-xl transition-all duration-300"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-base md:text-lg font-semibold text-white">
                <span>{item.q}</span>
                <span className="text-[#52525c] group-open:rotate-45 group-open:text-white transition-transform text-xl ml-4 shrink-0">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm md:text-base text-[#90909e] leading-relaxed border-t border-white/[0.04] pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
