"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, MonitorSmartphone } from "lucide-react";

const ORDER: Array<"light" | "dark" | "system"> = ["light", "dark", "system"];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Theme"
        className="w-9 h-9 rounded-full border border-border bg-surface"
      />
    );
  }

  const current = (theme as "light" | "dark" | "system") ?? "system";
  const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];

  const icon =
    current === "light" ? <Sun className="w-4 h-4" /> :
    current === "dark" ? <Moon className="w-4 h-4" /> :
    <MonitorSmartphone className="w-4 h-4" />;

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch theme — currently ${current}. Click for ${next}.`}
      title={`Theme: ${current}`}
      className="w-9 h-9 rounded-full border border-border bg-surface hover:bg-surface-muted text-foreground flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {icon}
    </button>
  );
}
