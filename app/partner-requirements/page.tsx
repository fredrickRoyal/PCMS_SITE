"use client";
import Hero2 from "@/components/shared/Hero2";
import Accordion from "@/components/shared/Accordion";
import {
  DocumentList,
  RequirementStep,
  DataPrivacySection,
} from "@/components/partner-requirements/RequirementComponents";
import {
  FileCheck,
  Users,
  Building2,
  Target,
  BookOpen,
  Wallet,
} from "lucide-react";

export default function PartnershipRequirementsPage() {
  const requirementsData = [
    {
      id: "org-profile",
      title: "1. Organisation Profile",
      nodeComponent: (
        <RequirementStep
          title="Required Information"
          icon={<Building2 className="w-6 h-6" />}
          items={[
            "Name of the Organisation/Institution",
            "Type of Organisation/Institution",
            "Physical Address (Headquarters and field offices)",
            "Official Organisation Contact Details",
            "Key Contact Person(s) and Titles",
            "Organisational Background and Structure",
            "Organisational Chart (Organogram)",
            "List of Board of Directors",
          ]}
        />
      ),
    },
    {
      id: "legal",
      title: "2. Legal Documentation",
      nodeComponent: (
        <div className="space-y-6">
          <RequirementStep
            title="NGO Requirements"
            icon={<FileCheck className="w-6 h-6" />}
            items={[
              "Certificate of Registration from NGO Bureau",
              "Permit to Operate issued by NGO Bureau",
            ]}
          />
          <DocumentList
            documents={[
              "Private Sector: Certificate of Registration/Incorporation",
              "CBOs: Certificate of Registration & Constitution",
              "Government Institutions: Letter of Intent",
              "Development Partners: Financing Agreements & Accreditation",
            ]}
          />
        </div>
      ),
    },
    {
      id: "project",
      title: "3. Project Information",
      nodeComponent: (
        <RequirementStep
          title="Project Details Required"
          icon={<Target className="w-6 h-6" />}
          items={[
            "Project Title and Objectives",
            "Total Project Budget with Detailed Breakdown",
            "Sources of Funding (with evidence)",
            "Project Duration and Work Plan",
            "Technical and Operational Capacity Evidence",
            "Key Project Personnel Details",
            "Staff Information by Nationality and Skills",
          ]}
        />
      ),
    },
    {
      id: "strategic",
      title: "4. Strategic Alignment",
      nodeComponent: (
        <RequirementStep
          title="Alignment Requirements"
          icon={<BookOpen className="w-6 h-6" />}
          items={[
            "Vision 2040",
            "National Development Plan (NDP)",
            "District Development Plan (DDP)",
            "Refugee Settlement Transformation Agenda",
            "Relevant Sector Plans",
            "Disaster Management Plan",
          ]}
        />
      ),
    },
  ];

  const processData = [
    {
      id: "impact",
      title: "Monitoring & Evaluation",
      nodeComponent: (
        <div className="space-y-6">
          <RequirementStep
            title="Required M&E Framework"
            items={[
              "Theory of Change",
              "Logical Framework with measurable KPIs",
              "Quantifiable outputs",
              "Monitoring and Evaluation Plan",
            ]}
          />
        </div>
      ),
    },
    {
      id: "value",
      title: "Value & Sustainability",
      nodeComponent: (
        <div className="space-y-6">
          <RequirementStep
            title="Value for Money"
            items={[
              "Evidence of cost-effectiveness",
              "Equitable resource allocation",
              "Clear sustainability strategy",
              "Exit strategy for service continuity",
            ]}
          />
        </div>
      ),
    },
    {
      id: "data-privacy",
      title: "Data Privacy Requirements",
      nodeComponent: <DataPrivacySection />,
    },
  ];
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero2
        title="Requirements for Partnership"
        subtitle="Guidelines and requirements for organizations seeking to partner with OPM in refugee response"
      />

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Registration Requirements for Refugee Response Partners
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Department of Refugees (DOR) under the Office of the Prime
              Minister (OPM) is responsible for registering and coordinating all
              organisations engaged in refugee response activities. This
              includes NGOs, CBOs, government institutions, private sector
              entities, academic institutions, and development partners.
            </p>
          </div>

          {/* Requirements Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Registration Requirements
            </h3>
            <div className="mb-6 bg-orange-50 p-4 rounded-lg">
              <p className="text-gray-700">
                All organisations involved in providing services to refugees,
                host communities, or other persons of concern must complete the
                registration process with the Department of Refugees.
              </p>
            </div>
            <Accordion data={requirementsData} />
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Additional Requirements & Compliance
            </h3>
            <Accordion data={processData} />
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Office of the Prime Minister
                </h4>
                <div className="space-y-2 text-gray-600">
                  <p>Department of Refugees</p>
                  <p>Plot 1, Sir Apollo Kaggwa Road</p>
                  <p>P.O. Box 341, Kampala</p>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Get in Touch</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Email: partnerships@opm.go.ug</p>
                  <p>Tel: +256-414-123456</p>
                  <p>Helpdesk: +256-414-123457</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
