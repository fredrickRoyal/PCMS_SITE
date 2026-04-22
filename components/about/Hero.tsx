import Link from "next/link";
import HubInfographic from "./HubInfographic";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gi-bg px-4 md:px-12 lg:px-16 py-16 md:py-20">
      {/* Dot-grid backdrop — adapts to theme via currentColor on slate token */}
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full">
        <defs>
          <pattern
            id="about-hero-dots"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" className="fill-gi-slate" fillOpacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-hero-dots)" />
      </svg>

      {/* Soft gold radial wash — light mode keeps it faint so it reads as a document watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 55%, hsl(var(--gi-gold-bright) / 0.06) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header copy — stacked, centered on the canvas */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold mb-4 text-gi-gold">
            <span className="inline-block w-8 h-px bg-gi-gold" />
            <span>About PCMS</span>
          </p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-normal text-gi-ink leading-[1.08] tracking-tight mb-5">
            How PCMS unifies{" "}
            <span className="italic text-gi-gold">
              Uganda&apos;s partnerships.
            </span>
          </h1>
          <p className="text-gi-text text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            At the centre, the Office of the Prime Minister. Radiating outward,
            every Ministry and external partner — each MoU, every project,
            every verified report flowing inward to a single coordination
            point.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/partner-requirements"
              className="px-6 py-3 bg-gi-gold-bright text-gi-button-ink rounded-full font-semibold hover:bg-gi-gold-bright/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gi-gold focus-visible:ring-offset-2 focus-visible:ring-offset-gi-bg"
            >
              Partner with Us
            </Link>
            <Link
              href="/organizations"
              className="px-6 py-3 bg-gi-surface border border-gi-slate-border text-gi-ink rounded-full font-medium hover:bg-gi-node-fill transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gi-gold focus-visible:ring-offset-2 focus-visible:ring-offset-gi-bg"
            >
              Browse Partners
            </Link>
          </div>
        </div>

        {/* Diagram — full width of the column for legibility of 22 nodes */}
        <div className="relative mx-auto max-w-6xl">
          <HubInfographic />
        </div>

        {/* Stats strip + legend */}
        <div className="mt-8 md:mt-10 grid gap-8 md:gap-10 md:grid-cols-[auto_1fr] items-end">
          <div className="grid grid-cols-3 gap-6 md:gap-10 max-w-xl">
            <div>
              <p className="font-display text-3xl lg:text-4xl font-normal text-gi-gold">
                18
              </p>
              <p className="text-[11px] uppercase tracking-wider text-gi-label mt-1">
                Ministries
              </p>
            </div>
            <div>
              <p className="font-display text-3xl lg:text-4xl font-normal text-gi-gold">
                4
              </p>
              <p className="text-[11px] uppercase tracking-wider text-gi-label mt-1">
                External Partner Categories
              </p>
            </div>
            <div>
              <p className="font-display text-3xl lg:text-4xl font-normal text-gi-gold">
                1
              </p>
              <p className="text-[11px] uppercase tracking-wider text-gi-label mt-1">
                Coordination Hub
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-start md:justify-end gap-x-6 gap-y-3 text-[11px] md:text-xs text-gi-label uppercase tracking-[0.15em]">
            <div className="flex items-center gap-2">
              <span className="inline-block w-7 h-0.5 bg-gi-gold" />
              <span>Critical data flow</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-7 h-px bg-gi-slate" />
              <span>Standard link</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-4 rounded-sm border border-gi-slate-border bg-gi-surface" />
              <span>Signed MoU</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3.5 h-3.5 rounded-full border border-gi-slate-border bg-gi-surface" />
              <span>Verified report</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
