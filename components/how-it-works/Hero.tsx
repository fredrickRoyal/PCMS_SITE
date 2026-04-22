import Link from "next/link";
import PipelineInfographic from "./PipelineInfographic";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gi-bg px-4 md:px-12 lg:px-16 py-16 md:py-20">
      {/* Dot-grid backdrop */}
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full">
        <defs>
          <pattern
            id="how-hero-dots"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" className="fill-gi-slate" fillOpacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#how-hero-dots)" />
      </svg>

      {/* Gold wash behind the pipeline on the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, hsl(var(--gi-gold-bright) / 0.08) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-center">
        {/* LEFT — copy */}
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold mb-4 text-gi-gold">
            <span className="inline-block w-8 h-px bg-gi-gold" />
            <span>How PCMS Works</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-normal text-gi-ink leading-[1.08] tracking-tight mb-5">
            From application to signed MoU —{" "}
            <span className="italic text-gi-gold">a single coordinated pipeline.</span>
          </h1>
          <p className="text-gi-text text-base md:text-lg leading-relaxed">
            Every partnership — NGO, development partner, private sector or
            government institution — flows through the same four stations.
            Applications enter at the top, verified reports reach OPM and
            Ministries at the bottom, with PCMS coordinating every step in
            between.
          </p>

          <div className="mt-8 flex items-baseline gap-5">
            <p className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-gi-gold leading-none">
              4
            </p>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-gi-label font-medium max-w-[200px]">
              Stations — from application to performance monitoring
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://app.partnerships.opm.go.ug/RegisterPartner"
              className="px-6 py-3 bg-gi-gold-bright text-gi-button-ink rounded-full font-semibold hover:bg-gi-gold-bright/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gi-gold focus-visible:ring-offset-2 focus-visible:ring-offset-gi-bg"
            >
              Start your application
            </Link>
            <Link
              href="/partner-requirements"
              className="px-6 py-3 bg-gi-surface border border-gi-slate-border text-gi-ink rounded-full font-medium hover:bg-gi-node-fill transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gi-gold focus-visible:ring-offset-2 focus-visible:ring-offset-gi-bg"
            >
              See full requirements
            </Link>
          </div>
        </div>

        {/* RIGHT — pipeline diagram */}
        <div className="relative mx-auto w-full max-w-[600px]">
          <PipelineInfographic />
        </div>
      </div>
    </section>
  );
}
