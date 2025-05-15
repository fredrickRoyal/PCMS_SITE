import { ArrowRight, LucideChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Flag from "../Flag";

export function Hero() {
  return (
    <section className="relative bg-orange-400 min-h-[80%] flex flex-col md:flex-row px-4 md:py-24 md:px-24">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image
        src="/home.jpeg"
        alt="Refugee mother and child"
        fill
        className="object-cover grayscale"
        priority
      />
      <div className="relative z-10 px-4 h-full  flex flex-col justify-center">
        <h1 className="font-manrope text-3xl md:text-4xl pb-4 md:pb-4 font-semibold text-white max-w-2xl">
        Refugee Management in Uganda
        </h1>
        <p className="mt-2 md:mt-4 text-white/90 pb-6 md:pb-12 max-w-2xl text-base md:text-md">
        Managing People. Supporting Communities. Enhancing Coordination.
        </p>
     
      </div>
      <div className="hidden md:flex w-full z-10 items-center justify-end">
        
      </div>

      <div className="absolute bottom-0 right-0 md:right-96 z-10">
        <Flag />
      </div>

    </section>
  );
}