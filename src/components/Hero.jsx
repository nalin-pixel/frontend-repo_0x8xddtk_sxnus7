import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_500px_at_50%_-100px,rgba(168,85,247,0.25),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1 text-xs text-neutral-700 dark:text-neutral-200 mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse" />
            <span>Réparations rapides et garanties</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Réparez. Réutilisez. Rejoignez l’ère rétro 3D.
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-xl">
            FixMe prend soin de vos iPhone, MacBook et consoles. Profitez d’un thème animé et d’un décor 3D rétro, tout en réservant votre réparation en quelques clics.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#services" className="px-5 py-3 rounded-md bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-medium shadow hover:shadow-lg transition-shadow">
              Découvrir nos services
            </a>
            <a href="#buyback" className="px-5 py-3 rounded-md border border-neutral-300/60 dark:border-white/20 bg-white/70 dark:bg-neutral-900/60 backdrop-blur font-medium hover:border-fuchsia-400/60 transition-colors">
              Vendre un appareil cassé
            </a>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-gradient-to-b from-purple-900/20 to-fuchsia-900/10">
          <Spline
            scene="https://prod.spline.design/fA4LwfT7IUUelEGO/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-fuchsia-500/10" />
        </div>
      </div>
    </section>
  );
}
