import InfographicHero from "@/components/shared/InfographicHero";
import Accordion from "@/components/shared/Accordion";
import { MapPin } from "lucide-react";
interface AccordionItem {
  id: string;
  title: string;
  description?: string;
  imageSrc?: string;
  nodeComponent?: React.ReactNode;
}

const accordionData: AccordionItem[] = [
  {
    id: '1',
    title: 'Nakivale Settlement - Mbarara Regional Desk, Isingiro District',
    description: 'Nakivale, one of the oldest refugee settlements in Uganda, was opened in 1958 and officially established as a settlement in 1960. The settlement hosts refugees from Burundi, the Democratic Republic of Congo, Eritrea, Ethiopia, Rwanda, Somalia, Sudan, and South Sudan. During the Burundian crisis in 2015, the population of the settlement greatly increased and has since remained this high. Markets are bustling and food is available for purchase, but many refugees struggle to afford basic items.',
    imageSrc: '/home.jpeg',
  },
  {
    id: '2', 
    title: 'Oruchinga Settlement - Mbarara Regional Desk, Isingiro District',
    description: 'The Refugees’ Rights Act (RRR) is the primary law on the protection of refugees. It provides the legal framework for the rights of refugees and their families.',
    imageSrc: '/home.jpeg',
  },
  {
    id: '3',
    title: 'Kyaka II Settlement - Mbarara Regional Desk, Kyegegwa District',
    description: 'The Refugees’ Protection Act (RPA) provides the legal framework for the protection of refugees and their families.',
    imageSrc: '/home.jpeg',
  },
  {
    id: '4',
    title: 'Rwamwanja Settlement - Mbarara Regional Desk, Kamwenge District',
    description: 'The Refugees’ Protection Treaties (RPT) are international agreements that provide the legal framework for the protection of refugees and their families.',
    imageSrc: '/home.jpeg',
  },
  {
    id: '5',
    title: 'Kyangwali Settlement - Hoima Regional Desk, Kikube District',
    description: 'The Refugees’ Protection Agreements (RPA) are international agreements that provide the legal framework for the protection of refugees and their families.',
    imageSrc: '/home.jpeg',
  },
  {
    id: '6',
    title: 'Kiryandongo Refugee Settlement-Hoima Regional Desk, Kiryandongo District',
    description: 'The Refugees’ Protection Orders (RPO) are international agreements that provide the legal framework for the protection of refugees and their families.',
    imageSrc: '/home.jpeg',
  },
  {
    id: '7',
    title: 'Adjumani Settlement - Adjumani Regional Desk, Adjumani District',
    description: 'The Refugees’ Protection Orders (RPO) are international agreements that provide the legal framework for the protection of refugees and their families.',
    imageSrc: '/home.jpeg',
  }
];


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-secondary">
      <InfographicHero
        eyebrow="Sector · Department of Refugees"
        title="Refugee Settlements"
        titleAccent="in Uganda."
        description="A national landscape of safe refuge and integrated service delivery — 13 gazetted settlements across 11 local government districts."
        Icon={MapPin}
        variant="civic"
      />
      <div className="max-w-screen bg-white  py-24 sm:px-6 lg:px-40">
     <h1 className="font-normal text-center text-lg mb-4">SETTLEMENT PROFILE</h1>
     <div className="flex flex-col gap-4">
     <div>
        <h2 className="font-normal">REFUGEE OFFICE HEADQUARTERS</h2>
        <p className="mb-4 text-gray-700">The headquarters for the Department of Refugees-under the Office of the Prime Minister, is situated at Old Kampala, Sir Apollo Kaggwa Road. It houses the Office of the Commissioner for Refugees which is responsible for refugee management, settling refugees, programming and coordination of refugee actors and activities
        </p>
     </div>
     <div>
        <h2 className="font-normal">REFUGEE SETTLEMENT</h2>
        <p className="mb-4 text-gray-700">Refugees are settled within refugee gazetted settlements, that are integrated within local communities. There are a total of 13 refugee settlements found in 11 Local Government Districts, where they are supported with relevant services. Some refugees have settlement on their own onto urban centres that are outside the settlements, especially in Kampala.
        </p>
     </div>
     <div>
        <p className="mb-4 text-gray-700">Each of the 13 settlements is coordinated by the Settlement Commandant (SC), who has semi-autonomous authority for managing and supervising the settlement matters.
        </p>
     </div>
     <div>
        <h2 className="font-normal">REGIONAL DESK OFFICES</h2>
        <p className="mb-4 text-gray-700">Coordination of refugees at the settlements by the Office of the Commissioner for Refugees is done through the Regional Desk Offices (decentralized structures). There are 4 Regional Desk Offices, namely; Mbarara Refugee Desk, Hoima Refugee Desk, Adjumani Refugee Desk and Arua Refugee Desk.
        </p>
     </div>
     <div>
      
        <p className="mb-4 text-gray-700">Each Regional Desk is headed by a Regional Desk Officer (RDO), who is vested with authority to coordinate and manage regional refugee matters and supervision of settlements that are within the respective regions.
        </p>
     </div>
     </div>
       
     </div>
      <div className="max-w-screen bg-[#EDF0F2] min-h-screen py-24 sm:px-6 lg:px-40">
      <Accordion data={accordionData} />
      </div>
  
    </main>
  );
}
