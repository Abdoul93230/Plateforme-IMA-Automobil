'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, Grid, List, Heart, GitCompare as Compare, Zap, Fuel, Award, ChevronDown, Search } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    name: "IMA Hybrid Sedan",
    category: "Berline",
    type: "Hybride",
    price: 32990,
    originalPrice: 35990,
    image: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["4.2L/100km", "5 places", "Garantie 7 ans", "Transmission CVT"],
    badge: "Nouveauté",
    icon: <Zap className="w-5 h-5" />,
    rating: 4.8,
    availability: "En stock"
  },
  {
    id: 2,
    name: "IMA Electric SUV",
    category: "SUV",
    type: "Électrique",
    price: 45990,
    image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["450km d'autonomie", "7 places", "Recharge rapide", "AWD"],
    badge: "Plus populaire",
    icon: <Zap className="w-5 h-5" />,
    rating: 4.9,
    availability: "En stock"
  },
  {
    id: 3,
    name: "IMA City Compact",
    category: "Citadine",
    type: "Essence",
    price: 18990,
    image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["5.8L/100km", "5 places", "Technologies connectées", "Boîte manuelle"],
    badge: "Meilleur rapport qualité-prix",
    icon: <Fuel className="w-5 h-5" />,
    rating: 4.6,
    availability: "En stock"
  },
  {
    id: 4,
    name: "IMA Luxury Coupe",
    category: "Coupé",
    type: "Hybride",
    price: 52990,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["3.9L/100km", "4 places", "Finitions premium", "Transmission automatique"],
    badge: "Série limitée",
    icon: <Award className="w-5 h-5" />,
    rating: 4.7,
    availability: "Sur commande"
  },
  {
    id: 5,
    name: "IMA Family Van",
    category: "Monospace",
    type: "Hybride",
    price: 38990,
    image: "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["5.1L/100km", "8 places", "Portes coulissantes", "Espace modulable"],
    badge: "Familial",
    icon: <Zap className="w-5 h-5" />,
    rating: 4.5,
    availability: "En stock"
  },
  {
    id: 6,
    name: "IMA Sport Roadster",
    category: "Cabriolet",
    type: "Essence",
    price: 48990,
    image: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    features: ["7.2L/100km", "2 places", "Toit ouvrant", "Mode sport"],
    badge: "Performance",
    icon: <Award className="w-5 h-5" />,
    rating: 4.8,
    availability: "Sur commande"
  }
];

export default function VehiclesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [priceRange, setPriceRange] = useState([15000, 60000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['Berline', 'SUV', 'Citadine', 'Coupé', 'Monospace', 'Cabriolet'];
  const types = ['Hybride', 'Électrique', 'Essence'];

  const handleFilter = () => {
    let filtered = vehicles.filter(vehicle => {
      const priceMatch = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];
      const categoryMatch = selectedCategory === 'all' || vehicle.category === selectedCategory;
      const typeMatch = selectedType === 'all' || vehicle.type === selectedType;
      return priceMatch && categoryMatch && typeMatch;
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
            <h1 className="text-5xl font-bold mb-4">Notre gamme de véhicules</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez notre collection complète de véhicules conçus pour répondre à tous vos besoins
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
                    placeholder="Rechercher un modèle..."
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
                  max={60000}
                  min={15000}
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
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Type */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Motorisation</h4>
                <div className="space-y-2">
                  {types.map(type => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox 
                        id={type}
                        checked={selectedType === type}
                        onCheckedChange={(checked) => setSelectedType(checked ? type : 'all')}
                      />
                      <label htmlFor={type} className="text-sm">{type}</label>
                    </div>
                  ))}
                </div>
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
                <span className="text-gray-600">{filteredVehicles.length} véhicules trouvés</span>
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
              ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
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
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm font-medium">{vehicle.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-red-600 hover:bg-red-700">
                        Configurer
                      </Button>
                      <Button variant="outline" className="flex-1">
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