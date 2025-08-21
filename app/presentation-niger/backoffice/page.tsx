'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  Users, 
  Target,
  BarChart3,
  Lightbulb,
  AlertTriangle,
  Star,
  TrendingUp,
  DollarSign,
  Shield,
  Zap,
  MessageSquare,
  Calendar,
  Eye,
  ArrowRight,
  Download,
  Share2,
  Flag,
  Globe,
  Smartphone,
  Heart,
  Award,
  Phone,
  Mail,
  Navigation,
  Car,
  Settings,
  Package,
  CreditCard,
  Home,
  Building,
  Leaf,
  Sun
} from 'lucide-react';

const presentationChecklist = [
  {
    category: "Contexte Niger - À Maîtriser",
    items: [
      { task: "Mémoriser les chiffres clés du Niger (25M habitants, 8.5M smartphones)", completed: false, critical: true },
      { task: "Comprendre les habitudes culturelles nigériennes", completed: false, critical: true },
      { task: "Connaître les défis actuels du marché auto Niger", completed: false, critical: true },
      { task: "Préparer des exemples concrets de frustrations clients", completed: false, critical: true },
      { task: "Étudier les success stories ouest-africaines", completed: false, critical: true }
    ]
  },
  {
    category: "Arguments Business Niger",
    items: [
      { task: "ROI 380% spécifique au marché nigérien", completed: false, critical: true },
      { task: "Impact +480M FCFA première année", completed: false, critical: true },
      { task: "Avantage concurrentiel 18 mois", completed: false, critical: true },
      { task: "Expansion diaspora nigérienne", completed: false, critical: true },
      { task: "Création d'emplois locaux", completed: false, critical: true }
    ]
  },
  {
    category: "Démonstration Technique",
    items: [
      { task: "Tester la démo sur mobile (priorité Niger)", completed: false, critical: true },
      { task: "Préparer scénario client nigérien type", completed: false, critical: true },
      { task: "Montrer l'adaptation culturelle (langues, etc.)", completed: false, critical: false },
      { task: "Démonstration paiement mobile (Orange Money)", completed: false, critical: true },
      { task: "Simulation configurateur véhicule populaire", completed: false, critical: true }
    ]
  },
  {
    category: "Préparation Finale",
    items: [
      { task: "Répéter le pitch de 5 minutes", completed: false, critical: true },
      { task: "Préparer les réponses aux objections Niger", completed: false, critical: true },
      { task: "Backup présentation hors ligne", completed: false, critical: true },
      { task: "Matériel de présentation (tablette, etc.)", completed: false, critical: true },
      { task: "Contacts partenaires locaux Niger", completed: false, critical: false }
    ]
  }
];

const keyMessagesNiger = [
  {
    title: "Message d'Ouverture",
    content: "\"Imaginez si chaque Nigérien pouvait acheter sa voiture aussi facilement qu'il achète du crédit téléphonique. C'est exactement ce que nous allons réaliser ensemble.\"",
    icon: <Target className="w-6 h-6" />,
    timing: "30 secondes",
    impact: "Accroche culturelle forte"
  },
  {
    title: "Problématique Niger",
    content: "\"Aujourd'hui, un Nigérien perd 3 semaines et 50 000 FCFA juste pour acheter une voiture. Notre plateforme réduit cela à 3 jours et 5 000 FCFA.\"",
    icon: <AlertTriangle className="w-6 h-6" />,
    timing: "1 minute",
    impact: "Problème concret et chiffré"
  },
  {
    title: "Solution Révolutionnaire",
    content: "\"Nous apportons au Niger ce que Toyota a apporté au monde : une expérience automobile moderne, transparente et accessible à tous.\"",
    icon: <Star className="w-6 h-6" />,
    timing: "2 minutes",
    impact: "Référence internationale"
  },
  {
    title: "Impact Business",
    content: "\"Cette plateforme va générer +480M FCFA dès la première année et positionner IMA comme le leader incontesté du Niger.\"",
    icon: <TrendingUp className="w-6 h-6" />,
    timing: "1 minute",
    impact: "Bénéfice concret chiffré"
  },
  {
    title: "Urgence Stratégique",
    content: "\"Le marché digital automobile nigérien est vierge. Qui arrive en premier gagne tout. Cette opportunité ne se représentera pas.\"",
    icon: <Zap className="w-6 h-6" />,
    timing: "30 secondes",
    impact: "Urgence d'action"
  }
];

const objections = [
  {
    objection: "\"Les Nigériens ne sont pas prêts pour le digital\"",
    response: "8.5M Nigériens utilisent déjà un smartphone et 78% font du paiement mobile. Ils SONT prêts, ils attendent juste la bonne plateforme.",
    preparation: "Montrer les stats d'adoption mobile au Niger + exemples Jumia, Orange Money",
    cultural: "Rappeler que les jeunes Nigériens sont très connectés sur WhatsApp et Facebook"
  },
  {
    objection: "\"Le marché automobile nigérien est trop petit\"",
    response: "45M€ de marché actuel + 2M de diaspora = 65M€ de potentiel. Plus grand que certains pays européens où Toyota réussit.",
    preparation: "Comparaison avec marchés européens similaires + croissance 12%/an",
    cultural: "Mentionner la fierté nigérienne et le potentiel de rayonnement régional"
  },
  {
    objection: "\"Les coûts de développement sont élevés\"",
    response: "La plateforme est DÉJÀ développée à 100%. Zéro coût de développement, juste adaptation et déploiement.",
    preparation: "Démonstration live de la plateforme fonctionnelle",
    cultural: "Expliquer que c'est un investissement dans l'avenir du Niger"
  },
  {
    objection: "\"Comment gérer la logistique au Niger ?\"",
    response: "Partenariat avec les concessionnaires existants + livraison dans les grandes villes. Modèle hybride physique-digital.",
    preparation: "Plan de partenariat avec réseau existant + carte de couverture",
    cultural: "Respecter l'importance des relations humaines dans la culture nigérienne"
  },
  {
    objection: "\"Et si la concurrence copie ?\"",
    response: "18 mois d'avance = leadership établi. De plus, nous avons l'expertise technique que la concurrence n'a pas.",
    preparation: "Exemples de first-movers advantage + barrières à l'entrée",
    cultural: "Fierté d'être pionnier et de représenter le Niger à l'international"
  }
];

const culturalAdaptations = [
  {
    aspect: "Langues Locales",
    adaptation: "Interface en Français, Haoussa et Zarma",
    importance: "Inclusion de 95% de la population",
    status: "Prêt à implémenter"
  },
  {
    aspect: "Paiement Mobile",
    adaptation: "Intégration Orange Money, Moov Money, Airtel Money",
    importance: "78% des Nigériens utilisent le mobile money",
    status: "API prêtes"
  },
  {
    aspect: "Négociation Culturelle",
    adaptation: "Système d'offres personnalisées et chat en direct",
    importance: "Respecte la tradition de négociation",
    status: "Développé"
  },
  {
    aspect: "Consultation Familiale",
    adaptation: "Partage de configurations par WhatsApp",
    importance: "Décisions familiales importantes",
    status: "Intégré"
  }
];

const timeline = [
  { 
    week: "Semaine 1-2", 
    tasks: ["Signature contrat", "Formation équipe IMA", "Configuration serveurs Niger"], 
    milestone: "Équipe formée",
    critical: true
  },
  { 
    week: "Semaine 3-4", 
    tasks: ["Adaptation contenu Niger", "Intégration paiements locaux", "Tests utilisateurs"], 
    milestone: "Plateforme adaptée",
    critical: true
  },
  { 
    week: "Semaine 5-6", 
    tasks: ["Lancement pilote Niamey", "Formation concessionnaires", "Marketing de lancement"], 
    milestone: "Lancement réussi",
    critical: true
  },
  { 
    week: "Semaine 7-8", 
    tasks: ["Optimisations", "Extension réseau", "Analyse performances"], 
    milestone: "Optimisation continue",
    critical: false
  }
];

const competitiveAdvantage = [
  {
    advantage: "Premier sur le Marché",
    description: "Aucun concurrent n'a de plateforme similaire au Niger",
    value: "18 mois d'avance minimum",
    icon: <Zap className="w-6 h-6" />
  },
  {
    advantage: "Adaptation Culturelle",
    description: "Plateforme pensée pour les habitudes nigériennes",
    value: "Adoption 3x plus rapide",
    icon: <Heart className="w-6 h-6" />
  },
  {
    advantage: "Technologie Éprouvée",
    description: "Stack MERN/Next.js utilisé par les leaders mondiaux",
    value: "Fiabilité garantie",
    icon: <Shield className="w-6 h-6" />
  },
  {
    advantage: "Support Diaspora",
    description: "Accès au marché de 2M de Nigériens à l'étranger",
    value: "Marché inexploité",
    icon: <Globe className="w-6 h-6" />
  }
];

export default function NigerBackofficePage() {
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});
  const [activeTab, setActiveTab] = useState('preparation');

  const handleCheckItem = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getCompletionRate = () => {
    const totalItems = presentationChecklist.reduce((acc, cat) => acc + cat.items.length, 0);
    const completedItems = Object.values(checkedItems).filter(Boolean).length;
    return Math.round((completedItems / totalItems) * 100);
  };

  const getCriticalCompletion = () => {
    const criticalItems = presentationChecklist.reduce((acc, cat) => 
      acc + cat.items.filter(item => item.critical).length, 0);
    const completedCritical = presentationChecklist.reduce((acc, cat) => 
      acc + cat.items.filter((item, index) => 
        item.critical && checkedItems[`${cat.category}-${index}`]).length, 0);
    return Math.round((completedCritical / criticalItems) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Spécifique Niger */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Flag className="w-12 h-12 text-green-600" />
              <div>
                <h1 className="text-4xl font-bold text-slate-800">Back-Office Présentation IMA Niger</h1>
                <p className="text-gray-600">Votre guide pour conquérir le marché automobile nigérien</p>
              </div>
            </div>
            <div className="text-right">
              <Badge className="bg-green-600 text-lg px-4 py-2 mb-2">
                Préparation : {getCompletionRate()}%
              </Badge>
              <div className="text-sm text-gray-600">
                Éléments critiques : {getCriticalCompletion()}%
              </div>
            </div>
          </div>
          <Progress value={getCompletionRate()} className="h-3" />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="preparation">Préparation</TabsTrigger>
            <TabsTrigger value="messages">Messages Niger</TabsTrigger>
            <TabsTrigger value="objections">Objections</TabsTrigger>
            <TabsTrigger value="cultural">Adaptation Culturelle</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="closing">Techniques Closing</TabsTrigger>
          </TabsList>

          {/* Préparation */}
          <TabsContent value="preparation">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                {presentationChecklist.map((category, catIndex) => (
                  <Card key={catIndex}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.items.map((item, itemIndex) => {
                          const key = `${category.category}-${itemIndex}`;
                          const isChecked = checkedItems[key] || false;
                          return (
                            <div key={itemIndex} className="flex items-start gap-3">
                              <Checkbox
                                checked={isChecked}
                                onCheckedChange={() => handleCheckItem(category.category, itemIndex)}
                              />
                              <div className="flex-1">
                                <div className={`${isChecked ? 'line-through text-gray-500' : ''} ${item.critical ? 'font-semibold' : ''}`}>
                                  {item.task}
                                </div>
                                {item.critical && (
                                  <Badge variant="destructive" className="text-xs mt-1">
                                    🔥 Critique pour le Niger
                                  </Badge>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-6">
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Flag className="w-6 h-6" />
                      Spécificités Niger à Retenir
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-bold text-green-800 mb-2">🏛️ Contexte Politique</h4>
                        <p className="text-green-700 text-sm">
                          Stabilité politique, gouvernement pro-business, 
                          volonté de modernisation digitale
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-bold text-green-800 mb-2">💰 Économie</h4>
                        <p className="text-green-700 text-sm">
                          Croissance 7%/an, secteur privé en expansion, 
                          classe moyenne émergente à Niamey
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-bold text-green-800 mb-2">📱 Digital</h4>
                        <p className="text-green-700 text-sm">
                          Révolution mobile en cours, adoption rapide des nouvelles technologies,
                          jeunesse très connectée
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-bold text-green-800 mb-2">🚗 Automobile</h4>
                        <p className="text-green-700 text-sm">
                          Marché dominé par l'occasion, manque de transparence,
                          forte demande pour du neuf accessible
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-orange-50 border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-800">
                      <Lightbulb className="w-6 h-6" />
                      Points d'Attention Culturels
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Heart className="w-4 h-4 text-orange-600 mt-1" />
                        <div>
                          <strong className="text-orange-800">Respect et Politesse</strong>
                          <p className="text-orange-700 text-sm">Commencer par les salutations, prendre le temps</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-orange-600 mt-1" />
                        <div>
                          <strong className="text-orange-800">Décision Collective</strong>
                          <p className="text-orange-700 text-sm">Prévoir que d'autres personnes peuvent être consultées</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building className="w-4 h-4 text-orange-600 mt-1" />
                        <div>
                          <strong className="text-orange-800">Fierté Nationale</strong>
                          <p className="text-orange-700 text-sm">Mettre en avant le rayonnement international du Niger</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Messages Clés Niger */}
          <TabsContent value="messages">
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-green-600 to-orange-600 text-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4 text-center">
                    Messages Clés Adaptés au Niger
                  </h2>
                  <p className="text-xl text-center text-gray-200">
                    Chaque message est calibré pour résonner avec la mentalité nigérienne
                  </p>
                </CardContent>
              </Card>

              {keyMessagesNiger.map((message, index) => (
                <Card key={index} className="border-l-4 border-green-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                        {message.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="text-xl font-bold text-slate-800">{message.title}</h3>
                          <Badge variant="outline">{message.timing}</Badge>
                          <Badge className="bg-green-600">{message.impact}</Badge>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                          <p className="text-gray-800 italic text-lg">{message.content}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-1">💡 Pourquoi ça marche</h4>
                            <p className="text-blue-700 text-sm">
                              {index === 0 && "Référence familière (crédit téléphonique) que tous les Nigériens comprennent"}
                              {index === 1 && "Chiffres concrets en FCFA que les dirigeants peuvent visualiser"}
                              {index === 2 && "Référence à Toyota = qualité et fiabilité reconnues"}
                              {index === 3 && "Impact financier direct sur l'entreprise"}
                              {index === 4 && "Crée un sentiment d'urgence et d'opportunité unique"}
                            </p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded-lg">
                            <h4 className="font-semibold text-yellow-800 mb-1">🎯 Adaptation Niger</h4>
                            <p className="text-yellow-700 text-sm">
                              {index === 0 && "Utilise une analogie que 100% des Nigériens comprennent"}
                              {index === 1 && "Monnaie locale (FCFA) et situation réelle nigérienne"}
                              {index === 2 && "Toyota est respecté au Niger, référence de qualité"}
                              {index === 3 && "Chiffres adaptés à l'économie nigérienne"}
                              {index === 4 && "Appel à la fierté d'être pionnier"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6" />
                    Script d'Ouverture Spécial Niger
                  </h3>
                  <div className="bg-white p-6 rounded-lg">
                    <p className="text-gray-800 text-lg leading-relaxed">
                      <strong>"Bonjour [Nom], merci de me recevoir. Je suis très honoré d'être ici au Niger, 
                      un pays que j'admire pour son dynamisme et sa jeunesse. </strong><br/><br/>
                      
                      En 30 minutes, je vais vous montrer comment IMA Automobil peut devenir le leader 
                      incontesté de l'automobile au Niger, générer +480M FCFA dès la première année, 
                      et faire rayonner le Niger comme pionnier de l'automobile digitale en Afrique de l'Ouest.<br/><br/>
                      
                      <strong>Mais d'abord, permettez-moi de vous poser une question : 
                      combien de temps un Nigérien passe-t-il aujourd'hui pour acheter une voiture ?"</strong>
                    </p>
                  </div>
                  <div className="mt-4 p-4 bg-red-100 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-2">🎯 Pourquoi cette ouverture fonctionne :</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Respect et reconnaissance du Niger</li>
                      <li>• Bénéfices concrets en FCFA</li>
                      <li>• Fierté nationale (pionnier en Afrique)</li>
                      <li>• Question engageante sur leur réalité</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Objections Spécifiques Niger */}
          <TabsContent value="objections">
            <div className="space-y-6">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    Objections Spécifiques au Contexte Nigérien
                  </h3>
                  <p className="text-red-700">
                    Ces objections sont basées sur la réalité du marché nigérien et les mentalités locales
                  </p>
                </CardContent>
              </Card>

              {objections.map((obj, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-bold text-red-800 mb-2">🗣️ Objection Probable :</h4>
                        <p className="text-red-700 italic text-lg">{obj.objection}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold text-green-800 mb-2">✅ Réponse Calibrée Niger :</h4>
                        <p className="text-green-700 text-lg">{obj.response}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-bold text-blue-800 mb-1">📊 Préparation :</h4>
                          <p className="text-blue-700 text-sm">{obj.preparation}</p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h4 className="font-bold text-orange-800 mb-1">🇳🇪 Aspect Culturel :</h4>
                          <p className="text-orange-700 text-sm">{obj.cultural}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Adaptation Culturelle */}
          <TabsContent value="cultural">
            <div className="space-y-8">
              <Card className="bg-gradient-to-r from-green-500 to-orange-500 text-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4 text-center">
                    Adaptation Parfaite à la Culture Nigérienne
                  </h2>
                  <p className="text-xl text-center text-gray-200">
                    Chaque détail de la plateforme respecte et valorise la culture nigérienne
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {culturalAdaptations.map((adaptation, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-800">{adaptation.aspect}</h3>
                        <Badge className="bg-green-600">{adaptation.status}</Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-1">Adaptation :</h4>
                          <p className="text-blue-700 text-sm">{adaptation.adaptation}</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-1">Importance :</h4>
                          <p className="text-green-700 text-sm">{adaptation.importance}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Heart className="w-6 h-6 text-red-600" />
                    Avantages Concurrentiels Niger
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {competitiveAdvantage.map((advantage, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                          {advantage.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 mb-1">{advantage.advantage}</h4>
                          <p className="text-gray-600 text-sm mb-2">{advantage.description}</p>
                          <Badge variant="outline" className="text-xs">{advantage.value}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Timeline Niger */}
          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Planning de Déploiement Niger (8 semaines)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((phase, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`${phase.critical ? 'bg-red-600' : 'bg-blue-600'} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-xl font-bold text-slate-800">{phase.week}</h3>
                          {phase.critical && <Badge variant="destructive">Critique</Badge>}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-2">Tâches :</h4>
                            <ul className="space-y-1">
                              {phase.tasks.map((task, taskIndex) => (
                                <li key={taskIndex} className="flex items-center gap-2 text-sm">
                                  <CheckCircle className="w-3 h-3 text-green-600" />
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <h4 className="font-semibold text-green-800 mb-1">Milestone :</h4>
                            <p className="text-green-700 font-medium">{phase.milestone}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-4 text-center">🚀 Avantage Temporel Décisif</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">2 mois</div>
                      <div className="text-sm text-green-700">Notre déploiement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">18 mois</div>
                      <div className="text-sm text-red-700">Concurrence (développement)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">16 mois</div>
                      <div className="text-sm text-blue-700">D'avance garantie</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Techniques de Closing */}
          <TabsContent value="closing">
            <div className="space-y-6">
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-purple-800 mb-4 text-center">
                    Techniques de Closing Adaptées au Niger
                  </h2>
                  <p className="text-purple-700 text-center">
                    Approches respectueuses de la culture nigérienne pour finaliser le contrat
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-green-600" />
                      Closing Culturellement Adapté
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold text-green-800 mb-2">🤝 Approche Respectueuse</h4>
                        <p className="text-green-700 text-sm italic">
                          "Monsieur [Nom], je respecte que cette décision soit importante pour IMA et pour le Niger. 
                          Quels sont les éléments qui vous aideraient à prendre cette décision historique ?"
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-bold text-blue-800 mb-2">🇳🇪 Fierté Nationale</h4>
                        <p className="text-blue-700 text-sm italic">
                          "Imaginez la fierté de voir IMA Niger cité comme exemple de réussite digitale 
                          dans toute l'Afrique de l'Ouest. Vous seriez les pionniers."
                        </p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-bold text-orange-800 mb-2">⏰ Urgence Douce</h4>
                        <p className="text-orange-700 text-sm italic">
                          "Cette opportunité d'être premier sur le marché ne durera pas. 
                          Préférez-vous commencer en avril ou en mai ?"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-purple-600" />
                      Signaux d'Achat à Détecter
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <div>
                          <strong>Questions sur le déploiement</strong>
                          <p className="text-sm text-gray-600">"Combien de temps pour la mise en place ?"</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <div>
                          <strong>Intérêt pour les détails financiers</strong>
                          <p className="text-sm text-gray-600">"Comment calculez-vous le ROI ?"</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <div>
                          <strong>Mention de l'équipe/conseil</strong>
                          <p className="text-sm text-gray-600">"Je dois en parler à mon associé"</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                        <div>
                          <strong>Questions sur la concurrence</strong>
                          <p className="text-sm text-gray-600">"Personne d'autre ne fait ça au Niger ?"</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6" />
                    Phrases de Closing Testées Niger
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-yellow-800 mb-2">🎯 Alternative Choice</h4>
                      <p className="text-yellow-700 text-sm italic">
                        "Préférez-vous commencer par Niamey seulement ou inclure Zinder dès le départ ?"
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-yellow-800 mb-2">🏆 Assumptive Close</h4>
                      <p className="text-yellow-700 text-sm italic">
                        "Parfait ! Quand souhaitez-vous que nous commencions la formation de votre équipe ?"
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-yellow-800 mb-2">🇳🇪 Fierté Nationale</h4>
                      <p className="text-yellow-700 text-sm italic">
                        "Ensemble, nous allons faire du Niger un exemple pour toute l'Afrique. Êtes-vous prêt ?"
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-yellow-800 mb-2">💰 Bénéfice Immédiat</h4>
                      <p className="text-yellow-700 text-sm italic">
                        "Chaque jour de retard, c'est 1.3M FCFA de revenus perdus. Commençons dès demain ?"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Dashboard de Préparation */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{getCompletionRate()}%</div>
              <div className="text-green-800 font-semibold">Préparation Globale</div>
              <Progress value={getCompletionRate()} className="mt-3" />
            </CardContent>
          </Card>
          
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">{getCriticalCompletion()}%</div>
              <div className="text-red-800 font-semibold">Éléments Critiques</div>
              <Progress value={getCriticalCompletion()} className="mt-3" />
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">480M</div>
              <div className="text-blue-800 font-semibold">FCFA Impact Année 1</div>
              <div className="text-xs text-blue-600 mt-1">À retenir absolument</div>
            </CardContent>
          </Card>
        </div>

        {/* Actions Rapides */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button className="bg-green-600 hover:bg-green-700">
            <Eye className="w-4 h-4 mr-2" />
            Voir la Présentation Niger
          </Button>
          <Button className="bg-red-600 hover:bg-red-700">
            <Flag className="w-4 h-4 mr-2" />
            Démo Spéciale Niger
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Guide Présentation Niger
          </Button>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Cheat Sheet Niger
          </Button>
        </div>

        {/* Rappel Final */}
        <Card className="mt-8 bg-gradient-to-r from-green-600 via-orange-500 to-red-600 text-white">
          <CardContent className="p-8 text-center">
            <Flag className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              Vous Allez Faire Histoire au Niger ! 🇳🇪
            </h2>
            <p className="text-xl mb-6 text-gray-200">
              Cette présentation peut transformer IMA Automobil en leader incontesté 
              du marché automobile nigérien. Vous avez tous les outils pour réussir.
            </p>
            <div className="bg-white/20 p-4 rounded-lg max-w-2xl mx-auto">
              <h3 className="font-bold mb-2">🎯 Objectif de la Présentation :</h3>
              <p className="text-lg">
                Obtenir un "OUI" pour démarrer le projet dans les 2 semaines
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}