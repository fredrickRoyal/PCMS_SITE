import { ArrowRight, LucideChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col px-4 md:px-24">
      <div className="absolute inset-0 bg-white/10 z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,white_30%,transparent_60%)] md:[mask-image:linear-gradient(to_right,white_25%,transparent_50%)]"></div>
      <Image
        src="/hero.jpg"
        alt="Refugee mother and child"
        fill
        className="object-cover object-[75%_center]"
        priority
      />
      {/* <div className="absolute top-24 md:top-32 left-4 md:left-24 z-20 pr-4">
        <h1 className="font-manrope text-3xl md:text-4xl font-semibold text-zinc-900 max-w-2xl bg-white/60 backdrop-blur-sm p-5 rounded-2xl shadow-sm">
          Empowering coordinated and impactful Partnerships
        </h1>
      </div> */}
      <div className="relative z-20 px-4 h-full flex flex-col justify-center">
        {/* <h1 className="font-manrope text-3xl md:text-4xl font-semibold text-zinc-900 max-w-2xl">
          Empowering coordinated and impactful Partnerships
        </h1>
        <p className="mt-2 text-zinc-800 pb-6 md:pb-12 max-w-xl text-base md:text-lg">
          Enhancing whole of society contributions to National Development by the Non-State Actors
        </p> */}
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

        <div className="mt-80 md:mt-[32rem] w-full z-10 hidden md:block">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <Link
              href="/partner-requirements"
              className="p-5 bg-yellow-500/80 backdrop-filter backdrop-blur-md flex flex-col justify-between gap-4 text-black border border-white/30 rounded-md hover:bg-yellow-500/90 transition-all flex-1 group shadow-lg"
            >
              <div>
                <h3 className="text-lg font-medium mb-2 leading-tight">
                  Requirements for partnership
                </h3>
                <p className="text-sm font-light text-black/80">
                  All organizations seeking to partner with the Government of Uganda must first be duly registered or authorized by the relevant government registration authorities. Requiremenrs for partnership process is then facilitated through the PCMS...
                </p>
              </div>
              <div className="flex justify-end">
                <LucideChevronRight className="text-black/50 group-hover:text-black transition-colors" />
              </div>
            </Link>

            <Link
              href="/organizations"
              className="p-5 bg-destructive/80 backdrop-filter backdrop-blur-md flex flex-col justify-between gap-4 text-white border border-white/20 rounded-md hover:bg-destructive/90 transition-all flex-1 group shadow-lg"
            >
              <div>
                <h3 className="text-lg font-medium mb-2 leading-tight">
                  List of coordinated Non-State Actors (Who's where, for how long & doing what?)
                </h3>
                <p className="text-sm font-light text-white/80 line-clamp-3">
                  Non-State Actors work in partnership with the government to implement the national development agenda and support humanitarian responses, with the government playing a central coordinating role in this collaboration...
                </p>
              </div>
              <div className="flex justify-end">
                <LucideChevronRight className="text-white/50 group-hover:text-white transition-colors" />
              </div>
            </Link>

            <Link
              href="/projects"
              className="p-5 bg-black/80 backdrop-filter backdrop-blur-md flex flex-col justify-between gap-4 text-white border border-white/20 rounded-md hover:bg-black/90 transition-all flex-1 group shadow-lg"
            >
              <div>
                <h3 className="text-lg font-medium mb-2 leading-tight">
                  Financial & Output contribution by the Non-state Actors
                </h3>
                <p className="text-sm font-light text-white/80 line-clamp-3">
                  Projects implemented by Non-State Actors contribute directly to the achievement of the National Development Plan...
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
