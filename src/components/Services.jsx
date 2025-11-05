import React from 'react';
import { Smartphone, Laptop, Gamepad2, ShieldCheck, Clock } from 'lucide-react';

const items = [
  {
    icon: Smartphone,
    title: 'Réparation iPhone',
    desc: 'Écrans, batteries, caméras et plus, avec pièces de qualité.'
  },
  {
    icon: Laptop,
    title: 'Réparation MacBook',
    desc: 'Diagnostics complets, remplacement batterie/clavier, nettoyage.'
  },
  {
    icon: Gamepad2,
    title: 'Consoles & Gaming',
    desc: 'PlayStation, Xbox, Switch : HDMI, ventilateurs, Joy-Con drift.'
  },
  {
    icon: ShieldCheck,
    title: 'Garantie & Qualité',
    desc: 'Travail garanti. Tests et contrôle qualité après chaque réparation.'
  },
  {
    icon: Clock,
    title: 'Rapide & Transparent',
    desc: 'Devis clair avant intervention, options express disponibles.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Nos services</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Tout ce qu’il faut pour redonner vie à vos appareils.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 hover:border-fuchsia-400/40 transition-colors shadow-sm">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-tr from-fuchsia-600 to-purple-600 text-white flex items-center justify-center shadow mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
