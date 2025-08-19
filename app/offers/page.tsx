'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Percent, 
  Gift, 
  Users, 
  GraduationCap, 
  Shield, 
  Calendar,
  CreditCard,
  Star,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const currentOffers = [
  {
    id: 1,
    title: "Offre Printemps 2024",
    description: "Jusqu'à 5 000€ de remise sur une sélection de véhicules",
    discount: "5 000€",
    type: "Remise immédiate",
    validUntil: "30 Avril 2024",
    image: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    badge: "Limitée",
    conditions: ["Sur véhicules en stock", "Non cumulable", "Hors frais de carte grise"],
    vehicles: ["IMA Hybrid Sedan", "IMA City Compact"]
  },
  {
    id: 2,
    title: "Financement 0% sur 24 mois",
    description: "Financez votre véhicule sans intérêt",
    discount: "0%",
    type: "Financement",
    validUntil: "31 Mai 2024",
    image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    badge: "Populaire",
    conditions: ["Apport minimum 30%", "Sous conditions de ressources", "TAEG fixe"],
    vehicles: ["IMA Electric SUV", "IMA Luxury Coupe"]
  },
  {
    id: 3,
    title: "Prime reprise majorée",
    description: "Votre ancien véhicule repris au meilleur prix",
    discount: "+2 000€",
    type: "Reprise",
    validUntil: "15 Juin 2024",
    image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    badge: "Nouveau",
    conditions: ["Véhicule de plus de 5 ans", "En état de marche", "Évaluation en concession"],
    vehicles: ["Tous véhicules neufs"]
  }
];

const specialPrograms = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Professionnels",
    description: "Tarifs préférentiels pour les entreprises et flottes",
    benefits: ["Remise volume", "Financement adapté", "Service dédié"],
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Étudiants",
    description: "Offres spéciales pour les jeunes conducteurs",
    benefits: ["1 000€ de remise", "Assurance jeune conducteur", "Facilités de paiement"],
    color: "bg-green-50 text-green-600"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Militaires",
    description: "Programme de soutien aux forces armées",
    benefits: ["Remise de 1 500€", "Conditions préférentielles", "Service prioritaire"],
    color: "bg-red-50 text-red-600"
  }
];

const financingOptions = [
  {
    name: "Crédit Classique",
    description: "Financement traditionnel avec propriété immédiate",
    features: ["Propriétaire dès l'achat", "Durée 12 à 84 mois", "Taux compétitifs"],
    rate: "À partir de 2.9%"
  },
  {
    name: "Leasing (LOA)",
    description: "Location avec option d'achat",
    features: ["Mensualités réduites", "Option d'achat en fin", "Entretien inclus"],
    rate: "À partir de 199€/mois"
  },
  {
    name: "Location Longue Durée",
    description: "Location tout inclus sans souci",
    features: ["Tout inclus", "Véhicule de remplacement", "Assistance 24h/24"],
    rate: "À partir de 299€/mois"
  }
];

export default function OffersPage() {
  const [selectedTab, setSelectedTab] = useState('current');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Offres & Promotions</h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Découvrez nos offres exceptionnelles et programmes de financement avantageux
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="current" className="flex items-center gap-2">
              <Percent className="w-4 h-4" />
              Offres actuelles
            </TabsTrigger>
            <TabsTrigger value="financing" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Financement
            </TabsTrigger>
            <TabsTrigger value="programs" className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              Programmes spéciaux
            </TabsTrigger>
          </TabsList>

          {/* Current Offers */}
          <TabsContent value="current">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {currentOffers.map((offer) => (
                <Card key={offer.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={offer.image} 
                      alt={offer.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-red-600">
                      {offer.badge}
                    </Badge>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-2xl font-bold text-red-600">{offer.discount}</span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{offer.type}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        Jusqu'au {offer.validUntil}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{offer.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Véhicules concernés:</h4>
                      <ul className="text-sm text-gray-600">
                        {offer.vehicles.map((vehicle, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-600 mr-2" />
                            {vehicle}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Conditions:</h4>
                      <ul className="text-xs text-gray-500 space-y-1">
                        {offer.conditions.map((condition, index) => (
                          <li key={index}>• {condition}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Profiter de l'offre
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Financing Options */}
          <TabsContent value="financing">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {financingOptions.map((option, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{option.name}</CardTitle>
                    <div className="text-3xl font-bold text-red-600 mt-2">
                      {option.rate}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{option.description}</p>
                    <ul className="space-y-2 mb-6">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full hover:bg-red-600 hover:text-white">
                      Simuler
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  Calculateur de financement
                </h3>
                <p className="text-blue-700 mb-6">
                  Estimez vos mensualités en quelques clics
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Calculer mes mensualités
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Special Programs */}
          <TabsContent value="programs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {specialPrograms.map((program, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full ${program.color} flex items-center justify-center mx-auto mb-4`}>
                      {program.icon}
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full hover:bg-red-600 hover:text-white">
                      En savoir plus
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'aide pour choisir ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nos conseillers sont là pour vous accompagner dans votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Calendar className="w-5 h-5 mr-2" />
                Prendre rendez-vous
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
                Demander un devis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}