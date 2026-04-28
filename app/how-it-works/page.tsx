import type { Metadata } from "next";
import { Hero } from "@/components/how-it-works/Hero";
import Accordion from "@/components/shared/Accordion";
import Link from "next/link";
import {
  FileText,
  Users,
  ShieldCheck,
  CheckCircle2,
  FileSignature,
  ScrollText,
  Database,
  ClipboardList,
  BarChart3,
  Share2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "The ten-step partnership lifecycle coordinated through PCMS — from application submission to report dissemination.",
};

interface LifecycleStep {
  number: string;
  title: string;
  actor: string;
  inSystem: boolean;
  body: string;
}

const lifecycle: LifecycleStep[] = [
  {
    number: "01",
    title: "Application Submission",
    actor: "Partner Organisation",
    inSystem: true,
    body: "The organisation accesses PCMS via the OPM website, completes the online application form, and uploads the required organisational and project documents. Entity-specific legal documentation is captured upfront — NGO Bureau certification for NGOs, URSB incorporation for private sector, DLG-registered constitutions for CBOs, accreditation and country strategic papers for development partners, and so on.",
  },
  {
    number: "02",
    title: "Committee Review",
    actor: "Partnership Committee",
    inSystem: true,
    body: "Each committee member receives an automated notification when a new application is submitted. Members independently log in to review the application, record comments, and complete the structured online checklist — covering legal documentation, organisational profile, project design, strategic alignment, M&E, value for money and crosscutting issues.",
  },
  {
    number: "03",
    title: "Security Vetting",
    actor: "REC / RAB",
    inSystem: false,
    body: "In parallel with committee review, the security team is consulted outside the system to provide any additional due-diligence details on the applicant. Security clearance is a precondition for progressing to approval.",
  },
  {
    number: "04",
    title: "Application Approval",
    actor: "Partnership Committee",
    inSystem: true,
    body: "PCMS consolidates individual member feedback into a single report alongside a final general comment. The committee reviews this consolidated report to determine and communicate the final decision — approve or reject — to the applicant.",
  },
  {
    number: "05",
    title: "MoU Processing",
    actor: "OPM Department",
    inSystem: true,
    body: "The relevant OPM department is notified of the approval and proceeds to draft a Memorandum of Understanding. The partner organisation is notified to review and accept the draft MoU through PCMS.",
  },
  {
    number: "06",
    title: "Solicitor General Clearance & Signing",
    actor: "Solicitor General → Permanent Secretary",
    inSystem: false,
    body: "Once the partner accepts the draft, a request is submitted to the Solicitor General's Chambers for clearance. Upon clearance, the partner is notified to print, sign, and submit the MoU for final signing by the Permanent Secretary.",
  },
  {
    number: "07",
    title: "Data Integration",
    actor: "PCMS",
    inSystem: true,
    body: "Once the MoU is signed, the organisation's profile and project data flow into the reporting module, unlocking access to periodic reporting and partnership mapping.",
  },
  {
    number: "08",
    title: "Progress Reporting",
    actor: "Partner Organisation",
    inSystem: true,
    body: "The partner submits periodic progress reports through the PCMS reporting module — capturing outputs, budget utilisation (including Off-Budget Financing), and implementation status against the costed work plan.",
  },
  {
    number: "09",
    title: "Reports Processing",
    actor: "PCMS",
    inSystem: true,
    body: "PCMS automatically generates role-specific reports: Permanent Secretary and political leadership briefings, sector-specific dashboards, and general summaries — aligned to NDP IV, Vision 2040 and relevant sector plans.",
  },
  {
    number: "10",
    title: "Report Dissemination",
    actor: "PCMS + Stakeholders",
    inSystem: true,
    body: "Reports reach the right audiences through multiple channels — email, print, the PCMS portal, and integration with third-party government systems. For select users, summaries can also be shared via WhatsApp.",
  },
];

const stepIcons = [
  FileText,
  Users,
  ShieldCheck,
  CheckCircle2,
  FileSignature,
  ScrollText,
  Database,
  ClipboardList,
  BarChart3,
  Share2,
];

export default function HowItWorksPage() {
  const accordionData = lifecycle.map((step, i) => {
    const Icon = stepIcons[i];
    return {
      id: step.number,
      title: `${step.number} — ${step.title}`,
      nodeComponent: (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-sm rounded-full border border-emerald-200">
              <Icon className="w-4 h-4" />
              {step.actor}
            </span>
            <span
              className={`inline-flex items-center px-3 py-1 text-sm rounded-full border ${
                step.inSystem
                  ? "bg-yellow-50 text-yellow-800 border-yellow-200"
                  : "bg-gray-100 text-gray-700 border-gray-300"
              }`}
            >
              {step.inSystem ? "In PCMS" : "Outside PCMS"}
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">{step.body}</p>
        </div>
      ),
    };
  });

  return (
    <main className="min-h-screen text-secondary">
      <Hero />

      <section className="max-w-7xl mx-auto py-16 sm:px-6 lg:px-16">
        <div className="px-4 md:px-0 mb-10 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            A single workflow for every partnership with OPM
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you are an NGO, CBO, faith-based organisation, private
            sector entity, development partner or government institution, your
            engagement with the Office of the Prime Minister follows the same
            ten-step lifecycle — captured, coordinated and reported through
            PCMS. Steps below show who acts at each stage and whether the step
            happens inside or outside the system.
          </p>
        </div>

        <div className="px-4 md:px-0">
          <Accordion data={accordionData} />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 px-4 md:px-0">
          <Link
            href="/partner-requirements"
            className="block bg-yellow-500/90 hover:bg-yellow-500 transition-colors p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-black mb-2">
              See the full requirements
            </h3>
            <p className="text-sm text-black/80">
              Legal documentation, organisational profile, project design, M&E
              — everything you need to prepare before starting an application.
            </p>
          </Link>

          <Link
            href="https://app.partnerships.opm.go.ug/RegisterPartner"
            className="block bg-destructive/90 hover:bg-destructive transition-colors p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              Start your application
            </h3>
            <p className="text-sm text-white/90">
              Create an account on PCMS, profile your organisation, and submit
              your projects for review by the Partnership Committee.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
