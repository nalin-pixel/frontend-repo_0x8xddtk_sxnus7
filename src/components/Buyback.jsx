import React from 'react';
import { DollarSign, RefreshCcw, Mail, Phone } from 'lucide-react';

export default function Buyback() {
  return (
    <section id="buyback" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Rachat d’appareils cassés</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">
              Donnez une seconde vie à votre appareil hors service. Nous rachetons iPhone, iPad et MacBook, même très endommagés.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-md bg-gradient-to-tr from-fuchsia-600 to-purple-600 text-white flex items-center justify-center shadow">
                  <DollarSign className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Estimation rapide</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">Recevez une proposition en quelques heures, sans engagement.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-md bg-gradient-to-tr from-fuchsia-600 to-purple-600 text-white flex items-center justify-center shadow">
                  <RefreshCcw className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Recyclage responsable</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">Vos données sont effacées et les pièces revalorisées.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Demander une estimation</h3>
            <form className="mt-4 space-y-4" action="mailto:contact@fixme.example" method="post" encType="text/plain">
              <div>
                <label className="block text-sm font-medium mb-1">Modèle</label>
                <input name="modele" required className="w-full rounded-md border border-neutral-300/70 dark:border-white/10 bg-white/80 dark:bg-neutral-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="iPhone 13, MacBook Pro 2019…" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">État</label>
                <input name="etat" required className="w-full rounded-md border border-neutral-300/70 dark:border-white/10 bg-white/80 dark:bg-neutral-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Écran cassé, ne s’allume plus…" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact</label>
                <input name="contact" required className="w-full rounded-md border border-neutral-300/70 dark:border-white/10 bg-white/80 dark:bg-neutral-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Votre email ou téléphone" />
              </div>
              <button type="submit" className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-medium shadow hover:shadow-lg transition-shadow">Envoyer</button>
            </form>

            <div className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@fixme.example</p>
              <p className="flex items-center gap-2 mt-1"><Phone className="h-4 w-4" /> +33 1 23 45 67 89</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
