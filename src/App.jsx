import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Buyback from './components/Buyback';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Buyback />

      <section id="contact" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-8 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold">Contact</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">Une question ? Besoin d’un devis ? Nous sommes là pour vous.</p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-fuchsia-500" /> +33 1 23 45 67 89</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-fuchsia-500" /> contact@fixme.example</p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-fuchsia-500" /> 15 rue des Ateliers, Paris</p>
              <p className="text-neutral-600 dark:text-neutral-300">Lun–Sam: 10h–19h</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-black/5 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} FixMe. Tous droits réservés.</p>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">Thème animé avec scène 3D rétro — alimenté par Spline.</div>
        </div>
      </footer>
    </div>
  );
}
