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
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp,
  Heart,
  Lightbulb,
  Shield,
  Search,
  Filter,
  ArrowRight,
  Building,
  GraduationCap
} from 'lucide-react';

const jobOffers = [
  {
    id: 1,
    title: "Ingénieur Développement Véhicules Électriques",
    department: "R&D",
    location: "Paris",
    type: "CDI",
    experience: "5+ ans",
    description: "Rejoignez notre équipe R&D pour développer les véhicules électriques de demain",
    skills: ["Ingénierie automobile", "Systèmes électriques", "Innovation"],
    posted: "Il y a 2 jours"
  },
  {
    id: 2,
    title: "Conseiller Commercial Véhicules",
    department: "Vente",
    location: "Lyon",
    type: "CDI",
    experience: "2+ ans",
    description: "Accompagnez nos clients dans leur projet d'achat automobile",
    skills: ["Vente", "Relation client", "Automobile"],
    posted: "Il y a 5 jours"
  },
  {
    id: 3,
    title: "Technicien Maintenance Véhicules",
    department: "Service",
    location: "Marseille",
    type: "CDI",
    experience: "3+ ans",
    description: "Assurez la maintenance et la réparation de nos véhicules",
    skills: ["Mécanique", "Diagnostic", "Électronique"],
    posted: "Il y a 1 semaine"
  },
  {
    id: 4,
    title: "Chef de Projet Digital",
    department: "Digital",
    location: "Paris",
    type: "CDI",
    experience: "4+ ans",
    description: "Pilotez nos projets de transformation digitale",
    skills: ["Gestion de projet", "Digital", "Innovation"],
    posted: "Il y a 3 jours"
  },
  {
    id: 5,
    title: "Alternant Marketing Digital",
    department: "Marketing",
    location: "Paris",
    type: "Alternance",
    experience: "Débutant",
    description: "Participez à nos campagnes marketing digital",
    skills: ["Marketing", "Réseaux sociaux", "Créativité"],
    posted: "Il y a 4 jours"
  }
];

const benefits = [
  {
    title: "Équilibre vie pro/perso",
    description: "Télétravail, horaires flexibles, congés supplémentaires",
    icon: <Heart className="w-6 h-6" />,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Formation continue",
    description: "Budget formation, certifications, conférences",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Innovation",
    description: "Projets innovants, hackathons, laboratoire R&D",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Sécurité sociale",
    description: "Mutuelle premium, prévoyance, épargne salariale",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-green-50 text-green-600"
  }
];

const departments = [
  { name: "R&D", count: 45, description: "Recherche et développement" },
  { name: "Vente", count: 120, description: "Force commerciale" },
  { name: "Service", count: 80, description: "Après-vente et maintenance" },
  { name: "Digital", count: 25, description: "Transformation numérique" },
  { name: "Marketing", count: 15, description: "Communication et marketing" },
  { name: "RH", count: 10, description: "Ressources humaines" }
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const filteredJobs = jobOffers.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesType = selectedType === 'all' || job.type === selectedType;
    
    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h1 className="text-5xl font-bold mb-4">Rejoignez l'équipe IMA</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Construisons ensemble l'avenir de la mobilité automobile
            </p>
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">300+</div>
                <div className="text-gray-300">Collaborateurs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">15</div>
                <div className="text-gray-300">Postes ouverts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">95%</div>
                <div className="text-gray-300">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Rechercher un poste..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger>
                    <SelectValue placeholder="Département" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les départements</SelectItem>
                    {departments.map(dept => (
                      <SelectItem key={dept.name} value={dept.name}>{dept.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Localisation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les villes</SelectItem>
                    <SelectItem value="Paris">Paris</SelectItem>
                    <SelectItem value="Lyon">Lyon</SelectItem>
                    <SelectItem value="Marseille">Marseille</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type de contrat" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les contrats</SelectItem>
                    <SelectItem value="CDI">CDI</SelectItem>
                    <SelectItem value="CDD">CDD</SelectItem>
                    <SelectItem value="Alternance">Alternance</SelectItem>
                    <SelectItem value="Stage">Stage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Nos valeurs */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Pourquoi nous rejoindre ?
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez ce qui fait la différence chez IMA Automobil
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full ${benefit.color} flex items-center justify-center mx-auto mb-4`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Départements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Nos équipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{dept.name}</h3>
                    <Badge className="bg-red-600">{dept.count} personnes</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <Button variant="outline" size="sm" className="hover:bg-red-600 hover:text-white">
                    Voir les postes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Offres d'emploi */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-800">
              Offres d'emploi ({filteredJobs.length})
            </h2>
          </div>
          
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-slate-800">{job.title}</h3>
                        <Badge variant="outline">{job.type}</Badge>
                        {job.type === 'Alternance' && (
                          <Badge className="bg-green-600">Débutant accepté</Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.posted}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <Button className="bg-red-600 hover:bg-red-700">
                        Postuler
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline" size="sm">
                        Voir les détails
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Aucune offre trouvée
                </h3>
                <p className="text-gray-500">
                  Essayez de modifier vos critères de recherche
                </p>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Candidature spontanée */}
        <section>
          <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white">
            <CardContent className="p-12 text-center">
              <Users className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4">
                Vous ne trouvez pas le poste idéal ?
              </h2>
              <p className="text-xl mb-8 text-red-100">
                Envoyez-nous votre candidature spontanée, nous étudierons votre profil avec attention
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                  Candidature spontanée
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  Créer une alerte emploi
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