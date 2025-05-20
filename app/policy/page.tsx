import Hero  from "@/components/shared/Hero";

import SystemInfo from "@/components/settlements/SystemInfo";
import Accordion from "@/components/shared/Accordion";


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
    title: 'THE INTEGRATION OF REFUGEE MANAGEMANT AND PROTECTION INTO THE NDPII',
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
    <main className="min-h-screen flex flex-col text-secondary">
      <Hero title={"Policy & Regulatory Frameworks"} description={"Upholding rights, ensuring safety, and strengthening refugee governance."} />
     <div className="max-w-screen bg-white  py-24 sm:px-6 lg:px-40">
     <h1 className="font-normal text-center text-lg mb-4">POLICY, REGULATIONS AND PROCEDURES</h1>
        <p className="mb-4 text-gray-700">Uganda’s refugee policy is anchored in human dignity, inclusion, and self-reliance. This section outlines key national laws, government frameworks, and international treaties that govern the protection and management of refugees.</p>
       
     </div>
      <div className="max-w-screen bg-[#EDF0F2] min-h-screen py-24 sm:px-6 lg:px-40">
      <Accordion data={accordionData} />
      </div>
  
    </main>
  );
}
