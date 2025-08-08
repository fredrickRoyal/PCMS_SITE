"use client";
import Hero2 from "@/components/shared/Hero2";
import Accordion from "@/components/shared/Accordion";

export default function CRRFPage() {
  const crffObjectivesData = [
    {
      id: "principles",
      title: "Core Principles",
      description: `
        • Protection and rights of refugees
        • Self-reliance and resilience building
        • Integration with host communities
        • Sustainable development approach
        • Gender-responsive programming
        • Age-sensitive interventions
      `
    },
    {
      id: "focus",
      title: "Key Focus Areas",
      description: `
        • Reception and admission of refugees
        • Emergency response and humanitarian assistance
        • Resilience and self-reliance programs
        • Education and skills development
        • Healthcare and social services
        • Livelihood opportunities
      `
    },
    {
      id: "coordination",
      title: "Coordination Mechanisms",
      description: `
        • CRRF Steering Group meetings
        • Sector Working Groups coordination
        • District coordination committees
        • Settlement-level coordination
        • Inter-agency collaboration
        • Community engagement platforms
      `
    }
  ];

  const implementationData = [
    {
      id: "strategy",
      title: "Implementation Strategy",
      description: `
        • Multi-stakeholder engagement
        • Evidence-based programming
        • Results-based management
        • Capacity development
        • Resource mobilization
        • Monitoring and evaluation
      `
    },
    {
      id: "partners",
      title: "Key Partners",
      description: `
        • Government ministries and departments
        • UN agencies and development partners
        • International NGOs
        • National NGOs and CSOs
        • Private sector organizations
        • Host communities and refugee groups
      `
    },
    {
      id: "outcomes",
      title: "Expected Outcomes",
      description: `
        • Enhanced protection environment
        • Improved service delivery
        • Strengthened coordination
        • Sustainable solutions
        • Increased self-reliance
        • Better host community integration
      `
    }
  ];
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero2
        title="The Comprehensive Refugee Response Framework (CRRF)"
        subtitle="Uganda's innovative approach to refugee management and protection"
        imagePath="/about.jpeg"
      />

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">CRRF Implementation in Uganda</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Comprehensive Refugee Response Framework (CRRF) represents Uganda's innovative approach to refugee protection and management, emphasizing self-reliance and host community integration.
            </p>
          </div>

          {/* CRRF Objectives Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Framework Objectives</h3>
            <Accordion data={crffObjectivesData} />
          </div>

          {/* Implementation Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Implementation Approach</h3>
            <Accordion data={implementationData} />
          </div>

          {/* Resources Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">CRRF Resources & Contact</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3">Key Documents</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• CRRF Road Map 2018-2020</li>
                  <li>• National Framework Document</li>
                  <li>• Implementation Guidelines</li>
                  <li>• Progress Reports and Evaluations</li>
                  <li>• Strategic Direction Document</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Contact CRRF Secretariat</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Office of the Prime Minister</p>
                  <p>Plot 1, Sir Apollo Kaggwa Road</p>
                  <p>Email: crrf@opm.go.ug</p>
                  <p>Tel: +256-414-123457</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
