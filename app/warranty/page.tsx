'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  Phone,
  FileText,
  Car,
  Wrench,
  AlertTriangle,
  Calendar,
  MapPin,
  Award,
  Users,
  Settings
} from 'lucide-react';

const warrantyTypes = [
  {
    name: "Garantie Constructeur",
    duration: "7 ans ou 150 000 km",
    description: "Garantie complète sur tous les véhicules neufs IMA",
    coverage: [
      "Défauts de fabrication",
      "Pièces et main d'œuvre",
      "Assistance dépannage 24h/24",
      "Véhicule de remplacement",
      "Réseau agréé IMA"
    ],
    icon: <Shield className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    name: "Garantie Batterie (Électrique)",
    duration: "8 ans ou 160 000 km",
    description: "Protection spéciale pour les batteries des véhicules électriques",
    coverage: [
      "Capacité batterie garantie 70%",
      "Remplacement gratuit si défaillance",
      "Diagnostic électronique inclus",
      "Mise à jour logicielle",
      "Support technique spécialisé"
    ],
    icon: <Car className="w-8 h-8" />,
    color: "bg-green-50 text-green-600"
  },
  {
    name: "Garantie Étendue",
    duration: "Jusqu'à 10 ans",
    description: "Extension de garantie au-delà de la garantie constructeur",
    coverage: [
      "Prolongation de la couverture",
      "Pièces d'usure incluses",
      "Assistance Europe",
      "Transfert possible",
      "Remboursement proportionnel"
    ],
    icon: <Award className="w-8 h-8" />,
    color: "bg-purple-50 text-purple-600"
  }
];

const warrantyProcess = [
  {
    step: "1. Diagnostic",
    description: "Prise de rendez-vous et diagnostic du problème",
    duration: "Même jour",
    icon: <Settings className="w-6 h-6" />
  },
  {
    step: "2. Validation",
    description: "Vérification de la prise en charge garantie",
    duration: "24h",
    icon: <CheckCircle className="w-6 h-6" />
  },
  {
    step: "3. Réparation",
    description: "Intervention par un technicien certifié",
    duration: "2-5 jours",
    icon: <Wrench className="w-6 h-6" />
  },
  {
    step: "4. Livraison",
    description: "Récupération de votre véhicule réparé",
    duration: "Immédiat",
    icon: <Car className="w-6 h-6" />
  }
];

const exclusions = [
  "Dommages dus à un accident",
  "Usure normale des pièces d'entretien",
  "Modifications non autorisées",
  "Négligence d'entretien",
  "Utilisation non conforme"
];

const maintenanceSchedule = [
  { service: "Première révision", km: "10 000", months: "12", covered: true },
  { service: "Révision majeure", km: "20 000", months: "24", covered: true },
  { service: "Contrôle technique", km: "30 000", months: "36", covered: false },
  { service: "Révision complète", km: "40 000", months: "48", covered: true },
  { service: "Révision majeure", km: "50 000", months: "60", covered: true }
];

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h1 className="text-5xl font-bold mb-4">Garantie & Protection</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Votre tranquillité d'esprit avec nos garanties complètes et notre service après-vente d'excellence
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="types" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="types" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Types de garantie
            </TabsTrigger>
            <TabsTrigger value="process" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Processus
            </TabsTrigger>
            <TabsTrigger value="maintenance" className="flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Entretien
            </TabsTrigger>
          </TabsList>

          {/* Types de garantie */}
          <TabsContent value="types">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {warrantyTypes.map((warranty, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-full ${warranty.color} flex items-center justify-center mx-auto mb-4`}>
                      {warranty.icon}
                    </div>
                    <CardTitle className="text-xl">{warranty.name}</CardTitle>
                    <div className="text-2xl font-bold text-red-600">{warranty.duration}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 text-center">{warranty.description}</p>
                    <div className="space-y-2 mb-6">
                      {warranty.coverage.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      En savoir plus
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Exclusions */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800">
                  <AlertTriangle className="w-6 h-6" />
                  Exclusions de garantie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700 mb-4">
                  Les éléments suivants ne sont pas couverts par la garantie constructeur :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exclusions.map((exclusion, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span className="text-sm text-yellow-700">{exclusion}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Processus */}
          <TabsContent value="process">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Processus de prise en charge garantie</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {warrantyProcess.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        {step.icon}
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-2">{step.step}</h3>
                      <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                      <Badge variant="outline">{step.duration}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Entretien */}
          <TabsContent value="maintenance">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Plan d'entretien garantie</CardTitle>
                <p className="text-gray-600">
                  Respectez le plan d'entretien pour maintenir votre garantie
                </p>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-semibold">Service</th>
                        <th className="text-left p-4 font-semibold">Kilométrage</th>
                        <th className="text-left p-4 font-semibold">Mois</th>
                        <th className="text-left p-4 font-semibold">Couvert par garantie</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maintenanceSchedule.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-4">{item.service}</td>
                          <td className="p-4">{item.km} km</td>
                          <td className="p-4">{item.months} mois</td>
                          <td className="p-4">
                            {item.covered ? (
                              <Badge className="bg-green-600">Oui</Badge>
                            ) : (
                              <Badge variant="outline">Non</Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}