import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GoldenGloves.fun - World Cup 2026',
  description: 'Golden Glove 2026 Goalkeepers Meme Coins',
  icons: { icon: '🧤' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
