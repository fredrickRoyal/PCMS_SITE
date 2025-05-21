"use client"

import Hero2 from "@/components/shared/Hero2";
import Accordion from "@/components/shared/Accordion"
import  Link  from "next/link";

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
    title: 'Potential projects',
    description: 'Uganda is known to have been hosting refugees since 1942, notably the 8,000 polish refugees that fled to Uganda during the second world war. In 1950s and 60s, Uganda again hosted approximately 78,000 Southern Sudanese and Rwandese refugees. As of June 2019, Uganda is a host to 1,267,043 multi-national refugees coming from over 38 countries, however, 99% of the refugees come from 8 countries: South Sudan, Democratic Republic of Congo, Burundi, Somalia, Rwanda, Eritrea, Ethiopia and Sudan.',
    nodeComponent: <div className="py-4">
        <Link href="/reports" className="text-white rounded-lg bg-black px-4 py-4">Download document!</Link>,
        </div>
  },
  {
    id: '2',
    title: 'THE UGANDA REPUBLIC ACT',
    description: 'The Uganda Republic Act (URA) is the legislative framework that governs the refugee crisis in Uganda.',
  }
];

export default function ReportsPage() {
  return (<>
        <Hero2 title={"Research of Study Reports"}  />   
    <div className="container mx-auto px-4 py-8">
      <Accordion data={accordionData} />
    </div>
  </>
  );
}