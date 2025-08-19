'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Leaf, 
  Recycle, 
  Zap, 
  Factory, 
  TreePine,
  Droplets,
  Wind,
  Sun,
  Target,
  TrendingDown,
  Award,
  Users
} from 'lucide-react';

const sustainabilityGoals = [
  {
    title: "Neutralité carbone",
    target: "2030",
    progress: 65,
    description: "Réduction de 100% des émissions de CO2",
    icon: <Leaf className="w-6 h-6" />,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Véhicules électriques",
    target: "80%",
    progress: 45,
    description: "Part des ventes en électrique d'ici 2028",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Recyclage matériaux",
    target: "95%",
    progress: 78,
    description: "Taux de recyclage des véhicules",
    icon: <Recycle className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Énergie renouvelable",
    target: "100%",
    progress: 85,
    description: "Usines alimentées par énergies vertes",
    icon: <Sun className="w-6 h-6" />,
    color: "bg-yellow-50 text-yellow-600"
  }
];

const initiatives = [
  {
    title: "Usines vertes",
    description: "Nos sites de production utilisent 85% d'énergies renouvelables",
    icon: <Factory className="w-8 h-8" />,
    achievements: [
      "Panneaux solaires sur tous les toits",
      "Récupération des eaux de pluie",
      "Réduction de 40% de la consommation énergétique"
    ]
  },
  {
    title: "Reforestation",
    description: "Programme de plantation d'arbres pour compenser notre empreinte carbone",
    icon: <TreePine className="w-8 h-8" />,
    achievements: [
      "50 000 arbres plantés en 2024",
      "Partenariat avec 3 ONG environnementales",
      "Compensation de 2000 tonnes de CO2"
    ]
  },
  {
    title: "Économie circulaire",
    description: "Réutilisation et recyclage des matériaux dans nos processus",
    icon: <Recycle className="w-8 h-8" />,
    achievements: [
      "95% des matériaux recyclés",
      "Réduction de 60% des déchets",
      "Programme de reprise véhicules"
    ]
  },
  {
    title: "Innovation verte",
    description: "Recherche et développement de technologies durables",
    icon: <Leaf className="w-8 h-8" />,
    achievements: [
      "Batteries 100% recyclables",
      "Matériaux biosourcés",
      "Réduction du poids des véhicules"
    ]
  }
];

const certifications = [
  {
    name: "ISO 14001",
    description: "Management environnemental",
    year: "2020"
  },
  {
    name: "Carbon Trust",
    description: "Réduction empreinte carbone",
    year: "2021"
  },
  {
    name: "B Corp",
    description: "Entreprise à mission",
    year: "2022"
  },
  {
    name: "Green Factory",
    description: "Usines éco-responsables",
    year: "2023"
  }
];

const impactNumbers = [
  { label: "Réduction CO2", value: "65%", icon: <TrendingDown className="w-6 h-6" /> },
  { label: "Énergie verte", value: "85%", icon: <Sun className="w-6 h-6" /> },
  { label: "Recyclage", value: "95%", icon: <Recycle className="w-6 h-6" /> },
  { label: "Arbres plantés", value: "50K", icon: <TreePine className="w-6 h-6" /> }
];

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Leaf className="w-16 h-16 mx-auto mb-4 text-green-200" />
            <h1 className="text-5xl font-bold mb-4">Développement durable</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Notre engagement pour une mobilité respectueuse de l'environnement et des générations futures
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactNumbers.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Notre engagement */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">
                  Notre engagement environnemental
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Chez IMA Automobil, nous croyons qu'il est possible de concilier innovation automobile 
                  et respect de l'environnement. Notre stratégie de développement durable s'articule 
                  autour de quatre piliers fondamentaux.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Électrification</h3>
                  <p className="text-gray-600 text-sm">
                    Transition vers une gamme 100% électrique
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Production verte</h3>
                  <p className="text-gray-600 text-sm">
                    Usines neutres en carbone et énergies renouvelables
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Recycle className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Économie circulaire</h3>
                  <p className="text-gray-600 text-sm">
                    Recyclage et réutilisation des matériaux
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Responsabilité sociale</h3>
                  <p className="text-gray-600 text-sm">
                    Engagement communautaire et social
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Objectifs durables */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Nos objectifs 2030
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainabilityGoals.map((goal, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${goal.color} flex items-center justify-center`}>
                      {goal.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{goal.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className="bg-green-600">Objectif {goal.target}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{goal.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progression</span>
                      <span className="font-medium">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Initiatives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Nos initiatives concrètes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                      {initiative.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{initiative.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{initiative.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-800">Réalisations 2024 :</h4>
                    <ul className="space-y-2">
                      {initiative.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Certifications et reconnaissances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="bg-yellow-100 text-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                  <Badge variant="outline">Obtenu en {cert.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Rapport développement durable */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Rapport de développement durable 2024
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Découvrez en détail nos actions, nos résultats et nos engagements pour l'avenir
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  Télécharger le rapport PDF
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Version interactive
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Partenariats */}
        <section>
          <Card>
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                Nos partenaires environnementaux
              </h2>
              <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                Nous collaborons avec des organisations reconnues pour maximiser notre impact positif 
                sur l'environnement et accélérer la transition vers une mobilité durable.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TreePine className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Reforest'Action</h3>
                  <p className="text-gray-600 text-sm">
                    Partenariat pour la reforestation et la préservation des forêts
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wind className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">WWF France</h3>
                  <p className="text-gray-600 text-sm">
                    Collaboration pour la protection de la biodiversité
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 text-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sun className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Solar Impulse</h3>
                  <p className="text-gray-600 text-sm">
                    Innovation pour des solutions énergétiques propres
                  </p>
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