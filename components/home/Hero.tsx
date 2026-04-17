import { ArrowRight, LucideChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col md:flex-row px-4 md:px-24">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <Image
        src="/hero.jpg"
        alt="Refugee mother and child"
        fill
        className="object-cover "
        priority
      />
      <div className="relative z-20 px-4 h-full flex flex-col justify-center">
        <h1 className="font-manrope text-3xl md:text-4xl font-semibold text-white max-w-2xl">
          Empowering coordinated and impactful Partnerships
        </h1>
        <p className="mt-2 text-white/90 pb-6 md:pb-12 max-w-xl text-base md:text-lg">
          Enhancing whole of society contributions to National Development by the Non-State Actors
        </p>
        {/* <div className="mt-8 flex flex-wrap gap-4">
          { <Link
            href="/projects"
            className="px-6 py-3 bg-yellow-600 text-black rounded-md font-medium hover:bg-white/20 hover:text-white"
          >
            Coordinated Projects
          </Link>
          <Link
            href="/organizations"
            className="px-6 py-3 bg-destructive text-white border border-white/30 rounded-md font-medium hover:bg-white/20"
          >
            Coordinated Partners
          </Link> }
        </div> */}

        <div className="mt-40 md:mt-64 w-full z-10 hidden md:block">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <Link
              href="/partner-requirements"
              className="p-5 bg-yellow-600 flex flex-col justify-between gap-4 text-black border border-yellow-500 rounded-md hover:bg-yellow-500 transition-colors flex-1 group"
            >
              <div>
                <h3 className="text-lg font-medium mb-2 leading-tight">
                  Requirements for partnership
                </h3>
                <p className="text-sm font-light text-black/80 line-clamp-3">
                  As part of its mandate, the OPM is responsible for
                  registering all organisations engaged…
                </p>
              </div>
              <div className="flex justify-end">
                <LucideChevronRight className="text-black/50 group-hover:text-black transition-colors" />
              </div>
            </Link>

            <Link
              href="/organizations"
              className="p-5 bg-destructive flex flex-col justify-between gap-4 text-white border border-white/20 rounded-md hover:bg-destructive/90 transition-colors flex-1 group"
            >
              <div>
                <h3 className="text-lg font-medium mb-2 leading-tight">
                  List of coordinated Non-State Actors
                </h3>
                <p className="text-sm font-light text-white/80 line-clamp-3">
                  Non-State Actors that have successfully undergone the required onboarding process to support and contribute to the National Development Agenda.
                </p>
              </div>
              <div className="flex justify-end">
                <LucideChevronRight className="text-white/50 group-hover:text-white transition-colors" />
              </div>
            </Link>

            <Link
              href="/projects"
              className="p-5 bg-black/80 flex flex-col justify-between gap-4 text-white border border-white/20 rounded-md hover:bg-black transition-colors flex-1 group"
            >
              <div>
                <h3 className="text-lg font-medium mb-2 leading-tight">
                  List of coordinated Non-state Actors Projects
                </h3>
                <p className="text-sm font-light text-white/80 line-clamp-3">
                  Non-state actor projects that have been systematically reviewed to ensure alignment with the National Development Plan.
                </p>
              </div>
              <div className="flex justify-end">
                <LucideChevronRight className="text-white/50 group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
