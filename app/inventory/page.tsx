'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Search, 
  Filter,
  Calendar,
  Phone,
  Navigation,
  Car,
  Fuel,
  Zap,
  CheckCircle,
  Clock
} from 'lucide-react';

const inventoryVehicles = [
  {
    id: 1,
    name: "IMA Hybrid Sedan",
    model: "Essential",
    year: 2024,
    color: "Blanc Nacré",
    price: 32990,
    mileage: 0,
    fuel: "Hybride",
    transmission: "CVT",
    location: "Paris Centre",
    dealer: "IMA Automobil Paris",
    address: "123 Avenue des Champs-Élysées, 75008 Paris",
    phone: "01 23 45 67 89",
    distance: "2.3 km",
    image: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: ["Climatisation", "Radio AM/FM", "Verrouillage centralisé", "4 haut-parleurs"],
    availability: "Disponible immédiatement",
    vin: "1HGBH41JXMN109186"
  },
  {
    id: 2,
    name: "IMA Electric SUV",
    model: "Premium",
    year: 2024,
    color: "Noir Métallisé",
    price: 48990,
    mileage: 0,
    fuel: "Électrique",
    transmission: "Automatique",
    location: "Lyon Confluence",
    dealer: "IMA Automobil Lyon",
    address: "45 Rue de la République, 69002 Lyon",
    phone: "04 12 34 56 78",
    distance: "5.7 km",
    image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: ["Navigation GPS", "Sièges cuir", "Toit ouvrant", "Système audio premium"],
    availability: "Disponible sous 2 semaines",
    vin: "5NPE34AF4KH012345"
  },
  {
    id: 3,
    name: "IMA City Compact",
    model: "Comfort",
    year: 2024,
    color: "Rouge Passion",
    price: 21490,
    mileage: 0,
    fuel: "Essence",
    transmission: "Manuelle",
    location: "Marseille Vieux-Port",
    dealer: "IMA Automobil Marseille",
    address: "78 La Canebière, 13001 Marseille",
    phone: "04 98 76 54 32",
    distance: "8.1 km",
    image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: ["Écran tactile 8\"", "Régulateur de vitesse", "6 haut-parleurs", "Sièges chauffants"],
    availability: "Disponible immédiatement",
    vin: "KMHD84LF8KU123456"
  }
];

export default function InventoryPage() {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedModel, setSelectedModel] = useState('all');
  const [selectedFuel, setSelectedFuel] = useState('all');
  const [maxDistance, setMaxDistance] = useState('50');
  const [filteredVehicles, setFilteredVehicles] = useState(inventoryVehicles);

  const handleSearch = () => {
    let filtered = inventoryVehicles;
    
    if (selectedModel !== 'all') {
      filtered = filtered.filter(vehicle => vehicle.name.includes(selectedModel));
    }
    
    if (selectedFuel !== 'all') {
      filtered = filtered.filter(vehicle => vehicle.fuel === selectedFuel);
    }
    
    setFilteredVehicles(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Recherche d'inventaire</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trouvez le véhicule parfait disponible près de chez vous
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Localisation
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Ville ou code postal"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Modèle
                  </label>
                  <Select value={selectedModel} onValueChange={setSelectedModel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Tous les modèles" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les modèles</SelectItem>
                      <SelectItem value="Hybrid Sedan">IMA Hybrid Sedan</SelectItem>
                      <SelectItem value="Electric SUV">IMA Electric SUV</SelectItem>
                      <SelectItem value="City Compact">IMA City Compact</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motorisation
                  </label>
                  <Select value={selectedFuel} onValueChange={setSelectedFuel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Toutes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes</SelectItem>
                      <SelectItem value="Hybride">Hybride</SelectItem>
                      <SelectItem value="Électrique">Électrique</SelectItem>
                      <SelectItem value="Essence">Essence</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Distance max
                  </label>
                  <Select value={maxDistance} onValueChange={setMaxDistance}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="25">25 km</SelectItem>
                      <SelectItem value="50">50 km</SelectItem>
                      <SelectItem value="100">100 km</SelectItem>
                      <SelectItem value="200">200 km</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button onClick={handleSearch} className="bg-red-600 hover:bg-red-700">
                  <Search className="w-4 h-4 mr-2" />
                  Rechercher
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            {filteredVehicles.length} véhicules trouvés
          </h2>
          <Select defaultValue="distance">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="distance">Trier par distance</SelectItem>
              <SelectItem value="price-low">Prix croissant</SelectItem>
              <SelectItem value="price-high">Prix décroissant</SelectItem>
              <SelectItem value="year">Année</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-6">
          {filteredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-48 lg:h-full object-cover"
                  />
                </div>
                
                <div className="lg:col-span-2 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {vehicle.name} {vehicle.model}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>{vehicle.year}</span>
                        <span>•</span>
                        <span>{vehicle.color}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          {vehicle.fuel === 'Électrique' ? <Zap className="w-4 h-4" /> : <Fuel className="w-4 h-4" />}
                          {vehicle.fuel}
                        </span>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600 mb-4">
                        {vehicle.availability}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-red-600 mb-1">
                        {vehicle.price.toLocaleString()}€
                      </div>
                      <div className="text-sm text-gray-500">Prix de vente</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-500">Kilométrage</div>
                      <div className="font-medium">{vehicle.mileage.toLocaleString()} km</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Transmission</div>
                      <div className="font-medium">{vehicle.transmission}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Équipements principaux:</div>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">
                    VIN: {vehicle.vin}
                  </div>
                </div>
                
                <div className="lg:col-span-1 p-6 bg-gray-50">
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Concessionnaire</h4>
                    <div className="space-y-2 text-sm">
                      <div className="font-medium">{vehicle.dealer}</div>
                      <div className="flex items-start gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 mt-0.5" />
                        <span>{vehicle.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{vehicle.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Navigation className="w-4 h-4" />
                        <span>{vehicle.distance}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <Car className="w-4 h-4 mr-2" />
                      Réserver ce véhicule
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Programmer un essai
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Contacter le concessionnaire
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}