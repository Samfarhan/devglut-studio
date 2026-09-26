'use client';

import React, { useState } from 'react';

interface AssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudioAssistantDrawer: React.FC<AssistantDrawerProps> = ({ isOpen, onClose }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const presets: { question: string; answer: string }[] = [
    {
      question: 'What does DEVGLUT do?',
      answer: 'DEVGLUT is a premium creative technology studio founded by Farhan Khan and Harsh Rawat. We specialize in building high-performance web systems, spatial 3D WebGL experiences, and applied AI products for ambitious brands globally.'
    },
    {
      question: 'What are the core technical capabilities?',
      answer: 'Our work is structured across 4 core disciplines: (01) Digital Engineering (full-stack web apps, SaaS architecture, APIs), (02) Creative Technology (Three.js, WebGL, custom GLSL shaders, interactive motion), (03) Intelligent Systems (AI applications, vector agents, RAG pipelines), and (04) Digital Growth (technical SEO, performance optimization, and accessibility).'
    },
    {
      question: 'How do Farhan Khan and Harsh Rawat work with clients?',
      answer: 'Farhan Khan and Harsh Rawat personally architect and lead every studio engagement directly. There are no middlemen or account managers; clients collaborate directly with the studio technology leads from initial design to production deployment.'
    },
    {
      question: 'How do I start a project?',
      answer: 'You can initiate an engagement using the brief builder on this site or by reaching out directly to contact@devglut.com. The leads review inquiries and provide technical scoping within 24 hours.'
    }
  ];

  const handleSelect = (q: string, a: string) => {
    setSelectedQuestion(q);
    setSelectedAnswer(a);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[580px] h-full bg-[#09090c] border-l border-white/[0.08] p-8 md:p-12 overflow-y-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <button
            onClick={onClose}
            className="text-[#52525c] hover:text-white font-mono text-xs uppercase mb-8 block ml-auto"
          >
            [ Close ✕ ]
          </button>

          <div className="font-mono text-xs text-[#0033ff] tracking-widest uppercase mb-2">
            // Studio Intelligence
          </div>

          <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-6">
            Ask DEVGLUT
          </h3>

          <p className="text-sm text-[#90909e] leading-relaxed mb-8">
            DEVGLUT is a creative technology studio led by Farhan Khan and Harsh Rawat. Ask about our engineering capabilities, 3D systems, or engagement models.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            {presets.map((item) => (
              <button
                key={item.question}
                onClick={() => handleSelect(item.question, item.answer)}
                className={`text-left text-xs p-3.5 rounded-sm border transition-all ${
                  selectedQuestion === item.question
                    ? 'border-white text-white bg-white/[0.04]'
                    : 'border-white/[0.08] text-[#90909e] hover:border-white/30 hover:text-white bg-[#050505]'
                }`}
              >
                {item.question}
              </button>
            ))}
          </div>

          {selectedAnswer && (
            <div className="p-5 bg-[#050505] border border-white/[0.08] rounded-sm font-mono text-xs leading-relaxed text-[#d4d4dc]">
              <div className="text-white mb-2">&gt; {selectedQuestion}</div>
              <div className="text-[#90909e]">{selectedAnswer}</div>
            </div>
          )}
        </div>

        <div className="pt-8 border-t border-white/[0.08] font-mono text-[11px] text-[#52525c]">
          DIRECT CONTACT: contact@devglut.com
        </div>
      </div>
    </div>
  );
};
