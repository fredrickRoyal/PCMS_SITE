import { Hero } from "@/components/about/Hero";
import { Statistics } from "@/components/home/Statistics";
import { Folders } from "@/components/home/Folders";
import { Map } from "@/components/home/Map";
import { FAQ } from "@/components/home/FAQ";
import Passion from "@/components/home/Passion";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
    </main>
  );
}
