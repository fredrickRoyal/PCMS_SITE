const STATIONS = [
  {
    y: 140,
    number: "01",
    title: "Partner Registration",
    subtitle: "Application & profile",
    actorLabel: "Partner Organisation",
    actor: "partner" as const,
  },
  {
    y: 360,
    number: "02",
    title: "Project Proposal",
    subtitle: "Committee review",
    actorLabel: "PCMS Platform",
    actor: "cloud" as const,
  },
  {
    y: 580,
    number: "03",
    title: "MoU Formalization",
    subtitle: "SG clearance · signing",
    actorLabel: "PCMS Platform",
    actor: "cloud" as const,
  },
  {
    y: 800,
    number: "04",
    title: "Performance Monitoring",
    subtitle: "Reporting · dashboards",
    actorLabel: "OPM · Ministries",
    actor: "government" as const,
  },
];

const PIPELINE_X = 430;
const PIPELINE_TOP = 70;
const PIPELINE_BOTTOM = 870;
const PIPELINE_WIDTH = 42;
const STATION_RADIUS = 54;
const ACTOR_X = 170;
const ACTOR_RADIUS = 44;
const TITLE_X = PIPELINE_X + STATION_RADIUS + 26;

function PartnerIcon() {
  return (
    <g>
      <rect x="-20" y="-10" width="36" height="20" rx="2" className="fill-none stroke-gi-ink" strokeWidth="1.6" />
      <rect x="-17" y="-7" width="30" height="14" className="fill-gi-gold-bright" fillOpacity="0.35" />
      <rect x="-26" y="10" width="48" height="3" rx="1.5" className="fill-gi-ink" />
      <rect x="10" y="-22" width="14" height="18" rx="1.5" className="fill-gi-surface stroke-gi-slate" strokeWidth="1" />
      <rect x="6" y="-20" width="14" height="18" rx="1.5" className="fill-gi-surface stroke-gi-gold" strokeWidth="1.2" />
      <line x1="9" y1="-14" x2="17" y2="-14" className="stroke-gi-slate" strokeWidth="0.8" />
      <line x1="9" y1="-10" x2="17" y2="-10" className="stroke-gi-slate" strokeWidth="0.8" />
      <line x1="9" y1="-6" x2="14" y2="-6" className="stroke-gi-slate" strokeWidth="0.8" />
    </g>
  );
}

function CloudMeshIcon() {
  return (
    <g>
      <path
        d="M -20 6 a 10 10 0 0 1 10 -10 a 14 10 0 0 1 28 2 a 9 9 0 0 1 -2 18 L -16 16 a 9 9 0 0 1 -4 -10 Z"
        className="fill-gi-surface stroke-gi-ink"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <line x1="-10" y1="4" x2="10" y2="4" className="stroke-gi-gold" strokeWidth="1" />
      <line x1="-6" y1="-2" x2="6" y2="10" className="stroke-gi-gold" strokeWidth="1" />
      <line x1="-6" y1="10" x2="6" y2="-2" className="stroke-gi-gold" strokeWidth="1" />
      <circle cx="-10" cy="4" r="1.6" className="fill-gi-gold-bright" />
      <circle cx="10" cy="4" r="1.6" className="fill-gi-gold-bright" />
      <circle cx="-6" cy="-2" r="1.6" className="fill-gi-gold-bright" />
      <circle cx="6" cy="-2" r="1.6" className="fill-gi-gold-bright" />
      <circle cx="-6" cy="10" r="1.6" className="fill-gi-gold-bright" />
      <circle cx="6" cy="10" r="1.6" className="fill-gi-gold-bright" />
    </g>
  );
}

function GovernmentIcon() {
  return (
    <g>
      <path
        d="M -22 -10 L -4 -24 L 14 -10 Z"
        className="fill-gi-gold-bright stroke-gi-ink"
        fillOpacity="0.55"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <rect x="-20" y="-10" width="32" height="22" className="fill-none stroke-gi-ink" strokeWidth="1.6" />
      <line x1="-14" y1="-10" x2="-14" y2="12" className="stroke-gi-ink" strokeWidth="1" />
      <line x1="-7" y1="-10" x2="-7" y2="12" className="stroke-gi-ink" strokeWidth="1" />
      <line x1="0" y1="-10" x2="0" y2="12" className="stroke-gi-ink" strokeWidth="1" />
      <line x1="7" y1="-10" x2="7" y2="12" className="stroke-gi-ink" strokeWidth="1" />
      <line x1="-22" y1="12" x2="14" y2="12" className="stroke-gi-ink" strokeWidth="1.6" />
      <path
        d="M 16 -2 L 28 -2 L 28 6 a 6 6 0 0 1 -6 6 a 6 6 0 0 1 -6 -6 Z"
        className="fill-gi-gold-bright stroke-gi-ink"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M 19 3 L 22 6 L 26 1" className="fill-none stroke-gi-ink" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function MoUPacket({ y }: { y: number }) {
  return (
    <g transform={`translate(${PIPELINE_X} ${y})`}>
      <rect x="-20" y="-16" width="40" height="32" rx="3" className="fill-gi-surface stroke-gi-gold-bright" strokeWidth="1.6" />
      <line x1="-13" y1="-8" x2="13" y2="-8" className="stroke-gi-gold" strokeWidth="1" />
      <line x1="-13" y1="-2" x2="13" y2="-2" className="stroke-gi-gold" strokeWidth="1" />
      <line x1="-13" y1="4" x2="6" y2="4" className="stroke-gi-gold" strokeWidth="1" />
      <circle cx="11" cy="9" r="5" className="fill-gi-gold-bright" />
      <path d="M 8 9 L 10 11 L 14 7" className="fill-none stroke-gi-button-ink" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="38" y="4" className="fill-gi-gold text-[13px] font-semibold uppercase tracking-[0.22em]">MoU</text>
    </g>
  );
}

function DataPacket({ y }: { y: number }) {
  return (
    <g transform={`translate(${PIPELINE_X} ${y})`}>
      <circle r="18" className="fill-gi-surface stroke-gi-gold-bright" strokeWidth="1.6" />
      <ellipse cx="0" cy="-7" rx="11" ry="3" className="fill-none stroke-gi-gold" strokeWidth="1.2" />
      <path d="M -11 -7 L -11 5 a 11 3 0 0 0 22 0 L 11 -7" className="fill-none stroke-gi-gold" strokeWidth="1.2" />
      <line x1="-11" y1="-1" x2="11" y2="-1" className="stroke-gi-gold" strokeWidth="1" />
      <text x="34" y="4" className="fill-gi-gold text-[13px] font-semibold uppercase tracking-[0.22em]">Data</text>
    </g>
  );
}

function ReportPacket({ y }: { y: number }) {
  return (
    <g transform={`translate(${PIPELINE_X} ${y})`}>
      <rect x="-18" y="-18" width="36" height="36" rx="3" className="fill-gi-surface stroke-gi-gold-bright" strokeWidth="1.6" />
      <line x1="-12" y1="-10" x2="12" y2="-10" className="stroke-gi-gold" strokeWidth="1" />
      <rect x="-11" y="-2" width="6" height="11" className="fill-gi-gold" fillOpacity="0.55" />
      <rect x="-3" y="-6" width="6" height="15" className="fill-gi-gold" fillOpacity="0.75" />
      <rect x="5" y="-11" width="6" height="20" className="fill-gi-gold-bright" />
      <text x="34" y="4" className="fill-gi-gold text-[13px] font-semibold uppercase tracking-[0.22em]">Report</text>
    </g>
  );
}

export default function PipelineInfographic() {
  const packetYs = [
    (STATIONS[0].y + STATIONS[1].y) / 2,
    (STATIONS[1].y + STATIONS[2].y) / 2,
    (STATIONS[2].y + STATIONS[3].y) / 2,
  ];

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 900 940"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Partnership lifecycle pipeline — four stations from Partner Registration to Performance Monitoring"
      >
        <defs>
          <linearGradient id="pipe-stream-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" className="[stop-color:hsl(var(--gi-gold-bright))]" stopOpacity="0.12" />
            <stop offset="18%" className="[stop-color:hsl(var(--gi-gold-bright))]" stopOpacity="0.4" />
            <stop offset="82%" className="[stop-color:hsl(var(--gi-gold-bright))]" stopOpacity="0.4" />
            <stop offset="100%" className="[stop-color:hsl(var(--gi-gold-bright))]" stopOpacity="0.12" />
          </linearGradient>

          <linearGradient id="pipe-highlight-v" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0.35" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="station-halo-v">
            <stop offset="0%" className="[stop-color:hsl(var(--gi-gold-bright))]" stopOpacity="0.45" />
            <stop offset="60%" className="[stop-color:hsl(var(--gi-gold-bright))]" stopOpacity="0.12" />
            <stop offset="100%" className="[stop-color:hsl(var(--gi-gold-bright))]" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Vertical document rails */}
        <line x1={ACTOR_X - ACTOR_RADIUS - 18} y1="40" x2={ACTOR_X - ACTOR_RADIUS - 18} y2="900" className="stroke-gi-slate-border" strokeDasharray="3 8" strokeOpacity="0.55" />
        <line x1="860" y1="40" x2="860" y2="900" className="stroke-gi-slate-border" strokeDasharray="3 8" strokeOpacity="0.55" />

        {/* Pipeline body (vertical) */}
        <rect
          x={PIPELINE_X - PIPELINE_WIDTH / 2}
          y={PIPELINE_TOP}
          width={PIPELINE_WIDTH}
          height={PIPELINE_BOTTOM - PIPELINE_TOP}
          rx={PIPELINE_WIDTH / 2}
          fill="url(#pipe-stream-v)"
          className="stroke-gi-gold-bright"
          strokeOpacity="0.55"
          strokeWidth="1.2"
        />
        <rect
          x={PIPELINE_X - PIPELINE_WIDTH / 2 + 3}
          y={PIPELINE_TOP + 4}
          width={PIPELINE_WIDTH / 2 - 4}
          height={PIPELINE_BOTTOM - PIPELINE_TOP - 8}
          rx={(PIPELINE_WIDTH / 2 - 4) / 2}
          fill="url(#pipe-highlight-v)"
          opacity="0.7"
        />

        {/* Pipeline endpoint caps */}
        <circle cx={PIPELINE_X} cy={PIPELINE_TOP} r="4" className="fill-gi-gold-bright" fillOpacity="0.7" />
        <circle cx={PIPELINE_X} cy={PIPELINE_BOTTOM} r="4" className="fill-gi-gold-bright" fillOpacity="0.7" />

        {/* Downward chevron flow indicators along pipeline */}
        {Array.from({ length: 14 }).map((_, i) => {
          const ty = PIPELINE_TOP + 28 + i * 58;
          if (ty > PIPELINE_BOTTOM - 20) return null;
          return (
            <path
              key={`tick-${i}`}
              d={`M ${PIPELINE_X - 7} ${ty} L ${PIPELINE_X} ${ty + 6} L ${PIPELINE_X + 7} ${ty}`}
              className="stroke-gi-gold-bright"
              strokeWidth="1.2"
              strokeOpacity="0.35"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          );
        })}

        {/* Packets flowing in pipeline */}
        <MoUPacket y={packetYs[0]} />
        <DataPacket y={packetYs[1]} />
        <ReportPacket y={packetYs[2]} />

        {/* Connector — actor → station (horizontal dashed) */}
        {STATIONS.map((s) => (
          <line
            key={`conn-${s.number}`}
            x1={ACTOR_X + ACTOR_RADIUS + 4}
            y1={s.y}
            x2={PIPELINE_X - STATION_RADIUS - 4}
            y2={s.y}
            className="stroke-gi-slate"
            strokeDasharray="2 4"
            strokeOpacity="0.55"
          />
        ))}

        {/* Actor bubbles (left column) */}
        {STATIONS.map((s) => (
          <g key={`actor-${s.number}`}>
            <g transform={`translate(${ACTOR_X} ${s.y})`}>
              <circle r={ACTOR_RADIUS} className="fill-gi-node-fill stroke-gi-slate-border" strokeWidth="1.5" />
              {s.actor === "partner" && <PartnerIcon />}
              {s.actor === "cloud" && <CloudMeshIcon />}
              {s.actor === "government" && <GovernmentIcon />}
            </g>
            <text
              x={ACTOR_X}
              y={s.y + ACTOR_RADIUS + 24}
              textAnchor="middle"
              className="fill-gi-label text-[12px] uppercase tracking-[0.22em] font-medium"
            >
              {s.actorLabel}
            </text>
          </g>
        ))}

        {/* Stations + right-side titles */}
        {STATIONS.map((s) => (
          <g key={`station-${s.number}`}>
            <circle cx={PIPELINE_X} cy={s.y} r={STATION_RADIUS + 26} fill="url(#station-halo-v)" />
            <circle cx={PIPELINE_X} cy={s.y} r={STATION_RADIUS} className="fill-gi-surface stroke-gi-gold-bright" strokeWidth="2.5" />
            <circle cx={PIPELINE_X} cy={s.y} r={STATION_RADIUS - 10} className="fill-gi-gold-bright" fillOpacity="0.12" />
            <text
              x={PIPELINE_X}
              y={s.y + 12}
              textAnchor="middle"
              className="font-display fill-gi-gold-bright text-[34px] font-normal"
            >
              {s.number}
            </text>
            <g transform={`translate(${PIPELINE_X + STATION_RADIUS - 10} ${s.y - STATION_RADIUS + 10})`}>
              <circle r="12" className="fill-gi-gold-bright stroke-gi-button-ink" strokeWidth="1.5" />
              <path d="M -4 0 L -1 3 L 4 -3" className="fill-none stroke-gi-button-ink" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Title + subtitle anchored to the right */}
            <text
              x={TITLE_X}
              y={s.y - 4}
              className="font-display fill-gi-ink text-[22px] font-normal"
            >
              {s.title}
            </text>
            <text
              x={TITLE_X}
              y={s.y + 22}
              className="fill-gi-label text-[12px] uppercase tracking-[0.22em]"
            >
              {s.subtitle}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
