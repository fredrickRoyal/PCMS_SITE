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
    title: 'UNITED NATIONS HIGH COMMISSIONER FOR REFUGEES (UNHCR)',
   
    nodeComponent: <div className="flex flex-col gap-4"> <p>The Office of the United Nations High Commissioner for Refugees is a United Nations programme with the mandate to protect refugees, forcibly displaced communities and stateless people, and assist in their voluntary repatriation, local integration or resettlement to a third country</p>
<p>It raises resources to support Government to manage refugees in realising durable solutions, in addition it monitors and coordinates those services that they deliver through specific NGOs, ensuring adherence to international standards on refugees’ matters.</p></div>,
  },
  {
    id: '2',
    title: 'DISTRICT LOCAL GOVERNMENTS',
    description: 'The Act establishes the Refugee Management Authority (RMA) and sets out the mandate for the RMA.',
    imageSrc: '/blog2.jpeg',
  },
  {
    id: '3',
    title: 'THE HOST COMMUNITY',
    description: 'The Act establishes the Refugee Hosting Authority (RHA) and sets out the mandate for the RHA.',
    imageSrc: '/blog3.jpeg',
  },
  {
    id: '4',
    title: 'THE REFUGEES',
    description: 'The Universal Declaration of Human Rights is a landmark international treaty that outlines fundamental human rights for all people. It serves as a guiding principle for international cooperation and peacekeeping efforts.',
    imageSrc: '/blog4.jpeg',
  },
  {
    id: '5',
    title: 'OTHER UNITED NATIONS AGENCIES',
    description: 'The Universal Declaration of Human Rights is a landmark international treaty that outlines fundamental human rights for all people. It serves as a guiding principle for international cooperation and peacekeeping efforts.',
    imageSrc: '/blog5.jpeg',
  },
  {
    id: '6',
    title: 'DEVELOPMENT PARTNERS',
    description: 'The Universal Declaration of Human Rights is a landmark international treaty that outlines fundamental human rights for all people. It serves as a guiding principle for international cooperation and peacekeeping efforts.',
    imageSrc: '/blog6.jpeg',
  },
  {
    id: '7',
    title: 'NON GOVERNMENTAL ORGANISATIONS (NGOS)',
    description: 'The Universal Declaration of Human Rights is a landmark international treaty that outlines fundamental human rights for all people. It serves as a guiding principle for international cooperation and peacekeeping efforts.',
    imageSrc: '/blog7.jpeg',
  },

];



export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-secondary">
      <Hero title={"Our Stakeholders & Partners"} description={"A united front for refugee protection, service delivery, and integration."} />
      <div className="max-w-screen bg-white  py-24 sm:px-6 lg:px-40">
     <h1 className="font-normal text-center text-lg mb-4">CENTRAL GOVERNMENT</h1>
        <p className="mb-4 text-gray-700">The Office of the Prime Minister on behalf of the central Government coordinates through its Department of Refugees, that networks with other ministries to coordinate the state and non-state activities and services relating to refugees and refugee hosting areas in Uganda</p>
       
     </div>
      <div className="max-w-screen bg-[#EDF0F2] min-h-screen py-24 sm:px-6 lg:px-40">
      <Accordion data={accordionData} />
      </div>
  
    </main>
  );
}
