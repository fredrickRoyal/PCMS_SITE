import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import WhiteFolder from "@/public/whitefolder.png"
import BlackFolder from "@/public/blackfolder.png"

export function Folders() {
  return (
    <section className="py-8 md:py-16 bg-[#EDF0F2]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="relative max-w-[480px] h-[400px] flex justify-center items-center mx-auto p-12">
          <Image src={WhiteFolder} alt=""  fill className=" object-cover" />
          <ArrowRight size={52} className="text-destructive -rotate-45  absolute right-4 top-12" />
          <div className="text-secondary z-10 pt-4 md:pt-8">
            <h3 className="font-normal text-xl md:text-2xl pb-4 md:pb-8">Apply for Refugee Response Interventions</h3>
            <p>As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
          </div>
          </div>
          <div className="relative max-w-[480px] h-[400px] flex justify-center items-center mx-auto p-12">
          <Image src={BlackFolder} alt=""  fill className=" object-cover" />
          <ArrowRight size={52} className="text-primary -rotate-45  absolute right-4 top-12" />
          <div className="text-white z-10 pt-4 md:pt-8">
            <h3 className="font-normal text-xl md:text-2xl pb-4 md:pb-8">Apply for Refugee Response Interventions</h3>
            <p>As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
          </div>
          </div>
          <div className="relative max-w-[480px] h-[400px] flex justify-end items-center mx-auto p-4">
          <div className="text-secondary text-right z-10 pt-4 md:pt-8 space-y-6 md:space-y-10">
            <h3 className="font-normal text-xl md:text-2xl">Access latest on refugee publications</h3>
            <p>As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
            <div>

            <Link href={""} className="bg-black rounded-xl text-center  text-white px-8 py-4">
            Read More
            </Link>
            </div>
          </div>
          
          
        </div>
      </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  color: "blue" | "purple" | "yellow" | "green";
}

function FeatureCard({ number, title, description, color }: FeatureCardProps) {
  const bgColors = {
    blue: "bg-blue-50",
    purple: "bg-purple-50",
    yellow: "bg-yellow-50",
    green: "bg-green-50",
  };

  const iconBgColors = {
    blue: "bg-blue-100",
    purple: "bg-purple-100",
    yellow: "bg-yellow-100",
    green: "bg-green-100",
  };

  const textColors = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    yellow: "text-yellow-600",
    green: "text-green-600",
  };

  return (
    <div className={`${bgColors[color]} p-6 rounded-lg`}>
      <div className={`h-12 w-12 ${iconBgColors[color]} rounded-full flex items-center justify-center mb-4`}>
        <span className={`${textColors[color]} font-bold`}>{number}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}