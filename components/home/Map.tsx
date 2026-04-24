import Link from "next/link";
import Flag from "../Flag";
import UgandaMap, { REFUGEE_SETTLEMENTS } from "./UgandaMap";

export function SettlementMap() {
  return (
    <section className="py-16 md:py-24 bg-surface-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <div className="relative bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 md:p-6">
                <UgandaMap />
              </div>
              <div className="absolute bottom-3 right-3 opacity-70">
                <Flag />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-civic font-semibold mb-3">
              <span className="inline-block w-8 h-px bg-civic" />
              <span>From the Department of Refugees</span>
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-normal text-foreground mb-5 leading-tight">
              Uganda&apos;s{" "}
              <span className="text-authority italic">Refugee Settlements.</span>
            </h2>

            <p className="text-sm md:text-base text-foreground-muted mb-6 leading-relaxed">
              Uganda hosts one of the largest refugee populations in Africa,
              coordinated through the Department of Refugees at OPM. PCMS
              supports the Comprehensive Refugee Response Framework (CRRF) by
              tracking the partners delivering interventions across the
              settlements below.
            </p>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-foreground-muted mb-8">
              {REFUGEE_SETTLEMENTS.map((s) => (
                <li key={s.n} className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-civic text-civic-foreground text-[10px] font-bold flex-shrink-0">
                    {s.n}
                  </span>
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/crrf"
              className="inline-flex items-center gap-2 bg-civic hover:bg-civic/90 text-civic-foreground px-6 py-3 rounded-full font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Learn about the CRRF →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
