import { Hero } from "@/components/about/Hero";
import { Statistics } from "@/components/home/Statistics";
import { Folders } from "@/components/home/Folders";
import { Map } from "@/components/home/Map";
import { FAQ } from "@/components/home/FAQ";
import Passion from "@/components/home/Passion";
import Partners from "@/components/about/Partners";
import Gradientssection from "@/components/about/Gradientssection";
import HowItWorks from "@/components/about/HowItWorks";
import Products from "@/components/about/Products";
import Impact from "@/components/about/Impact";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-secondary">
      <Hero />
      <Partners />
      <Gradientssection />
    <HowItWorks />
    <Products />
    <Impact />
    </main>
  );
}
