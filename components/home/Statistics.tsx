import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export function Statistics() {
  return (
    <section className="py-12  bg-gray-50 min-h-screen">
      <div className="container pt-12 mx-auto space-y-12 px-4">
        <div className="flex flex-col md:flex-row w-full gap-8 md:gap-0">
          <div className="md:pr-40">
                  <h2 className="text-2xl md:text-3xl font-[500] text-secondary mb-4 md:mb-8 uppercase tracking-wider">
                    Uganda's Refugee Response Monitoring E-System
                  </h2>
                  <p className="text-secondary text-sm md:text-base">Developed by the Office of the Prime Minister (OPM), supports and strengthens the coordination, monitoring, and reporting of refugee programs across Uganda. Tailored to GoU sectors (Health, Education, Energy, JLOS, Lands, Security, etc.), it enables partners to apply for interventions and tracks progress for informed decision-making.</p>
                  
          </div>
          <div className="min-w-full md:min-w-[440px] flex">
            <h1 className="text-5xl md:text-7xl font-urbanist text-secondary font-normal">Welcome to GoU-RRMS</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <Image width={600} height={450} src="" alt={""} />
          <div className="flex flex-col md:flex-row gap-8">
            {/*Gradient card */}
            <div className="bg-gradient-to-tr flex flex-col items-center justify-center gap-4 from-destructive to-primary w-[350px] h-[450] rounded-2xl">
            <Image width={300} height={200} src="" alt={""} />
              <h3>Get Premium Access</h3>
              <p className="max-w-40 text-center">Update Your index information in Setting</p>
              <Link href={""} className="rounded-xl text-secondary bg-white py-4 px-10">
              Get Now
              </Link>
            </div>
            {/*stat card */}
            <div className="text-secondary w-96 h-96 shadow-xl  rounded-xl p-12 flex justify-center items-center">
              <div className="flex flex-col gap-8">

              <h3 className="font-normal text-2xl">Excellence through innovation</h3>
              <div className="flex text-destructive text-4xl">
                <p>7000+</p>
                <p>120K</p>
              </div>
              <p className="text-secondary/60">As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
            
              </div>
            </div>
          </div>
        </div>
        
   
      </div>
    </section>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  color: "blue" | "purple" | "yellow";
  chart: string;
}

const StatCard: FC<StatCardProps> = ({ title, value, color, chart }) => {
  const colorClasses = {
    blue: "bg-blue-100",
    purple: "bg-purple-100",
    yellow: "bg-yellow-100",
  };

  const dotClasses = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 mt-1">{value}</h3>
        </div>
        <div className={`${colorClasses[color]} p-2 rounded-full`}>
          <div className={`h-3 w-3 rounded-full ${dotClasses[color]}`}></div>
        </div>
      </div>
      <div className="mt-4 h-32 w-full">
        {/* Chart placeholder */}
        <div className="h-full w-full bg-gray-100 rounded flex items-center justify-center">
          <p className="text-gray-400">{chart}</p>
        </div>
      </div>
    </div>
  );
};