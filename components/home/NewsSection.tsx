'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "L'avenir de la mobilité électrique",
    excerpt: "Découvrez nos dernières innovations en matière de véhicules électriques et notre vision pour une mobilité durable.",
    image: "https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Innovation",
    date: "15 Mars 2024",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Nouvelles technologies embarquées",
    excerpt: "Les systèmes d'aide à la conduite et d'infodivertissement qui révolutionnent l'expérience au volant.",
    image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Technologie",
    date: "12 Mars 2024",
    readTime: "3 min"
  },
  {
    id: 3,
    title: "Expansion du réseau de concessionnaires",
    excerpt: "De nouveaux points de vente ouvrent leurs portes pour mieux vous servir partout en France.",
    image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Réseau",
    date: "8 Mars 2024",
    readTime: "2 min"
  }
];

export default function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Actualités & Innovation
            </h2>
            <p className="text-xl text-gray-600">
              Restez informé de nos dernières nouveautés et innovations
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex hover:bg-red-600 hover:text-white">
            Toutes les actualités
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-white text-slate-800">
                  {article.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span>{article.readTime} de lecture</span>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <Button variant="ghost" className="p-0 h-auto font-medium text-red-600 hover:text-red-700">
                  Lire la suite
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center md:hidden">
          <Button variant="outline" className="hover:bg-red-600 hover:text-white">
            Toutes les actualités
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}