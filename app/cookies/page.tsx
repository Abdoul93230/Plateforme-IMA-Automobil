'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Cookie, 
  Settings, 
  BarChart3, 
  Target, 
  Shield,
  Info,
  CheckCircle,
  X
} from 'lucide-react';

const cookieCategories = [
  {
    id: 'essential',
    name: 'Cookies essentiels',
    description: 'Nécessaires au fonctionnement du site',
    icon: <Shield className="w-5 h-5" />,
    required: true,
    enabled: true,
    cookies: [
      {
        name: 'session_id',
        purpose: 'Maintien de la session utilisateur',
        duration: 'Session',
        provider: 'IMA Automobil'
      },
      {
        name: 'csrf_token',
        purpose: 'Protection contre les attaques CSRF',
        duration: '24 heures',
        provider: 'IMA Automobil'
      }
    ]
  },
  {
    id: 'analytics',
    name: 'Cookies analytiques',
    description: 'Nous aident à comprendre comment vous utilisez notre site',
    icon: <BarChart3 className="w-5 h-5" />,
    required: false,
    enabled: false,
    cookies: [
      {
        name: '_ga',
        purpose: 'Analyse du trafic et du comportement',
        duration: '2 ans',
        provider: 'Google Analytics'
      },
      {
        name: '_gid',
        purpose: 'Distinction des utilisateurs',
        duration: '24 heures',
        provider: 'Google Analytics'
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Cookies marketing',
    description: 'Utilisés pour personnaliser la publicité',
    icon: <Target className="w-5 h-5" />,
    required: false,
    enabled: false,
    cookies: [
      {
        name: 'fb_pixel',
        purpose: 'Suivi des conversions publicitaires',
        duration: '90 jours',
        provider: 'Facebook'
      },
      {
        name: 'google_ads',
        purpose: 'Personnalisation des annonces',
        duration: '30 jours',
        provider: 'Google Ads'
      }
    ]
  },
  {
    id: 'preferences',
    name: 'Cookies de préférences',
    description: 'Mémorisent vos choix et préférences',
    icon: <Settings className="w-5 h-5" />,
    required: false,
    enabled: false,
    cookies: [
      {
        name: 'theme_preference',
        purpose: 'Sauvegarde du thème choisi',
        duration: '1 an',
        provider: 'IMA Automobil'
      },
      {
        name: 'language_pref',
        purpose: 'Langue préférée',
        duration: '1 an',
        provider: 'IMA Automobil'
      }
    ]
  }
];

export default function CookiesPage() {
  const [cookieSettings, setCookieSettings] = useState(
    cookieCategories.reduce((acc, category) => {
      acc[category.id] = category.enabled;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleCookieToggle = (categoryId: string, enabled: boolean) => {
    setCookieSettings(prev => ({
      ...prev,
      [categoryId]: enabled
    }));
  };

  const acceptAll = () => {
    const newSettings = cookieCategories.reduce((acc, category) => {
      acc[category.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setCookieSettings(newSettings);
  };

  const rejectAll = () => {
    const newSettings = cookieCategories.reduce((acc, category) => {
      acc[category.id] = category.required;
      return acc;
    }, {} as Record<string, boolean>);
    setCookieSettings(newSettings);
  };

  const saveSettings = () => {
    // Ici, vous sauvegarderiez les préférences
    console.log('Cookie settings saved:', cookieSettings);
    alert('Vos préférences ont été sauvegardées !');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Cookie className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h1 className="text-5xl font-bold mb-4">Gestion des cookies</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Personnalisez votre expérience en gérant vos préférences de cookies
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <Tabs defaultValue="settings" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Paramètres des cookies
            </TabsTrigger>
            <TabsTrigger value="info" className="flex items-center gap-2">
              <Info className="w-4 h-4" />
              Informations détaillées
            </TabsTrigger>
          </TabsList>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        Actions rapides
                      </h3>
                      <p className="text-gray-600">
                        Acceptez ou refusez tous les cookies en un clic
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button onClick={acceptAll} className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Tout accepter
                      </Button>
                      <Button onClick={rejectAll} variant="outline">
                        <X className="w-4 h-4 mr-2" />
                        Tout refuser
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cookie Categories */}
              {cookieCategories.map((category) => (
                <Card key={category.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                          {category.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{category.name}</CardTitle>
                          <p className="text-gray-600 mt-1">{category.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {category.required && (
                          <Badge variant="secondary">Obligatoire</Badge>
                        )}
                        <Switch
                          checked={cookieSettings[category.id]}
                          onCheckedChange={(checked) => handleCookieToggle(category.id, checked)}
                          disabled={category.required}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.cookies.map((cookie, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <div className="font-medium text-slate-800">Nom</div>
                              <div className="text-gray-600">{cookie.name}</div>
                            </div>
                            <div>
                              <div className="font-medium text-slate-800">Finalité</div>
                              <div className="text-gray-600">{cookie.purpose}</div>
                            </div>
                            <div>
                              <div className="font-medium text-slate-800">Durée</div>
                              <div className="text-gray-600">{cookie.duration}</div>
                            </div>
                            <div>
                              <div className="font-medium text-slate-800">Fournisseur</div>
                              <div className="text-gray-600">{cookie.provider}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Save Button */}
              <div className="text-center">
                <Button onClick={saveSettings} size="lg" className="bg-red-600 hover:bg-red-700">
                  Sauvegarder mes préférences
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Info Tab */}
          <TabsContent value="info">
            <div className="space-y-8">
              {/* What are cookies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Qu'est-ce qu'un cookie ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, 
                    tablette, smartphone) lors de la visite d'un site web. Il permet au site de 
                    reconnaître votre navigateur et de mémoriser certaines informations.
                  </p>
                  <p className="text-gray-600">
                    Les cookies sont essentiels au fonctionnement d'Internet et ne peuvent pas 
                    endommager votre terminal. Ils nous aident à améliorer votre expérience de 
                    navigation en mémorisant vos préférences.
                  </p>
                </CardContent>
              </Card>

              {/* Types of cookies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Types de cookies utilisés</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Cookies de session</h4>
                      <p className="text-gray-600 text-sm">
                        Temporaires, supprimés à la fermeture du navigateur. 
                        Ils permettent de maintenir votre session active.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Cookies persistants</h4>
                      <p className="text-gray-600 text-sm">
                        Restent sur votre terminal jusqu'à expiration ou suppression manuelle. 
                        Ils mémorisent vos préférences.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Cookies internes</h4>
                      <p className="text-gray-600 text-sm">
                        Déposés directement par IMA Automobil pour le fonctionnement 
                        et l'amélioration du site.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Cookies tiers</h4>
                      <p className="text-gray-600 text-sm">
                        Déposés par nos partenaires (Google, Facebook) pour l'analyse 
                        et la publicité personnalisée.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Your rights */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Vos droits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Consentement</h4>
                      <p className="text-gray-600 text-sm">
                        Vous pouvez accepter ou refuser les cookies non essentiels. 
                        Votre consentement est libre et peut être retiré à tout moment.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Paramétrage du navigateur</h4>
                      <p className="text-gray-600 text-sm">
                        Vous pouvez configurer votre navigateur pour accepter, refuser ou 
                        être alerté lors du dépôt de cookies.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Suppression</h4>
                      <p className="text-gray-600 text-sm">
                        Vous pouvez supprimer les cookies déjà déposés via les paramètres 
                        de votre navigateur.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Browser settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Configuration par navigateur</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Chrome</h4>
                      <p className="text-gray-600 text-sm">
                        Paramètres → Confidentialité et sécurité → Cookies et autres données de sites
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Firefox</h4>
                      <p className="text-gray-600 text-sm">
                        Options → Vie privée et sécurité → Cookies et données de sites
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Safari</h4>
                      <p className="text-gray-600 text-sm">
                        Préférences → Confidentialité → Cookies et données de sites web
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Edge</h4>
                      <p className="text-gray-600 text-sm">
                        Paramètres → Cookies et autorisations de site → Cookies et données stockées
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}