import React from 'react';
import Image from "next/image";

const Gradientssection = () => {
  return (
    <div className="bg-background min-w-full flex min-h-screen justify-center items-center py-16 px-4 sm:px-6">
      <div className="relative bg-gradient-to-br from-authority via-authority to-[hsl(var(--civic))] overflow-hidden sm:h-[90%] md:h-[80%] w-full sm:w-[95%] md:w-[85%] p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl">
        {/* Organic accent shapes */}
        <div aria-hidden="true" className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/20 blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-civic/30 blur-3xl pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row gap-8 md:gap-12">
          <div className="p-4 sm:p-6 rounded-xl w-full flex flex-col md:w-[500px] gap-6 md:gap-8">
            <div className='relative overflow-hidden rounded-xl bg-black/80 border border-white/10 w-full h-64 sm:h-80 md:h-96'>
              <Image
                src="/graph.png"
                alt="Partnership performance chart"
                fill
                className="object-cover grayscale opacity-90"
                priority
              />
            </div>
            <button
              type="button"
              className="w-full py-3 border border-white/30 hover:bg-white/10 text-white rounded-full text-sm sm:text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-authority"
            >
              System overview
            </button>
          </div>

          <div className="w-full lg:w-1/2 flex items-center text-white">
            <div>
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4">
                <span className="inline-block w-8 h-px bg-gold" />
                <span>The Platform</span>
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal mb-5 leading-tight">
                What is PCMS?
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-white/85 mb-6">
                The Partnership Coordination and Monitoring System (PCMS), developed by the Office of the Prime Minister, is a web-based platform that streamlines partnership engagement with Non-State Actors across OPM — and ultimately across Government. It supports the full partnership lifecycle: online applications, MoU processing, periodic reporting, partnership mapping, Off-Budget Financing tracking, and strategic analytics — aligned to Vision 2040, NDP IV and relevant sector plans.
              </p>

              <button
                type="button"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2.5 rounded-full mb-8 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-authority"
              >
                <span>Read more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-white/15 pt-6">
                <div>
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-gold">6</div>
                  <div className="text-xs uppercase tracking-wider text-white/70 mt-1">Core Modules</div>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-gold">8</div>
                  <div className="text-xs uppercase tracking-wider text-white/70 mt-1">OPM Departments</div>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl font-normal text-gold">Gov-wide</div>
                  <div className="text-xs uppercase tracking-wider text-white/70 mt-1">Long-term Vision</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gradientssection;
