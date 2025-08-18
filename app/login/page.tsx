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
import { Separator } from '@/components/ui/separator';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  Car,
  Facebook,
  Chrome,
  Apple
} from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <Card className="shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-800">
                Connexion à votre compte
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Accédez à votre espace personnel IMA Automobil
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">Adresse email</Label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Votre mot de passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="remember" 
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm">
                      Se souvenir de moi
                    </Label>
                  </div>
                  <Link 
                    href="/forgot-password" 
                    className="text-sm text-red-600 hover:text-red-700 hover:underline"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                >
                  Se connecter
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
                    <span className="bg-white px-2 text-gray-500">Ou continuer avec</span>
                  </div>
                </div>
              </div>

              {/* Social Login */}
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

              {/* Sign Up Link */}
              <div className="text-center mt-6 pt-6 border-t">
                <p className="text-gray-600">
                  Pas encore de compte ?{' '}
                  <Link 
                    href="/register" 
                    className="text-red-600 hover:text-red-700 font-medium hover:underline"
                  >
                    Créer un compte
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Avantages de votre compte IMA
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-red-600 font-medium">Configurations sauvegardées</div>
                <div className="text-gray-600">Retrouvez vos véhicules configurés</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-red-600 font-medium">Suivi des services</div>
                <div className="text-gray-600">Historique d'entretien et rappels</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-red-600 font-medium">Offres exclusives</div>
                <div className="text-gray-600">Promotions réservées aux membres</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}