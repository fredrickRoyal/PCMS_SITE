import { Hero } from "@/components/home/Hero";
import { Folders } from "@/components/home/Folders";
import { SettlementMap } from "@/components/home/Map";
import { FAQ } from "@/components/home/FAQ";
import Passion from "@/components/home/Passion";
import ImpactStats from "@/components/home/ImpactStats";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Folders />
      <ImpactStats />
      <SettlementMap />
      <Passion />
      <FAQ />
    </main>
  );
}
