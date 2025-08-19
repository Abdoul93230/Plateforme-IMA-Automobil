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
import { Slider } from '@/components/ui/slider';
import { 
  CreditCard, 
  Calculator, 
  TrendingUp,
  Shield,
  CheckCircle,
  Info,
  Phone,
  FileText,
  PiggyBank,
  Car,
  Calendar,
  Percent
} from 'lucide-react';

const financingOptions = [
  {
    id: 'credit',
    name: "Crédit Classique",
    description: "Financement traditionnel avec propriété immédiate du véhicule",
    icon: <CreditCard className="w-8 h-8" />,
    features: [
      "Propriétaire dès l'achat",
      "Durée de 12 à 84 mois",
      "Taux compétitifs à partir de 2.9%",
      "Remboursement anticipé possible",
      "Assurance emprunteur incluse"
    ],
    pros: ["Propriété immédiate", "Flexibilité de remboursement", "Pas de limite kilométrique"],
    cons: ["Mensualités plus élevées", "Dépréciation du véhicule"],
    minRate: 2.9,
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: 'loa',
    name: "Location avec Option d'Achat (LOA)",
    description: "Louez votre véhicule avec possibilité de l'acheter en fin de contrat",
    icon: <Car className="w-8 h-8" />,
    features: [
      "Mensualités réduites",
      "Option d'achat en fin de contrat",
      "Entretien et assurance inclus",
      "Véhicule toujours sous garantie",
      "Possibilité de changer de véhicule"
    ],
    pros: ["Mensualités faibles", "Véhicule récent", "Services inclus"],
    cons: ["Limite kilométrique", "Pas propriétaire", "Frais de remise en état"],
    minRate: 199,
    color: "bg-green-50 text-green-600"
  },
  {
    id: 'lld',
    name: "Location Longue Durée (LLD)",
    description: "Location tout inclus sans souci de gestion",
    icon: <Shield className="w-8 h-8" />,
    features: [
      "Tout inclus (entretien, assurance, assistance)",
      "Véhicule de remplacement",
      "Assistance 24h/24",
      "Pas de souci de revente",
      "Budget maîtrisé"
    ],
    pros: ["Aucun souci", "Budget fixe", "Services premium"],
    cons: ["Plus cher", "Pas de propriété", "Engagement long"],
    minRate: 299,
    color: "bg-purple-50 text-purple-600"
  }
];

export default function FinancingPage() {
  const [vehiclePrice, setVehiclePrice] = useState([35000]);
  const [downPayment, setDownPayment] = useState([7000]);
  const [loanTerm, setLoanTerm] = useState([60]);
  const [interestRate, setInterestRate] = useState([3.5]);
  const [selectedOption, setSelectedOption] = useState('credit');

  const calculateMonthlyPayment = () => {
    const principal = vehiclePrice[0] - downPayment[0];
    const monthlyRate = interestRate[0] / 100 / 12;
    const numPayments = loanTerm[0];
    
    if (monthlyRate === 0) {
      return principal / numPayments;
    }
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalCost = monthlyPayment * loanTerm[0] + downPayment[0];
  const totalInterest = totalCost - vehiclePrice[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Solutions de Financement</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trouvez la solution de financement qui correspond à votre budget et à vos besoins
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="options" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="options" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Options de financement
            </TabsTrigger>
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Simulateur
            </TabsTrigger>
            <TabsTrigger value="application" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Demande de financement
            </TabsTrigger>
          </TabsList>

          {/* Financing Options */}
          <TabsContent value="options">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {financingOptions.map((option) => (
                <Card key={option.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-full ${option.color} flex items-center justify-center mx-auto mb-4`}>
                      {option.icon}
                    </div>
                    <CardTitle className="text-xl">{option.name}</CardTitle>
                    <div className="text-2xl font-bold text-red-600">
                      {option.id === 'credit' ? `À partir de ${option.minRate}%` : `À partir de ${option.minRate}€/mois`}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{option.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Caractéristiques:</h4>
                      <ul className="space-y-2">
                        {option.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 mb-6">
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Avantages:</h5>
                        <ul className="text-sm space-y-1">
                          {option.pros.map((pro, index) => (
                            <li key={index} className="text-green-600">• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-700 mb-2">Inconvénients:</h5>
                        <ul className="text-sm space-y-1">
                          {option.cons.map((con, index) => (
                            <li key={index} className="text-orange-600">• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Simuler ce financement
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Comparison Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Comparaison des solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">Critère</th>
                        <th className="text-center p-4">Crédit Classique</th>
                        <th className="text-center p-4">LOA</th>
                        <th className="text-center p-4">LLD</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Propriété du véhicule</td>
                        <td className="text-center p-4">✅ Immédiate</td>
                        <td className="text-center p-4">⚠️ En option</td>
                        <td className="text-center p-4">❌ Jamais</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Mensualités</td>
                        <td className="text-center p-4">⚠️ Élevées</td>
                        <td className="text-center p-4">✅ Faibles</td>
                        <td className="text-center p-4">⚠️ Moyennes</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Entretien inclus</td>
                        <td className="text-center p-4">❌ Non</td>
                        <td className="text-center p-4">✅ Oui</td>
                        <td className="text-center p-4">✅ Oui</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Limite kilométrique</td>
                        <td className="text-center p-4">✅ Aucune</td>
                        <td className="text-center p-4">⚠️ Oui</td>
                        <td className="text-center p-4">⚠️ Oui</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Flexibilité</td>
                        <td className="text-center p-4">✅ Maximale</td>
                        <td className="text-center p-4">⚠️ Moyenne</td>
                        <td className="text-center p-4">❌ Limitée</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Calculator */}
          <TabsContent value="calculator">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Calculator className="w-6 h-6" />
                    Simulateur de financement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium">Prix du véhicule</Label>
                    <div className="mt-2">
                      <Slider
                        value={vehiclePrice}
                        onValueChange={setVehiclePrice}
                        max={80000}
                        min={15000}
                        step={1000}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>15 000€</span>
                        <span className="font-medium text-lg">{vehiclePrice[0].toLocaleString()}€</span>
                        <span>80 000€</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium">Apport personnel</Label>
                    <div className="mt-2">
                      <Slider
                        value={downPayment}
                        onValueChange={setDownPayment}
                        max={vehiclePrice[0] * 0.5}
                        min={0}
                        step={500}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>0€</span>
                        <span className="font-medium text-lg">{downPayment[0].toLocaleString()}€</span>
                        <span>{Math.round(vehiclePrice[0] * 0.5).toLocaleString()}€</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium">Durée du prêt (mois)</Label>
                    <div className="mt-2">
                      <Slider
                        value={loanTerm}
                        onValueChange={setLoanTerm}
                        max={84}
                        min={12}
                        step={12}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>12 mois</span>
                        <span className="font-medium text-lg">{loanTerm[0]} mois</span>
                        <span>84 mois</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium">Taux d'intérêt (%)</Label>
                    <div className="mt-2">
                      <Slider
                        value={interestRate}
                        onValueChange={setInterestRate}
                        max={8}
                        min={1}
                        step={0.1}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>1%</span>
                        <span className="font-medium text-lg">{interestRate[0]}%</span>
                        <span>8%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" />
                    Résultats de la simulation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-red-50 rounded-lg">
                      <div className="text-4xl font-bold text-red-600 mb-2">
                        {monthlyPayment.toLocaleString('fr-FR', { maximumFractionDigits: 0 })}€
                      </div>
                      <div className="text-gray-600">Mensualité</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-slate-800">
                          {totalCost.toLocaleString('fr-FR', { maximumFractionDigits: 0 })}€
                        </div>
                        <div className="text-sm text-gray-600">Coût total</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-slate-800">
                          {totalInterest.toLocaleString('fr-FR', { maximumFractionDigits: 0 })}€
                        </div>
                        <div className="text-sm text-gray-600">Intérêts totaux</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Prix du véhicule:</span>
                        <span className="font-medium">{vehiclePrice[0].toLocaleString()}€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Apport personnel:</span>
                        <span className="font-medium">-{downPayment[0].toLocaleString()}€</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span>Montant financé:</span>
                        <span className="font-medium">{(vehiclePrice[0] - downPayment[0]).toLocaleString()}€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Durée:</span>
                        <span className="font-medium">{loanTerm[0]} mois</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taux:</span>
                        <span className="font-medium">{interestRate[0]}%</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div className="text-sm text-blue-800">
                          <strong>Information:</strong> Cette simulation est donnée à titre indicatif. 
                          Le taux final dépendra de votre profil et de l'étude de votre dossier.
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Demander ce financement
                      </Button>
                      <Button variant="outline" className="w-full">
                        Sauvegarder cette simulation
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Application */}
          <TabsContent value="application">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Demande de financement</CardTitle>
                  <p className="text-gray-600">
                    Remplissez ce formulaire pour recevoir une offre personnalisée
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Informations personnelles</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Prénom *</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Nom *</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Téléphone *</Label>
                          <Input id="phone" type="tel" required />
                        </div>
                      </div>
                    </div>

                    {/* Financial Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Situation financière</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="income">Revenus mensuels nets *</Label>
                          <Input id="income" type="number" placeholder="€" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employment">Situation professionnelle *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="employee">Salarié CDI</SelectItem>
                              <SelectItem value="temporary">Salarié CDD</SelectItem>
                              <SelectItem value="freelance">Indépendant</SelectItem>
                              <SelectItem value="retired">Retraité</SelectItem>
                              <SelectItem value="student">Étudiant</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="expenses">Charges mensuelles</Label>
                          <Input id="expenses" type="number" placeholder="€" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="existingLoans">Crédits en cours</Label>
                          <Input id="existingLoans" type="number" placeholder="€" />
                        </div>
                      </div>
                    </div>

                    {/* Vehicle Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Véhicule souhaité</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="vehicleModel">Modèle *</Label>
                          <Select>
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
                          <Label htmlFor="vehiclePrice">Prix du véhicule *</Label>
                          <Input id="vehiclePrice" type="number" placeholder="€" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="downPayment">Apport personnel</Label>
                          <Input id="downPayment" type="number" placeholder="€" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="financingType">Type de financement *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="credit">Crédit classique</SelectItem>
                              <SelectItem value="loa">LOA</SelectItem>
                              <SelectItem value="lld">LLD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      <FileText className="w-4 h-4 mr-2" />
                      Envoyer ma demande
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Processus de demande</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-red-100 text-red-600 rounded-full p-2 text-sm font-bold">1</div>
                        <div>
                          <div className="font-medium">Demande en ligne</div>
                          <div className="text-sm text-gray-600">Remplissez le formulaire en 5 minutes</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-red-100 text-red-600 rounded-full p-2 text-sm font-bold">2</div>
                        <div>
                          <div className="font-medium">Étude du dossier</div>
                          <div className="text-sm text-gray-600">Analyse sous 24h ouvrées</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-red-100 text-red-600 rounded-full p-2 text-sm font-bold">3</div>
                        <div>
                          <div className="font-medium">Offre personnalisée</div>
                          <div className="text-sm text-gray-600">Réception de votre offre de financement</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-red-100 text-red-600 rounded-full p-2 text-sm font-bold">4</div>
                        <div>
                          <div className="font-medium">Finalisation</div>
                          <div className="text-sm text-gray-600">Signature et récupération du véhicule</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-green-800 mb-2">
                        Réponse rapide garantie
                      </h3>
                      <p className="text-green-700 text-sm">
                        Nous nous engageons à vous donner une réponse de principe sous 24h ouvrées.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Besoin d'aide ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-red-600" />
                        <div>
                          <div className="font-medium">Service financement</div>
                          <div className="text-sm text-gray-600">01 23 45 67 89</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Nos conseillers sont disponibles du lundi au vendredi de 9h à 18h 
                        pour vous accompagner dans votre projet de financement.
                      </div>
                      <Button variant="outline" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Être rappelé
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}