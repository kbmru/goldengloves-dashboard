import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldengloves.fun"),
  title: {
    default: "GoldenGloves.fun | World Cup 2026 Goalkeeper Meme Coins",
    template: "%s | GoldenGloves.fun",
  },
  description:
    "A premium dark-and-gold dashboard for World Cup 2026 goalkeeper meme coins led by $GLOVE.",
  keywords: [
    "GoldenGloves.fun",
    "World Cup 2026",
    "goalkeepers",
    "meme coins",
    "$GLOVE",
    "pump.fun",
  ],
  openGraph: {
    title: "GoldenGloves.fun",
    description:
      "20 iconic keepers, 20 glove-powered meme coins, one golden $GLOVE hub.",
    url: "https://goldengloves.fun",
    siteName: "GoldenGloves.fun",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoldenGloves.fun",
    description:
      "World Cup 2026 goalkeeper meme coins with premium golden vibes.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
