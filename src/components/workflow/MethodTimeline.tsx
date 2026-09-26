'use client';

import React from 'react';

export const MethodTimeline: React.FC = () => {
  return (
    <section id="method" className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 relative z-10">
      {/* Header */}
      <div className="mb-24">
        <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#52525c] mb-4">
          <span className="text-[#0033ff]">// 01</span> Our Method
        </div>
        <h2 className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-extrabold tracking-[-0.03em] uppercase text-white leading-tight">
          From abstract concept to <span className="font-serif italic text-[#9bb7ff]">living systems</span>
        </h2>
      </div>

      {/* Alternating Timeline */}
      <div className="relative flex flex-col gap-28">
        {/* Central Vertical Spine */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-white/[0.08] -translate-x-1/2 pointer-events-none" />

        {/* Step 01 */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#050507] border border-white/20 items-center justify-center font-mono text-xs font-bold text-white z-10 shadow-2xl">
            01
          </div>
          <div className="bg-[#0e0e14]/80 border border-white/[0.08] p-8 rounded-xl backdrop-blur-md">
            <div className="bg-[#08080c] border border-white/[0.06] rounded p-4 font-mono text-xs text-[#a1a1b0] leading-relaxed">
              <div className="text-[#52525c] mb-2">// PHASE_01: SPECIFICATION & ARCHITECTURE</div>
              <div>const studio = new DevglutStudio({'{'}</div>
              <div className="text-white bg-[#0033ff]/15 px-2 py-0.5 rounded border-l-2 border-[#0033ff] my-1">
                &nbsp;&nbsp;leads: ['Farhan Khan', 'Harsh Rawat'],
              </div>
              <div>&nbsp;&nbsp;performanceBudget: '60 FPS @ 0ms CLS',</div>
              <div>&nbsp;&nbsp;deliverables: 'Production Spatial Platform'</div>
              <div>{'}'});</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-bold uppercase text-white tracking-tight">
              Discovery & Architecture
            </h3>
            <p className="text-base text-[#90909e] leading-relaxed">
              Every engagement starts with rigorous architectural scoping directly led by Farhan Khan and Harsh Rawat. We define the technical blueprints, component trees, and performance budgets before writing a single line of code.
            </p>
          </div>
        </div>

        {/* Step 02 */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#050507] border border-white/20 items-center justify-center font-mono text-xs font-bold text-white z-10 shadow-2xl">
            02
          </div>
          <div className="flex flex-col gap-4 lg:text-right lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold uppercase text-white tracking-tight">
              Spatial 3D & WebGL Prototyping
            </h3>
            <p className="text-base text-[#90909e] leading-relaxed">
              We translate static design systems into dynamic physical objects. Using custom GLSL fragment shaders and Three.js geometry instancing, we build tactile 3D interactions that elevate brand distinction.
            </p>
          </div>
          <div className="bg-[#0e0e14]/80 border border-white/[0.08] p-8 rounded-xl backdrop-blur-md lg:order-2">
            <div className="h-44 bg-[#08080c] border border-white/[0.06] rounded flex flex-col justify-between p-4 font-mono text-xs text-[#52525c]">
              <div className="flex justify-between items-center text-[11px]">
                <span>// THREE_JS_VIEWPORT</span>
                <span className="text-[#00d9ff]">60 FPS ACTIVE</span>
              </div>
              <div className="w-16 h-16 border border-dashed border-white/20 rounded-full mx-auto animate-spin" style={{ animationDuration: '10s' }} />
              <div className="flex justify-between items-center text-[10px]">
                <span>POLYGONAL MESH: INSTANCED</span>
                <span>DRAW CALLS: 1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 03 */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#050507] border border-white/20 items-center justify-center font-mono text-xs font-bold text-white z-10 shadow-2xl">
            03
          </div>
          <div className="bg-[#0e0e14]/80 border border-white/[0.08] p-8 rounded-xl backdrop-blur-md">
            <div className="h-44 bg-[#08080c] border border-white/[0.06] rounded p-4 font-mono text-xs flex flex-col justify-between">
              <div className="flex justify-between text-[#52525c] text-[11px]">
                <span>// AUTONOMOUS_KERNEL</span>
                <span className="text-white">STREAMING</span>
              </div>
              <div className="space-y-1.5 text-[11px] text-[#a1a1b0]">
                <div>&gt; ingest_query(prompt)</div>
                <div>&gt; vector_search(cosine_distance &lt; 0.12)</div>
                <div className="text-[#00d9ff]">&gt; synthesized_response_ready [18ms]</div>
              </div>
              <div className="text-[10px] text-[#52525c]">STATE: VECTOR_SYNCED</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-bold uppercase text-white tracking-tight">
              Autonomous Intelligence & Pipelines
            </h3>
            <p className="text-base text-[#90909e] leading-relaxed">
              We integrate applied AI reasoning, vector retrieval pipelines, and autonomous workflows directly into high-throughput web frontends — eliminating cognitive friction and automating mission-critical tasks.
            </p>
          </div>
        </div>

        {/* Step 04 */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#050507] border border-white/20 items-center justify-center font-mono text-xs font-bold text-white z-10 shadow-2xl">
            04
          </div>
          <div className="flex flex-col gap-4 lg:text-right lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold uppercase text-white tracking-tight">
              Production & Global Scale
            </h3>
            <p className="text-base text-[#90909e] leading-relaxed">
              We deploy on global edge networks with strict zero-layout-shift performance, enterprise security, and audit-ready observability. Zero bloat, zero excuses.
            </p>
          </div>
          <div className="bg-[#0e0e14]/80 border border-white/[0.08] p-8 rounded-xl backdrop-blur-md lg:order-2">
            <div className="bg-[#08080c] border border-white/[0.06] rounded p-4 font-mono text-xs flex flex-col gap-2">
              <div className="flex justify-between border-b border-white/[0.06] pb-2 text-[11px]">
                <span className="text-[#52525c]">VERIFICATION</span>
                <span className="text-[#00d9ff]">PRODUCTION_READY</span>
              </div>
              <div className="flex justify-between text-white text-[11px]">
                <span>CORE WEB VITALS</span>
                <span className="text-[#00d9ff]">100 / 100</span>
              </div>
              <div className="flex justify-between text-[#a1a1b0] text-[11px]">
                <span>GLOBAL EDGE LATENCY</span>
                <span>&lt; 20MS</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
