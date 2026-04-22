"use client";
import InfographicHero from "@/components/shared/InfographicHero";
import Accordion from "@/components/shared/Accordion";
import {
  StatCard,
  InfoBox,
  Alert,
} from "@/components/support-coordination/CoordinationComponents";
import { Target, Users, Coins, Crown, HandHeart } from "lucide-react";

export default function SupportCoordinationPage() {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Refugees Hosted",
      value: "1.5M+",
    },
    {
      icon: <Crown className="w-6 h-6 text-blue-600" />,
      title: "Leading Host Nation",
      value: "#1 Africa",
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Refugee-Hosting Districts",
      value: "12+",
    },
    {
      icon: <Coins className="w-6 h-6 text-blue-600" />,
      title: "Annual Funding Need",
      value: "$800M",
    },
  ];

  const challengeData = [
    {
      id: "policies",
      title: "Policy Implementation",
      description: `The Government of Uganda leads the national refugee response through:
        • Office of the Prime Minister (OPM) coordination
        • Uganda Refugee Response Plan (URRP)
        • Streamlined stakeholder management
        • Resource maximization strategies
        • Accountability frameworks
        • Cross-sector collaboration
      `,
    },
    {
      id: "communities",
      title: "Host Community Support",
      description: `Addressing community needs through:
        • Infrastructure development
        • Healthcare system strengthening
        • Natural resource management
        • Social cohesion programs
        • Economic opportunity creation
        • Service delivery enhancement
      `,
    },
    {
      id: "funding",
      title: "Resource Mobilization",
      description: `Strategies to address funding gaps:
        • International donor engagement
        • Efficient resource allocation
        • Innovation in funding mechanisms
        • Private sector partnerships
        • Development-focused approaches
        • Sustainable financing models
      `,
    },
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
      `,
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
      `,
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
      `,
    },
  ];
  return (
    <main>
      <InfographicHero
        eyebrow="Sector · Department of Refugees"
        title="Support Refugee Response"
        titleAccent="Coordination."
        description="Join us in strengthening Uganda's refugee response — one of the coordination mandates supported by PCMS."
        Icon={HandHeart}
        variant="civic"
      />
      <div className="bg-emerald-900 text-white py-3 px-4 text-center text-sm">
        This page focuses on the Department of Refugees.{" "}
        <a href="/how-it-works" className="underline hover:text-yellow-300">
          See how partnership works across OPM
        </a>
        .
      </div>
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Uganda has long been recognized as one of the most progressive
              refugee-hosting nations in the world, offering sanctuary to over
              1.5 million refugees—primarily from South Sudan, the Democratic
              Republic of Congo, and Burundi.
            </p>
          </div>
          <Alert>
            The increasing number of arrivals, coupled with limited resources,
            has strained Uganda's refugee response system. Effective government
            coordination is critical to ensuring sustainable support for both
            refugees and host communities.
          </Alert>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Key Challenges Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Supporting Coordination Matters Now
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion data={challengeData} />
          </div>
        </div>

        {/* Action Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <InfoBox
            number="1"
            title="Advocate"
            description="Push for increased funding through government-led mechanisms"
          />
          <InfoBox
            number="2"
            title="Support"
            description="Back local integration programs aligned with national policies"
          />
          <InfoBox
            number="3"
            title="Partner"
            description="Foster partnerships between humanitarian actors and authorities"
          />
          <InfoBox
            number="4"
            title="Engage"
            description="Participate in government-coordinated response initiatives"
          />
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get Involved Today
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Why Act Now?</h3>
                <p className="text-gray-600">
                  Uganda's refugee model is a beacon of hope—but without robust
                  coordination, the system risks faltering. Now is the time to
                  stand with the Government of Uganda in ensuring a sustainable,
                  inclusive future for all.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Office of the Prime Minister</p>
                  <p>Department of Refugees</p>
                  <p>Email: refugee.coordination@opm.go.ug</p>
                  <p>Tel: +256-414-4311000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
