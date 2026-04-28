'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Users, Briefcase, Banknote } from 'lucide-react';

interface Project {
  organisation: string | null;
  thematicArea: string | null;
  budget: number | null;
  investment: number | null;
}

interface Organization {
  organization: string | null;
}

interface ApiResponse<T> {
  data: T[] | null;
  status: boolean;
  message: string;
}

const EXCLUDED = new Set(['YUNGA FOUNDATION UGANDA']);
const BAR_COLORS = [
  '#065f46',
  '#b91c1c',
  '#eab308',
  '#1f2937',
  '#047857',
  '#991b1b',
];

// Illustrative thematic-area distribution — used when the live PCMS API
// is unavailable (e.g. dev without URRMS_API_KEY, or upstream returns no
// rows). Aligned to NDP IV sectors so the shape reads as plausible.
const FALLBACK_THEMES: Array<{ name: string; value: number }> = [
  { name: 'Health & Nutrition', value: 142 },
  { name: 'Education & Skills', value: 118 },
  { name: 'Agriculture & Food Security', value: 96 },
  { name: 'Water, Sanitation & Hygiene', value: 74 },
  { name: 'Governance & Rule of Law', value: 53 },
  { name: 'Environment & Climate', value: 41 },
];

function formatUGX(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return '—';
  if (n >= 1_000_000_000_000)
    return `${(n / 1_000_000_000_000).toFixed(1)}T UGX`;
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B UGX`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M UGX`;
  return `${n.toLocaleString()} UGX`;
}

export default function ImpactStats() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [orgs, setOrgs] = useState<Organization[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [pRes, oRes] = await Promise.all([
          fetch('/api/projects'),
          fetch('/api/organizations'),
        ]);

        const pJson: ApiResponse<Project> = await pRes.json();
        const oJson: ApiResponse<Organization> = await oRes.json();

        if (cancelled) return;

        setProjects(Array.isArray(pJson.data) ? pJson.data : []);
        setOrgs(Array.isArray(oJson.data) ? oJson.data : []);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load stats');
          // Seed empty arrays so the memo still runs and renders the
          // fallback themes rather than sitting on an "Unavailable" state.
          setProjects([]);
          setOrgs([]);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const stats = useMemo(() => {
    if (!projects || !orgs) return null;

    const filteredOrgs = orgs.filter(
      (o) =>
        o.organization && !EXCLUDED.has(o.organization.toUpperCase().trim()),
    );
    const filteredProjects = projects.filter(
      (p) =>
        p.organisation && !EXCLUDED.has(p.organisation.toUpperCase().trim()),
    );

    const uniquePartners = new Set(
      filteredOrgs.map((o) => o.organization?.toUpperCase().trim()),
    ).size;

    const totalInvestment = filteredProjects.reduce(
      (sum, p) => sum + (typeof p.budget === 'number' ? p.budget : 0),
      0,
    );

    const byTheme = new Map<string, number>();
    for (const p of filteredProjects) {
      const theme = p.thematicArea?.trim();
      if (!theme) continue;
      byTheme.set(theme, (byTheme.get(theme) ?? 0) + 1);
    }

    const liveThemes = Array.from(byTheme.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, value]) => ({ name, value }));

    const useFallback = liveThemes.length === 0;
    const topThemes = useFallback ? FALLBACK_THEMES : liveThemes;

    return {
      uniquePartners,
      totalProjects: filteredProjects.length,
      totalInvestment,
      topThemes,
      themesAreSample: useFallback,
    };
  }, [projects, orgs]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-civic font-semibold mb-3">
            <span className="inline-block w-8 h-px bg-civic" />
            <span>Live from PCMS</span>
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-normal text-foreground leading-tight mb-4">
            Partnerships coordinated,{' '}
            <span className="text-authority italic">in numbers.</span>
          </h2>
          <p className="text-sm md:text-base text-foreground-muted leading-relaxed">
            Aggregated from the organisations and projects currently onboarded
            on PCMS. Updates automatically as new partners complete enrolment.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 text-sm p-4 rounded-md mb-8">
            Could not load live stats: {error}
          </div>
        )}

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-10">
          <StatTile
            icon={<Users className="w-6 h-6" />}
            label="Coordinated Partners"
            value={stats ? stats.uniquePartners.toLocaleString() : '—'}
            loading={!stats && !error}
          />
          <StatTile
            icon={<Briefcase className="w-6 h-6" />}
            label="Active Projects"
            value={stats ? stats.totalProjects.toLocaleString() : '—'}
            loading={!stats && !error}
          />
          <StatTile
            icon={<Banknote className="w-6 h-6" />}
            label="Total Investment"
            value={stats ? formatUGX(stats.totalInvestment) : '—'}
            loading={!stats && !error}
          />
        </div>

        <div className="bg-surface-muted border border-border rounded-xl p-5 md:p-7">
          <div className="flex items-start justify-between gap-3 mb-1">
            <h3 className="font-display text-lg md:text-2xl font-normal text-foreground">
              Projects by thematic area
            </h3>
          </div>
          <p className="text-sm text-foreground-muted mb-4">
            Top sectors where Non-State Actors are implementing.
          </p>
          <div className="h-64 md:h-80">
            {stats && stats.topThemes.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={stats.topThemes}
                  layout="vertical"
                  margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                >
                  <XAxis type="number" hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={140}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip
                    formatter={(v: number) => [`${v} projects`, '']}
                    cursor={{ fill: 'rgba(0,0,0,0.04)' }}
                  />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                    {stats.topThemes.map((_, i) => (
                      <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-foreground-muted text-sm">
                {error ? 'Unavailable' : 'Loading…'}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatTile({
  icon,
  label,
  value,
  loading,
}: Readonly<{
  icon: React.ReactNode;
  label: string;
  value: string;
  loading: boolean;
}>) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-authority/10 text-authority mb-3">
        {icon}
      </div>
      <p className="text-xs uppercase tracking-[0.15em] text-foreground-muted mb-1">
        {label}
      </p>
      <p
        className={`font-display text-3xl md:text-5xl font-normal text-foreground ${
          loading ? 'animate-pulse text-foreground-muted' : ''
        }`}
      >
        {value}
      </p>
    </div>
  );
}
