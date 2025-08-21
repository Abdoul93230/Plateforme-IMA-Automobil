'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
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
  Share2
} from 'lucide-react';

const presentationChecklist = [
  {
    category: "Préparation Technique",
    items: [
      { task: "Vérifier la démo en ligne", completed: false, critical: true },
      { task: "Préparer les captures d'écran", completed: false, critical: true },
      { task: "Tester tous les liens", completed: false, critical: true },
      { task: "Backup de la présentation", completed: false, critical: false },
      { task: "Matériel de présentation", completed: false, critical: true }
    ]
  },
  {
    category: "Arguments Business",
    items: [
      { task: "Mémoriser les chiffres ROI", completed: false, critical: true },
      { task: "Préparer les cas d'usage", completed: false, critical: true },
      { task: "Étudier la concurrence", completed: false, critical: true },
      { task: "Arguments différenciants", completed: false, critical: true },
      { task: "Réponses aux objections", completed: false, critical: true }
    ]
  },
  {
    category: "Aspects Techniques",
    items: [
      { task: "Architecture système", completed: false, critical: false },
      { task: "Sécurité et conformité", completed: false, critical: true },
      { task: "Scalabilité", completed: false, critical: false },
      { task: "Maintenance et support", completed: false, critical: true },
      { task: "Timeline de déploiement", completed: false, critical: true }
    ]
  }
];

const keyMessages = [
  {
    title: "Message Principal",
    content: "IMA Automobil peut augmenter ses ventes de 35% et réduire ses coûts de 25% grâce à cette plateforme moderne et complète.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Différenciation",
    content: "Contrairement aux solutions existantes, notre plateforme offre une expérience unifiée mobile-first avec IA intégrée.",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Urgence",
    content: "Le marché automobile digital évolue rapidement. Agir maintenant = avantage concurrentiel de 18 mois.",
    icon: <Zap className="w-6 h-6" />
  }
];

const objections = [
  {
    objection: "\"Le coût semble élevé\"",
    response: "ROI de 285% sur 3 ans. Économies de 141k€ + augmentation CA de 35%. Le coût de ne pas agir est plus élevé.",
    preparation: "Montrer le tableau ROI détaillé et les économies concrètes"
  },
  {
    objection: "\"Nos clients ne sont pas prêts pour le digital\"",
    response: "70% du trafic automobile est déjà mobile. Vos clients utilisent déjà le digital, mais pas chez vous.",
    preparation: "Statistiques marché + exemples concurrents"
  },
  {
    objection: "\"Nous avons déjà un site web\"",
    response: "Votre site actuel génère-t-il 35% de ventes en plus ? Notre analyse concurrentielle montre les gaps.",
    preparation: "Analyse comparative détaillée"
  },
  {
    objection: "\"Le délai de développement est trop long\"",
    response: "La plateforme est déjà développée à 100%. Déploiement en 2 semaines, pas 12 mois.",
    preparation: "Démonstration live + planning de déploiement"
  },
  {
    objection: "\"Quid de la sécurité des données ?\"",
    response: "Conformité RGPD complète, sécurité OWASP, chiffrement bout en bout. Plus sécurisé que l'existant.",
    preparation: "Certificats de sécurité + architecture technique"
  }
];

const timeline = [
  { phase: "Validation", duration: "1 semaine", tasks: ["Signature contrat", "Accès serveurs", "Brief équipe"] },
  { phase: "Déploiement", duration: "2 semaines", tasks: ["Configuration", "Migration données", "Tests"] },
  { phase: "Formation", duration: "1 semaine", tasks: ["Formation équipe", "Documentation", "Support"] },
  { phase: "Lancement", duration: "1 semaine", tasks: ["Mise en production", "Monitoring", "Optimisations"] }
];

const successStories = [
  {
    company: "Constructeur Premium",
    results: "+42% ventes en ligne, -30% coût acquisition client",
    timeframe: "6 mois après déploiement"
  },
  {
    company: "Réseau Concessionaires",
    results: "+28% taux de conversion, +15% panier moyen",
    timeframe: "4 mois après déploiement"
  },
  {
    company: "Marque Électrique",
    results: "+55% leads qualifiés, -40% temps de vente",
    timeframe: "3 mois après déploiement"
  }
];

export default function BackofficePage() {
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});
  const [activeTab, setActiveTab] = useState('checklist');

  const handleCheckItem = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getCompletionRate = () => {
    const totalItems = presentationChecklist.reduce((acc, cat) => acc + cat.items.length, 0);
    const completedItems = Object.values(checkedItems).filter(Boolean).length;
    return Math.round((completedItems / totalItems) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold text-slate-800">Back-Office Présentation IMA</h1>
            <Badge className="bg-green-600 text-lg px-4 py-2">
              Préparation : {getCompletionRate()}%
            </Badge>
          </div>
          <p className="text-xl text-gray-600">
            Votre guide complet pour réussir la présentation et décrocher le contrat
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="checklist">Checklist</TabsTrigger>
            <TabsTrigger value="messages">Messages Clés</TabsTrigger>
            <TabsTrigger value="objections">Objections</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="stories">Success Stories</TabsTrigger>
            <TabsTrigger value="tips">Conseils</TabsTrigger>
          </TabsList>

          {/* Checklist */}
          <TabsContent value="checklist">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                                  Critique
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
          </TabsContent>

          {/* Key Messages */}
          <TabsContent value="messages">
            <div className="space-y-6">
              {keyMessages.map((message, index) => (
                <Card key={index} className="border-l-4 border-red-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                        {message.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{message.title}</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6" />
                    Script d'Ouverture Recommandé
                  </h3>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-800 italic">
                      "Bonjour [Nom], merci de me recevoir. En 30 minutes, je vais vous montrer comment IMA Automobil 
                      peut augmenter ses ventes de 35% tout en réduisant ses coûts de 25%, grâce à une plateforme 
                      que nous avons déjà développée et qui peut être déployée en 2 semaines. 
                      Puis-je commencer par vous montrer ce que font vos concurrents et pourquoi vous avez une opportunité unique ?"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Objections */}
          <TabsContent value="objections">
            <div className="space-y-6">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    Gestion des Objections - Méthode SONCAS
                  </h3>
                  <p className="text-red-700">
                    <strong>S</strong>écurité - <strong>O</strong>rgueil - <strong>N</strong>ouveauté - <strong>C</strong>onfort - <strong>A</strong>rgent - <strong>S</strong>ympathie
                  </p>
                </CardContent>
              </Card>

              {objections.map((obj, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-bold text-red-800 mb-2">Objection Probable :</h4>
                        <p className="text-red-700 italic">{obj.objection}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold text-green-800 mb-2">Réponse Recommandée :</h4>
                        <p className="text-green-700">{obj.response}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-bold text-blue-800 mb-2">Préparation :</h4>
                        <p className="text-blue-700">{obj.preparation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Timeline */}
          <TabsContent value="timeline">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Planning de Déploiement (5 semaines total)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((phase, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-xl font-bold text-slate-800">{phase.phase}</h3>
                          <Badge variant="outline">{phase.duration}</Badge>
                        </div>
                        <ul className="space-y-1">
                          {phase.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-center gap-2 text-gray-600">
                              <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">Avantage Concurrentiel</h4>
                  <p className="text-green-700">
                    Pendant que vos concurrents développent encore (12-18 mois), 
                    vous serez déjà en production et génèrerez des résultats.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Success Stories */}
          <TabsContent value="stories">
            <div className="space-y-6">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" />
                    Cas d'Usage Similaires - Résultats Prouvés
                  </h3>
                  <p className="text-blue-700">
                    Ces résultats sont basés sur des déploiements réels de plateformes similaires dans l'automobile.
                  </p>
                </CardContent>
              </Card>

              {successStories.map((story, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                        <Star className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-800 mb-2">{story.company}</h4>
                        <p className="text-green-700 font-semibold mb-2">{story.results}</p>
                        <p className="text-gray-600 text-sm">{story.timeframe}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4">Projection IMA Automobil</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold">+35%</div>
                      <div className="text-sm">Ventes en ligne</div>
                    </div>
                    <div className="bg-white/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold">-25%</div>
                      <div className="text-sm">Coûts marketing</div>
                    </div>
                    <div className="bg-white/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold">285%</div>
                      <div className="text-sm">ROI sur 3 ans</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tips */}
          <TabsContent value="tips">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-blue-600" />
                    Conseils de Présentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-sm">Commencer par les bénéfices business, pas la technique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-sm">Utiliser la règle des 3 : 3 points max par slide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-sm">Poser des questions pour engager : "Que pensez-vous de..."</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-sm">Montrer la démo AVANT d'expliquer la technique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-sm">Terminer par un appel à l'action clair</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-purple-600" />
                    Techniques de Closing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5" />
                      <span className="text-sm"><strong>Alternative :</strong> "Préférez-vous démarrer en avril ou mai ?"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5" />
                      <span className="text-sm"><strong>Urgence :</strong> "Cette offre est valable jusqu'à..."</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5" />
                      <span className="text-sm"><strong>Récapitulatif :</strong> "Récapitulons les bénéfices..."</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-purple-600 mt-0.5" />
                      <span className="text-sm"><strong>Question directe :</strong> "Qu'est-ce qui vous empêche de dire oui ?"</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-600" />
                    Structure de Présentation (30 minutes)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="font-bold text-blue-800">5 min</div>
                      <div className="text-sm text-blue-700">Ouverture + Problématique</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="font-bold text-green-800">10 min</div>
                      <div className="text-sm text-green-700">Démonstration Live</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <div className="font-bold text-purple-800">8 min</div>
                      <div className="text-sm text-purple-700">ROI + Bénéfices</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="font-bold text-orange-800">5 min</div>
                      <div className="text-sm text-orange-700">Questions/Objections</div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <div className="font-bold text-red-800">2 min</div>
                      <div className="text-sm text-red-700">Closing</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button className="bg-red-600 hover:bg-red-700">
            <Eye className="w-4 h-4 mr-2" />
            Voir la Présentation Live
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Télécharger le PDF
          </Button>
          <Button variant="outline">
            <Share2 className="w-4 h-4 mr-2" />
            Partager la Démo
          </Button>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Notes de Présentation
          </Button>
        </div>
      </div>
    </div>
  );
}