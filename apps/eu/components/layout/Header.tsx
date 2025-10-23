"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: "Holky na sex", href: "/holky-na-sex" },
    { name: "Erotické masáže", href: "/eroticke-masaze" },
    { name: "Dominy", href: "/dominy" },
    { name: "Podniky", href: "/podniky" },
    { name: "Masážní salony", href: "/masazni-salony" },
    { name: "BDSM studia", href: "/bdsm-studia" },
    { name: "Digitální modelky", href: "/digitalni-modelky" },
    { name: "Escort agentury", href: "/escort-agentury" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-rose-600">
            EroticReviews<span className="text-gray-900">.cz</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/vyhledavani" className="flex items-center space-x-2 text-gray-700 hover:text-rose-600">
              <Search className="w-4 h-4" />
              <span>Vyhledávání</span>
            </Link>
            <Link href="/recenze" className="text-gray-700 hover:text-rose-600">
              Recenze
            </Link>
            <Link href="/o-projektu" className="text-gray-700 hover:text-rose-600">
              O projektu
            </Link>
            <Link href="/prihlaseni" className="flex items-center space-x-2 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700">
              <User className="w-4 h-4" />
              <span>Přihlásit se</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Categories bar - Desktop */}
        <div className="hidden lg:flex items-center space-x-4 py-3 border-t overflow-x-auto">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="text-sm text-gray-700 hover:text-rose-600 whitespace-nowrap"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Categories */}
            <div className="space-y-2">
              <p className="font-semibold text-gray-900">Kategorie</p>
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="block text-gray-700 hover:text-rose-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>

            {/* Menu items */}
            <div className="space-y-2 border-t pt-4">
              <Link
                href="/vyhledavani"
                className="flex items-center space-x-2 text-gray-700 hover:text-rose-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Search className="w-4 h-4" />
                <span>Vyhledávání</span>
              </Link>
              <Link
                href="/recenze"
                className="block text-gray-700 hover:text-rose-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Recenze
              </Link>
              <Link
                href="/o-projektu"
                className="block text-gray-700 hover:text-rose-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                O projektu
              </Link>
              <Link
                href="/prihlaseni"
                className="flex items-center space-x-2 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="w-4 h-4" />
                <span>Přihlásit se</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
