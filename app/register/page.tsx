'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User,
  Phone,
  Car,
  Facebook,
  Chrome,
  Apple,
  CheckCircle
} from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    title: '',
    acceptTerms: false,
    acceptNewsletter: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
  };

  const benefits = [
    "Configurateur Build & Price personnalisé",
    "Suivi de l'entretien de vos véhicules",
    "Offres et promotions exclusives",
    "Prise de rendez-vous en ligne",
    "Historique de vos achats et services",
    "Notifications personnalisées"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Registration Form */}
            <div>
              <Card className="shadow-xl">
                <CardHeader className="text-center pb-6">
                  <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    Créer votre compte
                  </CardTitle>
                  <p className="text-gray-600 mt-2">
                    Rejoignez la communauté IMA Automobil
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div className="space-y-2">
                      <Label htmlFor="title">Civilité</Label>
                      <Select value={formData.title} onValueChange={(value) => handleInputChange('title', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mr">Monsieur</SelectItem>
                          <SelectItem value="mrs">Madame</SelectItem>
                          <SelectItem value="miss">Mademoiselle</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <div className="relative">
                          <User className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="Votre prénom"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <div className="relative">
                          <User className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Votre nom"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Adresse email</Label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="06 12 34 56 78"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {/* Password Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <div className="relative">
                          <Lock className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                          <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Mot de passe"
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmer</Label>
                        <div className="relative">
                          <Lock className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirmer"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="terms" 
                          checked={formData.acceptTerms}
                          onCheckedChange={(checked) => handleInputChange('acceptTerms', checked as boolean)}
                          required
                        />
                        <Label htmlFor="terms" className="text-sm leading-relaxed">
                          J'accepte les{' '}
                          <Link href="/terms" className="text-red-600 hover:underline">
                            conditions d'utilisation
                          </Link>{' '}
                          et la{' '}
                          <Link href="/privacy" className="text-red-600 hover:underline">
                            politique de confidentialité
                          </Link>
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="newsletter" 
                          checked={formData.acceptNewsletter}
                          onCheckedChange={(checked) => handleInputChange('acceptNewsletter', checked as boolean)}
                        />
                        <Label htmlFor="newsletter" className="text-sm">
                          Je souhaite recevoir les actualités et offres IMA Automobil
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                    >
                      Créer mon compte
                    </Button>
                  </form>

                  {/* Divider */}
                  <div className="my-6">
                    <Separator />
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Ou s'inscrire avec</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Registration */}
                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" className="p-3">
                      <Chrome className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="p-3">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="p-3">
                      <Apple className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Login Link */}
                  <div className="text-center mt-6 pt-6 border-t">
                    <p className="text-gray-600">
                      Déjà un compte ?{' '}
                      <Link 
                        href="/login" 
                        className="text-red-600 hover:text-red-700 font-medium hover:underline"
                      >
                        Se connecter
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Section */}
            <div className="lg:pl-8">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Pourquoi créer un compte ?
                </h2>
                <p className="text-gray-600 mb-8">
                  Profitez d'une expérience personnalisée et de services exclusifs 
                  en créant votre compte IMA Automobil.
                </p>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-red-800 mb-2">
                      Offre de bienvenue
                    </h3>
                    <p className="text-red-700 text-sm">
                      Recevez un bon de réduction de 100€ sur votre premier service 
                      d'entretien en créant votre compte aujourd'hui.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}