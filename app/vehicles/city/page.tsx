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
  Fuel, 
  Award,
  Search,
  Star,
  Eye,
  Navigation,
  ParkingCircle
} from 'lucide-react';

const cityVehicles = [
  {
    id: 1,
    name: "IMA City Compact Essential",
    category: "Citadine",
    type: "Essence",
    price: 18990,
    image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["5.8L/100km", "5 places", "Direction assistée", "Climatisation"],
    badge: "Économique",
    icon: <Fuel className="w-5 h-5" />,
    rating: 4.6,
    availability: "En stock",
    description: "Citadine économique parfaite pour la ville"
  },
  {
    id: 2,
    name: "IMA City Compact Comfort",
    category: "Citadine",
    type: "Essence",
    price: 21490,
    image: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["5.5L/100km", "5 places", "Écran tactile 8\"", "Aide au stationnement"],
    badge: "Connectée",
    icon: <Navigation className="w-5 h-5" />,
    rating: 4.7,
    availability: "En stock",
    description: "Version connectée avec technologies urbaines"
  },
  {
    id: 3,
    name: "IMA City Electric",
    category: "Citadine",
    type: "Électrique",
    price: 24990,
    image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["280km autonomie", "5 places", "Recharge 22kW", "Zéro émission"],
    badge: "Écologique",
    icon: <Zap className="w-5 h-5" />,
    rating: 4.8,
    availability: "En stock",
    description: "Citadine 100% électrique pour une mobilité propre"
  },
  {
    id: 4,
    name: "IMA City Hybrid",
    category: "Citadine",
    type: "Hybride",
    price: 22990,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["3.9L/100km", "5 places", "Mode électrique urbain", "Récupération d'énergie"],
    badge: "Efficace",
    icon: <Zap className="w-5 h-5" />,
    rating: 4.7,
    availability: "En stock",
    description: "Citadine hybride ultra-économique"
  }
];

export default function CityVehiclesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredVehicles, setFilteredVehicles] = useState(cityVehicles);
  const [priceRange, setPriceRange] = useState([15000, 30000]);
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const handleFilter = () => {
    let filtered = cityVehicles.filter(vehicle => {
      const priceMatch = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];
      const typeMatch = selectedType === 'all' || vehicle.type === selectedType;
      return priceMatch && typeMatch;
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
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Citadines IMA</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Des véhicules compacts et agiles, parfaits pour la conduite urbaine et le stationnement facile
            </p>
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
                    placeholder="Rechercher une citadine..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Prix (€)</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={30000}
                  min={15000}
                  step={500}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{priceRange[0].toLocaleString()}€</span>
                  <span>{priceRange[1].toLocaleString()}€</span>
                </div>
              </div>

              {/* Type */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Motorisation</h4>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes les motorisations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les motorisations</SelectItem>
                    <SelectItem value="Essence">Essence</SelectItem>
                    <SelectItem value="Hybride">Hybride</SelectItem>
                    <SelectItem value="Électrique">Électrique</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleFilter} className="w-full bg-red-600 hover:bg-red-700">
                Appliquer les filtres
              </Button>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{filteredVehicles.length} citadines trouvées</span>
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
                    <SelectItem value="rating">Mieux notées</SelectItem>
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
                    <Badge className="absolute top-4 left-4 bg-red-600">
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
                      {vehicle.icon}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{vehicle.category}</span>
                      <span>•</span>
                      <span>{vehicle.type}</span>
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
                          <div className="w-1 h-1 bg-red-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
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
                      <Button className="flex-1 bg-red-600 hover:bg-red-700">
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