'use client';

import React, { useState } from 'react';
import { Project } from '@/types';
import { projectsData } from '@/lib/caseStudiesData';
import { ProjectCard } from '@/components/projects/ProjectCard3D';

export const ProjectShowcase: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 relative z-10">
      {/* Editorial Header */}
      <div className="mb-20">
        <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#52525c] mb-4">
          <span className="text-[#0033ff]">01</span> Selected Work
        </div>
        <h2 className="text-[clamp(2.2rem,4.5vw,4.2rem)] font-bold tracking-[-0.03em] uppercase text-white leading-tight max-w-3xl">
          Engineered with precision.<br />Built to perform.
        </h2>
      </div>

      {/* Editorial Project Compositions */}
      <div className="flex flex-col gap-24">
        {projectsData.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            reverse={idx % 2 === 1}
            onOpenCaseStudy={(proj) => setActiveProject(proj)}
          />
        ))}
      </div>

      {/* Case Study Detail Modal Drawer */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="w-full max-w-[640px] h-full bg-[#09090c] border-l border-white/[0.08] p-8 md:p-12 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="text-[#52525c] hover:text-white font-mono text-xs uppercase mb-8 block ml-auto"
            >
              [ Close ✕ ]
            </button>

            <div className="font-mono text-xs text-[#52525c] mb-2">
              {activeProject.category}
            </div>

            <div className="inline-block text-[10px] font-semibold tracking-wider px-3 py-1 rounded-full bg-[#0033ff]/10 border border-[#0033ff]/40 text-[#99b8ff] mb-6">
              {activeProject.badge}
            </div>

            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white mb-6">
              {activeProject.title}
            </h2>

            <p className="text-base text-[#90909e] leading-relaxed mb-10">
              {activeProject.fullOverview}
            </p>

            <div className="border-t border-white/[0.08] pt-6 mb-8">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#52525c] mb-4">
                Key Engineering Highlights
              </h4>
              <ul className="flex flex-col gap-3">
                {activeProject.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-[#d4d4dc] flex gap-2.5">
                    <span className="text-[#52525c]">—</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/[0.08] pt-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#52525c] mb-4">
                Architecture Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-[#90909e] bg-[#0d0d12] border border-white/[0.06] px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
