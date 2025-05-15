import { Hero } from "@/components/refugee-management/Hero";

import Partners from "@/components/about/Partners";
import Gradientssection from "@/components/about/Gradientssection";
import HowItWorks from "@/components/about/HowItWorks";
import Products from "@/components/about/Products";
import Impact from "@/components/about/Impact";
import ManagementAccordion from "@/components/refugee-management/ManagementAccordion";
import SystemInfo from "@/components/refugee-management/SystemInfo";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-secondary">
      <Hero />
      <SystemInfo />
      <ManagementAccordion />
  
    </main>
  );
}
