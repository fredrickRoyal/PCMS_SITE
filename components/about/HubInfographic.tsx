import {
  Stethoscope,
  GraduationCap,
  Users2,
  Sprout,
  Droplets,
  Hammer,
  HandHeart,
  HandCoins,
  Globe2,
  Landmark,
  Coins,
  Shield,
  ShieldAlert,
  Scale,
  Handshake,
  Zap,
  Mountain,
  Home as HomeIcon,
  Cpu,
  Building2,
  Briefcase,
  TrendingUp,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

const CENTER_X = 750;
const CENTER_Y = 600;
const RADIUS = 440;
const NODE_RADIUS = 34;
const HUB_RADIUS = 100;

interface NodeSpec {
  label: string;
  type: "ministry" | "partner";
  icon: LucideIcon;
  critical?: boolean;
}

/**
 * 22 nodes total: 18 Uganda ministries + 4 external partner categories.
 * Partners are placed at positions 3 / 8 / 14 / 19 so they land roughly on
 * each diagonal quadrant, giving them visual prominence.
 */
const nodes: NodeSpec[] = [
  { label: "Health", icon: Stethoscope, type: "ministry" },
  { label: "Education", icon: GraduationCap, type: "ministry" },
  { label: "Finance", icon: Coins, type: "ministry" },
  { label: "Development Partners", icon: HandCoins, type: "partner", critical: true },
  { label: "Agriculture", icon: Sprout, type: "ministry" },
  { label: "Works & Transport", icon: Hammer, type: "ministry" },
  { label: "Foreign Affairs", icon: Handshake, type: "ministry" },
  { label: "Justice", icon: Scale, type: "ministry" },
  { label: "NGOs & CSOs", icon: HandHeart, type: "partner", critical: true },
  { label: "Internal Affairs", icon: Shield, type: "ministry" },
  { label: "Defence", icon: ShieldAlert, type: "ministry" },
  { label: "Energy", icon: Zap, type: "ministry" },
  { label: "Gender & Labour", icon: Users2, type: "ministry" },
  { label: "Water & Env.", icon: Droplets, type: "ministry" },
  { label: "Private Sector", icon: TrendingUp, type: "partner", critical: true },
  { label: "Tourism", icon: Mountain, type: "ministry" },
  { label: "Lands & Housing", icon: HomeIcon, type: "ministry" },
  { label: "Trade", icon: ShoppingBag, type: "ministry" },
  { label: "ICT", icon: Cpu, type: "ministry" },
  { label: "UN Agencies", icon: Globe2, type: "partner", critical: true },
  { label: "Local Gov.", icon: Building2, type: "ministry" },
  { label: "Public Service", icon: Briefcase, type: "ministry" },
];

const angleStep = 360 / nodes.length;

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER_X + radius * Math.cos(rad),
    y: CENTER_Y + radius * Math.sin(rad),
  };
}

/**
 * Self-contained hub-and-spoke diagram for the About-page hero.
 * All colors reference the theme-adaptive `gi-*` token palette so the piece
 * swaps between light (parchment + navy ink) and dark (navy + vivid gold).
 */
export default function HubInfographic() {
  return (
    <svg
      viewBox="0 0 1500 1200"
      className="w-full h-auto"
      role="img"
      aria-labelledby="hub-title hub-desc"
    >
      <title id="hub-title">
        Hub-and-spoke diagram of Uganda&apos;s partnership coordination
      </title>
      <desc id="hub-desc">
        OPM PCMS at the centre, connected to eighteen Ministries and four
        external partner categories. Document and checkmark symbols on each
        spoke indicate MoUs and verified data flowing inward to the hub.
      </desc>

      {/* Orbital guide rings (subtle) */}
      <circle
        cx={CENTER_X}
        cy={CENTER_Y}
        r={RADIUS + 60}
        fill="none"
        className="stroke-gi-slate-border"
        strokeOpacity="0.6"
        strokeDasharray="1 7"
      />
      <circle
        cx={CENTER_X}
        cy={CENTER_Y}
        r={RADIUS - 140}
        fill="none"
        className="stroke-gi-slate-border"
        strokeOpacity="0.45"
        strokeDasharray="1 7"
      />
      <circle
        cx={CENTER_X}
        cy={CENTER_Y}
        r={HUB_RADIUS + 50}
        fill="none"
        className="stroke-gi-slate-border"
        strokeOpacity="0.35"
        strokeDasharray="1 7"
      />

      {/* Spokes with data artefacts */}
      {nodes.map((node, i) => {
        const angle = -90 + i * angleStep;
        const start = polar(angle, HUB_RADIUS + 4);
        const end = polar(angle, RADIUS - NODE_RADIUS - 2);

        const mou = polar(angle, RADIUS - 120);
        const check = polar(angle, HUB_RADIUS + 70);

        const tipRadius = HUB_RADIUS + 14;
        const tailRadius = HUB_RADIUS + 26;
        const tip = polar(angle, tipRadius);
        const tail = polar(angle, tailRadius);
        const perpA = ((angle + 150) * Math.PI) / 180;
        const perpB = ((angle - 150) * Math.PI) / 180;
        const wingLen = 6;
        const wingA = {
          x: tip.x + wingLen * Math.cos(perpA),
          y: tip.y + wingLen * Math.sin(perpA),
        };
        const wingB = {
          x: tip.x + wingLen * Math.cos(perpB),
          y: tip.y + wingLen * Math.sin(perpB),
        };

        const spokeClass = node.critical
          ? "stroke-gi-gold"
          : "stroke-gi-slate";

        return (
          <g key={node.label}>
            <line
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              className={spokeClass}
              strokeWidth={node.critical ? 1.75 : 1.1}
              strokeOpacity={node.critical ? 0.85 : 0.55}
            />

            {/* MoU document artefact (farther out) */}
            <g transform={`translate(${mou.x - 8}, ${mou.y - 10})`}>
              <rect
                width="16"
                height="20"
                rx="2"
                className={`fill-gi-surface ${
                  node.critical ? "stroke-gi-gold" : "stroke-gi-slate"
                }`}
                strokeWidth="1"
              />
              <line
                x1="4"
                y1="6"
                x2="12"
                y2="6"
                className={node.critical ? "stroke-gi-gold" : "stroke-gi-slate"}
                strokeWidth="0.8"
                strokeLinecap="round"
              />
              <line
                x1="4"
                y1="10"
                x2="12"
                y2="10"
                className={node.critical ? "stroke-gi-gold" : "stroke-gi-slate"}
                strokeWidth="0.8"
                strokeLinecap="round"
              />
              <line
                x1="4"
                y1="14"
                x2="9"
                y2="14"
                className={node.critical ? "stroke-gi-gold" : "stroke-gi-slate"}
                strokeWidth="0.8"
                strokeLinecap="round"
              />
            </g>

            {/* Data checkmark artefact (closer to hub) */}
            <g transform={`translate(${check.x}, ${check.y})`}>
              <circle
                r="10"
                className={`fill-gi-surface ${
                  node.critical ? "stroke-gi-gold" : "stroke-gi-slate"
                }`}
                strokeWidth="1"
              />
              <path
                d="M -4,0 L -1,3 L 4,-3"
                className={node.critical ? "stroke-gi-gold" : "stroke-gi-text"}
                strokeWidth="1.75"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* Inward-pointing arrow near hub */}
            <g>
              <line
                x1={tail.x}
                y1={tail.y}
                x2={tip.x}
                y2={tip.y}
                className={node.critical ? "stroke-gi-gold" : "stroke-gi-text"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeOpacity={node.critical ? 1 : 0.7}
              />
              <path
                d={`M ${tip.x},${tip.y} L ${wingA.x},${wingA.y} M ${tip.x},${tip.y} L ${wingB.x},${wingB.y}`}
                className={node.critical ? "stroke-gi-gold" : "stroke-gi-text"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeOpacity={node.critical ? 1 : 0.7}
              />
            </g>
          </g>
        );
      })}

      {/* Outer nodes */}
      {nodes.map((node, i) => {
        const angle = -90 + i * angleStep;
        const { x, y } = polar(angle, RADIUS);
        const Icon = node.icon;
        const sinA = Math.sin((angle * Math.PI) / 180);
        const labelY =
          sinA > 0.15
            ? y + NODE_RADIUS + 26
            : sinA < -0.15
            ? y - NODE_RADIUS - 14
            : y + 4; // center-align for nodes near left/right horizontal axis
        const labelDy = sinA > 0.15 ? 0 : sinA < -0.15 ? 0 : 0;

        // For labels near the horizontal axis, offset them outward
        const isLeftSide = Math.cos((angle * Math.PI) / 180) < -0.85;
        const isRightSide = Math.cos((angle * Math.PI) / 180) > 0.85;
        const labelX = isRightSide
          ? x + NODE_RADIUS + 8
          : isLeftSide
          ? x - NODE_RADIUS - 8
          : x;
        const textAnchor = isRightSide ? "start" : isLeftSide ? "end" : "middle";

        return (
          <g key={`node-${node.label}`}>
            {/* Soft halo for critical partner nodes */}
            {node.critical && (
              <circle
                cx={x}
                cy={y}
                r={NODE_RADIUS + 10}
                className="fill-gi-gold"
                fillOpacity="0.18"
              />
            )}
            <circle
              cx={x}
              cy={y}
              r={NODE_RADIUS}
              className={`fill-gi-node-fill ${
                node.critical ? "stroke-gi-gold" : "stroke-gi-slate-border"
              }`}
              strokeWidth={node.critical ? 2 : 1.25}
            />
            {/* Inner ring for depth */}
            <circle
              cx={x}
              cy={y}
              r={NODE_RADIUS - 6}
              fill="none"
              className={node.critical ? "stroke-gi-gold" : "stroke-gi-slate"}
              strokeOpacity={0.25}
              strokeWidth="0.75"
            />
            <Icon
              x={x - 16}
              y={y - 16}
              width={32}
              height={32}
              className={node.critical ? "text-gi-gold" : "text-gi-text"}
              strokeWidth={1.6}
            />
            <text
              x={labelX}
              y={labelY}
              dy={labelDy}
              textAnchor={textAnchor}
              className="fill-gi-label"
              fontSize="15"
              fontWeight="500"
            >
              {node.label}
            </text>
            {node.type === "partner" && (
              <text
                x={labelX}
                y={labelY + 16}
                textAnchor={textAnchor}
                className={node.critical ? "fill-gi-gold" : "fill-gi-slate"}
                fontSize="10"
                fontWeight="700"
                letterSpacing="1.75"
              >
                EXTERNAL
              </text>
            )}
          </g>
        );
      })}

      {/* Central hub */}
      <g>
        {/* outer glow halo (always the bright Uganda gold) */}
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={HUB_RADIUS + 26}
          className="fill-gi-gold-bright"
          fillOpacity="0.08"
        />
        {/* tick ring */}
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={HUB_RADIUS + 14}
          fill="none"
          className="stroke-gi-gold"
          strokeWidth="1"
          strokeDasharray="1 7"
          strokeOpacity="0.7"
        />
        {/* main hub face */}
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={HUB_RADIUS}
          className="fill-gi-ink stroke-gi-gold-bright"
          strokeWidth="2.5"
        />
        {/* inner accent ring */}
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={HUB_RADIUS - 16}
          fill="none"
          className="stroke-gi-gold-bright"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <Landmark
          x={CENTER_X - 30}
          y={CENTER_Y - 36}
          width={60}
          height={60}
          className="text-gi-gold-bright"
          strokeWidth={1.5}
        />
        <text
          x={CENTER_X}
          y={CENTER_Y + 36}
          textAnchor="middle"
          className="fill-gi-gold-bright"
          fontSize="18"
          fontWeight="700"
          letterSpacing="3"
        >
          OPM · PCMS
        </text>
        <text
          x={CENTER_X}
          y={CENTER_Y + 58}
          textAnchor="middle"
          className="fill-gi-label"
          fontSize="11"
          fontWeight="500"
          letterSpacing="1.8"
        >
          COORDINATION HUB
        </text>
      </g>
    </svg>
  );
}
