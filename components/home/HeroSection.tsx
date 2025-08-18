'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: "Nouvelle gamme électrique",
    subtitle: "L'avenir de la mobilité",
    description: "Découvrez nos véhicules 100% électriques avec une autonomie exceptionnelle",
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Découvrir",
    ctaSecondary: "Voir la vidéo"
  },
  {
    id: 2,
    title: "SUV Premium",
    subtitle: "Confort et performance",
    description: "Explorez notre gamme de SUV alliant luxe, technologie et sécurité",
    image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "Explorer",
    ctaSecondary: "Configurer"
  },
  {
    id: 3,
    title: "Hybride nouvelle génération",
    subtitle: "Économie et écologie",
    description: "Réduisez votre empreinte carbone avec nos modèles hybrides dernière génération",
    image: "https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    cta: "En savoir plus",
    ctaSecondary: "Essayer"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl text-white">
                <div className="text-red-500 font-semibold text-lg mb-2 opacity-0 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                  {slide.subtitle}
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-in slide-in-from-bottom-4 duration-700 delay-500">
                  {slide.title}
                </h1>
                <p className="text-xl mb-8 text-gray-200 opacity-0 animate-in slide-in-from-bottom-4 duration-700 delay-700">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-in slide-in-from-bottom-4 duration-700 delay-1000">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                    {slide.cta}
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
                    <Play className="w-4 h-4 mr-2" />
                    {slide.ctaSecondary}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}