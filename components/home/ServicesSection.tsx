'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Settings, 
  Shield, 
  CreditCard, 
  MapPin, 
  Calendar, 
  Wrench 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Build & Price",
    description: "Configurez votre véhicule selon vos goûts et obtenez un devis personnalisé",
    icon: <Settings className="w-8 h-8" />,
    cta: "Configurer",
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: 2,
    title: "Garantie & Assurance",
    description: "Protégez votre investissement avec nos solutions d'assurance complètes",
    icon: <Shield className="w-8 h-8" />,
    cta: "En savoir plus",
    color: "bg-green-50 text-green-600"
  },
  {
    id: 3,
    title: "Financement",
    description: "Solutions de crédit et leasing adaptées à votre budget",
    icon: <CreditCard className="w-8 h-8" />,
    cta: "Simuler",
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: 4,
    title: "Réseau Concessionnaires",
    description: "Trouvez le concessionnaire le plus proche de chez vous",
    icon: <MapPin className="w-8 h-8" />,
    cta: "Localiser",
    color: "bg-orange-50 text-orange-600"
  },
  {
    id: 5,
    title: "Rendez-vous Service",
    description: "Prenez rendez-vous pour l'entretien de votre véhicule",
    icon: <Calendar className="w-8 h-8" />,
    cta: "Réserver",
    color: "bg-red-50 text-red-600"
  },
  {
    id: 6,
    title: "Pièces & Accessoires",
    description: "Personnalisez et entretenez votre véhicule avec nos pièces d'origine",
    icon: <Wrench className="w-8 h-8" />,
    cta: "Parcourir",
    color: "bg-teal-50 text-teal-600"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Nos services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un accompagnement complet pour vous offrir la meilleure expérience automobile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-slate-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
                >
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}