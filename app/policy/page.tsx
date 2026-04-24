import InfographicHero from "@/components/shared/InfographicHero";
import Accordion from "@/components/shared/Accordion";
import { Scale } from "lucide-react";


let accordionData: AccordionItem[];
interface AccordionItem {
  id: string;
  title: string;
  description?: string;
  imageSrc?: string;
  nodeComponent?: React.ReactNode;
}

accordionData = [
  {
    id: '1',
    title: 'THE CONSTITUTION FOR THE REPUBLIC OF UGANDA',
    description: 'The Prime Minister and Minister of Disaster Preparedness, Relief and Refugees provide strategic direction for refugee management.',
    imageSrc: '/about.jpeg'
  },
  {
    id: '2',
    title: 'THE INTEGRATION OF REFUGEE MANAGEMENT AND PROTECTION INTO NDP IV',
    description: 'The Permanent Secretary and Commissioner for Refugees oversee day-to-day operations and policy implementation.',
    imageSrc: '/home.jpeg'
  },
  {
    id: '3',
    title: 'INTERNATIONAL AND NATIONAL LEGISLATION',
    description: 'Regional Data Offices and Refugee Settlements manage local operations and direct refugee support.',
    imageSrc: '/graph.png'
  },
  {
    id: '4',
    title: 'THE UGANDA REFUGEE POLICY',
    description: 'The Permanent Secretary and Commissioner for Refugees oversee day-to-day operations and policy implementation.',
    imageSrc: '/home.jpeg'
  }
];


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-foreground">
      <InfographicHero
        eyebrow="National Frameworks"
        title="Policy & Regulatory"
        titleAccent="Frameworks."
        description="Upholding rights, ensuring safety, and strengthening governance — the national laws and international instruments that anchor refugee protection and partnership coordination."
        Icon={Scale}
        variant="civic"
      />
     <div className="max-w-screen bg-surface py-24 sm:px-6 lg:px-40">
       <h1 className="font-normal text-center text-lg mb-4 text-foreground">POLICY, REGULATIONS AND PROCEDURES</h1>
        <p className="mb-4 text-foreground-muted">Uganda’s refugee policy is anchored in human dignity, inclusion, and self-reliance. This section outlines key national laws, government frameworks, and international treaties that govern the protection and management of refugees.</p>

     </div>
      <div className="max-w-screen bg-surface-muted min-h-screen py-24 sm:px-6 lg:px-40">
      <Accordion data={accordionData} />
      </div>

    </main>
  );
}
