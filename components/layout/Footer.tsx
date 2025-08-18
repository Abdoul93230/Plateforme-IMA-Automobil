import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const footerSections = [
    {
      title: "Véhicules",
      links: [
        { name: "Berlines", href: "/vehicles/sedans" },
        { name: "SUV", href: "/vehicles/suvs" },
        { name: "Citadines", href: "/vehicles/city" },
        { name: "Électriques", href: "/vehicles/electric" },
        { name: "Hybrides", href: "/vehicles/hybrid" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Build & Price", href: "/configurator" },
        { name: "Financement", href: "/financing" },
        { name: "Assurance", href: "/insurance" },
        { name: "Entretien", href: "/maintenance" },
        { name: "Garantie", href: "/warranty" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Centre d'aide", href: "/help" },
        { name: "Contact", href: "/contact" },
        { name: "Trouver un concessionnaire", href: "/dealers" },
        { name: "Rappels", href: "/recalls" },
        { name: "FAQ", href: "/faq" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "/about" },
        { name: "Carrières", href: "/careers" },
        { name: "Actualités", href: "/news" },
        { name: "Investisseurs", href: "/investors" },
        { name: "Développement durable", href: "/sustainability" }
      ]
    }
  ];

  return (
    <footer className="bg-slate-800 text-white">
      {/* Newsletter */}
      <div className="bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Restez informé</h3>
            <p className="text-gray-300">Recevez nos dernières actualités et offres exclusives</p>
          </div>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-600 border border-slate-500 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
            <Button className="bg-red-600 hover:bg-red-700 px-6">
              S'inscrire
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              IMA <span className="text-red-600">Automobil</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire de confiance pour une mobilité moderne, durable et accessible.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-slate-700">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-slate-700">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-slate-700">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-slate-700">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-red-600" />
              <span>Service client : 01 23 45 67 89</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-red-600" />
              <span>contact@ima-automobil.fr</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-red-600" />
              <span>Siège social : Paris, France</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 IMA Automobil. Tous droits réservés.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Conditions d'utilisation
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Gestion des cookies
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibilité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}