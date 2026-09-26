'use client';

import React, { useState } from 'react';

export const BriefBuilder: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Digital Engineering']);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Digital Engineering',
    'Creative Technology & 3D',
    'Intelligent Systems & AI',
    'Digital Growth & SEO',
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 relative z-10">
      {/* Editorial Header */}
      <div className="mb-20">
        <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#52525c] mb-4">
          <span className="text-[#0033ff]">04</span> Engagement
        </div>
        <h2 className="text-[clamp(2.2rem,4.5vw,4.2rem)] font-bold tracking-[-0.03em] uppercase text-white leading-tight">
          Initiate a project.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Contact Narrative */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-6 leading-none">
              Let's engineer something iconic.
            </h3>
            <p className="text-base text-[#90909e] leading-relaxed max-w-md mb-12">
              We partner with visionary companies, innovative founders, and ambitious brands globally to build bespoke digital systems.
            </p>
          </div>

          <div className="flex flex-col gap-2 font-mono text-xs text-[#52525c]">
            <span className="tracking-widest uppercase">DIRECT INQUIRIES</span>
            <a
              href="mailto:contact@devglut.com"
              className="text-lg md:text-xl font-sans font-semibold text-white hover:text-[#0033ff] transition-colors"
            >
              contact@devglut.com
            </a>
            <span className="mt-3 tracking-wider">LOCATION: INDIA · REMOTE GLOBALLY</span>
          </div>
        </div>

        {/* Project Inquiry Form */}
        <div className="bg-[#0a0a0d] border border-white/[0.08] p-8 md:p-12 rounded-sm">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-2.5 h-2.5 bg-[#0033ff] mx-auto mb-6" />
              <h4 className="text-2xl font-bold uppercase text-white mb-4">Inquiry Received</h4>
              <p className="text-sm text-[#90909e] max-w-sm mx-auto leading-relaxed">
                Farhan Khan & Harsh Rawat have received your brief and will review your technical requirements within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#52525c]">
                  Client Name / Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Labs"
                  className="bg-[#050505] border border-white/[0.08] focus:border-white px-4 py-3.5 text-sm text-white outline-none rounded-sm transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#52525c]">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="bg-[#050505] border border-white/[0.08] focus:border-white px-4 py-3.5 text-sm text-white outline-none rounded-sm transition-colors"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#52525c]">
                  Required Disciplines
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => {
                    const active = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`text-xs px-4 py-2 rounded-full border transition-all ${
                          active
                            ? 'bg-white text-[#050505] font-semibold border-white'
                            : 'bg-[#050505] text-[#90909e] border-white/[0.08] hover:border-white/30'
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#52525c]">
                  Project Vision
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe the product, system, or experience you wish to engineer..."
                  className="bg-[#050505] border border-white/[0.08] focus:border-white px-4 py-3.5 text-sm text-white outline-none rounded-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center text-xs font-semibold tracking-[0.1em] uppercase text-[#050505] bg-white hover:bg-[#0033ff] hover:text-white py-4 rounded-full transition-all duration-200 mt-2"
              >
                Submit Inquiry →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
