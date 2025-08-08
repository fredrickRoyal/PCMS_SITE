"use client";
import Hero2 from "@/components/shared/Hero2";
import Accordion from "@/components/shared/Accordion";

export default function SupportCoordinationPage() {
  const coordinationData = [
    {
      id: "national",
      title: "National Level Coordination",
      description: `
        • Inter-ministerial coordination meetings
        • National level working groups
        • Policy coordination forums
        • Strategic planning sessions
        • Resource mobilization meetings
        • Cross-sector coordination
      `
    },
    {
      id: "district",
      title: "District Level Coordination",
      description: `
        • District coordination committees
        • Local government engagement
        • Settlement management meetings
        • Community feedback mechanisms
        • Partner coordination platforms
        • Service delivery monitoring
      `
    },
    {
      id: "technical",
      title: "Technical Working Groups",
      description: `
        • Protection and solutions
        • Education and skills
        • Health and nutrition
        • Water and sanitation
        • Livelihoods and resilience
        • Environment and energy
      `
    }
  ];

  const supportData = [
    {
      id: "capacity",
      title: "Capacity Building Support",
      description: `
        • Technical training programs
        • System strengthening initiatives
        • Knowledge sharing platforms
        • Innovation support mechanisms
        • Staff capacity development
        • Institutional strengthening
      `
    },
    {
      id: "resources",
      title: "Resource Support",
      description: `
        • Financial contributions
        • Technical expertise
        • Material and equipment
        • Human resource secondment
        • Infrastructure development
        • Operational support
      `
    },
    {
      id: "monitoring",
      title: "Monitoring & Reporting",
      description: `
        • Progress tracking systems
        • Impact assessment tools
        • Performance monitoring
        • Quality assurance mechanisms
        • Feedback collection
        • Results documentation
      `
    }
  ];
  return (
    <main>
      <Hero2
        title="Support Government Coordination"
        subtitle="Join us in strengthening Uganda's refugee response coordination"
        imageSrc="/about.jpeg"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Coordination Mechanisms</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion data={coordinationData} />
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Support Areas</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion data={supportData} />
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Get Involved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Immediate Actions
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Register your organization</li>
                  <li>Join coordination meetings</li>
                  <li>Share your expertise</li>
                  <li>Support specific initiatives</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Contact Information
                </h3>
                <p className="text-gray-600">
                  To learn more about supporting government coordination:
                </p>
                <div className="mt-2">
                  <p className="text-gray-800">Coordination Unit</p>
                  <p className="text-gray-600">
                    Email: coordination@opm.go.ug
                  </p>
                  <p className="text-gray-600">Phone: +256 (0) 414 123458</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
