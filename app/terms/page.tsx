'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Scale, 
  AlertTriangle, 
  Shield,
  CreditCard,
  Truck,
  RefreshCw
} from 'lucide-react';

type DefinitionSection = {
  id: 'definitions';
  title: string;
  icon: JSX.Element;
  content: { term: string; definition: string }[];
};

type OtherSection = {
  id: string;
  title: string;
  icon: JSX.Element;
  content: string[];
};
type Section = DefinitionSection | OtherSection;

const sections: Section[] = [
  {
    id: 'definitions',
    title: 'Définitions',
    icon: <FileText className="w-5 h-5" />,
    content: [
      {
        term: 'Site',
        definition: 'Le site web IMA Automobil accessible à l\'adresse www.ima-automobil.fr'
      },
      {
        term: 'Utilisateur',
        definition: 'Toute personne physique ou morale utilisant le Site'
      },
      {
        term: 'Services',
        definition: 'L\'ensemble des fonctionnalités proposées sur le Site'
      },
      {
        term: 'Véhicule',
        definition: 'Tout véhicule automobile commercialisé par IMA Automobil'
      }
    ]
  },
  {
    id: 'usage',
    title: 'Conditions d\'utilisation',
    icon: <Scale className="w-5 h-5" />,
    content: [
      'L\'utilisation du Site implique l\'acceptation pleine et entière des présentes conditions.',
      'L\'Utilisateur s\'engage à utiliser le Site conformément à sa destination et aux lois en vigueur.',
      'Il est interdit d\'utiliser le Site à des fins illégales ou non autorisées.',
      'L\'Utilisateur est responsable de la confidentialité de ses identifiants de connexion.'
    ]
  },
  {
    id: 'orders',
    title: 'Commandes et ventes',
    icon: <CreditCard className="w-5 h-5" />,
    content: [
      'Toute commande vaut acceptation des prix et descriptions des produits disponibles à la vente.',
      'Les prix sont indiqués en euros TTC et peuvent être modifiés à tout moment.',
      'La confirmation de commande constitue la formation du contrat de vente.',
      'IMA Automobil se réserve le droit d\'annuler toute commande en cas d\'indisponibilité.'
    ]
  },
  {
    id: 'delivery',
    title: 'Livraison',
    icon: <Truck className="w-5 h-5" />,
    content: [
      'Les délais de livraison sont donnés à titre indicatif.',
      'La livraison s\'effectue à l\'adresse indiquée par l\'Utilisateur lors de la commande.',
      'Les risques sont transférés à l\'Utilisateur dès la remise du véhicule.',
      'En cas de retard de livraison, l\'Utilisateur sera informé dans les meilleurs délais.'
    ]
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Scale className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h1 className="text-5xl font-bold mb-4">Conditions d'utilisation</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Les conditions générales d'utilisation et de vente de IMA Automobil
            </p>
            <Badge className="mt-4 bg-green-600">
              Version en vigueur depuis le 15 Mars 2024
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Préambule</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Les présentes conditions générales d'utilisation et de vente (ci-après "CGU/CGV") 
                régissent l'utilisation du site internet IMA Automobil et les relations contractuelles 
                entre IMA Automobil et ses utilisateurs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                IMA Automobil est une société par actions simplifiée au capital de 1 000 000 euros, 
                immatriculée au RCS de Paris sous le numéro 123 456 789, dont le siège social est 
                situé 123 Avenue des Champs-Élysées, 75008 Paris.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Important</h4>
                    <p className="text-yellow-700 text-sm">
                      L'utilisation de ce site implique l'acceptation pleine et entière de ces conditions. 
                      Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sections principales */}
        {sections.map((section, index) => (
          <section key={section.id} className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                    {section.icon}
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {section.id === 'definitions' ? (
                  <div className="space-y-4">
                    {section.content.map((item: any, idx: number) => (
                      <div key={idx} className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-slate-800">{item.term}</h4>
                        <p className="text-gray-600">{item.definition}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {section.content.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </section>
        ))}

        {/* Garanties */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                  <Shield className="w-5 h-5" />
                </div>
                Garanties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Garantie constructeur</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 7 ans ou 150 000 km sur les véhicules neufs</li>
                    <li>• Couverture des défauts de fabrication</li>
                    <li>• Assistance dépannage 24h/24</li>
                    <li>• Réseau de réparateurs agréés</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Garantie légale</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Garantie de conformité (2 ans)</li>
                    <li>• Garantie contre les vices cachés</li>
                    <li>• Droit de rétractation (14 jours)</li>
                    <li>• Service après-vente</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Rétractation */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                  <RefreshCw className="w-5 h-5" />
                </div>
                Droit de rétractation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Conformément à l'article L. 221-18 du Code de la consommation, vous disposez d'un 
                délai de 14 jours francs pour exercer votre droit de rétractation sans avoir à 
                justifier de motifs ni à payer de pénalité.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Modalités de rétractation</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Le délai court à compter de la livraison du véhicule</li>
                  <li>• Notification par lettre recommandée avec AR</li>
                  <li>• Retour du véhicule dans son état d'origine</li>
                  <li>• Remboursement sous 14 jours après retour</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Responsabilité */}
        <section className="mb-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Limitation de responsabilité</h2>
              <p className="text-gray-600 mb-4">
                IMA Automobil s'efforce de fournir des informations exactes et à jour sur le Site. 
                Cependant, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité de 
                toutes les informations.
              </p>
              <p className="text-gray-600 mb-4">
                La responsabilité d'IMA Automobil ne saurait être engagée pour :
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Les dommages indirects ou immatériels</li>
                <li>• L'interruption temporaire du Site</li>
                <li>• L'utilisation non conforme du Site</li>
                <li>• Les actes de tiers ou cas de force majeure</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Droit applicable */}
        <section className="mb-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Droit applicable et juridiction</h2>
              <p className="text-gray-600 mb-4">
                Les présentes CGU/CGV sont soumises au droit français. En cas de litige, les tribunaux 
                français seront seuls compétents.
              </p>
              <p className="text-gray-600">
                Avant tout recours contentieux, nous vous invitons à nous contacter pour rechercher 
                une solution amiable. Vous pouvez également recourir à la médiation de la consommation.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section>
          <Card className="bg-slate-800 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Questions juridiques ?</h2>
              <p className="text-gray-300 mb-6">
                Pour toute question concernant ces conditions d'utilisation, 
                notre service juridique est à votre disposition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-red-500" />
                  <span>juridique@ima-automobil.fr</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-red-500" />
                  <span>Service juridique : 01 23 45 67 90</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
}