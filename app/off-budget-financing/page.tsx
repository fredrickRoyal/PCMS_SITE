import type { Metadata } from "next";
import InfographicHero from "@/components/shared/InfographicHero";
import Link from "next/link";
import {
  Banknote,
  Eye,
  Link as LinkIcon,
  Scale,
  TrendingUp,
  FileText,
  Coins,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Off-Budget Financing",
  description:
    "Why tracking Off-Budget Financing matters for planning and accountability, and how PCMS makes partner resource flows visible.",
};

export default function OffBudgetFinancingPage() {
  return (
    <main className="min-h-screen text-secondary">
      <InfographicHero
        eyebrow="Visibility & Accountability"
        title="Off-Budget"
        titleAccent="Financing."
        description="Making non-state resource flows visible, coordinated and accountable across Government."
        Icon={Coins}
        variant="gold"
      />

      <section className="max-w-7xl mx-auto py-16 sm:px-6 lg:px-16">
        <div className="px-4 md:px-0 max-w-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            What is Off-Budget Financing?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Off-Budget Financing (OBF) refers to resources that flow into the
            country to support national development outcomes but are not
            appropriated through the Government of Uganda's annual budget.
            These include funding from development partners, bilateral donors,
            multilateral agencies, foundations, faith-based institutions, and
            Non-State Actors delivering programmes alongside Government.
          </p>
          <p className="text-gray-700 leading-relaxed">
            OBF is substantial — and historically hard to see. Gaps in
            reporting and monitoring reduce visibility, hamper planning, and
            make it difficult to assess the real contribution of Non-State
            Actors to Vision 2040 and the Fourth National Development Plan
            (NDP IV).
          </p>
        </div>

        <div className="px-4 md:px-0 mb-12">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
            Why PCMS tracks OBF
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Eye className="w-6 h-6" />}
              title="Visibility"
              body="Surface the resource flows that support Government programmes so planners, leadership and citizens can see the true picture."
            />
            <FeatureCard
              icon={<Scale className="w-6 h-6" />}
              title="Alignment"
              body="Map every off-budget project against NDP IV priorities, sector plans and district plans — revealing duplication and coverage gaps."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Impact"
              body="Quantify Non-State Actor contributions to national outcomes so they can be coordinated, credited and scaled."
            />
            <FeatureCard
              icon={<Banknote className="w-6 h-6" />}
              title="Accountability"
              body="Pair each MoU with its funding evidence and periodic reports so spend and output stay connected through the partnership lifecycle."
            />
            <FeatureCard
              icon={<LinkIcon className="w-6 h-6" />}
              title="Interoperability"
              body="Share OBF data with other Government systems to reduce partner reporting fatigue and create a single source of truth."
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Evidence for Policy"
              body="Turn partner reports into usable briefings for the Permanent Secretary, Cabinet and Parliament."
            />
          </div>
        </div>

        <div className="px-4 md:px-0 mb-12 bg-emerald-50 border-l-4 border-emerald-700 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-emerald-900 mb-3">
            How partners contribute OBF data
          </h3>
          <p className="text-emerald-900 leading-relaxed mb-4">
            OBF data enters PCMS as part of the standard partnership
            lifecycle — no separate process required:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-emerald-900">
            <li>
              <strong>Application:</strong> Total project budget, funding
              sources and evidence (financing agreements, country strategic
              papers) are captured at application submission.
            </li>
            <li>
              <strong>MoU:</strong> Approved budgets and funding structures are
              locked into the signed MoU.
            </li>
            <li>
              <strong>Reporting:</strong> Periodic partner reports include
              utilisation against costed work plans — line-of-sight from
              funding source to delivered output.
            </li>
            <li>
              <strong>Analytics:</strong> PCMS aggregates across partners to
              produce sector-level and district-level OBF dashboards.
            </li>
          </ol>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 px-4 md:px-0">
          <Link
            href="/how-it-works"
            className="block bg-yellow-500/90 hover:bg-yellow-500 transition-colors p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-black mb-2">
              See the full lifecycle
            </h3>
            <p className="text-sm text-black/80">
              Walk through the ten-step partnership workflow — from application
              to report dissemination.
            </p>
          </Link>

          <Link
            href="/projects"
            className="block bg-black/90 hover:bg-black transition-colors p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              Browse project investments
            </h3>
            <p className="text-sm text-white/90">
              Explore partner-level budgets and contributions currently tracked
              through PCMS.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  body,
}: Readonly<{
  icon: React.ReactNode;
  title: string;
  body: string;
}>) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-50 text-emerald-700 mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
}
