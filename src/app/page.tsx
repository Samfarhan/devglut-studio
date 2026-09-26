'use client';

import React, { useState } from 'react';
import { FloatingNav } from '@/components/navigation/FloatingNav';
import { StudioHero } from '@/components/hero/StudioHero';
import { MethodTimeline } from '@/components/workflow/MethodTimeline';
import { ProjectShowcase } from '@/components/projects/ProjectShowcase';
import { CapabilitiesGrid } from '@/components/capabilities/CapabilitiesGrid';
import { FoundersEditorial } from '@/components/studio/FoundersEditorial';
import { StudioFAQ } from '@/components/faq/StudioFAQ';
import { BriefBuilder } from '@/components/contact/BriefBuilder';
import { StudioFooter } from '@/components/footer/StudioFooter';
import { CommandTerminalModal } from '@/components/terminal/CommandTerminalModal';
import { StudioAssistantDrawer } from '@/components/assistant/StudioAssistantDrawer';

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#050507] text-white selection:bg-[#0033ff] selection:text-white relative">
      {/* Top Accent Indicator Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0033ff] via-[#00d9ff] to-[#0033ff] z-[1000]" />

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Hero with 3D Monolith Sculpture */}
      <StudioHero />

      {/* Method / Workflow (Alternating 01 -> 04 Timeline) */}
      <MethodTimeline />

      {/* Selected Cases / Work */}
      <ProjectShowcase />

      {/* 4 Core Disciplines */}
      <CapabilitiesGrid />

      {/* Studio Leadership: Farhan Khan × Harsh Rawat */}
      <FoundersEditorial />

      {/* FAQ Accordion */}
      <StudioFAQ />

      {/* Direct Project Engagement Brief */}
      <BriefBuilder />

      {/* Studio Footer */}
      <StudioFooter
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenAssistant={() => setAssistantOpen(true)}
      />

      {/* Easter Egg Terminal Modal */}
      <CommandTerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Ask DEVGLUT Assistant Drawer */}
      <StudioAssistantDrawer
        isOpen={assistantOpen}
        onClose={() => setAssistantOpen(false)}
      />

      {/* Floating Quick Trigger */}
      <button
        onClick={() => setAssistantOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-[#0e0e14] hover:border-white border border-white/[0.1] text-white px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-2.5 shadow-2xl transition-all hover:-translate-y-0.5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#00d9ff]" />
        <span>Ask DEVGLUT →</span>
      </button>
    </main>
  );
}
