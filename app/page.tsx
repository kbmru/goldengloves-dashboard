import { ArrowUpRight, Shield, Sparkles, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

type Goalkeeper = {
  name: string;
  ticker: string;
  flag: string;
  country: string;
  tagline: string;
};

const goalkeepers: Goalkeeper[] = [
  {
    name: "Emiliano Martinez",
    ticker: "DIBU",
    flag: "🇦🇷",
    country: "Argentina",
    tagline: "Penalty chaos merchant",
  },
  {
    name: "Thibaut Courtois",
    ticker: "COURTOIS",
    flag: "🇧🇪",
    country: "Belgium",
    tagline: "Long-arm liquidity wall",
  },
  {
    name: "Mike Maignan",
    ticker: "MAIGNAN",
    flag: "🇫🇷",
    country: "France",
    tagline: "Paris-grade glove tech",
  },
  {
    name: "Unai Simon",
    ticker: "SIMON",
    flag: "🇪🇸",
    country: "Spain",
    tagline: "Tiki-taka shot stopper",
  },
  {
    name: "Manuel Neuer",
    ticker: "NEUER",
    flag: "🇩🇪",
    country: "Germany",
    tagline: "Original sweeper keeper",
  },
  {
    name: "Alisson Becker",
    ticker: "ALISSON",
    flag: "🇧🇷",
    country: "Brazil",
    tagline: "Samba save machine",
  },
  {
    name: "Ederson",
    ticker: "EDERSON",
    flag: "🇧🇷",
    country: "Brazil",
    tagline: "Laser pass goalkeeper",
  },
  {
    name: "Jordan Pickford",
    ticker: "PICKFORD",
    flag: "🏴",
    country: "England",
    tagline: "Big tournament energy",
  },
  {
    name: "Diogo Costa",
    ticker: "DCOSTA",
    flag: "🇵🇹",
    country: "Portugal",
    tagline: "Penalty portal opener",
  },
  {
    name: "Gianluigi Donnarumma",
    ticker: "GIGIO",
    flag: "🇮🇹",
    country: "Italy",
    tagline: "Azzurri diamond hands",
  },
  {
    name: "Bart Verbruggen",
    ticker: "VERBRUGGEN",
    flag: "🇳🇱",
    country: "Netherlands",
    tagline: "Dutch golden reflexes",
  },
  {
    name: "Yassine Bounou",
    ticker: "BONO",
    flag: "🇲🇦",
    country: "Morocco",
    tagline: "Atlas lion in goal",
  },
  {
    name: "Gregor Kobel",
    ticker: "KOBEL",
    flag: "🇨🇭",
    country: "Switzerland",
    tagline: "Swiss vault keeper",
  },
  {
    name: "Guillermo Ochoa",
    ticker: "OCHO",
    flag: "🇲🇽",
    country: "Mexico",
    tagline: "World Cup cult hero",
  },
  {
    name: "Edouard Mendy",
    ticker: "MENDY",
    flag: "🇸🇳",
    country: "Senegal",
    tagline: "Teranga clean sheets",
  },
  {
    name: "Zion Suzuki",
    ticker: "SUZUKI",
    flag: "🇯🇵",
    country: "Japan",
    tagline: "Rising sun reflexes",
  },
  {
    name: "Matt Turner",
    ticker: "TURNER",
    flag: "🇺🇸",
    country: "USA",
    tagline: "Host nation hands",
  },
  {
    name: "Dominik Livakovic",
    ticker: "LIVAKOVIC",
    flag: "🇭🇷",
    country: "Croatia",
    tagline: "Shootout specialist",
  },
  {
    name: "David Raya",
    ticker: "RAYA",
    flag: "🇪🇸",
    country: "Spain",
    tagline: "Distribution alpha",
  },
  {
    name: "Raul Rangel",
    ticker: "RANGEL",
    flag: "🇲🇽",
    country: "Mexico",
    tagline: "Next-gen home hero",
  },
];

const stats = [
  { label: "Goalkeeper coins", value: "20" },
  { label: "Main token", value: "$GLOVE" },
  { label: "Vibe", value: "Golden" },
];

function pumpFunUrl(ticker: string) {
  return `https://pump.fun/?q=${encodeURIComponent(`$${ticker}`)}`;
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030303] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold/20 blur-[140px]" />
        <div className="absolute right-0 top-80 h-[420px] w-[420px] rounded-full bg-gold-deep/20 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-gold/15 bg-black/70 backdrop-blur-2xl">
        <div className="container flex min-h-20 items-center justify-between gap-4 py-4">
          <a href="#top" className="flex items-center gap-3" aria-label="GoldenGloves.fun home">
            <div className="gold-border grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 shadow-gold">
              <span className="text-2xl" aria-hidden="true">
                🧤
              </span>
            </div>
            <div>
              <p className="font-display text-xl font-black uppercase leading-none tracking-tight sm:text-2xl">
                Golden<span className="gold-text">Gloves</span>
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold/80">
                World Cup 2026
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-3 rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm font-bold text-gold sm:flex">
            <Shield className="h-4 w-4" />
            <span>$GLOVE main token</span>
          </div>
        </div>
      </header>

      <section id="top" className="relative z-10">
        <div className="container grid gap-10 pb-14 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:pb-20 lg:pt-20">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-gold">
              <Sparkles className="h-4 w-4" />
              glove season is loading
            </div>

            <h1 className="font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              World Cup keepers.
              <span className="block gold-text">Golden meme coins.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              GoldenGloves.fun is the premium dark-and-gold dashboard for the
              2026 goalkeeper meta: 20 legendary walls, 20 tickers, one
              glove-powered community token at the center.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="https://pump.fun" target="_blank" rel="noreferrer">
                  Trade $GLOVE
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#keepers">View keepers</a>
              </Button>
            </div>
          </div>

          <div className="gold-border relative overflow-hidden rounded-[2.5rem] bg-black/60 p-5 shadow-gold">
            <div className="absolute inset-0 bg-radial-gold opacity-80" />
            <div className="relative rounded-[2rem] border border-gold/20 bg-zinc-950/80 p-6">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.35em] text-gold/70">
                    Main token
                  </p>
                  <h2 className="mt-3 font-display text-6xl font-black tracking-[-0.08em] text-gold sm:text-7xl">
                    $GLOVE
                  </h2>
                </div>
                <div className="grid h-20 w-20 place-items-center rounded-3xl border border-gold/30 bg-gold/10 text-5xl shadow-gold">
                  🧤
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="font-display text-2xl font-black text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-gold/20 bg-gold/10 p-5">
                <div className="flex items-center gap-3 text-gold">
                  <Trophy className="h-5 w-5" />
                  <p className="font-black uppercase tracking-[0.18em]">
                    Meme Cup Mission
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  Collect the legends, trade the gloves, and let the best hands
                  on earth compete for the golden timeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="keepers" className="relative z-10 border-t border-gold/10 py-14 sm:py-20">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">
                20 walls / 20 coins
              </p>
              <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-[-0.04em] sm:text-6xl">
                Pick your keeper
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Every card includes a country flag, glove energy, ticker identity,
              and a direct pump.fun action for the degen touchline.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {goalkeepers.map((keeper, index) => (
              <Card
                key={keeper.ticker}
                className="group gold-border relative overflow-hidden bg-zinc-950/80 p-5 transition duration-300 hover:-translate-y-1 hover:bg-zinc-950 hover:shadow-gold-card"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition duration-300 group-hover:bg-gold/20" />
                <CardHeader className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full border border-gold/20 bg-gold/10 px-2.5 py-1 text-xs font-black text-gold">
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-3xl" aria-label={keeper.country}>
                          {keeper.flag}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-black leading-tight tracking-[-0.04em] text-white">
                        {keeper.name}
                      </h3>
                    </div>
                    <span
                      className="text-4xl transition duration-300 group-hover:rotate-12 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      🧤
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="relative mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                    {keeper.country}
                  </p>
                  <p className="mt-2 font-display text-4xl font-black tracking-[-0.08em] text-gold">
                    ${keeper.ticker}
                  </p>
                  <p className="mt-4 min-h-12 text-sm leading-6 text-zinc-400">
                    {keeper.tagline}
                  </p>
                </CardContent>

                <CardFooter className="relative mt-6">
                  <Button asChild className="w-full" size="sm">
                    <a
                      href={pumpFunUrl(keeper.ticker)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Trade $${keeper.ticker} on pump.fun`}
                    >
                      Trade ${keeper.ticker}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-gold/10 bg-black/50 py-10">
        <div className="container flex flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-lg font-black uppercase tracking-[-0.02em] text-white">
            Golden<span className="text-gold">Gloves</span>.fun
          </p>
          <p className="max-w-3xl leading-6">
            Disclaimer: GoldenGloves.fun is a community meme project and is not
            affiliated with FIFA, the World Cup, any player, club, federation,
            or pump.fun. Meme coins are volatile and for entertainment only.
          </p>
        </div>
      </footer>
    </main>
  );
}
