"use client"

import InfographicHero from "@/components/shared/InfographicHero";
import Accordion from "@/components/shared/Accordion"
import  Link  from "next/link";
import { PlayCircle } from "lucide-react";

let accordionData : AccordionItem[];
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
    title: 'Recording of the Training on Applying for an MoU with OPM (Module 1) Friday 19/09/2025',
    description: 'The meeting focused on introducing and demonstrating a new Partnership Coordination and Monitoring System (PCMS) developed to improve partner collaboration with the Office of the Prime Minister, with participants learning about key features including MOU processing, project documentation, and budgeting requirements. The system demonstration covered various aspects including web-based platform setup, project profiling, budget categorization, and MOU application processes, with participants asking questions about technical implementation and system requirements. The session concluded with discussions about system improvements, technical issues, and plans for follow-up support including training materials and additional meetings to address outstanding questions',
    nodeComponent: <div className="py-4">
        <Link href="https://drive.google.com/file/d/1QuDIiVxztehp00TOCYCkokGi9AQCe_-J/view?usp=sharing" target="_blank" className="text-white rounded-lg bg-black px-4 py-4">Download Recording</Link>,
        </div>
  },
  // {
  //   id: '2',
  //   title: 'THE UGANDA REPUBLIC ACT',
  //   description: 'The Uganda Republic Act (URA) is the legislative framework that governs the refugee crisis in Uganda.',
  // }
];

export default function ReportsPage() {
  return (<>
        <InfographicHero
          eyebrow="Publications · Training"
          title="Learning"
          titleAccent="Videos."
          description="Recorded walkthroughs and training sessions for partners using PCMS."
          Icon={PlayCircle}
          variant="authority"
        />   
    <div className="container mx-auto px-4 py-8">
      <Accordion data={accordionData} />
    </div>
  </>
  );
}