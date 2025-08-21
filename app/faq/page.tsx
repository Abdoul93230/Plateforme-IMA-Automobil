'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Phone,
  Mail,
  MessageSquare,
  Car,
  CreditCard,
  Wrench,
  Shield,
  Package,
  Users
} from 'lucide-react';

const faqCategories = [
  {
    id: 'vehicles',
    name: 'Véhicules',
    icon: <Car className="w-5 h-5" />,
    questions: [
      {
        question: "Quelle est la différence entre les motorisations hybride et électrique ?",
        answer: "Les véhicules hybrides combinent un moteur thermique et un moteur électrique pour optimiser la consommation. Les véhicules électriques fonctionnent uniquement à l'électricité avec une batterie rechargeable, offrant zéro émission locale."
      },
      {
        question: "Quelle est l'autonomie des véhicules électriques IMA ?",
        answer: "Nos véhicules électriques offrent une autonomie de 350 à 600 km selon le modèle. L'IMA Electric SUV atteint 450 km d'autonomie en cycle mixte WLTP."
      },
      {
        question: "Comment recharger un véhicule électrique IMA ?",
        answer: "Vous pouvez recharger sur une prise domestique (8-12h), une borne publique (2-4h) ou une borne rapide (30-45 min pour 80%). Tous nos véhicules sont compatibles avec les standards européens."
      },
      {
        question: "Les véhicules IMA sont-ils fiables ?",
        answer: "Nos véhicules bénéficient d'une garantie constructeur de 7 ans ou 150 000 km, témoignant de notre confiance en leur fiabilité. Nous utilisons des composants de qualité premium."
      }
    ]
  },
  {
    id: 'purchase',
    name: 'Achat & Financement',
    icon: <CreditCard className="w-5 h-5" />,
    questions: [
      {
        question: "Comment acheter un véhicule IMA en ligne ?",
        answer: "Utilisez notre configurateur Build & Price, choisissez vos options, obtenez un devis, puis finalisez votre commande en ligne. Vous pouvez récupérer votre véhicule en concession ou opter pour la livraison."
      },
      {
        question: "Quelles sont les options de financement disponibles ?",
        answer: "Nous proposons le crédit classique (2.9% TAEG), la LOA (Location avec Option d'Achat) dès 199€/mois, et la LLD (Location Longue Durée) tout inclus dès 299€/mois."
      },
      {
        question: "Puis-je faire reprendre mon ancien véhicule ?",
        answer: "Oui, nous reprenons votre ancien véhicule au meilleur prix. Nos experts l'évaluent gratuitement et vous proposent une offre de reprise immédiate pour financer votre nouveau véhicule."
      },
      {
        question: "Quel est le délai de livraison ?",
        answer: "Les véhicules en stock sont disponibles sous 2-3 semaines. Pour les véhicules sur commande avec options spécifiques, comptez 6-12 semaines selon le modèle."
      }
    ]
  },
  {
    id: 'service',
    name: 'Service & Entretien',
    icon: <Wrench className="w-5 h-5" />,
    questions: [
      {
        question: "À quelle fréquence entretenir mon véhicule IMA ?",
        answer: "Suivez le plan d'entretien constructeur : révision tous les 10 000 km ou 12 mois pour les moteurs thermiques, tous les 15 000 km ou 18 mois pour les hybrides et électriques."
      },
      {
        question: "Où faire entretenir mon véhicule ?",
        answer: "Dans l'un de nos 200+ centres de service agréés en France. Utilisez notre localisateur en ligne pour trouver le centre le plus proche et prendre rendez-vous."
      },
      {
        question: "L'entretien est-il obligatoire pour la garantie ?",
        answer: "Oui, le respect du plan d'entretien constructeur est obligatoire pour maintenir votre garantie. Tous les entretiens doivent être effectués dans notre réseau agréé."
      },
      {
        question: "Proposez-vous un véhicule de remplacement ?",
        answer: "Oui, un véhicule de courtoisie est disponible gratuitement pour les interventions de plus de 4 heures, sous réserve de disponibilité et sur rendez-vous."
      }
    ]
  },
  {
    id: 'warranty',
    name: 'Garantie & Assurance',
    icon: <Shield className="w-5 h-5" />,
    questions: [
      {
        question: "Quelle est la durée de la garantie IMA ?",
        answer: "Tous nos véhicules neufs bénéficient d'une garantie constructeur de 7 ans ou 150 000 km, incluant l'assistance dépannage 24h/24 et le réseau de réparateurs agréés."
      },
      {
        question: "Que couvre la garantie constructeur ?",
        answer: "La garantie couvre tous les défauts de fabrication, les pannes mécaniques et électroniques, ainsi que la corrosion. Elle inclut les pièces, la main d'œuvre et l'assistance."
      },
      {
        question: "Comment faire jouer la garantie ?",
        answer: "Contactez votre concessionnaire IMA ou appelez notre service client au 01 23 45 67 89. Présentez votre carnet d'entretien à jour et votre carte grise."
      },
      {
        question: "La garantie est-elle transférable ?",
        answer: "Oui, la garantie constructeur est transférable au nouveau propriétaire en cas de revente du véhicule, sous réserve du respect du plan d'entretien."
      }
    ]
  },
  {
    id: 'accessories',
    name: 'Accessoires & Pièces',
    icon: <Package className="w-5 h-5" />,
    questions: [
      {
        question: "Où acheter des accessoires IMA ?",
        answer: "Sur notre boutique en ligne, dans nos concessionnaires ou chez nos partenaires agréés. Tous nos accessoires sont garantis et spécifiquement conçus pour vos véhicules IMA."
      },
      {
        question: "Les accessoires sont-ils garantis ?",
        answer: "Oui, tous nos accessoires d'origine bénéficient d'une garantie de 2 ans. L'installation par notre réseau agréé est également garantie."
      },
      {
        question: "Puis-je installer les accessoires moi-même ?",
        answer: "Certains accessoires peuvent être installés par vos soins (tapis, housses). Pour les accessoires techniques, nous recommandons l'installation par notre réseau pour préserver la garantie."
      },
      {
        question: "Proposez-vous des pièces détachées ?",
        answer: "Oui, nous proposons toutes les pièces d'origine IMA. Commandez en ligne ou contactez votre concessionnaire. Livraison sous 24-48h pour les pièces en stock."
      }
    ]
  },
  {
    id: 'account',
    name: 'Compte Client',
    icon: <Users className="w-5 h-5" />,
    questions: [
      {
        question: "Comment créer un compte IMA ?",
        answer: "Cliquez sur 'S'inscrire' en haut de la page, remplissez vos informations et validez votre email. Votre compte vous donne accès à tous nos services personnalisés."
      },
      {
        question: "Que puis-je faire avec mon compte client ?",
        answer: "Sauvegarder vos configurations, suivre vos commandes, gérer l'entretien de vos véhicules, accéder aux offres exclusives et contacter le support prioritaire."
      },
      {
        question: "J'ai oublié mon mot de passe, que faire ?",
        answer: "Cliquez sur 'Mot de passe oublié' sur la page de connexion, entrez votre email et suivez les instructions pour réinitialiser votre mot de passe."
      },
      {
        question: "Comment modifier mes informations personnelles ?",
        answer: "Connectez-vous à votre compte, allez dans 'Mon profil' et modifiez vos informations. N'oubliez pas de sauvegarder vos modifications."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('vehicles');

  const toggleFaq = (questionId: string) => {
    setExpandedFaq(expandedFaq === questionId ? null : questionId);
  };

  const filteredQuestions = faqCategories
    .find(cat => cat.id === selectedCategory)
    ?.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h1 className="text-5xl font-bold mb-4">Questions Fréquentes</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions sur nos véhicules et services
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher dans les questions fréquentes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-lg"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Choisissez une catégorie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {faqCategories.map((category) => (
              <Card 
                key={category.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === category.id ? 'ring-2 ring-red-600 bg-red-50' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-red-600 mb-2 flex justify-center">
                    {category.icon}
                  </div>
                  <div className="font-medium text-sm">{category.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              {faqCategories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">
              {filteredQuestions.length} question(s) trouvée(s)
            </p>
          </div>
          
          <div className="space-y-4">
            {filteredQuestions.map((faq, index) => {
              const questionId = `${selectedCategory}-${index}`;
              const isExpanded = expandedFaq === questionId;
              
              return (
                <Card key={questionId} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader 
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(questionId)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg pr-4">{faq.question}</CardTitle>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </div>
                  </CardHeader>
                  {isExpanded && (
                    <CardContent className="pt-0">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>

          {filteredQuestions.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Aucune question trouvée
                </h3>
                <p className="text-gray-500">
                  Essayez de modifier votre recherche ou sélectionnez une autre catégorie
                </p>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Contact Support */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white">
            <CardContent className="p-12 text-center">
              <MessageSquare className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">
                Vous ne trouvez pas votre réponse ?
              </h2>
              <p className="text-xl mb-8 text-red-100">
                Notre équipe support est là pour vous aider personnellement
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  01 23 45 67 89
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  <Mail className="w-5 h-5 mr-2" />
                  Nous écrire
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
}