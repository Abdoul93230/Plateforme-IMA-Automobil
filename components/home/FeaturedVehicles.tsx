'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Fuel, Award } from 'lucide-react';

const featuredVehicles = [
  {
    id: 1,
    name: "IMA Hybrid Sedan",
    category: "Berline",
    type: "Hybride",
    price: "À partir de 32 990€",
    image: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["4.2L/100km", "5 places", "Garantie 7 ans"],
    badge: "Nouveauté",
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 2,
    name: "IMA Electric SUV",
    category: "SUV",
    type: "Électrique",
    price: "À partir de 45 990€",
    image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["450km d'autonomie", "7 places", "Recharge rapide"],
    badge: "Plus populaire",
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 3,
    name: "IMA City Compact",
    category: "Citadine",
    type: "Essence",
    price: "À partir de 18 990€",
    image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["5.8L/100km", "5 places", "Technologies connectées"],
    badge: "Meilleur rapport qualité-prix",
    icon: <Fuel className="w-5 h-5" />
  },
  {
    id: 4,
    name: "IMA Luxury Coupe",
    category: "Coupé",
    type: "Hybride",
    price: "À partir de 52 990€",
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["3.9L/100km", "4 places", "Finitions premium"],
    badge: "Série limitée",
    icon: <Award className="w-5 h-5" />
  }
];

export default function FeaturedVehicles() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Découvrez notre gamme
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des véhicules conçus pour répondre à tous vos besoins, alliant performance, 
            confort et respect de l'environnement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-red-600">
                  {vehicle.badge}
                </Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  {vehicle.icon}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span>{vehicle.category}</span>
                  <span>•</span>
                  <span>{vehicle.type}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {vehicle.name}
                </h3>
                
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1 h-1 bg-red-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-slate-800">
                    {vehicle.price}
                  </div>
                  <Button size="sm" variant="outline" className="hover:bg-red-600 hover:text-white">
                    Découvrir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Voir tous les véhicules
          </Button>
        </div>
      </div>
    </section>
  );
}