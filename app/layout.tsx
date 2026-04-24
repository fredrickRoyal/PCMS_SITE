import type { Metadata } from "next";
import { Urbanist, Manrope, Fraunces, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

// Cormorant Garamond — institutional serif reserved for the PCMS wordmark.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-institutional",
  display: "swap",
});

// Inter — UI voice for navigation, buttons and functional text.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PCMS | Partnership Coordination & Monitoring System — OPM",
    template: "%s | PCMS",
  },
  description:
    "The Office of the Prime Minister's platform for applying for, tracking, reporting on and coordinating partnerships with Non-State Actors across Government.",
  applicationName: "PCMS",
  keywords: [
    "PCMS",
    "Partnership Coordination and Monitoring System",
    "Office of the Prime Minister",
    "OPM",
    "Uganda",
    "Non-State Actors",
    "Off-Budget Financing",
    "MoU",
    "NDP IV",
    "Vision 2040",
  ],
  authors: [{ name: "Office of the Prime Minister, Uganda" }],
  openGraph: {
    title: "PCMS — Partnership Coordination & Monitoring System",
    description:
      "Coordinating Government partnerships with Non-State Actors — OPM's single platform for applications, MoUs, reporting and Off-Budget Financing tracking.",
    siteName: "PCMS",
    type: "website",
    locale: "en_UG",
  },
  twitter: {
    card: "summary_large_image",
    title: "PCMS — Partnership Coordination & Monitoring System",
    description:
      "The OPM platform coordinating partnerships with Non-State Actors across Government.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${urbanist.variable} ${manrope.variable} ${fraunces.variable} ${cormorant.variable} ${inter.variable} font-urbanist bg-background text-foreground flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div id="main-content" className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
