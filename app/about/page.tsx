'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Users, 
  Award, 
  Leaf, 
  Globe, 
  Heart,
  TrendingUp,
  Shield,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Calendar,
  MapPin
} from 'lucide-react';

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque véhicule que nous concevons et chaque service que nous offrons.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Durabilité",
    description: "Nous nous engageons pour un avenir plus vert avec nos technologies hybrides et électriques.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion",
    description: "Notre passion pour l'automobile nous pousse à innover constamment pour nos clients.",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Fiabilité",
    description: "La fiabilité est au cœur de nos préoccupations, pour votre sécurité et votre tranquillité.",
    color: "bg-purple-50 text-purple-600"
  }
];

const milestones = [
  {
    year: "2020",
    title: "Création d'IMA Automobil",
    description: "Lancement de la marque avec une vision claire : démocratiser la mobilité durable."
  },
  {
    year: "2021",
    title: "Premier véhicule hybride",
    description: "Sortie de l'IMA Hybrid Sedan, notre premier modèle hybride révolutionnaire."
  },
  {
    year: "2022",
    title: "Expansion du réseau",
    description: "Ouverture de 50 concessionnaires à travers la France."
  },
  {
    year: "2023",
    title: "Gamme électrique",
    description: "Lancement de notre première gamme 100% électrique avec l'IMA Electric SUV."
  },
  {
    year: "2024",
    title: "200 points de vente",
    description: "Atteinte de 200 concessionnaires et centres de service en France."
  }
];

const stats = [
  { label: "Véhicules vendus", value: "50 000+", icon: <TrendingUp className="w-6 h-6" /> },
  { label: "Clients satisfaits", value: "98%", icon: <Users className="w-6 h-6" /> },
  { label: "Points de vente", value: "200+", icon: <MapPin className="w-6 h-6" /> },
  { label: "Années d'expérience", value: "4", icon: <Calendar className="w-6 h-6" /> }
];

const team = [
  {
    name: "Marie Dubois",
    role: "Directrice Générale",
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    description: "20 ans d'expérience dans l'industrie automobile"
  },
  {
    name: "Pierre Martin",
    role: "Directeur Technique",
    image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    description: "Expert en motorisations hybrides et électriques"
  },
  {
    name: "Sophie Laurent",
    role: "Directrice Marketing",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    description: "Spécialiste en stratégie de marque automobile"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">À propos d'IMA Automobil</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Depuis 2020, nous révolutionnons l'industrie automobile française avec des véhicules 
              innovants, durables et accessibles à tous.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Notre Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Chez IMA Automobil, notre mission est de rendre la mobilité durable accessible à tous. 
                Nous concevons des véhicules qui allient performance, confort et respect de l'environnement, 
                tout en offrant un service client exceptionnel.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Innovation technologique constante</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Engagement environnemental fort</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Service client de qualité premium</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Notre mission"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg">
                <div className="text-3xl font-bold">4 ans</div>
                <div className="text-sm">d'innovation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mx-auto mb-4`}>
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">IMA en chiffres</h2>
            <p className="text-xl text-red-100">
              Notre croissance témoigne de votre confiance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Notre Histoire</h2>
            <p className="text-xl text-gray-600">
              Les étapes clés de notre développement
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-red-600">{milestone.year}</Badge>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600">
              Les visionnaires qui façonnent l'avenir d'IMA Automobil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Rejoignez l'aventure IMA Automobil
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Découvrez nos véhicules et faites partie de la révolution automobile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Découvrir nos véhicules
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}