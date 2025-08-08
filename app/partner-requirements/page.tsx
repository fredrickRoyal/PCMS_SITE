"use client";
import Hero2 from "@/components/shared/Hero2";
import Accordion from "@/components/shared/Accordion";

export default function PartnershipRequirementsPage() {
  const requirementsData = [
    {
      id: "legal",
      title: "Legal Requirements",
      description: `
        • NGO Bureau Registration Certificate
        • MoU with Office of the Prime Minister (OPM)
        • Valid Tax Clearance Certificate
        • Annual Returns filed with NGO Bureau
        • Certificate of Incorporation
        • Operating License from relevant authorities
      `
    },
    {
      id: "technical",
      title: "Technical Requirements",
      description: `
        • Proven experience in refugee response
        • Qualified personnel and adequate resources
        • Strong financial management systems
        • Monitoring and evaluation frameworks
        • Clear organizational structure
        • Technical expertise in proposed intervention areas
      `
    },
    {
      id: "financial",
      title: "Financial Requirements",
      description: `
        • Audited financial statements
        • Bank references
        • Proof of financial stability
        • Adequate internal controls
        • Transparent financial reporting systems
        • Sustainable funding sources
      `
    }
  ];

  const processData = [
    {
      id: "application",
      title: "Application Process",
      description: `
        1. Submit Letter of Intent to OPM
        2. Complete partnership application form
        3. Submit required documentation
        4. Undergo capacity assessment
        5. Technical review of application
        6. Partnership approval process
      `
    },
    {
      id: "compliance",
      title: "Compliance Requirements",
      description: `
        • Regular reporting to OPM
        • Participation in coordination meetings
        • Adherence to refugee response framework
        • Compliance with national laws and regulations
        • Regular monitoring and evaluation
        • Timely submission of progress reports
      `
    }
  ];
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero2
        title="Requirements for Partnership"
        subtitle="Guidelines and requirements for organizations seeking to partner with OPM in refugee response"
        imagePath="/about.jpeg"
      />

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Partnership Requirements & Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Organizations seeking to partner with OPM in refugee response must meet specific requirements and follow a structured registration process to ensure effective coordination and service delivery.
            </p>
          </div>

          {/* Requirements Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Requirements</h3>
            <Accordion data={requirementsData} />
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Application Process</h3>
            <Accordion data={processData} />
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3">Office of the Prime Minister</h4>
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
