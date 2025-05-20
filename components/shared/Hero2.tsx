import { ArrowRight, LucideChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Flag from "../Flag";

interface HeroProps {
  title: string;
  imageSrc?: string;
}

export default function Hero2({ title, imageSrc = "/home.jpeg" }: HeroProps) {
  return (
    <section className="relative bg-orange-400 min-w-screen  min-h-[80%] flex justify-center px-4 md:py-24 md:px-24">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image
        src={imageSrc}
        alt="Refugee mother and child"
        fill
        className="object-cover grayscale"
        priority
      />
      <div className="relative z-10  px-4 py-12 h-full  flex  items-center justify-center">
        <h1 className="font-manrope text-3xl md:text-4xl pb-4 md:pb-4 font-semibold text-white text-center">
        {title}
        </h1>
    
     
      </div>
     

      <div className="absolute bottom-0 right-0 md:right-96 z-10">
        <Flag />
      </div>

    </section>
  );
}