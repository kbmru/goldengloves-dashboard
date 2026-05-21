'use client';

import React from 'react';

const goalkeepers = [
  { name: "Emiliano Martínez", ticker: "DIBU", country: "🇦🇷 Argentina" },
  { name: "Thibaut Courtois", ticker: "COURTOIS", country: "🇧🇪 Belgium" },
  { name: "Mike Maignan", ticker: "MAIGNAN", country: "🇫🇷 France" },
  { name: "Unai Simón", ticker: "SIMON", country: "🇪🇸 Spain" },
  { name: "Manuel Neuer", ticker: "NEUER", country: "🇩🇪 Germany" },
  { name: "Alisson Becker", ticker: "ALISSON", country: "🇧🇷 Brazil" },
  { name: "Ederson", ticker: "EDERSON", country: "🇧🇷 Brazil" },
  { name: "Jordan Pickford", ticker: "PICKFORD", country: "🇬🇧 England" },
  { name: "Diogo Costa", ticker: "DCOSTA", country: "🇵🇹 Portugal" },
  { name: "Gianluigi Donnarumma", ticker: "GIGIO", country: "🇮🇹 Italy" },
  { name: "Bart Verbruggen", ticker: "VERBRUGGEN", country: "🇳🇱 Netherlands" },
  { name: "Yassine Bounou", ticker: "BONO", country: "🇲🇦 Morocco" },
  { name: "Gregor Kobel", ticker: "KOBEL", country: "🇨🇭 Switzerland" },
  { name: "Guillermo Ochoa", ticker: "OCHO", country: "🇲🇽 Mexico" },
  { name: "Edouard Mendy", ticker: "MENDY", country: "🇸🇳 Senegal" },
  { name: "Zion Suzuki", ticker: "SUZUKI", country: "🇯🇵 Japan" },
  { name: "Matt Turner", ticker: "TURNER", country: "🇺🇸 USA" },
  { name: "Dominik Livakovic", ticker: "LIVAKOVIC", country: "🇭🇷 Croatia" },
  { name: "David Raya", ticker: "RAYA", country: "🇪🇸 Spain" },
  { name: "Raúl Rangel", ticker: "RANGEL", country: "🇲🇽 Mexico" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="border-b border-yellow-500/30 py-8 sticky top-0 bg-black/95 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-6xl">🧤</span>
            <div>
              <h1 className="text-5xl font-black tracking-tighter text-yellow-400">GOLDEN GLOVES</h1>
              <p className="text-yellow-500 text-lg -mt-1">WORLD CUP 2026</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-3xl font-bold text-yellow-400">$GLOVE</div>
            <div className="text-sm text-gray-400">Main Token • Fee Burner</div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4">20 WALLS • 20 COINS</h2>
          <p className="text-xl text-gray-400">One legendary goalkeeper = One meme coin</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {goalkeepers.map((gk, i) => (
            <div 
              key={i}
              className="group bg-zinc-950 border border-yellow-500/20 hover:border-yellow-400 rounded-3xl p-8 transition-all hover:-translate-y-2"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-4xl font-black text-yellow-400">{gk.ticker}</div>
                  <div className="text-lg font-medium mt-1">{gk.name}</div>
                </div>
                <div className="text-6xl transition-transform group-hover:rotate-12">🧤</div>
              </div>

              <div className="text-5xl mt-10 mb-8">{gk.country}</div>

              <a 
                href="https://pump.fun" 
                target="_blank"
                className="block w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-2xl text-center transition-all text-lg"
              >
                TRADE ${gk.ticker}
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-12 text-center text-gray-500 border-t border-yellow-500/20">
        goldengloves.fun • Pure Community Meme Project • Not affiliated with FIFA
      </footer>
    </div>
  );
}
