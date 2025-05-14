import { ArrowRight, LucideChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Flag from "../Flag";

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col md:flex-row px-4 md:px-24">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image
        src="/home.jpeg"
        alt="Refugee mother and child"
        fill
        className="object-cover grayscale"
        priority
      />
      <div className="relative z-20 px-4 h-full flex flex-col justify-center">
        <h1 className="font-manrope text-3xl md:text-4xl pb-4 md:pb-8 font-semibold text-white max-w-2xl">
          Coordinating Uganda's Refugee Response for a Brighter Future
        </h1>
        <p className="mt-2 md:mt-4 text-white/90 pb-6 md:pb-12 max-w-xl text-base md:text-lg">
         The Government of Uganda Refugee Response Monitoring System (GoU-RRMS) strengthens coordination, monitoring, and reporting of refugee programs.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link 
            href="/register" 
            className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-yellow-600"
          >
            Apply for Partnernship
          </Link>
          <Link 
            href="/learn-more" 
            className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-md font-medium hover:bg-white/20"
          >
            Refugee settlements
          </Link>
        </div>
      </div>
      <div className="hidden md:flex w-full z-10 items-center justify-end">
        <div className="space-y-4">
        <Link 
            href="/learn-more" 
            className="px-6 py-3 bg-white/80 flex gap-4 text-black border border-white/50 rounded-md font-medium hover:bg-white/100"
          >
            <div>
              <h3 className="text-lg font-normal">Requirements for partnership</h3>
              <p className="text-md font-light">The Government of Uganda Refugee Response Monitoring System (GoU-RRMS)</p>
            </div>
            <LucideChevronRight />
          </Link>
        <Link 
            href="/learn-more" 
            className="px-6 py-3 bg-white/80 flex gap-4 text-secondary border border-white/50 rounded-md font-medium hover:bg-white/100"
          >
            <div>
              <h3 className="text-lg font-normal">Theory of Change</h3>
              <p className="text-md font-light">The Government of Uganda Refugee Response Monitoring System (GoU-RRMS)</p>
            </div>
            <LucideChevronRight />
          </Link>
        <Link 
            href="/learn-more" 
            className="px-6 py-3 bg-white/80 flex gap-4 text-secondary border border-white/50 rounded-md font-medium hover:bg-white/100"
          >
            <div>
              <h3 className="text-lg font-normal">Support government coordination now</h3>
              <p className="text-md font-light">The Government of Uganda Refugee Response Monitoring System (GoU-RRMS)</p>
            </div>
            <LucideChevronRight />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 md:right-96 z-10">
        <Flag />
      </div>

    </section>
  );
}