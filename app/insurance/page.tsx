'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Car, 
  Heart, 
  Phone,
  CheckCircle,
  AlertTriangle,
  Calculator,
  FileText,
  Clock,
  Users,
  Award,
  Zap,
  Home,
  Wrench
} from 'lucide-react';

const insuranceTypes = [
  {
    id: 'basic',
    name: "Assurance Responsabilité Civile",
    description: "Protection minimale obligatoire",
    price: "À partir de 299€/an",
    coverage: ["Dommages aux tiers", "Responsabilité civile", "Défense pénale"],
    icon: <Shield className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-600",
    recommended: false
  },
  {
    id: 'comprehensive',
    name: "Assurance Tous Risques",
    description: "Protection complète pour votre véhicule",
    price: "À partir de 599€/an",
    coverage: ["Tous risques", "Vol et incendie", "Bris de glace", "Assistance 24h/24", "Véhicule de remplacement"],
    icon: <Car className="w-8 h-8" />,
    color: "bg-green-50 text-green-600",
    recommended: true
  },
  {
    id: 'premium',
    name: "Assurance Premium+",
    description: "Protection maximale avec services exclusifs",
    price: "À partir de 899€/an",
    coverage: ["Tous risques étendus", "Valeur à neuf 3 ans", "Équipements personnels", "Assistance Europe", "Conducteur secondaire"],
    icon: <Award className="w-8 h-8" />,
    color: "bg-purple-50 text-purple-600",
    recommended: false
  }
];

const additionalServices = [
  {
    name: "Assistance Dépannage",
    description: "Service d'assistance 24h/24 partout en France",
    features: ["Dépannage sur place", "Remorquage", "Véhicule de remplacement", "Rapatriement"],
    price: "+89€/an"
  },
  {
    name: "Protection Juridique",
    description: "Défense de vos intérêts en cas de litige",
    features: ["Conseil juridique", "Prise en charge frais", "Expertise contradictoire", "Recours amiable"],
    price: "+129€/an"
  },
  {
    name: "Garantie Panne Mécanique",
    description: "Extension de garantie au-delà de la garantie constructeur",
    features: ["Pièces et main d'œuvre", "Véhicule de courtoisie", "Réseau agréé", "Assistance technique"],
    price: "+199€/an"
  }
];

export default function InsurancePage() {
  const [selectedInsurance, setSelectedInsurance] = useState('comprehensive');
  const [quoteData, setQuoteData] = useState({
    vehicleModel: '',
    vehicleYear: '',
    driverAge: '',
    licenseYears: '',
    postalCode: '',
    annualMileage: '',
    parkingType: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setQuoteData(prev => ({ ...prev, [field]: value }));
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request:', quoteData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h1 className="text-5xl font-bold mb-4">Assurance Automobile</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Protégez votre véhicule et votre tranquillité d'esprit avec nos solutions d'assurance adaptées
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="types" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="types" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Types d'assurance
            </TabsTrigger>
            <TabsTrigger value="quote" className="flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Devis en ligne
            </TabsTrigger>
            <TabsTrigger value="claims" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Sinistres
            </TabsTrigger>
          </TabsList>

          {/* Types d'assurance */}
          <TabsContent value="types">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {insuranceTypes.map((insurance) => (
                <Card key={insurance.id} className={`hover:shadow-lg transition-shadow duration-300 ${insurance.recommended ? 'ring-2 ring-green-500' : ''}`}>
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-full ${insurance.color} flex items-center justify-center mx-auto mb-4`}>
                      {insurance.icon}
                    </div>
                    {insurance.recommended && (
                      <Badge className="bg-green-600 mb-2">Recommandé</Badge>
                    )}
                    <CardTitle className="text-xl">{insurance.name}</CardTitle>
                    <div className="text-2xl font-bold text-red-600">{insurance.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 text-center">{insurance.description}</p>
                    <div className="space-y-2 mb-6">
                      {insurance.coverage.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Obtenir un devis
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Services additionnels */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                Services complémentaires
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {additionalServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <div className="text-xl font-bold text-red-600">{service.price}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Devis en ligne */}
          <TabsContent value="quote">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Calculator className="w-6 h-6" />
                    Obtenir un devis personnalisé
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleQuoteSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="vehicleModel">Modèle de véhicule *</Label>
                        <Select value={quoteData.vehicleModel} onValueChange={(value) => handleInputChange('vehicleModel', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hybrid-sedan">IMA Hybrid Sedan</SelectItem>
                            <SelectItem value="electric-suv">IMA Electric SUV</SelectItem>
                            <SelectItem value="city-compact">IMA City Compact</SelectItem>
                            <SelectItem value="luxury-coupe">IMA Luxury Coupe</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vehicleYear">Année du véhicule *</Label>
                        <Select value={quoteData.vehicleYear} onValueChange={(value) => handleInputChange('vehicleYear', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Année" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="driverAge">Âge du conducteur principal *</Label>
                        <Input
                          id="driverAge"
                          type="number"
                          value={quoteData.driverAge}
                          onChange={(e) => handleInputChange('driverAge', e.target.value)}
                          placeholder="Ex: 35"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="licenseYears">Années de permis *</Label>
                        <Input
                          id="licenseYears"
                          type="number"
                          value={quoteData.licenseYears}
                          onChange={(e) => handleInputChange('licenseYears', e.target.value)}
                          placeholder="Ex: 10"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Code postal *</Label>
                        <Input
                          id="postalCode"
                          type="text"
                          value={quoteData.postalCode}
                          onChange={(e) => handleInputChange('postalCode', e.target.value)}
                          placeholder="Ex: 75008"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="annualMileage">Kilométrage annuel *</Label>
                        <Select value={quoteData.annualMileage} onValueChange={(value) => handleInputChange('annualMileage', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5000">Moins de 5 000 km</SelectItem>
                            <SelectItem value="10000">5 000 - 10 000 km</SelectItem>
                            <SelectItem value="15000">10 000 - 15 000 km</SelectItem>
                            <SelectItem value="20000">15 000 - 20 000 km</SelectItem>
                            <SelectItem value="25000">Plus de 20 000 km</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parkingType">Type de stationnement *</Label>
                      <Select value={quoteData.parkingType} onValueChange={(value) => handleInputChange('parkingType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="garage">Garage fermé</SelectItem>
                          <SelectItem value="parking">Parking couvert</SelectItem>
                          <SelectItem value="street">Rue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      <Calculator className="w-4 h-4 mr-2" />
                      Calculer mon devis
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                      <Zap className="w-6 h-6" />
                      Devis instantané
                    </h3>
                    <p className="text-green-700 mb-4">
                      Obtenez votre devis d'assurance en moins de 2 minutes
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Responsabilité Civile</span>
                        <span className="font-bold">299€/an</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tous Risques</span>
                        <span className="font-bold">599€/an</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Premium+</span>
                        <span className="font-bold">899€/an</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Pourquoi choisir notre assurance ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Tarifs compétitifs garantis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Gestion simplifiée en ligne</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Réseau de réparateurs agréés</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Service client dédié</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Sinistres */}
          <TabsContent value="claims">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                    Déclarer un sinistre
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-bold text-orange-800 mb-2">En cas d'accident</h4>
                      <ol className="list-decimal list-inside space-y-1 text-orange-700 text-sm">
                        <li>Sécurisez les lieux</li>
                        <li>Appelez les secours si nécessaire</li>
                        <li>Remplissez le constat amiable</li>
                        <li>Contactez-nous au 01 23 45 67 89</li>
                        <li>Déclarez en ligne sous 5 jours</li>
                      </ol>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-800">Déclaration en ligne</h4>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        <FileText className="w-4 h-4 mr-2" />
                        Déclarer un sinistre
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Assistance 24h/24 : 01 23 45 67 89
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Suivi de votre dossier</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Délais de traitement</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Bris de glace</span>
                          <span className="font-medium">24-48h</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Dommages matériels</span>
                          <span className="font-medium">3-5 jours</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Vol total</span>
                          <span className="font-medium">15-30 jours</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Suivre mon dossier
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Besoin de conseils personnalisés ?
              </h2>
              <p className="text-xl mb-8 text-red-100">
                Nos experts en assurance automobile sont là pour vous accompagner
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  01 23 45 67 89
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  Demander un rappel
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