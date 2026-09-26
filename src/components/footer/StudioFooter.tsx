'use client';

import React from 'react';

interface StudioFooterProps {
  onOpenTerminal: () => void;
  onOpenAssistant: () => void;
}

export const StudioFooter: React.FC<StudioFooterProps> = ({ onOpenTerminal, onOpenAssistant }) => {
  return (
    <footer className="border-t border-white/[0.08] px-6 md:px-12 py-10 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-[#52525c]">
      <div className="flex items-center gap-6 flex-wrap">
        <span>© 2026 DEVGLUT. All rights reserved.</span>
        <span>India · Remote</span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onOpenTerminal}
          className="bg-transparent border border-white/[0.08] hover:border-white/40 hover:text-white px-3.5 py-1.5 rounded-sm uppercase tracking-widest text-[11px] transition-all"
        >
          [ /terminal ]
        </button>

        <button
          onClick={onOpenAssistant}
          className="bg-transparent border border-white/[0.08] hover:border-white/40 hover:text-white px-3.5 py-1.5 rounded-sm uppercase tracking-widest text-[11px] transition-all"
        >
          Ask DEVGLUT →
        </button>
      </div>
    </footer>
  );
};
