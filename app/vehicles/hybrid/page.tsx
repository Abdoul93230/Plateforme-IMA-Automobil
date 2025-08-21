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
  Search,
  Star,
  Eye,
  Leaf,
  Battery
} from 'lucide-react';

const hybridVehicles = [
  {
    id: 1,
    name: "IMA Hybrid Sedan",
    category: "Berline",
    type: "Hybride",
    price: 32990,
    originalPrice: 35990,
    image: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["4.2L/100km", "5 places", "Mode électrique urbain", "Transmission CVT"],
    badge: "Économique",
    icon: <Zap className="w-5 h-5" />,
    rating: 4.8,
    availability: "En stock",
    description: "Berline hybride alliant performance et économie",
    fuelConsumption: "4.2L/100km",
    electricRange: "2km"
  },
  {
    id: 2,
    name: "IMA Hybrid SUV",
    category: "SUV",
    type: "Hybride",
    price: 38990,
    image: "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["5.1L/100km", "7 places", "AWD intelligent", "Mode tout-terrain"],
    badge: "Familial",
    icon: <Zap className="w-5 h-5" />,
    rating: 4.7,
    availability: "En stock",
    description: "SUV hybride parfait pour la famille",
    fuelConsumption: "5.1L/100km",
    electricRange: "1.8km"
  },
  {
    id: 3,
    name: "IMA City Hybrid",
    category: "Citadine",
    type: "Hybride",
    price: 22990,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["3.9L/100km", "5 places", "Start & Stop", "Récupération d'énergie"],
    badge: "Urbaine",
    icon: <Zap className="w-5 h-5" />,
    rating: 4.6,
    availability: "En stock",
    description: "Citadine hybride ultra-économique",
    fuelConsumption: "3.9L/100km",
    electricRange: "2.2km"
  },
  {
    id: 4,
    name: "IMA Luxury Coupe Hybrid",
    category: "Coupé",
    type: "Hybride",
    price: 52990,
    image: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["4.8L/100km", "4 places", "Performance hybride", "Finitions premium"],
    badge: "Luxe",
    icon: <Zap className="w-5 h-5" />,
    rating: 4.9,
    availability: "Sur commande",
    description: "Coupé hybride alliant luxe et performance",
    fuelConsumption: "4.8L/100km",
    electricRange: "1.5km"
  }
];

export default function HybridVehiclesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredVehicles, setFilteredVehicles] = useState(hybridVehicles);
  const [priceRange, setPriceRange] = useState([20000, 60000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const handleFilter = () => {
    let filtered = hybridVehicles.filter(vehicle => {
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
        case 'consumption':
          return parseFloat(a.fuelConsumption) - parseFloat(b.fuelConsumption);
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
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-12 h-12 text-blue-200" />
              <Fuel className="w-12 h-12 text-green-200" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Véhicules Hybrides</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Le meilleur des deux mondes : l'efficacité électrique et la liberté thermique pour une conduite optimisée
            </p>
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">3.9L</div>
                <div className="text-gray-200">Consommation min</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">-40%</div>
                <div className="text-gray-200">Émissions CO2</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">1000km</div>
                <div className="text-gray-200">Autonomie totale</div>
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
                    placeholder="Rechercher un hybride..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <SelectItem value="Berline">Berline</SelectItem>
                    <SelectItem value="SUV">SUV</SelectItem>
                    <SelectItem value="Citadine">Citadine</SelectItem>
                    <SelectItem value="Coupé">Coupé</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleFilter} className="w-full bg-blue-600 hover:bg-blue-700">
                Appliquer les filtres
              </Button>

              {/* Hybrid Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <Leaf className="w-4 h-4" />
                  Avantages hybride
                </h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Consommation réduite</li>
                  <li>• Émissions CO2 diminuées</li>
                  <li>• Conduite silencieuse en ville</li>
                  <li>• Aucune contrainte d'autonomie</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{filteredVehicles.length} véhicules hybrides trouvés</span>
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
                    <SelectItem value="consumption">Consommation</SelectItem>
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
                    <Badge className="absolute top-4 left-4 bg-blue-600">
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
                      <div className="flex items-center gap-1">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <Fuel className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{vehicle.category}</span>
                      <span>•</span>
                      <span className="text-blue-600">Hybride</span>
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
                          <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Hybrid specific info */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                      <div className="bg-green-50 p-2 rounded text-center">
                        <div className="font-semibold text-green-800">Consommation</div>
                        <div className="text-green-600">{vehicle.fuelConsumption}</div>
                      </div>
                      <div className="bg-blue-50 p-2 rounded text-center">
                        <div className="font-semibold text-blue-800">Mode électrique</div>
                        <div className="text-blue-600">{vehicle.electricRange}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-slate-800">
                          {vehicle.price.toLocaleString()}€
                        </div>
                        {vehicle.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            {vehicle.originalPrice.toLocaleString()}€
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{vehicle.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
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