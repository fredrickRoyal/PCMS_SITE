import Image from 'next/image';
import Link from 'next/link';
import { navigationLinks } from './data/navigation';

export function Footer() {
  return (
    <footer className="relative bg-[#0b1220] text-slate-300 py-12 md:py-16 overflow-hidden">
      {/* Subtle top divider — inverted wave to mirror hero transition */}
      <svg
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 w-full text-surface-muted -translate-y-px"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,0 Z"
          fill="currentColor"
        />
      </svg>

      {/* Soft gradient wash — authority emerald barely there */}
      <div className="absolute inset-0 bg-mesh-authority opacity-30 pointer-events-none" />

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
          <div className="md:col-span-2">
            <div className="flex items-start gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="PCMS Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div>
                <p className="font-display text-lg leading-tight text-white">
                  PCMS
                </p>
                <p className="text-xs uppercase tracking-widest text-gold mt-0.5">
                  Partnership Coordination & Monitoring System
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              PCMS is the Office of the Prime Minister's platform for
              coordinating, monitoring and reporting on partnerships with
              Non-State Actors across all governmental MDA's.
            </p>
            <p suppressHydrationWarning className="text-xs mt-6 text-slate-500">
              © {new Date().getFullYear()} Office of the Prime Minister,
              Government of Uganda
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-slate-400 mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-gold transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-slate-400 mb-4">
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Monday – Friday</li>
              <li>8 AM – 5 PM EAT</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-slate-400 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>4th Floor, OPM Building</li>
              <li>Sir Apollo Kaggwa Road</li>
              <li>P.O. Box 341, Kampala</li>
              <li className="pt-2">
                <a
                  href="mailto:opmpartnerships@gmail.com"
                  className="text-gold hover:text-gold/80 transition-colors"
                >
                  opmpartnerships@gmail.com
                </a>
              </li>
              <li>
                <Link
                  href="https://opm.go.ug"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  opm.go.ug
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-slate-500">
            Vision 2040 · NDP IV · Aligned with national development frameworks
          </p>
          <p className="text-xs text-slate-500">
            Operated by OPM · Expanding across Government
          </p>
        </div>
      </div>
    </footer>
  );
}
