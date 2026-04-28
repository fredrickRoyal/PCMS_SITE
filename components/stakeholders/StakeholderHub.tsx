import {
  Building2,
  HandCoins,
  Globe2,
  HandHeart,
  Briefcase,
  MapPin,
  GraduationCap,
  Landmark,
  Network,
} from "lucide-react";

type Node = {
  short: string;
  angle: number;
  Icon: typeof Building2;
};

const NODES: Node[] = [
  { short: "Ministries", angle: 0, Icon: Building2 },
  { short: "Dev. Partners", angle: 45, Icon: HandCoins },
  { short: "UN Agencies", angle: 90, Icon: Globe2 },
  { short: "NGOs & CSOs", angle: 135, Icon: HandHeart },
  { short: "Private Sector", angle: 180, Icon: Briefcase },
  { short: "Local Gov.", angle: 225, Icon: MapPin },
  { short: "Academia", angle: 270, Icon: GraduationCap },
  { short: "Faith-Based", angle: 315, Icon: Landmark },
];

const CX = 450;
const CY = 450;
const ORBIT = 295;
const HUB_R = 88;
const NODE_R = 68;
const ICON_SIZE = 46;

const DOTS = [
  { x: 80, y: 120, r: 3 },
  { x: 150, y: 230, r: 2 },
  { x: 830, y: 130, r: 3 },
  { x: 770, y: 290, r: 2 },
  { x: 820, y: 540, r: 3 },
  { x: 880, y: 750, r: 2 },
  { x: 140, y: 700, r: 3 },
  { x: 60, y: 520, r: 2 },
  { x: 300, y: 820, r: 2 },
  { x: 610, y: 840, r: 3 },
  { x: 220, y: 60, r: 2 },
  { x: 470, y: 55, r: 2 },
  { x: 55, y: 380, r: 2 },
  { x: 870, y: 400, r: 3 },
  { x: 720, y: 810, r: 2 },
  { x: 380, y: 800, r: 2 },
  { x: 260, y: 150, r: 2 },
  { x: 650, y: 175, r: 2 },
  { x: 100, y: 260, r: 2 },
  { x: 840, y: 230, r: 2 },
];

export default function StakeholderHub() {
  return (
    <svg
      viewBox="0 0 900 900"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="PCMS stakeholder network — eight partner categories radiating from the Office of the Prime Minister"
    >
      <defs>
        <radialGradient id="hub-halo">
          <stop offset="0%" className="[stop-color:hsl(var(--gi-gold-bright))]" stopOpacity="0.45" />
          <stop offset="60%" className="[stop-color:hsl(var(--gi-gold-bright))]" stopOpacity="0.15" />
          <stop offset="100%" className="[stop-color:hsl(var(--gi-gold-bright))]" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Scattered satellite dots */}
      {DOTS.map((d, i) => (
        <circle
          key={`dot-${i}`}
          cx={d.x}
          cy={d.y}
          r={d.r}
          className="fill-gi-slate"
          fillOpacity="0.45"
        />
      ))}

      {/* Spokes — hub edge → node edge, with a gold data pip midway */}
      {NODES.map((n, i) => {
        const rad = ((n.angle - 90) * Math.PI) / 180;
        const nodeX = CX + Math.cos(rad) * ORBIT;
        const nodeY = CY + Math.sin(rad) * ORBIT;
        const hubEdgeX = CX + Math.cos(rad) * HUB_R;
        const hubEdgeY = CY + Math.sin(rad) * HUB_R;
        const nodeEdgeX = nodeX - Math.cos(rad) * NODE_R;
        const nodeEdgeY = nodeY - Math.sin(rad) * NODE_R;
        const midX = (hubEdgeX + nodeEdgeX) / 2;
        const midY = (hubEdgeY + nodeEdgeY) / 2;

        return (
          <g key={`spoke-${i}`}>
            <line
              x1={hubEdgeX}
              y1={hubEdgeY}
              x2={nodeEdgeX}
              y2={nodeEdgeY}
              className="stroke-gi-slate-border"
              strokeWidth="1.5"
            />
            <circle cx={midX} cy={midY} r="3.5" className="fill-gi-gold-bright" />
          </g>
        );
      })}

      {/* Central hub */}
      <circle cx={CX} cy={CY} r={HUB_R + 24} fill="url(#hub-halo)" />
      <circle
        cx={CX}
        cy={CY}
        r={HUB_R}
        className="fill-gi-gold-bright"
      />
      <circle
        cx={CX}
        cy={CY}
        r={HUB_R - 6}
        className="fill-none stroke-gi-button-ink"
        strokeOpacity="0.18"
        strokeWidth="1.5"
      />
      <g transform={`translate(${CX - 34} ${CY - 34})`}>
        <Network size={68} strokeWidth={1.6} className="text-gi-button-ink" />
      </g>
      <text
        x={CX}
        y={CY + HUB_R + 34}
        textAnchor="middle"
        className="font-display fill-gi-ink text-[16px] font-normal"
      >
        OPM · PCMS
      </text>
      <text
        x={CX}
        y={CY + HUB_R + 54}
        textAnchor="middle"
        className="fill-gi-label text-[10px] uppercase tracking-[0.25em]"
      >
        Coordination Hub
      </text>

      {/* Peripheral bubble nodes */}
      {NODES.map((n, i) => {
        const rad = ((n.angle - 90) * Math.PI) / 180;
        const nodeX = CX + Math.cos(rad) * ORBIT;
        const nodeY = CY + Math.sin(rad) * ORBIT;
        const Icon = n.Icon;
        const labelAbove = n.angle < 90 || n.angle > 270;
        const labelY = labelAbove ? nodeY - NODE_R - 14 : nodeY + NODE_R + 26;

        return (
          <g key={`node-${i}`}>
            <circle
              cx={nodeX}
              cy={nodeY}
              r={NODE_R}
              className="fill-gi-ink"
            />
            <circle
              cx={nodeX}
              cy={nodeY}
              r={NODE_R - 5}
              className="fill-none stroke-gi-surface"
              strokeOpacity="0.22"
              strokeWidth="1.5"
            />
            <g transform={`translate(${nodeX - ICON_SIZE / 2} ${nodeY - ICON_SIZE / 2})`}>
              <Icon size={ICON_SIZE} strokeWidth={1.6} className="text-gi-surface" />
            </g>
            <text
              x={nodeX}
              y={labelY}
              textAnchor="middle"
              className="font-display fill-gi-ink text-[14px] font-normal"
            >
              {n.short}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
