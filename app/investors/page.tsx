'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Calendar,
  Download,
  FileText,
  Users,
  Target,
  Award,
  Globe,
  Building,
  PieChart
} from 'lucide-react';

const financialHighlights = [
  { label: "Chiffre d'affaires 2023", value: "2.8 Md€", change: "+15.2%", positive: true },
  { label: "Bénéfice net", value: "285 M€", change: "+22.1%", positive: true },
  { label: "Marge opérationnelle", value: "12.5%", change: "+1.8pt", positive: true },
  { label: "Véhicules vendus", value: "185 000", change: "+18.5%", positive: true }
];

const quarterlyResults = [
  { quarter: "Q4 2023", revenue: "780M€", growth: "+12.3%", vehicles: "52,000" },
  { quarter: "Q3 2023", revenue: "720M€", growth: "+18.7%", vehicles: "48,500" },
  { quarter: "Q2 2023", revenue: "695M€", growth: "+14.2%", vehicles: "46,200" },
  { quarter: "Q1 2023", revenue: "605M€", growth: "+16.8%", vehicles: "38,300" }
];

const documents = [
  {
    title: "Rapport annuel 2023",
    type: "PDF",
    size: "2.4 MB",
    date: "Mars 2024",
    category: "annual"
  },
  {
    title: "Résultats Q4 2023",
    type: "PDF",
    size: "1.8 MB",
    date: "Février 2024",
    category: "quarterly"
  },
  {
    title: "Présentation investisseurs",
    type: "PDF",
    size: "3.2 MB",
    date: "Mars 2024",
    category: "presentation"
  },
  {
    title: "Document de référence",
    type: "PDF",
    size: "4.1 MB",
    date: "Avril 2024",
    category: "reference"
  }
];

const upcomingEvents = [
  {
    date: "15 Mai 2024",
    time: "14:00",
    event: "Assemblée Générale Annuelle",
    location: "Paris, Palais des Congrès",
    type: "AG"
  },
  {
    date: "28 Mai 2024",
    time: "09:00",
    event: "Résultats Q1 2024",
    location: "Webconférence",
    type: "Résultats"
  },
  {
    date: "12 Juin 2024",
    time: "10:30",
    event: "Salon de l'Automobile - Présentation",
    location: "Frankfurt",
    type: "Salon"
  }
];

const keyMetrics = [
  {
    title: "Performance financière",
    metrics: [
      { label: "ROE", value: "18.5%", description: "Rentabilité des capitaux propres" },
      { label: "EBITDA", value: "425 M€", description: "Résultat opérationnel" },
      { label: "Free Cash Flow", value: "195 M€", description: "Flux de trésorerie libre" }
    ]
  },
  {
    title: "Indicateurs opérationnels",
    metrics: [
      { label: "Part de marché", value: "8.2%", description: "En France" },
      { label: "Satisfaction client", value: "94%", description: "Indice de satisfaction" },
      { label: "Réseau", value: "200+", description: "Points de vente" }
    ]
  }
];

export default function InvestorsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDocuments = selectedCategory === 'all' 
    ? documents 
    : documents.filter(doc => doc.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h1 className="text-5xl font-bold mb-4">Relations Investisseurs</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Informations financières, résultats et perspectives d'IMA Automobil
            </p>
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">2.8 Md€</div>
                <div className="text-gray-300">CA 2023</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">+15.2%</div>
                <div className="text-gray-300">Croissance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">185K</div>
                <div className="text-gray-300">Véhicules vendus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Financial Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Faits marquants financiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    {highlight.value}
                  </div>
                  <div className="text-gray-600 mb-3">{highlight.label}</div>
                  <Badge 
                    className={highlight.positive ? 'bg-green-600' : 'bg-red-600'}
                  >
                    {highlight.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Tabs defaultValue="results" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="results" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Résultats
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Événements
            </TabsTrigger>
            <TabsTrigger value="governance" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Gouvernance
            </TabsTrigger>
          </TabsList>

          {/* Results Tab */}
          <TabsContent value="results">
            <div className="space-y-8">
              {/* Quarterly Results */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-red-600" />
                    Résultats trimestriels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-4 font-semibold">Trimestre</th>
                          <th className="text-left p-4 font-semibold">Chiffre d'affaires</th>
                          <th className="text-left p-4 font-semibold">Croissance</th>
                          <th className="text-left p-4 font-semibold">Véhicules vendus</th>
                        </tr>
                      </thead>
                      <tbody>
                        {quarterlyResults.map((result, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-4 font-medium">{result.quarter}</td>
                            <td className="p-4">{result.revenue}</td>
                            <td className="p-4">
                              <Badge className="bg-green-600">{result.growth}</Badge>
                            </td>
                            <td className="p-4">{result.vehicles}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {keyMetrics.map((section, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {section.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <div className="font-semibold text-slate-800">{metric.label}</div>
                              <div className="text-sm text-gray-600">{metric.description}</div>
                            </div>
                            <div className="text-2xl font-bold text-red-600">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <div className="space-y-6">
              {/* Filter */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      variant={selectedCategory === 'all' ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory('all')}
                      size="sm"
                    >
                      Tous les documents
                    </Button>
                    <Button 
                      variant={selectedCategory === 'annual' ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory('annual')}
                      size="sm"
                    >
                      Rapports annuels
                    </Button>
                    <Button 
                      variant={selectedCategory === 'quarterly' ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory('quarterly')}
                      size="sm"
                    >
                      Résultats trimestriels
                    </Button>
                    <Button 
                      variant={selectedCategory === 'presentation' ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory('presentation')}
                      size="sm"
                    >
                      Présentations
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Documents List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredDocuments.map((doc, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                            <FileText className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-800">{doc.title}</h3>
                            <div className="text-sm text-gray-600">{doc.date}</div>
                          </div>
                        </div>
                        <Badge variant="outline">{doc.type}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{doc.size}</span>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          <Download className="w-4 h-4 mr-2" />
                          Télécharger
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-red-600" />
                    Événements à venir
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-red-600">{event.date.split(' ')[0]}</div>
                            <div className="text-sm text-gray-600">{event.date.split(' ')[1]} {event.date.split(' ')[2]}</div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-800">{event.event}</h3>
                            <div className="text-sm text-gray-600">{event.location} • {event.time}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">{event.type}</Badge>
                          <Button size="sm" variant="outline">
                            S'inscrire
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Calendar */}
              <Card>
                <CardHeader>
                  <CardTitle>Calendrier financier 2024</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Résultats trimestriels</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Q1 2024</span>
                          <span className="text-gray-600">28 Mai 2024</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Q2 2024</span>
                          <span className="text-gray-600">25 Juillet 2024</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Q3 2024</span>
                          <span className="text-gray-600">24 Octobre 2024</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Événements majeurs</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Assemblée Générale</span>
                          <span className="text-gray-600">15 Mai 2024</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Salon de Francfort</span>
                          <span className="text-gray-600">12-16 Juin 2024</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Investor Day</span>
                          <span className="text-gray-600">15 Septembre 2024</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Governance Tab */}
          <TabsContent value="governance">
            <div className="space-y-8">
              {/* Board of Directors */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Users className="w-6 h-6 text-red-600" />
                    Conseil d'Administration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: "Marie Dubois", role: "Présidente-Directrice Générale", experience: "20 ans dans l'automobile" },
                      { name: "Pierre Martin", role: "Directeur Général Délégué", experience: "15 ans chez IMA" },
                      { name: "Sophie Laurent", role: "Administratrice Indépendante", experience: "Expert-comptable" },
                      { name: "Jean Dupont", role: "Administrateur", experience: "Ancien PDG constructeur" },
                      { name: "Claire Moreau", role: "Administratrice", experience: "Spécialiste RSE" },
                      { name: "Michel Bernard", role: "Administrateur", experience: "Expert financier" }
                    ].map((member, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-gray-200 w-20 h-20 rounded-full mx-auto mb-3"></div>
                        <h3 className="font-semibold text-slate-800">{member.name}</h3>
                        <p className="text-sm text-red-600 mb-1">{member.role}</p>
                        <p className="text-xs text-gray-600">{member.experience}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Corporate Governance */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Gouvernance d'entreprise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Code de gouvernance AFEP-MEDEF</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Comité d'audit indépendant</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Comité des rémunérations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-green-600" />
                        <span className="text-sm">40% d'administrateurs indépendants</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Informations réglementées</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="w-4 h-4 mr-2" />
                        Statuts de la société
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="w-4 h-4 mr-2" />
                        Règlement intérieur du CA
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="w-4 h-4 mr-2" />
                        Code de conduite
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="w-4 h-4 mr-2" />
                        Politique de rémunération
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact Investors */}
        <section className="mt-16">
          <Card className="bg-slate-800 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Contact Relations Investisseurs
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Notre équipe est à votre disposition pour répondre à vos questions
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div>
                  <h3 className="font-semibold mb-2">Marie Dubois</h3>
                  <p className="text-gray-300 text-sm mb-2">Directrice Relations Investisseurs</p>
                  <p className="text-gray-300 text-sm">marie.dubois@ima-automobil.fr</p>
                  <p className="text-gray-300 text-sm">+33 1 23 45 67 89</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Pierre Martin</h3>
                  <p className="text-gray-300 text-sm mb-2">Directeur Financier</p>
                  <p className="text-gray-300 text-sm">pierre.martin@ima-automobil.fr</p>
                  <p className="text-gray-300 text-sm">+33 1 23 45 67 90</p>
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