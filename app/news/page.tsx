'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calendar, 
  Clock, 
  Search, 
  Filter,
  ArrowRight,
  Eye,
  Share2,
  Bookmark,
  TrendingUp,
  Zap,
  Award,
  Globe
} from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "IMA Automobil dévoile sa nouvelle gamme électrique 2024",
    excerpt: "Découvrez les innovations technologiques qui révolutionnent notre approche de la mobilité électrique avec une autonomie record de 600 km.",
    content: "La nouvelle gamme électrique IMA 2024 marque un tournant majeur dans notre stratégie de développement durable...",
    image: "https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "Innovation",
    date: "2024-03-15",
    readTime: "5 min",
    views: 2847,
    featured: true,
    author: "Marie Dubois",
    tags: ["Électrique", "Innovation", "2024"]
  },
  {
    id: 2,
    title: "Partenariat stratégique avec les leaders de la recharge rapide",
    excerpt: "IMA Automobil s'associe aux principaux réseaux de recharge pour offrir une expérience de recharge optimale à ses clients.",
    content: "Ce partenariat stratégique permettra à nos clients d'accéder à plus de 50 000 points de recharge...",
    image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "Partenariat",
    date: "2024-03-12",
    readTime: "3 min",
    views: 1923,
    featured: false,
    author: "Pierre Martin",
    tags: ["Recharge", "Partenariat", "Infrastructure"]
  },
  {
    id: 3,
    title: "Nouvelle usine de production en France : 500 emplois créés",
    excerpt: "L'ouverture de notre nouvelle usine à Lyon marque notre engagement pour l'industrie automobile française.",
    content: "Cette nouvelle usine ultramoderne utilisera les dernières technologies de production...",
    image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "Entreprise",
    date: "2024-03-08",
    readTime: "4 min",
    views: 3156,
    featured: true,
    author: "Sophie Laurent",
    tags: ["Production", "Emploi", "France"]
  },
  {
    id: 4,
    title: "IMA Connect : la nouvelle plateforme de services connectés",
    excerpt: "Gérez votre véhicule à distance avec notre nouvelle application mobile révolutionnaire.",
    content: "IMA Connect offre une expérience utilisateur inédite avec des fonctionnalités avancées...",
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "Technologie",
    date: "2024-03-05",
    readTime: "6 min",
    views: 2234,
    featured: false,
    author: "Thomas Leroy",
    tags: ["Application", "Connecté", "Services"]
  },
  {
    id: 5,
    title: "Prix de l'Innovation 2024 pour notre système de conduite autonome",
    excerpt: "Notre technologie de conduite autonome de niveau 3 remporte le prestigieux prix de l'innovation automobile.",
    content: "Cette reconnaissance internationale confirme notre position de leader technologique...",
    image: "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "Récompense",
    date: "2024-03-01",
    readTime: "4 min",
    views: 4521,
    featured: true,
    author: "Marie Dubois",
    tags: ["Prix", "Autonome", "Innovation"]
  },
  {
    id: 6,
    title: "Expansion internationale : IMA arrive en Europe du Sud",
    excerpt: "Découvrez notre stratégie d'expansion avec l'ouverture de nouveaux marchés en Espagne et en Italie.",
    content: "Cette expansion marque une étape importante dans notre développement international...",
    image: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "International",
    date: "2024-02-28",
    readTime: "5 min",
    views: 1876,
    featured: false,
    author: "Pierre Martin",
    tags: ["Expansion", "Europe", "International"]
  }
];

const categories = ["Toutes", "Innovation", "Partenariat", "Entreprise", "Technologie", "Récompense", "International"];

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [sortBy, setSortBy] = useState('date');
  const [filteredArticles, setFilteredArticles] = useState(newsArticles);

  const handleFilter = () => {
    let filtered = newsArticles;
    
    if (selectedCategory !== 'Toutes') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'views':
          return b.views - a.views;
        case 'readTime':
          return parseInt(a.readTime) - parseInt(b.readTime);
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });
    
    setFilteredArticles(filtered);
  };

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Actualités IMA</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Découvrez les dernières innovations, partenariats et actualités de IMA Automobil
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Rechercher dans les actualités..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Plus récent</SelectItem>
                  <SelectItem value="views">Plus lu</SelectItem>
                  <SelectItem value="readTime">Lecture rapide</SelectItem>
                </SelectContent>
              </Select>
              
              <Button onClick={handleFilter} className="bg-red-600 hover:bg-red-700">
                <Filter className="w-4 h-4 mr-2" />
                Filtrer
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-slate-800">À la une</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.slice(0, 2).map((article, index) => (
                <Card key={article.id} className={`overflow-hidden hover:shadow-xl transition-shadow duration-300 ${index === 0 ? 'lg:col-span-2' : ''}`}>
                  <div className={`grid ${index === 0 ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                    <div className="relative">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className={`w-full object-cover ${index === 0 ? 'h-64 lg:h-full' : 'h-48'}`}
                      />
                      <Badge className="absolute top-4 left-4 bg-red-600">
                        À la une
                      </Badge>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button size="sm" variant="secondary" className="p-2">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="p-2">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(article.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views.toLocaleString()}
                        </span>
                      </div>
                      
                      <h3 className={`font-bold text-slate-800 mb-3 hover:text-red-600 transition-colors cursor-pointer ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          Par {article.author}
                        </div>
                        <Button variant="ghost" className="p-0 h-auto font-medium text-red-600 hover:text-red-700">
                          Lire la suite
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {article.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Regular Articles */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-800">
              Toutes les actualités ({filteredArticles.length})
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-white text-slate-800">
                    {article.category}
                  </Badge>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="p-2 opacity-80">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(article.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-800 mb-3 hover:text-red-600 transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500">
                      Par {article.author}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Eye className="w-4 h-4" />
                      {article.views.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="p-0 h-auto font-medium text-red-600 hover:text-red-700">
                    Lire la suite
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white">
            <CardContent className="p-12 text-center">
              <Globe className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">
                Restez informé de nos actualités
              </h2>
              <p className="text-xl mb-8 text-red-100">
                Recevez nos dernières nouvelles et innovations directement dans votre boîte mail
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <Input 
                  type="email" 
                  placeholder="Votre adresse email"
                  className="bg-white text-slate-800"
                />
                <Button className="bg-slate-800 hover:bg-slate-700 text-white">
                  S'abonner
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
}