import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/site/theme-provider";
import { OrganizationJsonLd } from "@/components/site/json-ld";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://encorewoodcrafts.in";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "encore woodcrafts llp — bespoke timber windows & doors · india",
    template: "%s · encore woodcrafts",
  },
  description:
    "encore woodcrafts is india's atelier for bespoke minimalist timber windows and doors. machined, glazed and finished in-house in hyderabad. the warmth of wood, refined for contemporary architecture.",
  keywords: [
    "encore woodcrafts",
    "timber windows india",
    "wood windows hyderabad",
    "minimalist windows",
    "luxury windows india",
    "bespoke doors",
    "architectural carpentry",
    "passivhaus india",
  ],
  openGraph: {
    title: "encore woodcrafts — bespoke timber windows & doors",
    description:
      "the warmth of bespoke timber. minimalist wood windows, doors and architectural carpentry, made in hyderabad, india.",
    siteName: "encore woodcrafts",
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
  // Icons are inferred from Next 16 file conventions:
  //   src/app/icon.svg       → <link rel="icon" type="image/svg+xml">
  //   src/app/apple-icon.tsx → <link rel="apple-touch-icon" sizes="180x180">
  // Adding an explicit `icons` block here would shadow the file convention.
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#13110E" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full bg-paper text-ink selection:bg-walnut selection:text-paper"
      >
        <OrganizationJsonLd />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
