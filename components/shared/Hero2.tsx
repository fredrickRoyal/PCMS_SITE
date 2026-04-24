import Image from "next/image";
import Flag from "../Flag";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  eyebrow?: string;
}

export default function Hero2({
  title,
  subtitle,
  imageSrc = "/home.jpeg",
  imageAlt,
  eyebrow,
}: Readonly<HeroProps>) {
  return (
    <section className="relative min-h-[55vh] md:min-h-[65vh] flex justify-center px-4 py-16 md:py-28 md:px-24 overflow-hidden bg-background">
      {/* Photo */}
      <Image
        src={imageSrc}
        alt={imageAlt ?? title}
        fill
        className="object-cover"
        priority
      />

      {/* Governmental gradient wash */}
      <div className="absolute inset-0 bg-mesh-authority mix-blend-multiply z-[1]" />

      {/* Readability veil */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/20 via-black/55 to-black/70" />

      <div className="relative z-10 px-4 py-8 h-full flex flex-col items-center justify-center text-center">
        {eyebrow && (
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4">
            <span className="inline-block w-8 h-px bg-gold" />
            <span>{eyebrow}</span>
          </p>
        )}
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-normal text-white leading-[1.1] tracking-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/85 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute bottom-4 right-4 md:right-24 z-10 opacity-60">
        <Flag />
      </div>

      {/* Organic wave divider */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 z-10 w-full text-background"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C240,60 480,0 720,25 C960,50 1200,10 1440,40 L1440,60 L0,60 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
