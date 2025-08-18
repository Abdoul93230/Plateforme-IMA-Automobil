'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Search, User, MapPin, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Véhicules', href: '/vehicles' },
    { name: 'Build & Price', href: '/configurator' },
    { name: 'Offres', href: '/offers' },
    { name: 'Services', href: '/services' },
    { name: 'Accessoires', href: '/accessories' },
    { name: 'À propos', href: '/about' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-800 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Trouvez un concessionnaire
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Service client : 01 23 45 67 89
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="hover:text-red-500 transition-colors">Connexion</Link>
            <span>|</span>
            <Link href="/register" className="hover:text-red-500 transition-colors">S'inscrire</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-slate-800">
              IMA <span className="text-red-600">Automobil</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-red-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t">
            <nav className="flex flex-col space-y-4 pt-4">
              {navigationItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-red-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}