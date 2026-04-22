'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  Menu,
  X,
  Search,
  Sun,
  Moon,
  MonitorSmartphone,
  ChevronDown,
} from 'lucide-react';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------
// Navigation data
// ----------------------------------------------------------------------
type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Policy & Regulations', href: '/policy' },
  { label: 'Stakeholders', href: '/stakeholders' },
  {
    label: 'Publications',
    href: '/publications/reports',
    children: [
      { label: 'Videos', href: '/publications/reports' },
      {
        label: 'Research Submissions',
        href: '/publications/research-submissions',
      },
      {
        label: 'Research Study Reports',
        href: '/publications/research-study-reports',
      },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];

// ----------------------------------------------------------------------
// Barkcloth backdrop — subtle diamond-lattice pattern inspired by
// Buganda barkcloth weaves. Reads as letterhead texture, not decoration.
// Theme-adaptive: opacity drops in dark mode so pattern stays ambient.
// ----------------------------------------------------------------------
function BarkclothBackdrop() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none text-pcms-gold-muted opacity-[0.055] dark:opacity-[0.03]"
    >
      <defs>
        <pattern
          id="pcms-barkcloth"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 16 4 L 28 16 L 16 28 L 4 16 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
          />
          <circle cx="16" cy="16" r="1.1" fill="currentColor" />
          <circle cx="0" cy="16" r="0.7" fill="currentColor" opacity="0.6" />
          <circle cx="32" cy="16" r="0.7" fill="currentColor" opacity="0.6" />
          <circle cx="16" cy="0" r="0.7" fill="currentColor" opacity="0.6" />
          <circle cx="16" cy="32" r="0.7" fill="currentColor" opacity="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pcms-barkcloth)" />
    </svg>
  );
}

// ----------------------------------------------------------------------
// Theme toggle — inlined so the header ships as a self-contained unit.
// Cycles light → dark → system with proper a11y labelling.
// ----------------------------------------------------------------------
const THEME_ORDER: Array<'light' | 'dark' | 'system'> = [
  'light',
  'dark',
  'system',
];

function ThemeToggle({ compact = false }: { compact?: boolean } = {}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const compactCls =
    'p-1.5 rounded-md text-pcms-ink/75 hover:text-pcms-ink hover:bg-pcms-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-pcms-gold focus-visible:ring-offset-2 focus-visible:ring-offset-pcms-cream-muted transition-colors';
  const fullCls =
    'w-9 h-9 rounded-md border border-pcms-gold-muted/40 bg-pcms-cream text-pcms-ink hover:bg-pcms-cream-muted flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pcms-gold focus-visible:ring-offset-2 focus-visible:ring-offset-pcms-cream';

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Theme"
        className={
          compact
            ? 'p-1.5 w-[26px] h-[26px] rounded-md'
            : 'w-9 h-9 rounded-md border border-pcms-gold-muted/40 bg-pcms-cream'
        }
      />
    );
  }

  const current = (theme as 'light' | 'dark' | 'system') ?? 'system';
  const next =
    THEME_ORDER[(THEME_ORDER.indexOf(current) + 1) % THEME_ORDER.length];
  const Icon =
    current === 'light' ? Sun : current === 'dark' ? Moon : MonitorSmartphone;

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch theme — currently ${current}. Click for ${next}.`}
      title={`Theme: ${current}`}
      className={compact ? compactCls : fullCls}
    >
      <Icon className={compact ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
    </button>
  );
}

// ----------------------------------------------------------------------
// Language switcher — EN / LG (Luganda).
// Visual stub today; wire to i18n when infrastructure lands.
// ----------------------------------------------------------------------
function LangSwitcher() {
  const [lang, setLang] = useState<'en' | 'lg'>('en');
  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center text-[11px] font-medium font-inter"
    >
      {(['en', 'lg'] as const).map((code, idx) => (
        <span key={code} className="flex items-center">
          {idx > 0 && (
            <span aria-hidden className="mx-1.5 text-pcms-gold-muted/60">
              ·
            </span>
          )}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-current={lang === code ? 'true' : undefined}
            aria-label={code === 'en' ? 'English' : 'Luganda'}
            className={`uppercase tracking-[0.2em] px-1 py-0.5 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-pcms-gold transition-colors ${
              lang === code
                ? 'text-pcms-ink'
                : 'text-pcms-ink/55 hover:text-pcms-ink'
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}

// Ornamental diamond motif used before the "THEME" label on the banner.
function DiamondMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M 6 0 L 12 6 L 6 12 L 0 6 Z" />
    </svg>
  );
}

// ======================================================================
// Header
// ======================================================================
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <>
      {/* Skip link — visually hidden until focused (WCAG 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] px-3 py-2 rounded-md bg-pcms-green text-white text-sm font-medium shadow-md focus-visible:ring-2 focus-visible:ring-pcms-gold focus-visible:ring-offset-2 focus-visible:ring-offset-pcms-cream"
      >
        Skip to main content
      </a>

      {/* ==================================================================
           Utility bar — thin institutional chrome.
           Echoes government letterhead tagstrips at the edge of the page.
         ================================================================== */}
      <div className="bg-pcms-cream-muted border-b border-pcms-gold-muted/25 text-pcms-ink">
        <div className="max-w-7xl mx-auto px-4 h-8 flex items-center justify-between text-[11px]">
          <span className="uppercase tracking-[0.2em] text-pcms-ink/70 font-medium flex items-center gap-2">
            <Image
              src="/uganda flag.png"
              alt=""
              width={18}
              height={12}
              aria-hidden
              className="w-[18px] h-[12px] object-cover rounded-[1px] shadow-[0_0_0_1px_hsl(var(--pcms-gold-muted)/0.25)] flex-shrink-0"
            />
            <span className="hidden xs:inline">
              Official Portal · Government of Uganda
            </span>
            <span className="xs:hidden">
              An official website of the Government of Uganda
            </span>
          </span>
          <div className="flex items-center gap-3">
            <LangSwitcher />
            <span aria-hidden className="w-px h-3 bg-pcms-gold-muted/40" />
            <ThemeToggle compact />
            <button
              type="button"
              aria-label="Open search"
              className="p-1.5 rounded-md text-pcms-ink/75 hover:text-pcms-ink hover:bg-pcms-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-pcms-gold focus-visible:ring-offset-2 focus-visible:ring-offset-pcms-cream-muted transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================
           Sticky zone — main header + theme banner stay pinned on scroll;
           the utility bar above scrolls away with the page. `<header>` sits
           directly under the body so its sticky bounds span the whole page.
         ================================================================== */}
      <header className="sticky top-0 z-50 font-inter">
        {/* Main header — crest, wordmark, nav, actions.
          Barkcloth backdrop adds warmth without decoration. */}
        <div className="relative bg-pcms-cream">
          <BarkclothBackdrop />

          <div className="relative max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center gap-4 md:gap-6 xl:gap-10">
            {/* Crest + wordmark lockup */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-center gap-3 md:gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-pcms-gold rounded-sm"
            >
              {/* Crest — inner-border treatment so it feels "placed" on letterhead */}
              <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-md overflow-hidden bg-white/50 p-0.5">
                <Image
                  src="/logo.png"
                  alt="Coat of Arms — Republic of Uganda"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
                  priority
                />
              </div>

              {/* Double hairline rule — echoes official letterhead traditions
                (two 1px muted-gold rules with a 3px channel between) */}
              <div
                aria-hidden
                className="hidden sm:flex items-stretch gap-[3px] self-stretch py-1"
              >
                <span className="w-px bg-pcms-gold-muted/55" />
                <span className="w-px bg-pcms-gold-muted/55" />
              </div>

              {/* Wordmark — institutional serif, stacked with a gold hairline
                between lines. Modern-legacy: Cormorant Garamond uppercase
                with generous tracking reads ceremonial; the gold hairline
                is a nod to stamped government letterhead. */}
              <div className="font-institutional text-pcms-ink leading-[1.05]">
                <div className="hidden sm:block">
                  <div className="text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.22em]">
                    Partnership Coordination
                  </div>
                  <div
                    aria-hidden
                    className="h-px my-[5px] bg-pcms-gold-muted/45"
                  />
                  <div className="text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.22em]">
                    &amp; Monitoring System
                  </div>
                </div>
                {/* Simplified mobile wordmark */}
                <div className="sm:hidden text-[16px] font-semibold uppercase tracking-[0.2em]">
                  PCMS
                </div>
              </div>
            </Link>

            {/* Primary nav — spreads across the full gap between wordmark and
              actions via flex-1 + justify-between; whitespace-nowrap on each
              item prevents label wrapping, flex-shrink-0 on flanks prevents
              overlap. Inline at xl+ where 6 items have room; hamburger below. */}
            <nav
              aria-label="Primary"
              className="hidden xl:flex flex-1 items-center justify-between gap-1 min-w-0"
            >
              {NAV.map((item) => {
                const active = isActive(item.href);
                const hasChildren = !!item.children?.length;
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() =>
                      hasChildren && setOpenDropdown(item.label)
                    }
                    onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      aria-haspopup={hasChildren ? 'menu' : undefined}
                      className={`relative group inline-flex items-center gap-1 whitespace-nowrap px-2.5 py-3 text-[13px] font-medium tracking-[0.02em] transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-pcms-gold focus-visible:ring-offset-2 focus-visible:ring-offset-pcms-cream ${
                        active
                          ? 'text-pcms-ink'
                          : 'text-pcms-ink/80 hover:text-pcms-green'
                      }`}
                    >
                      {item.label}
                      {hasChildren && (
                        <ChevronDown
                          className="w-3.5 h-3.5 opacity-70"
                          aria-hidden
                        />
                      )}
                      {/* Accent bar — grows from center (ceremonial gold, 3px) */}
                      <span
                        aria-hidden
                        className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] bg-pcms-gold rounded-full transition-[width] duration-300 ease-out ${
                          active ? 'w-[70%]' : 'w-0 group-hover:w-[70%]'
                        }`}
                      />
                    </Link>

                    {hasChildren && openDropdown === item.label && (
                      <div
                        role="menu"
                        className="absolute top-full left-0 pt-2 z-50"
                      >
                        <div className="w-64 bg-pcms-cream border border-pcms-gold-muted/30 rounded-md shadow-lg py-2">
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              className={`block px-4 py-2 text-[13px] transition-colors ${
                                isActive(child.href)
                                  ? 'text-pcms-green bg-pcms-cream-muted font-medium'
                                  : 'text-pcms-ink/85 hover:text-pcms-green hover:bg-pcms-cream-muted'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Actions — ghost Login, solid-green Sign up.
              Theme toggle now lives in the utility bar next to the language
              switcher so it doesn't crowd the primary nav. */}
            <div className="flex-shrink-0 flex items-center gap-2 md:gap-3">
              <Link
                href="https://app.partnerships.opm.go.ug/Login"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-md border-2 border-pcms-green text-pcms-green text-[13px] font-semibold hover:bg-pcms-green/10 hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-pcms-gold focus-visible:ring-offset-2 focus-visible:ring-offset-pcms-cream"
              >
                Login
              </Link>

              <Link
                href="https://app.partnerships.opm.go.ug/RegisterPartner"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-pcms-green text-white text-[13px] font-semibold hover:bg-pcms-green-hover hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-pcms-gold focus-visible:ring-offset-2 focus-visible:ring-offset-pcms-cream"
              >
                Sign up
              </Link>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="primary-drawer"
                className="xl:hidden p-2 rounded-md text-pcms-ink hover:bg-pcms-cream-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-pcms-gold focus-visible:ring-offset-2 focus-visible:ring-offset-pcms-cream transition-colors"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* ==================================================================
           Theme banner — institutional green with ceremonial-gold label.
           Diamond motif + "THEME" chip flags the current strategic frame;
           body copy carries the whole-of-society message in white Inter.
         ================================================================== */}
        <div className="bg-pcms-green text-white border-t border-black/15">
          <div className="max-w-7xl mx-auto px-4 py-2 md:py-2.5 flex items-center justify-center text-center gap-2 md:gap-3">
            <DiamondMotif className="w-2 h-2 text-pcms-gold flex-shrink-0" />
            <span className="text-pcms-gold font-bold uppercase tracking-[0.25em] text-[11px] md:text-[13px] whitespace-nowrap">
              Theme
            </span>
            <span aria-hidden className="w-px h-3 bg-white/30 flex-shrink-0" />
            <span className="text-[12px] md:text-[13.5px] leading-snug tracking-[0.01em] font-medium">
              Empowering coordinated, high-impact partnerships and strengthening
              societal contributions by Non-State Actors to national
              development.
            </span>
          </div>
        </div>
      </header>
      {/* /sticky header */}

      {/* ==================================================================
           Mobile drawer
         ================================================================== */}
      <div
        className={`fixed inset-0 bg-black/40 xl:hidden transition-opacity duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />
      <div
        id="primary-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Primary navigation"
        className={`fixed top-0 right-0 h-full w-72 bg-pcms-cream border-l border-pcms-gold-muted/30 shadow-xl transform transition-transform duration-300 ease-out xl:hidden z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-4 py-3 flex items-center justify-between border-b border-pcms-gold-muted/25">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md text-pcms-ink hover:bg-pcms-cream-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-pcms-gold"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col px-2 py-3" aria-label="Primary (mobile)">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={`px-3 py-3 text-[14px] font-medium tracking-wide rounded-md transition-colors ${
                  active
                    ? 'text-pcms-green bg-pcms-cream-muted border-l-[3px] border-pcms-gold pl-[9px]'
                    : 'text-pcms-ink/85 hover:text-pcms-green hover:bg-pcms-cream-muted'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div aria-hidden className="h-px my-3 bg-pcms-gold-muted/30" />
          <Link
            href="https://app.partnerships.opm.go.ug/Login"
            onClick={() => setMenuOpen(false)}
            className="mx-1 mt-1 px-4 py-1 text-center rounded-md border-2 border-pcms-green text-pcms-green text-[14px] font-semibold hover:bg-pcms-green/10 transition-colors"
          >
            Login
          </Link>
          <Link
            href="https://app.partnerships.opm.go.ug/RegisterPartner"
            onClick={() => setMenuOpen(false)}
            className="mx-1 mt-1 px-4 py-1 text-center rounded-md bg-pcms-green text-white text-[14px] font-semibold hover:bg-pcms-green-hover transition-colors"
          >
            Sign up
          </Link>
        </nav>
      </div>
    </>
  );
}
