'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail,
  Navigation,
  Star,
  Car,
  Wrench,
  CreditCard,
  Search,
  Filter,
  Calendar,
  Package
} from 'lucide-react';

const dealers = [
  {
    id: 1,
    name: "IMA Automobil Paris Centre",
    address: "123 Avenue des Champs-Élysées, 75008 Paris",
    phone: "01 23 45 67 89",
    email: "paris-centre@ima-automobil.fr",
    rating: 4.8,
    reviews: 156,
    distance: "2.3 km",
    services: ["Vente", "Service", "Pièces", "Financement"],
    hours: {
      weekdays: "8h00 - 19h00",
      saturday: "9h00 - 18h00",
      sunday: "Fermé"
    },
    specialties: ["Véhicules électriques", "Véhicules de luxe"],
    image: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "IMA Automobil Lyon Confluence",
    address: "45 Rue de la République, 69002 Lyon",
    phone: "04 12 34 56 78",
    email: "lyon-confluence@ima-automobil.fr",
    rating: 4.6,
    reviews: 89,
    distance: "5.7 km",
    services: ["Vente", "Service", "Pièces"],
    hours: {
      weekdays: "8h30 - 18h30",
      saturday: "9h00 - 17h00",
      sunday: "Fermé"
    },
    specialties: ["Véhicules familiaux", "Hybrides"],
    image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "IMA Automobil Marseille Vieux-Port",
    address: "78 La Canebière, 13001 Marseille",
    phone: "04 98 76 54 32",
    email: "marseille-vieux-port@ima-automobil.fr",
    rating: 4.7,
    reviews: 124,
    distance: "8.1 km",
    services: ["Vente", "Service", "Financement"],
    hours: {
      weekdays: "8h00 - 18h00",
      saturday: "9h00 - 16h00",
      sunday: "Fermé"
    },
    specialties: ["SUV", "Véhicules utilitaires"],
    image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "IMA Automobil Bordeaux Mériadeck",
    address: "12 Cours du Maréchal Juin, 33000 Bordeaux",
    phone: "05 56 78 90 12",
    email: "bordeaux-meriadeck@ima-automobil.fr",
    rating: 4.9,
    reviews: 203,
    distance: "12.4 km",
    services: ["Vente", "Service", "Pièces", "Financement"],
    hours: {
      weekdays: "8h00 - 19h00",
      saturday: "9h00 - 18h00",
      sunday: "10h00 - 16h00"
    },
    specialties: ["Véhicules électriques", "Service premium"],
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  }
];

const serviceIcons = {
  "Vente": <Car className="w-4 h-4" />,
  "Service": <Wrench className="w-4 h-4" />,
  "Pièces": <Package className="w-4 h-4" />,
  "Financement": <CreditCard className="w-4 h-4" />
};

export default function DealersPage() {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedService, setSelectedService] = useState('all');
  const [filteredDealers, setFilteredDealers] = useState(dealers);

  const handleSearch = () => {
    let filtered = dealers;
    
    if (selectedService !== 'all') {
      filtered = filtered.filter(dealer => 
        dealer.services.includes(selectedService)
      );
    }
    
    setFilteredDealers(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Trouvez votre concessionnaire</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Plus de 200 points de vente en France pour vous accompagner dans votre projet automobile
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ville ou code postal
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Ex: Paris, 75008..."
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service recherché
                  </label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Tous les services" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les services</SelectItem>
                      <SelectItem value="Vente">Vente de véhicules</SelectItem>
                      <SelectItem value="Service">Service après-vente</SelectItem>
                      <SelectItem value="Pièces">Pièces détachées</SelectItem>
                      <SelectItem value="Financement">Financement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button onClick={handleSearch} className="bg-red-600 hover:bg-red-700 px-8">
                  <Search className="w-4 h-4 mr-2" />
                  Rechercher
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  Carte des concessionnaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Carte interactive</p>
                    <p className="text-sm">Localisation des concessionnaires</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    Concessionnaires IMA
                  </p>
                  <p className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    Centres de service
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dealers List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                {filteredDealers.length} concessionnaires trouvés
              </h2>
              <Select defaultValue="distance">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">Trier par distance</SelectItem>
                  <SelectItem value="rating">Trier par note</SelectItem>
                  <SelectItem value="name">Trier par nom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6">
              {filteredDealers.map((dealer) => (
                <Card key={dealer.id} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <img 
                        src={dealer.image} 
                        alt={dealer.name}
                        className="w-full h-48 md:h-full object-cover rounded-l-lg"
                      />
                    </div>
                    
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-800 mb-2">
                            {dealer.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium ml-1">{dealer.rating}</span>
                            </div>
                            <span className="text-sm text-gray-500">({dealer.reviews} avis)</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-red-600 border-red-600">
                          {dealer.distance}
                        </Badge>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-start gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                          <span className="text-gray-600">{dealer.address}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{dealer.phone}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{dealer.email}</span>
                        </div>
                        
                        <div className="flex items-start gap-2 text-sm">
                          <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                          <div className="text-gray-600">
                            <div>Lun-Ven: {dealer.hours.weekdays}</div>
                            <div>Sam: {dealer.hours.saturday}</div>
                            <div>Dim: {dealer.hours.sunday}</div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">Services:</div>
                        <div className="flex flex-wrap gap-2">
                          {dealer.services.map((service, index) => (
                            <Badge key={index} variant="secondary" className="flex items-center gap-1">
                              {serviceIcons[service as keyof typeof serviceIcons]}
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="text-sm font-medium text-gray-700 mb-2">Spécialités:</div>
                        <div className="flex flex-wrap gap-2">
                          {dealer.specialties.map((specialty, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button className="bg-red-600 hover:bg-red-700">
                          <Navigation className="w-4 h-4 mr-2" />
                          Itinéraire
                        </Button>
                        <Button variant="outline">
                          <Calendar className="w-4 h-4 mr-2" />
                          Prendre RDV
                        </Button>
                        <Button variant="outline">
                          <Phone className="w-4 h-4 mr-2" />
                          Appeler
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contactez notre service client pour obtenir de l'aide personnalisée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Phone className="w-5 h-5 mr-2" />
              01 23 45 67 89
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
              <Mail className="w-5 h-5 mr-2" />
              Nous écrire
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}