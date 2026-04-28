import { LucideIcon } from "lucide-react";

type Variant = "authority" | "gold" | "civic";

interface InfographicHeroProps {
  eyebrow?: string;
  title: string;
  /** Optional italicized accent rendered after the main title */
  titleAccent?: string;
  description?: string;
  Icon: LucideIcon;
  variant?: Variant;
}

/**
 * Sub-page hero with a vector infographic centerpiece — a governmental "seal"
 * medallion featuring a topic-specific icon. Replaces photo-based heroes on
 * every page except the landing page.
 */
export default function InfographicHero({
  eyebrow,
  title,
  titleAccent,
  description,
  Icon,
  variant = "authority",
}: Readonly<InfographicHeroProps>) {
  const sealClasses: Record<Variant, { ring: string; bg: string; iconText: string; accent: string }> = {
    authority: {
      ring: "text-authority/30",
      bg: "from-authority to-[hsl(var(--authority)/0.75)]",
      iconText: "text-authority-foreground",
      accent: "text-authority",
    },
    gold: {
      ring: "text-gold/40",
      bg: "from-gold to-[hsl(var(--gold)/0.8)]",
      iconText: "text-gold-foreground",
      accent: "text-gold",
    },
    civic: {
      ring: "text-civic/30",
      bg: "from-civic to-[hsl(var(--civic)/0.8)]",
      iconText: "text-civic-foreground",
      accent: "text-civic",
    },
  };

  const s = sealClasses[variant];
  const eyebrowColor = variant === "civic" ? "text-civic" : variant === "gold" ? "text-gold" : "text-civic";

  return (
    <section className="relative min-h-[55vh] md:min-h-[60vh] flex items-center px-4 md:px-24 py-16 md:py-24 overflow-hidden bg-surface-muted">
      {/* Dotted grid backdrop */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full text-foreground/30"
      >
        <defs>
          <pattern
            id="pcms-dotgrid"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#pcms-dotgrid)"
          opacity="0.18"
        />
      </svg>

      {/* Governmental gradient wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-mesh-authority opacity-40 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
        {/* Copy */}
        <div className="max-w-2xl">
          {eyebrow && (
            <p
              className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold mb-4 ${eyebrowColor}`}
            >
              <span className={`inline-block w-8 h-px bg-current`} />
              <span>{eyebrow}</span>
            </p>
          )}
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-normal text-foreground leading-[1.08] tracking-tight">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className={`italic ${s.accent}`}>{titleAccent}</span>
              </>
            )}
          </h1>
          {description && (
            <p className="mt-5 text-base md:text-lg text-foreground-muted leading-relaxed max-w-xl">
              {description}
            </p>
          )}
        </div>

        {/* Seal medallion */}
        <div className="relative hidden md:flex items-center justify-center w-56 h-56 lg:w-72 lg:h-72 flex-shrink-0">
          <svg
            aria-hidden="true"
            viewBox="0 0 200 200"
            className="w-full h-full"
          >
            <defs>
              <radialGradient
                id={`seal-gradient-${variant}`}
                cx="35%"
                cy="30%"
              >
                <stop offset="0%" stopColor={`hsl(var(--${variant}) / 0.95)`} />
                <stop offset="100%" stopColor={`hsl(var(--${variant}) / 0.65)`} />
              </radialGradient>
            </defs>

            {/* Outer ring */}
            <circle
              cx="100"
              cy="100"
              r="96"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className={s.ring}
            />
            {/* Tick-mark ring (stroke-dasharray simulates evenly spaced ticks) */}
            <circle
              cx="100"
              cy="100"
              r="88"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="1.5 9.5"
              className={s.ring}
            />
            {/* Inner thin ring */}
            <circle
              cx="100"
              cy="100"
              r="78"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              className={s.ring}
            />
            {/* Filled disc */}
            <circle
              cx="100"
              cy="100"
              r="70"
              fill={`url(#seal-gradient-${variant})`}
            />
            {/* Inner highlight stroke */}
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="white"
              strokeOpacity="0.15"
              strokeWidth="1"
            />
          </svg>

          {/* Icon centered over seal */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon
              className={`w-16 h-16 lg:w-20 lg:h-20 ${s.iconText}`}
              strokeWidth={1.5}
            />
          </div>

          {/* Subtle outer glow */}
          <div
            aria-hidden="true"
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${s.bg} opacity-20 blur-3xl -z-10`}
          />
        </div>
      </div>

      {/* Organic wave divider into next section */}
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
