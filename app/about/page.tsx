import { Hero } from "@/components/about/Hero";

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
