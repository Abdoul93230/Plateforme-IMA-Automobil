'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  Car,
  Wrench,
  CreditCard,
  HelpCircle,
  CheckCircle
} from 'lucide-react';

const contactReasons = [
  { value: 'sales', label: 'Vente de véhicules', icon: <Car className="w-4 h-4" /> },
  { value: 'service', label: 'Service après-vente', icon: <Wrench className="w-4 h-4" /> },
  { value: 'financing', label: 'Financement', icon: <CreditCard className="w-4 h-4" /> },
  { value: 'support', label: 'Support technique', icon: <HelpCircle className="w-4 h-4" /> },
  { value: 'other', label: 'Autre demande', icon: <MessageSquare className="w-4 h-4" /> }
];

const contactMethods = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Téléphone",
    description: "Appelez-nous pour une réponse immédiate",
    contact: "01 23 45 67 89",
    hours: "Lun-Ven: 8h-19h, Sam: 9h-17h",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email",
    description: "Écrivez-nous, nous répondons sous 24h",
    contact: "contact@ima-automobil.fr",
    hours: "Réponse sous 24h ouvrées",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Siège social",
    description: "Rendez-vous dans nos bureaux",
    contact: "123 Avenue des Champs-Élysées, 75008 Paris",
    hours: "Lun-Ven: 9h-18h",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Chat en ligne",
    description: "Assistance instantanée",
    contact: "Disponible sur le site",
    hours: "Lun-Ven: 8h-20h",
    color: "bg-purple-50 text-purple-600"
  }
];

const offices = [
  {
    city: "Paris",
    address: "123 Avenue des Champs-Élysées, 75008 Paris",
    phone: "01 23 45 67 89",
    email: "paris@ima-automobil.fr"
  },
  {
    city: "Lyon",
    address: "45 Rue de la République, 69002 Lyon",
    phone: "04 12 34 56 78",
    email: "lyon@ima-automobil.fr"
  },
  {
    city: "Marseille",
    address: "78 La Canebière, 13001 Marseille",
    phone: "04 98 76 54 32",
    email: "marseille@ima-automobil.fr"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    reason: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-16 px-4">
          <Card className="max-w-md w-full text-center">
            <CardContent className="p-8">
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Message envoyé !
              </h2>
              <p className="text-gray-600 mb-6">
                Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-red-600 hover:bg-red-700"
              >
                Envoyer un autre message
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Notre équipe est là pour répondre à toutes vos questions et vous accompagner dans votre projet automobile
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Comment nous joindre
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le moyen de contact qui vous convient le mieux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${method.color} flex items-center justify-center mx-auto mb-4`}>
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="font-semibold text-slate-800 mb-2">{method.contact}</div>
                  <div className="text-sm text-gray-500 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {method.hours}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="w-6 h-6 text-red-600" />
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Reason */}
                  <div className="space-y-2">
                    <Label htmlFor="reason">Motif de contact *</Label>
                    <Select value={formData.reason} onValueChange={(value) => handleInputChange('reason', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un motif" />
                      </SelectTrigger>
                      <SelectContent>
                        {contactReasons.map((reason) => (
                          <SelectItem key={reason.value} value={reason.value}>
                            <div className="flex items-center gap-2">
                              {reason.icon}
                              {reason.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Décrivez votre demande en détail..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Offices & Map */}
          <div className="space-y-8">
            {/* Offices */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-red-600" />
                  Nos bureaux
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                      <h3 className="font-semibold text-lg text-slate-800 mb-2">{office.city}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 text-red-600" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-red-600" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-red-600" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-red-600" />
                  Questions fréquentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start text-left">
                    Comment configurer mon véhicule ?
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-left">
                    Quelles sont les options de financement ?
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-left">
                    Comment prendre rendez-vous pour un service ?
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-left">
                    Où trouver un concessionnaire ?
                  </Button>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Voir toutes les FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}