import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <div className="bg-surface-muted py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-civic font-semibold mb-3">
            <span className="inline-block w-8 h-px bg-civic" />
            <span>The Platform</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-normal text-foreground leading-tight">
            How PCMS Works
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="font-display text-xl md:text-2xl font-normal mb-4 text-foreground">Online Applications & MoU Processing</h2>

              <div className="relative h-64 mb-4">
                <Image
                  src="/blog3.jpeg"
                  alt="Partner completing an online application"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <p className="text-foreground-muted mb-6 leading-relaxed">
                Prospective partners apply online via PCMS, upload the required
                legal and organisational documents, and are reviewed by the OPM
                Partnership Committee. Approved applications move through MoU
                drafting, Solicitor General clearance, and signing — all tracked
                in the system.
              </p>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="font-display text-xl md:text-2xl font-normal mb-4 text-foreground">Periodic Reporting & Strategic Analytics</h2>

              <div className="relative h-64 mb-4 bg-foreground rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/video1.jpeg"
                  alt="PCMS analytics interface"
                  fill
                  className="object-cover opacity-80"
                />
              </div>

              <p className="text-foreground-muted mb-6 leading-relaxed">
                Partners submit periodic progress reports through PCMS. The
                system consolidates contributions — including Off-Budget
                Financing — and generates role-specific analytics for the
                Permanent Secretary, OPM departments, and political leadership
                to inform decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
