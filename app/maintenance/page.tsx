'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Wrench, 
  Calendar, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  Car,
  Phone,
  MapPin,
  FileText,
  Shield,
  Settings
} from 'lucide-react';

const maintenanceServices = [
  {
    id: 1,
    name: "Révision complète",
    description: "Contrôle général de votre véhicule selon le plan d'entretien constructeur",
    duration: "2-3 heures",
    price: "À partir de 189€",
    includes: ["Vidange moteur", "Contrôle freins", "Vérification pneumatiques", "Diagnostic électronique"],
    icon: <Settings className="w-6 h-6" />
  },
  {
    id: 2,
    name: "Vidange et filtres",
    description: "Changement d'huile moteur et remplacement des filtres",
    duration: "1 heure",
    price: "À partir de 89€",
    includes: ["Huile moteur", "Filtre à huile", "Filtre à air", "Contrôle niveaux"],
    icon: <Wrench className="w-6 h-6" />
  },
  {
    id: 3,
    name: "Contrôle technique",
    description: "Préparation et accompagnement pour le contrôle technique",
    duration: "1-2 heures",
    price: "À partir de 129€",
    includes: ["Pré-contrôle", "Réglages nécessaires", "Accompagnement", "Contre-visite si nécessaire"],
    icon: <CheckCircle className="w-6 h-6" />
  },
  {
    id: 4,
    name: "Diagnostic électronique",
    description: "Analyse complète des systèmes électroniques de votre véhicule",
    duration: "1 heure",
    price: "À partir de 69€",
    includes: ["Lecture codes défaut", "Test capteurs", "Vérification calculateurs", "Rapport détaillé"],
    icon: <FileText className="w-6 h-6" />
  }
];

const maintenanceSchedule = [
  { km: "10 000", months: "12", services: ["Vidange", "Contrôle général"], price: "189€" },
  { km: "20 000", months: "24", services: ["Révision majeure", "Filtres", "Freins"], price: "349€" },
  { km: "30 000", months: "36", services: ["Vidange", "Contrôle général"], price: "189€" },
  { km: "40 000", months: "48", services: ["Révision majeure", "Distribution"], price: "589€" },
  { km: "50 000", months: "60", services: ["Vidange", "Contrôle général"], price: "189€" }
];

export default function MaintenancePage() {
  const [selectedService, setSelectedService] = useState('');
  const [appointmentData, setAppointmentData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicleModel: '',
    vehicleYear: '',
    licensePlate: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setAppointmentData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment request:', appointmentData);
    // Handle appointment booking
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Entretien & Maintenance</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Gardez votre véhicule en parfait état avec nos services d'entretien professionnels
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Nos services
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Plan d'entretien
            </TabsTrigger>
            <TabsTrigger value="appointment" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Prendre RDV
            </TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {maintenanceServices.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {service.duration}
                          </span>
                          <span className="font-medium text-red-600">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Inclus dans ce service:</h4>
                      <ul className="space-y-1">
                        {service.includes.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Réserver ce service
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Services */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">
                    Garantie sur tous nos services
                  </h3>
                  <p className="text-blue-700 mb-6">
                    Tous nos services d'entretien sont garantis 12 mois ou 20 000 km. 
                    Nous utilisons exclusivement des pièces d'origine IMA.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-semibold text-blue-800">Pièces d'origine</div>
                      <div className="text-blue-600">Qualité garantie</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-semibold text-blue-800">Techniciens certifiés</div>
                      <div className="text-blue-600">Formation continue</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="font-semibold text-blue-800">Équipements modernes</div>
                      <div className="text-blue-600">Diagnostic précis</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Plan d'entretien recommandé</CardTitle>
                <p className="text-gray-600">
                  Suivez le plan d'entretien constructeur pour maintenir votre garantie et optimiser les performances
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {maintenanceSchedule.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="bg-red-100 text-red-600 p-3 rounded-full">
                          <Car className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-semibold text-lg">
                            {item.km} km ou {item.months} mois
                          </div>
                          <div className="text-gray-600">
                            {item.services.join(', ')}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">{item.price}</div>
                        <Button size="sm" variant="outline" className="mt-2">
                          Réserver
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Important</h4>
                      <p className="text-yellow-700 text-sm">
                        Le respect du plan d'entretien est essentiel pour maintenir votre garantie constructeur. 
                        Les intervalles peuvent varier selon votre utilisation (urbaine, autoroute, conditions sévères).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appointment Tab */}
          <TabsContent value="appointment">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Prendre rendez-vous</CardTitle>
                  <p className="text-gray-600">
                    Réservez votre créneau d'entretien en quelques clics
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          value={appointmentData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          value={appointmentData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={appointmentData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={appointmentData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Vehicle Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="vehicleModel">Modèle *</Label>
                        <Select value={appointmentData.vehicleModel} onValueChange={(value) => handleInputChange('vehicleModel', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hybrid-sedan">IMA Hybrid Sedan</SelectItem>
                            <SelectItem value="electric-suv">IMA Electric SUV</SelectItem>
                            <SelectItem value="city-compact">IMA City Compact</SelectItem>
                            <SelectItem value="luxury-coupe">IMA Luxury Coupe</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vehicleYear">Année *</Label>
                        <Select value={appointmentData.vehicleYear} onValueChange={(value) => handleInputChange('vehicleYear', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Année" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                            <SelectItem value="2021">2021</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="licensePlate">Plaque d'immatriculation</Label>
                        <Input
                          id="licensePlate"
                          value={appointmentData.licensePlate}
                          onChange={(e) => handleInputChange('licensePlate', e.target.value)}
                          placeholder="AB-123-CD"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="service">Service souhaité *</Label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          {maintenanceServices.map((service) => (
                            <SelectItem key={service.id} value={service.name}>
                              {service.name} - {service.price}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Date souhaitée *</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={appointmentData.preferredDate}
                          onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Heure souhaitée *</Label>
                        <Select value={appointmentData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="08:00">08:00</SelectItem>
                            <SelectItem value="09:00">09:00</SelectItem>
                            <SelectItem value="10:00">10:00</SelectItem>
                            <SelectItem value="11:00">11:00</SelectItem>
                            <SelectItem value="14:00">14:00</SelectItem>
                            <SelectItem value="15:00">15:00</SelectItem>
                            <SelectItem value="16:00">16:00</SelectItem>
                            <SelectItem value="17:00">17:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                      <Label htmlFor="location">Concessionnaire *</Label>
                      <Select value={appointmentData.location} onValueChange={(value) => handleInputChange('location', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisissez un concessionnaire" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="paris">IMA Automobil Paris Centre</SelectItem>
                          <SelectItem value="lyon">IMA Automobil Lyon Confluence</SelectItem>
                          <SelectItem value="marseille">IMA Automobil Marseille Vieux-Port</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message (optionnel)</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={appointmentData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Décrivez le problème ou vos besoins spécifiques..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      <Calendar className="w-4 h-4 mr-2" />
                      Confirmer le rendez-vous
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Info Card */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations pratiques</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-red-600 mt-1" />
                      <div>
                        <div className="font-medium">Horaires d'ouverture</div>
                        <div className="text-sm text-gray-600">
                          Lun-Ven: 8h-19h<br />
                          Sam: 9h-17h<br />
                          Dim: Fermé
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-red-600 mt-1" />
                      <div>
                        <div className="font-medium">Contact</div>
                        <div className="text-sm text-gray-600">01 23 45 67 89</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Car className="w-5 h-5 text-red-600 mt-1" />
                      <div>
                        <div className="font-medium">Véhicule de courtoisie</div>
                        <div className="text-sm text-gray-600">
                          Disponible sur demande pour les interventions longues
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-green-800 mb-2">
                        Confirmation immédiate
                      </h3>
                      <p className="text-green-700 text-sm">
                        Vous recevrez une confirmation par email et SMS dans les 15 minutes suivant votre demande.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}