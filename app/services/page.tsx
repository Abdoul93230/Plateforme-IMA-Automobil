import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Settings, 
  Shield, 
  CreditCard, 
  MapPin, 
  Calendar, 
  Wrench,
  Phone,
  Clock,
  Award,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const mainServices = [
  {
    id: 1,
    title: "Entretien & Réparation",
    description: "Services d'entretien complets par des techniciens certifiés",
    icon: <Wrench className="w-8 h-8" />,
    features: ["Révision complète", "Diagnostic électronique", "Pièces d'origine", "Garantie travaux"],
    color: "bg-blue-50 text-blue-600",
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Garantie & Assurance",
    description: "Protection complète pour votre véhicule et votre tranquillité",
    icon: <Shield className="w-8 h-8" />,
    features: ["Garantie étendue", "Assistance 24h/24", "Véhicule de remplacement", "Protection juridique"],
    color: "bg-green-50 text-green-600",
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Financement",
    description: "Solutions de financement flexibles adaptées à votre budget",
    icon: <CreditCard className="w-8 h-8" />,
    features: ["Crédit auto", "Leasing", "LOA/LLD", "Reprise véhicule"],
    color: "bg-purple-50 text-purple-600",
    image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  }
];

const additionalServices = [
  {
    title: "Réseau Concessionnaires",
    description: "Plus de 200 points de vente en France",
    icon: <MapPin className="w-6 h-6" />,
    cta: "Trouver un concessionnaire"
  },
  {
    title: "Prise de Rendez-vous",
    description: "Réservez votre créneau en ligne",
    icon: <Calendar className="w-6 h-6" />,
    cta: "Prendre rendez-vous"
  },
  {
    title: "Support Client",
    description: "Assistance téléphonique 7j/7",
    icon: <Phone className="w-6 h-6" />,
    cta: "Nous contacter"
  },
  {
    title: "Formation Conduite",
    description: "Stages de conduite éco-responsable",
    icon: <Users className="w-6 h-6" />,
    cta: "S'inscrire"
  }
];

const serviceStats = [
  { label: "Concessionnaires", value: "200+", icon: <MapPin className="w-6 h-6" /> },
  { label: "Techniciens certifiés", value: "1500+", icon: <Award className="w-6 h-6" /> },
  { label: "Clients satisfaits", value: "98%", icon: <Users className="w-6 h-6" /> },
  { label: "Disponibilité", value: "24h/24", icon: <Clock className="w-6 h-6" /> }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Nos Services</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Un accompagnement complet pour vous offrir la meilleure expérience automobile, 
              de l'achat à l'entretien de votre véhicule.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {serviceStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Services Principaux
            </h2>
            <p className="text-xl text-gray-600">
              Des solutions complètes pour tous vos besoins automobiles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-full ${service.color} flex items-center justify-center`}>
                    {service.icon}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Services Complémentaires
            </h2>
            <p className="text-xl text-gray-600">
              Tous les services pour faciliter votre expérience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <Button variant="outline" size="sm" className="hover:bg-red-600 hover:text-white">
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'aide pour choisir le bon service ?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Nos conseillers sont là pour vous accompagner dans toutes vos démarches
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Nous appeler
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              <Calendar className="w-5 h-5 mr-2" />
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}