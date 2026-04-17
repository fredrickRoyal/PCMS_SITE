import { ArrowRight, LucideChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Flag from "../Flag";

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col md:flex-row px-4 md:px-24">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image
        src="/about.jpeg"
        alt="Refugee mother and child"
        fill
        className="object-cover "
        priority
      />
      <div className="relative z-20 px-4 h-full flex flex-col justify-center">
        <h1 className="font-manrope text-2xl md:text-4xl pb-4 md:pb-8 font-semibold text-white max-w-2xl">
        Strengthening Uganda's Refugee Response: The GoU-RRMS
        </h1>
        <p className="mt-2 md:mt-4 text-white/90 md:pb-12 max-w-xl text-base md:text-lg">
        A powerful tool by the Office of the Prime Minister to coordinate, monitor, and report on refugee programs across Uganda.
        </p>
        <div className="mt-4 md:mt-8 flex flex-wrap md:pb-24 gap-4">
          <Link 
            href="/register" 
            className="w-full md:w-auto px-6 py-3 bg-primary text-black rounded-md font-medium hover:bg-white text-center"
          >
           Partner with us
          </Link>
          <Link 
            href="/learn-more" 
            className="w-full md:w-auto px-6 py-3 bg-white/10 text-white border border-white/30 rounded-md font-medium hover:bg-white/20 text-center"
          >
            Explore settlements
          </Link>
        </div>
        <div className="flex flex-row gap-8 md:gap-40 mt-8 md:mt-0">
          <div className="flex flex-col  md:w-auto">
            <h3 className="text-3xl md:text-5xl font-normal text-white">1.2</h3>
            <p className="text-xs font-light text-white/80">Handing Control</p>
          </div>
          <div className="flex flex-col  md:w-auto">
            <h3 className="text-3xl md:text-5xl font-normal text-white">92</h3>
            <p className="text-xs font-light text-white/80">Performance</p>
          </div>
          <div className="flex flex-col  md:w-auto">
            <h3 className="text-3xl md:text-5xl font-normal text-white">220+</h3>
            <p className="text-xs font-light text-white/80">Breaking Speed</p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-full z-10 items-center justify-end">
        <div className="flex gap-4 max-w-96 text-sm">
      <p>13</p>
      <p>Experience the pinnacle of speed, precision, and innovation with Apex—where high-performance engineering meets cutting</p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 md:right-96 z-10">
        <Flag />
      </div>

    </section>
  );
}