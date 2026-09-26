'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandTerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<string[]>([
    'DEVGLUT Core Interactive Terminal. Type <span style="color: #fff;">help</span> to inspect studio capabilities.'
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLogs = [...logs, `<span style="color: #0033ff;">devglut:~$</span> ${cmd}`];

    switch (trimmed) {
      case 'help':
        newLogs.push('Available commands: <span style="color: #fff;">team</span>, <span style="color: #fff;">work</span>, <span style="color: #fff;">capabilities</span>, <span style="color: #fff;">contact</span>, <span style="color: #fff;">clear</span>, <span style="color: #fff;">exit</span>');
        break;
      case 'team':
        newLogs.push('LEADERSHIP: Farhan Khan × Harsh Rawat (Creative Technology Leads, India · Remote)');
        break;
      case 'work':
        newLogs.push('PROJECTS: 01. Kroma Spatial (3D WebGL), 02. Synapse Kernel (AI Systems), 03. Apex Protocol (High-Perf Web)');
        break;
      case 'capabilities':
        newLogs.push('DISCIPLINES: 01. Digital Engineering, 02. Creative Technology, 03. Intelligent Systems, 04. Digital Growth');
        break;
      case 'contact':
        newLogs.push('DIRECT EMAIL: contact@devglut.com');
        break;
      case 'clear':
        setLogs([]);
        return;
      case 'exit':
        onClose();
        return;
      default:
        newLogs.push(`<span style="color: #ff5555;">Command not recognized: '${cmd}'. Type 'help' for available commands.</span>`);
    }

    setLogs(newLogs);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#050505]/85 backdrop-blur-md flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#09090c] border border-white/[0.08] rounded shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-3 bg-[#0e0e12] border-b border-white/[0.08] flex justify-between items-center font-mono text-[11px] text-[#52525c]">
          <span>DEVGLUT_STUDIO_SHELL // v2.4</span>
          <button onClick={onClose} className="hover:text-white transition-colors">✕</button>
        </div>

        <div
          ref={logRef}
          className="p-6 h-80 overflow-y-auto font-mono text-xs text-[#d1d1db] leading-relaxed flex flex-col gap-2"
        >
          {logs.map((log, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: log }} />
          ))}
        </div>

        <div className="flex items-center px-6 py-3.5 border-t border-white/[0.08] bg-[#060608] font-mono text-xs">
          <span className="text-[#0033ff]">devglut:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command..."
            className="flex-1 bg-transparent border-none text-white outline-none ml-2 font-mono text-xs"
          />
        </div>
      </div>
    </div>
  );
};
