"use client";
import Hero2 from "@/components/shared/Hero2";
import Accordion from "@/components/shared/Accordion";
import {
  SuccessStory,
  KeyPillar,
  ChallengeBox,
  Highlight,
} from "@/components/crrf/CRRFComponents";
import {
  TrendingUp,
  School,
  Handshake,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

export default function CRRFPage() {
  const crffObjectivesData = [
    {
      id: "blueprint",
      title: "CRRF Blueprint",
      nodeComponent: (
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">
            The CRRF is a global blueprint designed to improve refugee responses
            through four key objectives:
          </p>
          <div className="space-y-3">
            {[
              "Enhancing refugee self-reliance through access to land, jobs, and education",
              "Easing pressure on host countries by mobilizing international support",
              "Promoting sustainable solutions, including local integration and resettlement",
              "Strengthening partnerships between governments, UN agencies, NGOs, and the private sector",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const implementationData = [
    {
      id: "land",
      title: "Access to Land & Livelihoods",
      nodeComponent: (
        <KeyPillar title="Land & Livelihood Initiatives">
          <ul className="list-disc pl-5 space-y-2">
            <li>Allocation of farming plots to refugees</li>
            <li>Uganda Refugee Entrepreneurship Fund support</li>
            <li>Business development training programs</li>
            <li>Market access initiatives</li>
          </ul>
        </KeyPillar>
      ),
    },
    {
      id: "services",
      title: "Inclusive Service Delivery",
      nodeComponent: (
        <KeyPillar title="Integrated Services">
          <ul className="list-disc pl-5 space-y-2">
            <li>Access to national health system</li>
            <li>Integration in education system</li>
            <li>Joint community services</li>
            <li>Shared infrastructure development</li>
          </ul>
        </KeyPillar>
      ),
    },
    {
      id: "protection",
      title: "Legal Protection & Rights",
      nodeComponent: (
        <KeyPillar title="Legal Framework">
          <ul className="list-disc pl-5 space-y-2">
            <li>Freedom of movement rights</li>
            <li>Right to work and own businesses</li>
            <li>Access to justice system</li>
            <li>Protection under Refugee Regulations (2020)</li>
          </ul>
        </KeyPillar>
      ),
    },
  ];
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero2
        title="The Comprehensive Refugee Response Framework (CRRF)"
        subtitle="Uganda sets the global standard by redefining refugee response, shifting from short-term relief to lasting development"
        imageSrc="/about.jpeg"
      />

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Uganda's Progressive Refugee Response
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Uganda is globally recognized for its progressive approach to
                refugee management through the implementation of the CRRF,
                adopted in 2017 under the New York Declaration for Refugees and
                Migrants.
              </p>
            </div>
            <Highlight>
              The CRRF aligns with Uganda's long-standing open-door policy,
              ensuring that refugees receive protection, opportunities, and
              dignity while fostering self-reliance.
            </Highlight>
          </div>

          {/* CRRF Objectives Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              What is the CRRF?
            </h3>
            <Accordion data={crffObjectivesData} />
          </div>

          {/* Implementation Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              How Uganda Implements the CRRF
            </h3>
            <Accordion data={implementationData} />
          </div>

          {/* Success Stories Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Success Stories Under Uganda's CRRF
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <SuccessStory
                icon={<TrendingUp className="w-6 h-6" />}
                title="Economic Growth"
                description="Refugee settlements like Nakivale have thriving markets where refugees and locals trade together"
              />
              <SuccessStory
                icon={<School className="w-6 h-6" />}
                title="Education Access"
                description="Over 60% of refugee children are enrolled in primary schools"
              />
              <SuccessStory
                icon={<Handshake className="w-6 h-6" />}
                title="Social Cohesion"
                description="Joint community projects reduce tensions and foster unity"
              />
            </div>
          </div>

          {/* Challenges Section */}
          <div className="mb-16">
            <ChallengeBox
              challenges={[
                "Funding shortfalls require more predictable support from international partners",
                "Environmental strain and deforestation need climate-smart solutions",
                "Overcrowding in settlements demands improved infrastructure",
                "Private sector engagement needs strengthening for refugee employment",
              ]}
            />
          </div>

          {/* Resources Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Resources & Documentation
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3">Policy Documents</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• New York Declaration Implementation Plan</li>
                  <li>• Uganda CRRF Roadmap</li>
                  <li>• Refugee Regulations (2020)</li>
                  <li>• Settlement Guidelines</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Contact Information
                </h4>
                <div className="space-y-2 text-gray-600">
                  <p>CRRF Secretariat</p>
                  <p>Office of the Prime Minister</p>
                  <p>Email: crrf.secretariat@opm.go.ug</p>
                  <p>Tel: +256-414-4311701</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
