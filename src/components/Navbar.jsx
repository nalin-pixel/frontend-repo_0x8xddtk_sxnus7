import React from 'react';
import { Phone, Wrench } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="p-2 rounded-md bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-purple-600 text-white shadow-md shadow-fuchsia-500/30">
              <Wrench className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">FixMe</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-fuchsia-600 transition-colors">Services</a>
            <a href="#buyback" className="hover:text-fuchsia-600 transition-colors">Rachat</a>
            <a href="#contact" className="hover:text-fuchsia-600 transition-colors">Contact</a>
          </nav>

          <a
            href="tel:+33123456789"
            className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow hover:shadow-lg transition-shadow"
            aria-label="Appeler FixMe"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Nous appeler</span>
          </a>
        </div>
      </div>
    </header>
  );
}
