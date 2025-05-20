import Hero from "@/components/shared/Hero";

import SystemInfo from "@/components/refugee-management/SystemInfo";
import Accordion from "@/components/shared/Accordion";
import { accordionData } from "@/components/refugee-management/data/accordionData";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-secondary">
         <Hero
      title="Refugee Management in Uganda"
      description="Managing People. Supporting Communities. Enhancing Coordination."
      imageSrc="/home.jpeg"
    />
      <SystemInfo />
      <div className="max-w-screen bg-[#EDF0F2] min-h-screen py-24 sm:px-6 lg:px-40">
      <Accordion data={accordionData}  />
  </div>
    </main>
  );
}
