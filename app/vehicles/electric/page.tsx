'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { 
  Filter, 
  Grid, 
  List, 
  Heart, 
  GitCompare as Compare, 
  Zap, 
  Battery,
  Search,
  Star,
  Eye,
  Leaf,
  MapPin
} from 'lucide-react';

const electricVehicles = [
  {
    id: 1,
    name: "IMA Electric SUV",
    category: "SUV",
    type: "Électrique",
    price: 45990,
    image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["450km autonomie", "7 places", "Recharge rapide 150kW", "AWD"],
    badge: "Bestseller",
    icon: <Zap className="w-5 h-5" />,
    rating: 4.9,
    availability: "En stock",
    description: "SUV électrique familial avec grande autonomie",
    batteryCapacity: "75 kWh",
    chargingTime: "35 min (10-80%)"
  },
  {
    id: 2,
    name: "IMA Electric Sedan",
    category: "Berline",
    type: "Électrique",
    price: 42990,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["500km autonomie", "5 places", "Conduite autonome L3", "Recharge bidirectionnelle"],
    badge: "Innovation",
    icon: <Zap className="w-5 h-5" />,
    rating: 4.8,
    availability: "Sur commande",
    description: "Berline électrique avec technologies avancées",
    batteryCapacity: "80 kWh",
    chargingTime: "30 min (10-80%)"
  },
  {
    id: 3,
    name: "IMA City Electric",
    category: "Citadine",
    type: "Électrique",
    price: 24990,
    image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["280km autonomie", "5 places", "Recharge 22kW", "Aide au stationnement"],
    badge: "Urbaine",
    icon: <Zap className="w-5 h-5" />,
    rating: 4.7,
    availability: "En stock",
    description: "Citadine électrique parfaite pour la ville",
    batteryCapacity: "45 kWh",
    chargingTime: "45 min (10-80%)"
  },
  {
    id: 4,
    name: "IMA Electric Van",
    category: "Utilitaire",
    type: "Électrique",
    price: 38990,
    image: "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["320km autonomie", "1200kg charge utile", "Recharge rapide", "Espace modulable"],
    badge: "Professionnel",
    icon: <Battery className="w-5 h-5" />,
    rating: 4.6,
    availability: "En stock",
    description: "Utilitaire électrique pour les professionnels",
    batteryCapacity: "60 kWh",
    chargingTime: "40 min (10-80%)"
  }
];

export default function ElectricVehiclesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredVehicles, setFilteredVehicles] = useState(electricVehicles);
  const [priceRange, setPriceRange] = useState([20000, 50000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const handleFilter = () => {
    let filtered = electricVehicles.filter(vehicle => {
      const priceMatch = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];
      const categoryMatch = selectedCategory === 'all' || vehicle.category === selectedCategory;
      return priceMatch && categoryMatch;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'autonomy':
          return parseInt(b.features[0]) - parseInt(a.features[0]);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredVehicles(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Zap className="w-16 h-16 mx-auto mb-4 text-green-200" />
            <h1 className="text-5xl font-bold mb-4">Véhicules Électriques</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              L'avenir de la mobilité est électrique. Découvrez notre gamme 100% électrique pour une conduite propre et silencieuse
            </p>
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">0g</div>
                <div className="text-gray-200">CO2/km</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">500km</div>
                <div className="text-gray-200">Autonomie max</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">30min</div>
                <div className="text-gray-200">Recharge rapide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Filtres</h3>
              </div>

              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher un modèle..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Prix (€)</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={60000}
                  min={20000}
                  step={1000}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{priceRange[0].toLocaleString()}€</span>
                  <span>{priceRange[1].toLocaleString()}€</span>
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Catégorie</h4>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes les catégories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    <SelectItem value="SUV">SUV</SelectItem>
                    <SelectItem value="Berline">Berline</SelectItem>
                    <SelectItem value="Citadine">Citadine</SelectItem>
                    <SelectItem value="Utilitaire">Utilitaire</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleFilter} className="w-full bg-green-600 hover:bg-green-700">
                Appliquer les filtres
              </Button>

              {/* Charging Info */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Réseau de recharge
                </h4>
                <p className="text-green-700 text-sm mb-3">
                  Accès à plus de 50 000 points de recharge en Europe
                </p>
                <Button size="sm" variant="outline" className="w-full text-green-700 border-green-300">
                  Trouver une borne
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{filteredVehicles.length} véhicules électriques trouvés</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Nom A-Z</SelectItem>
                    <SelectItem value="price-low">Prix croissant</SelectItem>
                    <SelectItem value="price-high">Prix décroissant</SelectItem>
                    <SelectItem value="rating">Mieux notés</SelectItem>
                    <SelectItem value="autonomy">Autonomie</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Vehicles Grid/List */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 gap-6' 
              : 'space-y-4'
            }>
              {filteredVehicles.map((vehicle) => (
                <Card key={vehicle.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === 'grid' ? 'h-48' : 'h-32'
                      }`}
                    />
                    <Badge className="absolute top-4 left-4 bg-green-600">
                      {vehicle.badge}
                    </Badge>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="p-2">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="p-2">
                        <Compare className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <Leaf className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{vehicle.category}</span>
                      <span>•</span>
                      <span className="text-green-600">100% Électrique</span>
                      <span>•</span>
                      <span className="text-green-600">{vehicle.availability}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {vehicle.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 text-sm">
                      {vehicle.description}
                    </p>
                    
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                      {vehicle.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-green-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Electric specific info */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                      <div className="bg-green-50 p-2 rounded text-center">
                        <div className="font-semibold text-green-800">Batterie</div>
                        <div className="text-green-600">{vehicle.batteryCapacity}</div>
                      </div>
                      <div className="bg-blue-50 p-2 rounded text-center">
                        <div className="font-semibold text-blue-800">Recharge rapide</div>
                        <div className="text-blue-600">{vehicle.chargingTime}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-slate-800">
                          {vehicle.price.toLocaleString()}€
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{vehicle.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        Configurer
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        Détails
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}