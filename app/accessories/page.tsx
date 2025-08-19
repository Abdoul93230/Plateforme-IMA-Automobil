'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Filter,
  Grid,
  List,
  Search,
  Package,
  Wrench,
  Palette,
  Shield,
  Zap,
  Car
} from 'lucide-react';

const categories = [
  { id: 'exterior', name: 'Extérieur', icon: <Car className="w-5 h-5" /> },
  { id: 'interior', name: 'Intérieur', icon: <Package className="w-5 h-5" /> },
  { id: 'performance', name: 'Performance', icon: <Zap className="w-5 h-5" /> },
  { id: 'protection', name: 'Protection', icon: <Shield className="w-5 h-5" /> },
  { id: 'maintenance', name: 'Entretien', icon: <Wrench className="w-5 h-5" /> },
  { id: 'styling', name: 'Style', icon: <Palette className="w-5 h-5" /> }
];

const accessories = [
  {
    id: 1,
    name: "Jantes Alliage Sport 18\"",
    category: "exterior",
    price: 1299,
    originalPrice: 1499,
    image: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    compatibility: ["IMA Hybrid Sedan", "IMA City Compact"],
    description: "Jantes en alliage léger design sport, finition anthracite",
    features: ["Alliage léger", "Design exclusif", "Finition premium"]
  },
  {
    id: 2,
    name: "Tapis de Sol Premium",
    category: "interior",
    price: 189,
    image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 89,
    badge: "Nouveau",
    compatibility: ["Tous modèles"],
    description: "Tapis sur mesure en caoutchouc haute qualité",
    features: ["Sur mesure", "Antidérapant", "Facile à nettoyer"]
  },
  {
    id: 3,
    name: "Kit Éclairage LED",
    category: "exterior",
    price: 449,
    image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 156,
    badge: "Premium",
    compatibility: ["IMA Electric SUV", "IMA Luxury Coupe"],
    description: "Kit d'éclairage LED complet pour un look moderne",
    features: ["Technologie LED", "Longue durée", "Installation facile"]
  },
  {
    id: 4,
    name: "Housse de Protection",
    category: "protection",
    price: 299,
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 67,
    compatibility: ["Tous modèles"],
    description: "Housse imperméable et respirante pour protection extérieure",
    features: ["Imperméable", "Respirante", "Protection UV"]
  },
  {
    id: 5,
    name: "Barres de Toit Aérodynamiques",
    category: "exterior",
    price: 389,
    image: "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 93,
    compatibility: ["IMA Family Van", "IMA Electric SUV"],
    description: "Barres de toit design aérodynamique pour transport",
    features: ["Aérodynamique", "Charge 75kg", "Verrouillage sécurisé"]
  },
  {
    id: 6,
    name: "Chargeur Sans Fil",
    category: "interior",
    price: 159,
    image: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 78,
    badge: "Tech",
    compatibility: ["IMA Hybrid Sedan", "IMA Luxury Coupe"],
    description: "Station de charge sans fil intégrée au tableau de bord",
    features: ["Charge rapide", "Compatible Qi", "Intégration parfaite"]
  }
];

export default function AccessoriesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [filteredAccessories, setFilteredAccessories] = useState(accessories);

  const handleFilter = () => {
    let filtered = accessories.filter(accessory => {
      return selectedCategory === 'all' || accessory.category === selectedCategory;
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

    setFilteredAccessories(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Accessoires & Pièces</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Personnalisez et entretenez votre véhicule avec nos accessoires d'origine
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Catégories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card 
                key={category.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === category.id ? 'ring-2 ring-red-600 bg-red-50' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-red-600 mb-2 flex justify-center">
                    {category.icon}
                  </div>
                  <div className="font-medium text-sm">{category.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

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
                    placeholder="Rechercher..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Catégorie</h4>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes les catégories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Prix</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Moins de 100€</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">100€ - 300€</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">300€ - 500€</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Plus de 500€</span>
                  </label>
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
                <span className="text-gray-600">{filteredAccessories.length} accessoires trouvés</span>
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

            {/* Accessories Grid/List */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
              : 'space-y-4'
            }>
              {filteredAccessories.map((accessory) => (
                <Card key={accessory.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={accessory.image} 
                      alt={accessory.name}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === 'grid' ? 'h-48' : 'h-32'
                      }`}
                    />
                    {accessory.badge && (
                      <Badge className="absolute top-4 left-4 bg-red-600">
                        {accessory.badge}
                      </Badge>
                    )}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="p-2">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                    {accessory.originalPrice && (
                      <div className="absolute bottom-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-sm">
                        -{Math.round((1 - accessory.price / accessory.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {accessory.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 text-sm">
                      {accessory.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium ml-1">{accessory.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({accessory.reviews} avis)</span>
                    </div>
                    
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                      {accessory.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-red-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">Compatible avec:</div>
                      <div className="text-xs text-gray-600">
                        {accessory.compatibility.join(', ')}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-slate-800">
                          {accessory.price}€
                        </div>
                        {accessory.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            {accessory.originalPrice}€
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-red-600 hover:bg-red-700">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Ajouter au panier
                      </Button>
                      <Button variant="outline" size="sm">
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