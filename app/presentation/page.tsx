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
  Cloud
} from 'lucide-react';

const businessMetrics = [
  { label: "Augmentation des ventes", value: "+35%", description: "Grâce au configurateur en ligne", icon: <TrendingUp className="w-6 h-6" /> },
  { label: "Réduction coûts marketing", value: "-25%", description: "Marketing digital ciblé", icon: <DollarSign className="w-6 h-6" /> },
  { label: "Satisfaction client", value: "94%", description: "Expérience utilisateur optimisée", icon: <Heart className="w-6 h-6" /> },
  { label: "Temps de conversion", value: "-40%", description: "Parcours d'achat simplifié", icon: <Clock className="w-6 h-6" /> }
];

const competitorAnalysis = [
  {
    competitor: "Toyota France",
    strengths: ["Notoriété", "Réseau établi"],
    weaknesses: ["UX datée", "Configurateur limité", "Mobile non optimisé"],
    ourAdvantage: "Interface moderne, configurateur avancé, mobile-first"
  },
  {
    competitor: "Peugeot",
    strengths: ["Design", "Innovation"],
    weaknesses: ["Navigation complexe", "Temps de chargement"],
    ourAdvantage: "Navigation intuitive, performance optimisée"
  },
  {
    competitor: "Renault",
    strengths: ["Électrique", "Services"],
    weaknesses: ["Expérience fragmentée", "Manque de personnalisation"],
    ourAdvantage: "Expérience unifiée, personnalisation poussée"
  }
];

const technicalFeatures = [
  {
    category: "Frontend",
    technologies: ["Next.js 13", "React 18", "TypeScript", "Tailwind CSS"],
    features: ["SSR/SSG", "Responsive Design", "PWA Ready", "SEO Optimisé"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    features: ["API REST", "Authentification", "Sécurité OWASP", "Cache Redis"]
  },
  {
    category: "DevOps",
    technologies: ["Docker", "CI/CD", "AWS/Azure", "Monitoring"],
    features: ["Déploiement automatisé", "Scalabilité", "Backup", "Analytics"]
  }
];

const implementedFeatures = [
  { name: "Page d'accueil dynamique", status: "completed", description: "Hero section, véhicules vedettes, actualités" },
  { name: "Catalogue véhicules", status: "completed", description: "Filtres avancés, comparaison, fiches détaillées" },
  { name: "Configurateur Build & Price", status: "completed", description: "Configuration temps réel, devis personnalisé" },
  { name: "Recherche d'inventaire", status: "completed", description: "Localisation, disponibilité, réservation" },
  { name: "Système d'authentification", status: "completed", description: "Inscription, connexion, profil utilisateur" },
  { name: "Pages de service", status: "completed", description: "Entretien, financement, assurance" },
  { name: "Espace actualités", status: "completed", description: "Blog, innovations, communiqués" },
  { name: "Pages légales", status: "completed", description: "RGPD, accessibilité, mentions légales" },
  { name: "Responsive design", status: "completed", description: "Mobile-first, tablette, desktop" },
  { name: "SEO optimisé", status: "completed", description: "Meta tags, sitemap, structured data" }
];

const roi = [
  {
    metric: "Coût de développement",
    traditional: "150 000€",
    ourSolution: "85 000€",
    savings: "65 000€"
  },
  {
    metric: "Temps de mise sur le marché",
    traditional: "12 mois",
    ourSolution: "6 mois",
    savings: "6 mois"
  },
  {
    metric: "Coût de maintenance annuel",
    traditional: "25 000€",
    ourSolution: "15 000€",
    savings: "10 000€"
  }
];

export default function PresentationPage() {
  const [activeDemo, setActiveDemo] = useState('configurator');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-6 bg-red-600 text-white px-6 py-2 text-lg">
              Présentation Projet IMA Automobil
            </Badge>
            <h1 className="text-6xl font-bold mb-6">
              La Plateforme Automobile
              <span className="text-red-400"> du Futur</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Une solution complète MERN/Next.js qui révolutionne l'expérience d'achat automobile 
              et propulse IMA Automobil vers le leadership digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8 py-4 text-lg">
                <Eye className="w-5 h-5 mr-2" />
                Voir la Démo Live
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg">
                <FileText className="w-5 h-5 mr-2" />
                Documentation Technique
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Business Impact */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Impact Business Prouvé</h2>
            <p className="text-xl text-gray-600">Des résultats concrets basés sur des études de cas similaires</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {metric.icon}
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-slate-700 mb-2">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800 flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  Défis Actuels du Marché
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <strong>Expérience client fragmentée</strong>
                      <p className="text-gray-700 text-sm">Les clients doivent naviguer entre plusieurs plateformes pour configurer, financer et acheter</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <strong>Processus d'achat complexe</strong>
                      <p className="text-gray-700 text-sm">Temps de conversion long, abandon de panier élevé (65% en moyenne)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <strong>Manque de personnalisation</strong>
                      <p className="text-gray-700 text-sm">Configurateurs limités, pas d'adaptation aux préférences utilisateur</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <strong>Mobile non optimisé</strong>
                      <p className="text-gray-700 text-sm">70% du trafic mobile mais expérience dégradée</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Notre Solution Innovante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Plateforme unifiée</strong>
                      <p className="text-gray-700 text-sm">Parcours client complet de la découverte à l'achat en une seule interface</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Configurateur avancé</strong>
                      <p className="text-gray-700 text-sm">Visualisation 3D temps réel, devis instantané, sauvegarde et partage</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>IA et personnalisation</strong>
                      <p className="text-gray-700 text-sm">Recommandations intelligentes basées sur le comportement utilisateur</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <strong>Mobile-first design</strong>
                      <p className="text-gray-700 text-sm">PWA optimisée, expérience native sur tous les appareils</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Analyse Concurrentielle</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {competitorAnalysis.map((comp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{comp.competitor}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Forces</h4>
                      <ul className="text-sm space-y-1">
                        {comp.strengths.map((strength, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Faiblesses</h4>
                      <ul className="text-sm space-y-1">
                        {comp.weaknesses.map((weakness, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                            {weakness}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-1">Notre Avantage</h4>
                      <p className="text-sm text-blue-700">{comp.ourAdvantage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Architecture Technique Moderne</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technicalFeatures.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {index === 0 && <Monitor className="w-6 h-6 text-blue-600" />}
                    {index === 1 && <Server className="w-6 h-6 text-green-600" />}
                    {index === 2 && <Cloud className="w-6 h-6 text-purple-600" />}
                    {tech.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.technologies.map((technology, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {technology}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Fonctionnalités</h4>
                      <ul className="space-y-1">
                        {tech.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Implementation Status */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">État d'Avancement du Développement</h2>
          <Card>
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">Progression globale</span>
                  <span className="text-2xl font-bold text-green-600">100%</span>
                </div>
                <Progress value={100} className="h-3" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {implementedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800">{feature.name}</h4>
                      <p className="text-sm text-green-700">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ROI Analysis */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Retour sur Investissement</h2>
          <Card>
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Métrique</th>
                      <th className="text-left p-4 font-semibold">Solution Traditionnelle</th>
                      <th className="text-left p-4 font-semibold">Notre Solution</th>
                      <th className="text-left p-4 font-semibold text-green-600">Économies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roi.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-medium">{item.metric}</td>
                        <td className="p-4 text-red-600">{item.traditional}</td>
                        <td className="p-4 text-blue-600">{item.ourSolution}</td>
                        <td className="p-4 font-bold text-green-600">{item.savings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">ROI Total sur 3 ans : +285%</h4>
                <p className="text-green-700">Économies totales estimées : 141 000€ + augmentation du CA de 35%</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Demo Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Démonstration Interactive</h2>
          <Card>
            <CardContent className="p-8">
              <Tabs value={activeDemo} onValueChange={setActiveDemo}>
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="configurator">Configurateur</TabsTrigger>
                  <TabsTrigger value="catalog">Catalogue</TabsTrigger>
                  <TabsTrigger value="inventory">Inventaire</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                </TabsList>

                <TabsContent value="configurator" className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Configurateur Build & Price</h3>
                    <div className="bg-gray-100 rounded-lg p-8 mb-4">
                      <img 
                        src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                        alt="Configurateur demo"
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="bg-white p-3 rounded">
                          <strong>Configuration temps réel</strong>
                          <p>Visualisation instantanée des modifications</p>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <strong>Devis automatique</strong>
                          <p>Prix mis à jour en temps réel</p>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <strong>Sauvegarde & partage</strong>
                          <p>Configuration partageable par lien</p>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Tester le Configurateur
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="catalog" className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Catalogue Véhicules</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <Filter className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <h4 className="font-semibold">Filtres Avancés</h4>
                        <p className="text-sm text-gray-600">Prix, type, carburant, équipements</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <h4 className="font-semibold">Comparateur</h4>
                        <p className="text-sm text-gray-600">Comparaison détaillée des modèles</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <Eye className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <h4 className="font-semibold">Fiches Détaillées</h4>
                        <p className="text-sm text-gray-600">Specs complètes, images, vidéos</p>
                      </div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Explorer le Catalogue
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="inventory" className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Recherche d'Inventaire</h3>
                    <div className="bg-gray-100 rounded-lg p-6 mb-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded">
                          <MapPin className="w-6 h-6 text-red-600 mb-2" />
                          <strong>Localisation</strong>
                          <p className="text-sm">Véhicules disponibles près de vous</p>
                        </div>
                        <div className="bg-white p-4 rounded">
                          <Calendar className="w-6 h-6 text-blue-600 mb-2" />
                          <strong>Réservation</strong>
                          <p className="text-sm">Réservez votre essai en ligne</p>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Rechercher un Véhicule
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="services" className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Services Intégrés</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-white p-4 rounded-lg border">
                        <CreditCard className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <h5 className="font-semibold text-sm">Financement</h5>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <Wrench className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <h5 className="font-semibold text-sm">Entretien</h5>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <Shield className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <h5 className="font-semibold text-sm">Assurance</h5>
                      </div>
                      <div className="bg-white p-4 rounded-lg border">
                        <Package className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <h5 className="font-semibold text-sm">Accessoires</h5>
                      </div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Découvrir les Services
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-slate-800 to-red-800 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Prêt à Révolutionner IMA Automobil ?</h2>
              <p className="text-xl mb-8 text-gray-200">
                La plateforme est développée, testée et prête au déploiement. 
                Lancez votre transformation digitale dès maintenant.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Déploiement Immédiat</h3>
                  <p className="text-sm">Mise en production en 2 semaines</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Formation Équipe</h3>
                  <p className="text-sm">Support et formation inclus</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Résultats Garantis</h3>
                  <p className="text-sm">ROI positif dès le 6ème mois</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8 py-4 text-lg">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Valider le Projet
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 text-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Planifier une Démo
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