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
  AlertTriangle, 
  Search, 
  Calendar,
  Car,
  FileText,
  Phone,
  CheckCircle,
  Clock,
  Info,
  Shield,
  Wrench
} from 'lucide-react';

const recalls = [
  {
    id: "R2024-001",
    title: "Mise à jour logiciel système multimédia",
    model: "IMA Hybrid Sedan",
    year: "2024",
    severity: "Faible",
    description: "Mise à jour du logiciel du système multimédia pour améliorer les performances",
    affectedVehicles: "2,450 véhicules",
    date: "15 Mars 2024",
    status: "En cours",
    action: "Mise à jour gratuite chez votre concessionnaire",
    estimatedTime: "30 minutes",
    urgent: false
  },
  {
    id: "R2024-002",
    title: "Vérification système de freinage",
    model: "IMA Electric SUV",
    year: "2023-2024",
    severity: "Moyenne",
    description: "Contrôle préventif du système de freinage sur certains véhicules",
    affectedVehicles: "1,230 véhicules",
    date: "8 Mars 2024",
    status: "En cours",
    action: "Inspection et remplacement si nécessaire",
    estimatedTime: "2 heures",
    urgent: true
  },
  {
    id: "R2024-003",
    title: "Rappel airbag conducteur",
    model: "IMA City Compact",
    year: "2023",
    severity: "Élevée",
    description: "Remplacement préventif de l'airbag conducteur par mesure de sécurité",
    affectedVehicles: "890 véhicules",
    date: "1 Mars 2024",
    status: "Terminé",
    action: "Remplacement airbag effectué",
    estimatedTime: "1 heure",
    urgent: false
  }
];

const severityColors = {
  "Faible": "bg-green-100 text-green-800",
  "Moyenne": "bg-yellow-100 text-yellow-800",
  "Élevée": "bg-red-100 text-red-800"
};

const statusColors = {
  "En cours": "bg-blue-100 text-blue-800",
  "Terminé": "bg-green-100 text-green-800",
  "Planifié": "bg-orange-100 text-orange-800"
};

export default function RecallsPage() {
  const [searchVin, setSearchVin] = useState('');
  const [selectedModel, setSelectedModel] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const handleVinSearch = () => {
    // Simulate VIN search
    console.log('Searching VIN:', searchVin);
  };

  const filteredRecalls = recalls.filter(recall => {
    const modelMatch = selectedModel === 'all' || recall.model.includes(selectedModel);
    const yearMatch = selectedYear === 'all' || recall.year.includes(selectedYear);
    return modelMatch && yearMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h1 className="text-5xl font-bold mb-4">Rappels & Sécurité</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Votre sécurité est notre priorité. Consultez les rappels et actions de sécurité pour votre véhicule
            </p>
          </div>
        </div>
      </section>

      {/* VIN Search */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Vérifiez votre véhicule
                </h2>
                <p className="text-gray-600">
                  Entrez votre numéro VIN pour vérifier si votre véhicule est concerné par un rappel
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Numéro VIN (17 caractères)"
                    value={searchVin}
                    onChange={(e) => setSearchVin(e.target.value)}
                    className="text-center"
                    maxLength={17}
                  />
                </div>
                <Button onClick={handleVinSearch} className="bg-red-600 hover:bg-red-700">
                  <Search className="w-4 h-4 mr-2" />
                  Vérifier
                </Button>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Le numéro VIN se trouve sur votre carte grise ou sur le tableau de bord
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <section className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1">
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
                      <SelectItem value="Luxury Coupe">IMA Luxury Coupe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Année
                  </label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Toutes les années" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les années</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recalls List */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-slate-800">
              Rappels actifs ({filteredRecalls.length})
            </h2>
          </div>

          <div className="space-y-6">
            {filteredRecalls.map((recall) => (
              <Card key={recall.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-slate-800">{recall.title}</h3>
                            {recall.urgent && (
                              <Badge variant="destructive">Urgent</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <span className="flex items-center gap-1">
                              <Car className="w-4 h-4" />
                              {recall.model}
                            </span>
                            <span>{recall.year}</span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {recall.date}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 mb-4">
                            <Badge className={severityColors[recall.severity as keyof typeof severityColors]}>
                              Sévérité : {recall.severity}
                            </Badge>
                            <Badge className={statusColors[recall.status as keyof typeof statusColors]}>
                              {recall.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Référence</div>
                          <div className="font-mono text-sm">{recall.id}</div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{recall.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-500">Véhicules concernés</div>
                          <div className="font-semibold">{recall.affectedVehicles}</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-500">Action requise</div>
                          <div className="font-semibold">{recall.action}</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-500">Temps estimé</div>
                          <div className="font-semibold">{recall.estimatedTime}</div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-64 space-y-3">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        <Calendar className="w-4 h-4 mr-2" />
                        Prendre rendez-vous
                      </Button>
                      <Button variant="outline" className="w-full">
                        <FileText className="w-4 h-4 mr-2" />
                        Télécharger la notice
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Contacter le service
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRecalls.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Aucun rappel trouvé
                </h3>
                <p className="text-gray-500">
                  Aucun rappel actif pour les critères sélectionnés
                </p>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Information Section */}
        <section>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <div className="text-center">
                <Info className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-blue-800 mb-4">
                  Information importante
                </h2>
                <p className="text-blue-700 mb-6 max-w-3xl mx-auto">
                  Les rappels de sécurité sont effectués gratuitement par IMA Automobil. 
                  Nous vous contactons directement si votre véhicule est concerné.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Notification automatique</h3>
                    <p className="text-blue-700 text-sm">
                      Nous vous contactons par email, SMS et courrier si votre véhicule est concerné
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Intervention gratuite</h3>
                    <p className="text-blue-700 text-sm">
                      Tous les rappels de sécurité sont pris en charge intégralement par IMA
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
}