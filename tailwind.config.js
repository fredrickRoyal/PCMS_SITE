/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['var(--font-urbanist)'],
        poppins: ['var(--font-poppins)'],
        manrope: ['var(--font-manrope)'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        institutional: ['var(--font-institutional)', 'Cormorant Garamond', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        /* Token-based surfaces (new) */
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        "surface-muted": "hsl(var(--surface-muted) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--border) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        "foreground-muted": "hsl(var(--foreground-muted) / <alpha-value>)",

        /* Institutional accents (new) */
        authority: {
          DEFAULT: "hsl(var(--authority) / <alpha-value>)",
          foreground: "hsl(var(--authority-foreground) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "hsl(var(--gold) / <alpha-value>)",
          foreground: "hsl(var(--gold-foreground) / <alpha-value>)",
        },
        civic: {
          DEFAULT: "hsl(var(--civic) / <alpha-value>)",
          foreground: "hsl(var(--civic-foreground) / <alpha-value>)",
        },

        /* PCMS institutional palette — for header/footer/banner chrome. */
        pcms: {
          green: "hsl(var(--pcms-green) / <alpha-value>)",
          "green-hover": "hsl(var(--pcms-green-hover) / <alpha-value>)",
          gold: "hsl(var(--pcms-gold) / <alpha-value>)",
          "gold-muted": "hsl(var(--pcms-gold-muted) / <alpha-value>)",
          red: "hsl(var(--pcms-red) / <alpha-value>)",
          ink: "hsl(var(--pcms-ink) / <alpha-value>)",
          cream: "hsl(var(--pcms-cream) / <alpha-value>)",
          "cream-muted": "hsl(var(--pcms-cream-muted) / <alpha-value>)",
        },

        /* Governmental infographic palette — theme-adaptive. */
        gi: {
          bg: "hsl(var(--gi-bg) / <alpha-value>)",
          surface: "hsl(var(--gi-surface) / <alpha-value>)",
          "node-fill": "hsl(var(--gi-node-fill) / <alpha-value>)",
          ink: "hsl(var(--gi-ink) / <alpha-value>)",
          slate: "hsl(var(--gi-slate) / <alpha-value>)",
          "slate-border": "hsl(var(--gi-slate-border) / <alpha-value>)",
          text: "hsl(var(--gi-text) / <alpha-value>)",
          label: "hsl(var(--gi-label) / <alpha-value>)",
          gold: "hsl(var(--gi-gold) / <alpha-value>)",
          "gold-bright": "hsl(var(--gi-gold-bright) / <alpha-value>)",
          "gold-halo": "hsl(var(--gi-gold-halo) / <alpha-value>)",
          "button-ink": "hsl(var(--gi-button-ink) / <alpha-value>)",
        },

        /* Legacy aliases — unchanged values so existing components keep working */
        primary: {
          DEFAULT: "#FCDC04",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#111827",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#D90000",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#6B7280",
        },
        accent: {
          DEFAULT: "#F3F4F6",
          foreground: "#111827",
        },
        popover: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          foreground: "hsl(var(--foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          foreground: "hsl(var(--foreground) / <alpha-value>)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
