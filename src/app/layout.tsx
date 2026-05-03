import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import {
  ThemeProvider,
  themeInitScript,
} from "@/components/site/theme-provider";
import { LenisProvider } from "@/components/site/lenis-provider";
import { OrganizationJsonLd } from "@/components/site/json-ld";
import "./globals.css";

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
  metadataBase: new URL("https://encorewoodcrafts.in"),
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
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
      data-theme="atelier"
      data-mode="light"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="min-h-full bg-paper text-ink selection:bg-walnut selection:text-paper">
        <OrganizationJsonLd />
        <ThemeProvider>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
