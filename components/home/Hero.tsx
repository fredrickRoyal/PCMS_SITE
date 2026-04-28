'use client';
import { useEffect, useState } from 'react';
import { LucideChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HERO_SLIDES = [
  {
    src: '/hero.jpg',
    alt: 'Communities supported through OPM-coordinated partnerships',
  },
  {
    src: '/hero2.jpg',
    alt: 'Partnership engagements coordinated through PCMS',
  },
  { src: '/about.jpeg', alt: 'Non-State Actors collaborating with Government' },
  { src: '/home.jpeg', alt: 'Development work across Uganda' },
];

export function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setSlide((s) => (s + 1) % HERO_SLIDES.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col px-4 md:px-24 overflow-hidden bg-background">
      {/* Photo slideshow */}
      {HERO_SLIDES.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          className={`object-cover object-[75%_center] transition-opacity duration-[1200ms] ${i === slide ? 'opacity-100' : 'opacity-0'
            }`}
          priority={i === 0}
        />
      ))}

      {/* Governmental gradient wash — emerald/gold/red mesh */}
      <div className="absolute inset-0 bg-mesh-authority mix-blend-multiply dark:mix-blend-normal dark:opacity-70 z-[1]" />

      {/* Readability veil behind copy — gradient, softer on right */}
      {/* <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-r from-background/90 via-background/60 to-transparent dark:from-background/85 dark:via-background/50" /> */}

      <div className="relative z-20 h-full flex flex-col justify-between py-10 md:py-20 flex-1">
        {/* Headline */}
        <div className="max-w-3xl">
          {/* <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-civic font-semibold mb-4">
            <span className="inline-block w-8 h-px bg-civic" />
            <span>Office of the Prime Minister</span>
          </p> */}
          {/* <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-normal text-foreground leading-[1.05] tracking-tight mb-4 md:mb-6">
            Coordinating Government partnerships{' '}
            <span className="text-authority italic">
              with Non-State Actors.
            </span>
          </h1> */}
          {/* <p className="text-foreground/80 text-base md:text-lg max-w-2xl leading-relaxed">
            PCMS is the single platform to apply for, track, report on and
            coordinate partnerships across every government Ministries,
            Departments, and Agencies (MDA's).
          </p> */}
        </div>

        {/* CTA cards */}
        <div className="w-full hidden md:block">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <Link
              href="/partner-requirements"
              className="relative overflow-hidden p-5 bg-gold text-gold-foreground border border-gold/30 rounded-xl hover:bg-gold/90 transition-all flex-1 group shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="relative">
                <h3 className="text-lg font-semibold mb-2 leading-tight">
                  Requirements for partnership
                </h3>
                <p className="text-sm font-light text-gold-foreground/90">
                  All organizations seeking to partner with the Government of Uganda must first be duly registered or authorized by the relevant government registration authorities. Requiremenrs for partnership process is then facilitated through the PCMS...
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <LucideChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/organizations"
              className="relative overflow-hidden p-5 bg-civic text-civic-foreground border border-civic/30 rounded-xl hover:bg-civic/90 transition-all flex-1 group shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="relative">
                <h3 className="text-lg font-semibold mb-2 leading-tight">
                  List of partners (Who's where,doing what & for how long?)
                </h3>
                <p className="text-sm font-light text-civic-foreground/90">
                  Non-State Actors work in partnership with the government to implement the national development agenda and support humanitarian responses, with the government playing a central coordinating role in this collaboration...
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <LucideChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/projects"
              className="relative overflow-hidden p-5 bg-authority text-authority-foreground border border-authority/30 rounded-xl hover:bg-authority/90 transition-all flex-1 group shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="relative">
                <h3 className="text-lg font-semibold mb-2 leading-tight">
                  Financial & Output contribution by the Non-state Actors
                </h3>
                <p className="text-sm font-light text-authority-foreground/90 ">
                  Projects implemented by Non-State Actors contribute directly to the achievement of the National Development Plan...
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <LucideChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Organic wave divider into the next section */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 z-10 w-full text-surface-muted"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,80 480,0 720,30 C960,60 1200,20 1440,50 L1440,80 L0,80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
