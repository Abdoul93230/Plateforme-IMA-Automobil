'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Target,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Globe,
  Smartphone,
  Shield,
  Zap,
  Car,
  Settings,
  Award,
  DollarSign,
  Clock,
  Eye,
  Heart,
  Star,
  Wrench,
  MapPin,
  CreditCard,
  Package,
  Headphones,
  Building,
  Leaf,
  Lock,
  Search,
  Filter,
  Share2,
  Calendar,
  MessageSquare,
  FileText,
  Database,
  Code,
  Layers,
  Monitor,
  Server,
  Cloud,
  Sun,
  Home,
  Truck,
  Phone,
  Mail,
  Navigation,
  AlertTriangle,
  Info,
  Lightbulb,
  Flag
} from 'lucide-react';

const nigerChallenges = [
  {
    title: "Manque de Transparence",
    description: "Les Nigériens n'ont pas accès aux informations complètes sur les véhicules",
    impact: "Méfiance et transactions longues",
    icon: <Eye className="w-6 h-6" />,
    color: "bg-red-50 text-red-600",
    stats: "85% des acheteurs se plaignent du manque d'information"
  },
  {
    title: "Processus Traditionnel Lent",
    description: "Négociations physiques prolongées, vérifications manuelles",
    impact: "Perte de temps et d'opportunités",
    icon: <Clock className="w-6 h-6" />,
    color: "bg-orange-50 text-orange-600",
    stats: "Moyenne de 3 semaines pour finaliser un achat"
  },
  {
    title: "Accès Limité aux Véhicules",
    description: "Choix restreint, pas de visibilité sur l'inventaire disponible",
    impact: "Frustration et abandon d'achat",
    icon: <Car className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600",
    stats: "60% des clients abandonnent par manque de choix"
  },
  {
    title: "Financement Complexe",
    description: "Procédures bancaires longues et opaques",
    impact: "Exclusion de nombreux acheteurs potentiels",
    icon: <CreditCard className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600",
    stats: "70% des Nigériens n'ont pas accès au crédit auto"
  }
];

const culturalInsights = [
  {
    insight: "Confiance par la Communauté",
    description: "Les Nigériens font confiance aux recommandations de leur entourage",
    solution: "Système d'avis clients et témoignages vidéo intégrés",
    icon: <Users className="w-6 h-6" />
  },
  {
    insight: "Négociation Culturelle",
    description: "La négociation fait partie de la culture d'achat nigérienne",
    solution: "Système d'offres personnalisées et de négociation assistée",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    insight: "Famille et Décision Collective",
    description: "Les décisions importantes impliquent souvent la famille élargie",
    solution: "Partage de configurations et consultation familiale en ligne",
    icon: <Home className="w-6 h-6" />
  },
  {
    insight: "Respect des Aînés",
    description: "L'avis des anciens est crucial dans les décisions d'achat",
    solution: "Interface simple et assistance téléphonique dédiée",
    icon: <Heart className="w-6 h-6" />
  }
];

const revolutionaryChanges = [
  {
    before: "Se déplacer physiquement dans plusieurs concessions",
    after: "Explorer tous les véhicules depuis son téléphone",
    impact: "Économie de temps et d'argent de transport",
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    before: "Négociations longues et opaques",
    after: "Prix transparents et configurateur en temps réel",
    impact: "Confiance renforcée et décisions éclairées",
    icon: <Shield className="w-8 h-8" />
  },
  {
    before: "Informations limitées et parfois inexactes",
    after: "Fiches complètes avec photos, vidéos et spécifications",
    impact: "Achat en toute connaissance de cause",
    icon: <FileText className="w-8 h-8" />
  },
  {
    before: "Financement complexe et bureaucratique",
    after: "Simulation instantanée et demande en ligne",
    impact: "Accès démocratisé au crédit automobile",
    icon: <CreditCard className="w-8 h-8" />
  }
];

const businessImpact = [
  {
    metric: "Augmentation des Ventes",
    value: "+45%",
    description: "Grâce à l'élargissement du marché digital",
    reasoning: "Accès à la diaspora nigérienne et aux jeunes urbains connectés",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    metric: "Réduction Coûts Opérationnels",
    value: "-30%",
    description: "Automatisation des processus de vente",
    reasoning: "Moins de personnel nécessaire, processus digitalisés",
    icon: <DollarSign className="w-6 h-6" />
  },
  {
    metric: "Amélioration Satisfaction Client",
    value: "+60%",
    description: "Expérience moderne et transparente",
    reasoning: "Confiance renforcée par la transparence et la qualité de service",
    icon: <Star className="w-6 h-6" />
  },
  {
    metric: "Expansion Géographique",
    value: "+200%",
    description: "Couverture de tout le territoire nigérien",
    reasoning: "Vente en ligne sans contrainte géographique",
    icon: <Globe className="w-6 h-6" />
  }
];

const nigerianMarketData = [
  { label: "Population urbaine connectée", value: "3.2M", growth: "+15%/an" },
  { label: "Utilisateurs smartphone", value: "8.5M", growth: "+25%/an" },
  { label: "Marché automobile", value: "45M€", growth: "+12%/an" },
  { label: "Diaspora nigérienne", value: "2M", growth: "Marché inexploité" }
];

const successStories = [
  {
    country: "Ghana",
    platform: "Neostar Motors",
    results: "+180% ventes en ligne en 18 mois",
    context: "Marché similaire, même défis culturels"
  },
  {
    country: "Côte d'Ivoire",
    platform: "AutoIvoire",
    results: "+120% satisfaction client",
    context: "Digitalisation réussie du secteur auto"
  },
  {
    country: "Sénégal",
    platform: "DakarAuto",
    results: "+90% nouveaux clients jeunes",
    context: "Attraction de la nouvelle génération"
  }
];

const implementationPhases = [
  {
    phase: "Phase 1 - Lancement Niamey",
    duration: "2 mois",
    description: "Déploiement dans la capitale avec formation équipes",
    deliverables: ["Plateforme opérationnelle", "Formation équipe", "Marketing de lancement"],
    investment: "25 000€"
  },
  {
    phase: "Phase 2 - Expansion Régionale",
    duration: "4 mois",
    description: "Extension aux principales villes (Zinder, Maradi, Tahoua)",
    deliverables: ["Réseau étendu", "Partenariats locaux", "Support multilingue"],
    investment: "40 000€"
  },
  {
    phase: "Phase 3 - Optimisation",
    duration: "6 mois",
    description: "Amélioration continue basée sur les retours utilisateurs",
    deliverables: ["IA personnalisation", "App mobile", "Services avancés"],
    investment: "35 000€"
  }
];

export default function NigerPresentationPage() {
  const [activeSection, setActiveSection] = useState('context');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section Spécifique Niger */}
      <section className="relative bg-gradient-to-r from-green-600 via-orange-500 to-red-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Flag className="w-12 h-12" />
              <Badge className="bg-white text-slate-800 px-6 py-3 text-xl font-bold">
                République du Niger
              </Badge>
            </div>
            <h1 className="text-6xl font-bold mb-6">
              IMA Automobil Niger
              <span className="block text-4xl text-orange-200 mt-2">
                Révolutionner l'Automobile au Cœur de l'Afrique
              </span>
            </h1>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              La première plateforme automobile digitale du Niger qui transforme 
              la façon dont les Nigériens découvrent, choisissent et achètent leurs véhicules
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {nigerianMarketData.map((data, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">{data.value}</div>
                  <div className="text-sm text-gray-200">{data.label}</div>
                  <div className="text-xs text-green-300">{data.growth}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="context">Contexte Niger</TabsTrigger>
            <TabsTrigger value="challenges">Défis Actuels</TabsTrigger>
            <TabsTrigger value="solution">Notre Solution</TabsTrigger>
            <TabsTrigger value="impact">Impact Business</TabsTrigger>
            <TabsTrigger value="proof">Preuves & Cas</TabsTrigger>
            <TabsTrigger value="deployment">Déploiement</TabsTrigger>
          </TabsList>

          {/* Contexte Niger */}
          <TabsContent value="context">
            <div className="space-y-8">
              <Card className="bg-gradient-to-r from-green-50 to-orange-50 border-orange-200">
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-slate-800 mb-4">
                      Le Niger : Un Marché en Pleine Transformation
                    </h2>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                      Avec 25 millions d'habitants et une croissance économique de 7% par an, 
                      le Niger représente une opportunité exceptionnelle pour l'industrie automobile moderne.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">25M</div>
                      <div className="text-gray-700">Population totale</div>
                      <div className="text-sm text-green-600">+3.8% croissance/an</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-orange-600 mb-2">45%</div>
                      <div className="text-gray-700">Population urbaine</div>
                      <div className="text-sm text-orange-600">En forte croissance</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-red-600 mb-2">8.5M</div>
                      <div className="text-gray-700">Utilisateurs mobile</div>
                      <div className="text-sm text-red-600">+25% par an</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">65%</div>
                      <div className="text-gray-700">Jeunes -35 ans</div>
                      <div className="text-sm text-blue-600">Très connectés</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Users className="w-6 h-6 text-green-600" />
                      Mentalité et Habitudes Nigériennes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {culturalInsights.map((insight, index) => (
                        <div key={index} className="border-l-4 border-green-500 pl-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="text-green-600">{insight.icon}</div>
                            <h4 className="font-semibold text-slate-800">{insight.insight}</h4>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{insight.description}</p>
                          <p className="text-green-700 text-sm font-medium">
                            💡 Solution : {insight.solution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Smartphone className="w-6 h-6 text-blue-600" />
                      Révolution Digitale en Cours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">8.5M</div>
                        <div className="text-gray-700">Nigériens utilisent un smartphone</div>
                        <div className="text-sm text-blue-600">+25% chaque année</div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Paiement mobile (Orange Money, etc.)</span>
                          <Badge className="bg-green-600">78% adoption</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">E-commerce (Jumia, etc.)</span>
                          <Badge className="bg-blue-600">45% utilisent</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Réseaux sociaux</span>
                          <Badge className="bg-purple-600">85% actifs</Badge>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Opportunité Unique</h4>
                        <p className="text-blue-700 text-sm">
                          Les Nigériens sont prêts pour le digital, mais aucune plateforme automobile 
                          moderne n'existe encore. C'est le moment parfait pour être pionnier !
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Défis Actuels */}
          <TabsContent value="challenges">
            <div className="space-y-8">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
                    Les Défis Quotidiens des Nigériens
                  </h2>
                  <p className="text-red-700 text-center text-lg mb-8">
                    Chaque jour, des milliers de Nigériens vivent ces frustrations lors de l'achat d'un véhicule
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {nigerChallenges.map((challenge, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full ${challenge.color} flex items-center justify-center`}>
                          {challenge.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{challenge.title}</CardTitle>
                          <Badge variant="destructive" className="mt-1">{challenge.stats}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{challenge.description}</p>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-1">Impact :</h4>
                        <p className="text-red-700 text-sm">{challenge.impact}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Témoignage Client Fictif */}
              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-yellow-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-800 mb-4">
                      Témoignage d'Amadou, Entrepreneur à Niamey
                    </h3>
                    <blockquote className="text-lg text-yellow-700 italic mb-4">
                      "J'ai passé 3 semaines à chercher un véhicule pour mon entreprise. 
                      Entre les déplacements, les négociations et les vérifications, 
                      j'ai perdu un temps précieux. Si j'avais pu tout faire en ligne 
                      avec des informations fiables, j'aurais économisé 2 semaines et 50 000 FCFA de transport."
                    </blockquote>
                    <p className="text-yellow-600 font-medium">
                      Cette histoire se répète pour des milliers de Nigériens chaque mois
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notre Solution */}
          <TabsContent value="solution">
            <div className="space-y-8">
              <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <CardContent className="p-12">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold mb-6">
                      IMA Automobil : La Révolution Automobile Nigérienne
                    </h2>
                    <p className="text-2xl text-gray-200 mb-8">
                      Transformons ensemble la façon dont les Nigériens vivent l'automobile
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-slate-800">Avant vs Après IMA</h3>
                  {revolutionaryChanges.map((change, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                            {change.icon}
                          </div>
                          <div className="flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-red-50 p-3 rounded-lg">
                                <h4 className="font-semibold text-red-800 mb-1">❌ Avant</h4>
                                <p className="text-red-700 text-sm">{change.before}</p>
                              </div>
                              <div className="bg-green-50 p-3 rounded-lg">
                                <h4 className="font-semibold text-green-800 mb-1">✅ Avec IMA</h4>
                                <p className="text-green-700 text-sm">{change.after}</p>
                              </div>
                            </div>
                            <div className="mt-3 bg-blue-50 p-2 rounded">
                              <p className="text-blue-700 text-sm font-medium">
                                💡 {change.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div>
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle className="text-2xl">Fonctionnalités Développées</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { name: "Catalogue Véhicules Complet", status: "✅ Opérationnel" },
                          { name: "Configurateur Build & Price", status: "✅ Opérationnel" },
                          { name: "Recherche d'Inventaire", status: "✅ Opérationnel" },
                          { name: "Système de Financement", status: "✅ Opérationnel" },
                          { name: "Espace Client Sécurisé", status: "✅ Opérationnel" },
                          { name: "Services Après-Vente", status: "✅ Opérationnel" },
                          { name: "Interface Mobile Optimisée", status: "✅ Opérationnel" },
                          { name: "Système de Paiement", status: "✅ Opérationnel" },
                          { name: "Support Multilingue", status: "✅ Opérationnel" },
                          { name: "Conformité RGPD", status: "✅ Opérationnel" }
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                            <span className="font-medium">{feature.name}</span>
                            <Badge className="bg-green-600">{feature.status}</Badge>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-bold text-blue-800 mb-2">Prêt pour le Déploiement</h4>
                        <p className="text-blue-700 text-sm">
                          La plateforme est 100% développée et testée. 
                          Déploiement possible en 2 semaines au Niger.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Impact Business */}
          <TabsContent value="impact">
            <div className="space-y-8">
              <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                    Impact Transformationnel pour IMA Automobil
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {businessImpact.map((impact, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                        <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                          {impact.icon}
                        </div>
                        <div className="text-4xl font-bold mb-2">{impact.value}</div>
                        <div className="text-lg font-semibold mb-2">{impact.metric}</div>
                        <div className="text-sm text-gray-200 mb-2">{impact.description}</div>
                        <div className="text-xs text-gray-300">{impact.reasoning}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* ROI Détaillé */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                    Retour sur Investissement Projeté
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-4">Revenus Additionnels (Année 1)</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span>Ventes en ligne (+45%)</span>
                          <span className="font-bold text-green-600">+180M FCFA</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span>Nouveaux clients digitaux</span>
                          <span className="font-bold text-blue-600">+120M FCFA</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                          <span>Services après-vente</span>
                          <span className="font-bold text-purple-600">+80M FCFA</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border-2 border-orange-300">
                          <span className="font-bold">Total Revenus Additionnels</span>
                          <span className="font-bold text-orange-600 text-xl">+380M FCFA</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-4">Économies Réalisées (Année 1)</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span>Réduction personnel vente</span>
                          <span className="font-bold text-green-600">-45M FCFA</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span>Marketing traditionnel</span>
                          <span className="font-bold text-blue-600">-30M FCFA</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                          <span>Processus administratifs</span>
                          <span className="font-bold text-purple-600">-25M FCFA</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border-2 border-orange-300">
                          <span className="font-bold">Total Économies</span>
                          <span className="font-bold text-orange-600 text-xl">-100M FCFA</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg text-center">
                    <h3 className="text-2xl font-bold mb-2">Impact Total Année 1</h3>
                    <div className="text-5xl font-bold mb-2">+480M FCFA</div>
                    <p className="text-lg">Soit +32% de croissance du chiffre d'affaires</p>
                  </div>
                </CardContent>
              </Card>

              {/* Crédibilité et Positionnement */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Award className="w-6 h-6 text-gold-600" />
                    Renforcement de la Crédibilité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8" />
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2">Leader Technologique</h4>
                      <p className="text-gray-600 text-sm">
                        Premier constructeur au Niger avec une plateforme digitale complète
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8" />
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2">Confiance Renforcée</h4>
                      <p className="text-gray-600 text-sm">
                        Transparence totale qui rassure les clients nigériens
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8" />
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2">Rayonnement International</h4>
                      <p className="text-gray-600 text-sm">
                        Attraction de la diaspora et des investisseurs
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Preuves et Cas */}
          <TabsContent value="proof">
            <div className="space-y-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                    Succès Prouvés en Afrique de l'Ouest
                  </h2>
                  <p className="text-blue-700 text-center text-lg">
                    Des plateformes similaires ont déjà transformé le marché automobile dans des pays voisins
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {successStories.map((story, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">{story.country}</h3>
                        <p className="text-gray-600 text-sm">{story.platform}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg mb-4">
                        <p className="text-green-800 font-bold text-center">{story.results}</p>
                      </div>
                      <p className="text-gray-600 text-sm text-center">{story.context}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Étude de Marché Niger */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-red-600" />
                    Étude de Marché Spécifique Niger
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-4">Potentiel de Marché</h4>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">Marché automobile actuel</span>
                            <span className="text-2xl font-bold text-green-600">45M€</span>
                          </div>
                          <p className="text-green-700 text-sm">Croissance annuelle de 12%</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">Marché digital potentiel</span>
                            <span className="text-2xl font-bold text-blue-600">18M€</span>
                          </div>
                          <p className="text-blue-700 text-sm">40% du marché total accessible en ligne</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">Part de marché cible</span>
                            <span className="text-2xl font-bold text-purple-600">25%</span>
                          </div>
                          <p className="text-purple-700 text-sm">Objectif réaliste avec notre avance technologique</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-4">Avantages Concurrentiels</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                          <Zap className="w-5 h-5 text-yellow-600" />
                          <span className="text-sm">Premier sur le marché digital nigérien</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <Shield className="w-5 h-5 text-green-600" />
                          <span className="text-sm">Plateforme sécurisée et conforme</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <Smartphone className="w-5 h-5 text-blue-600" />
                          <span className="text-sm">Optimisé pour les smartphones populaires</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                          <Globe className="w-5 h-5 text-purple-600" />
                          <span className="text-sm">Adapté à la culture nigérienne</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Déploiement */}
          <TabsContent value="deployment">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl text-center">Plan de Déploiement Niger</CardTitle>
                  <p className="text-center text-gray-600">Stratégie progressive pour une adoption réussie</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {implementationPhases.map((phase, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start gap-6">
                          <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                              <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{phase.phase}</h3>
                                <Badge className="mb-3">{phase.duration}</Badge>
                                <p className="text-gray-600">{phase.description}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-slate-700 mb-2">Livrables :</h4>
                                <ul className="space-y-1">
                                  {phase.deliverables.map((deliverable, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                      <CheckCircle className="w-3 h-3 text-green-600" />
                                      {deliverable}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="text-center">
                                <div className="bg-red-50 p-4 rounded-lg">
                                  <div className="text-2xl font-bold text-red-600">{phase.investment}</div>
                                  <div className="text-sm text-red-700">Investissement</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {index < implementationPhases.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-16 bg-red-200"></div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">Investissement Total : 100 000€</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white/20 p-4 rounded-lg">
                          <div className="text-2xl font-bold">ROI</div>
                          <div className="text-3xl font-bold">380%</div>
                          <div className="text-sm">Sur 2 ans</div>
                        </div>
                        <div className="bg-white/20 p-4 rounded-lg">
                          <div className="text-2xl font-bold">Break-even</div>
                          <div className="text-3xl font-bold">4 mois</div>
                          <div className="text-sm">Retour rapide</div>
                        </div>
                        <div className="bg-white/20 p-4 rounded-lg">
                          <div className="text-2xl font-bold">Bénéfice net</div>
                          <div className="text-3xl font-bold">280M FCFA</div>
                          <div className="text-sm">Première année</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action Final */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-green-600 via-orange-500 to-red-600 text-white">
            <CardContent className="p-12 text-center">
              <Flag className="w-20 h-20 mx-auto mb-6 opacity-80" />
              <h2 className="text-4xl font-bold mb-6">
                Soyez Pionnier de la Révolution Automobile Nigérienne
              </h2>
              <p className="text-2xl mb-8 text-gray-200">
                Cette opportunité unique ne se représentera pas. 
                Devenez le leader incontesté du marché automobile digital au Niger.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <Zap className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                  <h3 className="font-bold mb-2">Avantage Concurrentiel</h3>
                  <p className="text-sm">18 mois d'avance sur la concurrence</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <TrendingUp className="w-8 h-8 mx-auto mb-3 text-green-300" />
                  <h3 className="font-bold mb-2">Croissance Garantie</h3>
                  <p className="text-sm">+45% de ventes dès la première année</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <Award className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                  <h3 className="font-bold mb-2">Leadership Établi</h3>
                  <p className="text-sm">Référence incontournable au Niger</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-12 py-4 text-xl">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Lancer le Projet Maintenant
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-12 py-4 text-xl">
                  <Calendar className="w-6 h-6 mr-2" />
                  Planifier une Démo Personnalisée
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