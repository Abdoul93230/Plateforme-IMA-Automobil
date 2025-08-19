'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  Monitor, 
  Keyboard,
  Mouse,
  Smartphone,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const accessibilityFeatures = [
  {
    category: "Navigation au clavier",
    icon: <Keyboard className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600",
    features: [
      "Navigation complète au clavier (Tab, Shift+Tab)",
      "Raccourcis clavier pour les fonctions principales",
      "Indicateurs visuels de focus",
      "Ordre de tabulation logique"
    ]
  },
  {
    category: "Lecteurs d'écran",
    icon: <Eye className="w-6 h-6" />,
    color: "bg-green-50 text-green-600",
    features: [
      "Compatibilité NVDA, JAWS, VoiceOver",
      "Textes alternatifs pour toutes les images",
      "Étiquettes descriptives pour les formulaires",
      "Structure sémantique HTML5"
    ]
  },
  {
    category: "Contraste et couleurs",
    icon: <Monitor className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600",
    features: [
      "Ratio de contraste conforme WCAG 2.1 AA",
      "Information non basée uniquement sur la couleur",
      "Mode sombre disponible",
      "Couleurs adaptées au daltonisme"
    ]
  },
  {
    category: "Mobilité réduite",
    icon: <Hand className="w-6 h-6" />,
    color: "bg-orange-50 text-orange-600",
    features: [
      "Zones de clic suffisamment grandes",
      "Pas de limite de temps stricte",
      "Fonctionnalités accessibles à la souris et au clavier",
      "Gestes simples sur mobile"
    ]
  }
];

const conformityLevels = [
  {
    level: "A",
    status: "Conforme",
    description: "Critères de base respectés",
    icon: <CheckCircle className="w-5 h-5 text-green-600" />
  },
  {
    level: "AA",
    status: "Conforme",
    description: "Niveau recommandé atteint",
    icon: <CheckCircle className="w-5 h-5 text-green-600" />
  },
  {
    level: "AAA",
    status: "Partiellement conforme",
    description: "Amélioration continue",
    icon: <AlertCircle className="w-5 h-5 text-orange-600" />
  }
];

const assistiveTechnologies = [
  {
    name: "NVDA",
    type: "Lecteur d'écran",
    compatibility: "Excellente",
    platform: "Windows"
  },
  {
    name: "JAWS",
    type: "Lecteur d'écran",
    compatibility: "Excellente",
    platform: "Windows"
  },
  {
    name: "VoiceOver",
    type: "Lecteur d'écran",
    compatibility: "Excellente",
    platform: "macOS/iOS"
  },
  {
    name: "Dragon",
    type: "Reconnaissance vocale",
    compatibility: "Bonne",
    platform: "Windows/macOS"
  },
  {
    name: "Switch Control",
    type: "Contrôle par contacteur",
    compatibility: "Bonne",
    platform: "iOS/Android"
  }
];

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Eye className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h1 className="text-5xl font-bold mb-4">Accessibilité numérique</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Notre engagement pour un site web accessible à tous, sans exception
            </p>
            <Badge className="mt-4 bg-green-600">
              Conforme RGAA 4.1 - Niveau AA
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Notre engagement */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
                Notre engagement accessibilité
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                IMA Automobil s'engage à rendre ses services numériques accessibles à tous les utilisateurs, 
                quelles que soient leurs capacités. Nous respectons les standards internationaux d'accessibilité 
                et améliorons continuellement l'expérience de tous nos utilisateurs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Vision</h3>
                  <p className="text-gray-600 text-sm">
                    Support des lecteurs d'écran et adaptation pour les déficiences visuelles
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ear className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Audition</h3>
                  <p className="text-gray-600 text-sm">
                    Sous-titres et transcriptions pour les contenus audio et vidéo
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Hand className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Mobilité</h3>
                  <p className="text-gray-600 text-sm">
                    Navigation complète au clavier et adaptation pour les handicaps moteurs
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Fonctionnalités d'accessibilité */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Fonctionnalités d'accessibilité
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Niveau de conformité */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Niveau de conformité WCAG 2.1
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conformityLevels.map((level, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-slate-800 mb-2">
                    {level.level}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    {level.icon}
                    <span className="font-medium">{level.status}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{level.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technologies d'assistance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Technologies d'assistance supportées
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Technologie</th>
                      <th className="text-left p-4 font-semibold">Type</th>
                      <th className="text-left p-4 font-semibold">Compatibilité</th>
                      <th className="text-left p-4 font-semibold">Plateforme</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assistiveTechnologies.map((tech, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-medium">{tech.name}</td>
                        <td className="p-4 text-gray-600">{tech.type}</td>
                        <td className="p-4">
                          <Badge 
                            variant={tech.compatibility === 'Excellente' ? 'default' : 'secondary'}
                            className={tech.compatibility === 'Excellente' ? 'bg-green-600' : ''}
                          >
                            {tech.compatibility}
                          </Badge>
                        </td>
                        <td className="p-4 text-gray-600">{tech.platform}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Raccourcis clavier */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Raccourcis clavier
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Navigation générale</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Aller au contenu principal</span>
                    <Badge variant="outline">Alt + 1</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Aller au menu principal</span>
                    <Badge variant="outline">Alt + 2</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Aller au pied de page</span>
                    <Badge variant="outline">Alt + 3</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rechercher</span>
                    <Badge variant="outline">Alt + S</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Navigation dans les pages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Élément suivant</span>
                    <Badge variant="outline">Tab</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Élément précédent</span>
                    <Badge variant="outline">Shift + Tab</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Activer un lien/bouton</span>
                    <Badge variant="outline">Entrée</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Retour page précédente</span>
                    <Badge variant="outline">Alt + ←</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Signaler un problème */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Signaler un problème d'accessibilité
              </h2>
              <p className="text-xl mb-8 text-red-100">
                Vous rencontrez une difficulté d'accès à notre site ? Contactez-nous !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                  <Mail className="w-5 h-5 mr-2" />
                  accessibilite@ima-automobil.fr
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  <Phone className="w-5 h-5 mr-2" />
                  01 23 45 67 89
                </Button>
              </div>
              <p className="text-red-100 text-sm mt-6">
                Nous nous engageons à vous répondre sous 48h et à corriger les problèmes identifiés
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Amélioration continue */}
        <section>
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">
                Amélioration continue
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                L'accessibilité est un processus continu. Nous effectuons régulièrement des audits 
                et des tests avec des utilisateurs en situation de handicap pour améliorer constamment 
                l'accessibilité de notre site.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">Mensuel</div>
                  <div className="text-gray-600">Audit automatisé</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">Trimestriel</div>
                  <div className="text-gray-600">Test utilisateurs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">Annuel</div>
                  <div className="text-gray-600">Audit expert</div>
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