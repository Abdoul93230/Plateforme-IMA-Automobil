'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Car, 
  Palette, 
  Settings, 
  Package, 
  CreditCard,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2
} from 'lucide-react';

const baseVehicle = {
  name: "IMA Hybrid Sedan",
  basePrice: 32990,
  image: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
};

const colors = [
  { name: "Blanc Nacré", code: "#F8F8FF", price: 0, image: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
  { name: "Noir Métallisé", code: "#1C1C1C", price: 590, image: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
  { name: "Rouge Passion", code: "#DC143C", price: 590, image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
  { name: "Bleu Océan", code: "#1E3A8A", price: 790, image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" },
  { name: "Gris Titanium", code: "#6B7280", price: 490, image: "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" }
];

const trims = [
  {
    name: "Essential",
    price: 0,
    features: ["Climatisation manuelle", "Radio AM/FM", "4 haut-parleurs", "Verrouillage centralisé"]
  },
  {
    name: "Comfort",
    price: 2500,
    features: ["Climatisation automatique", "Écran tactile 8\"", "6 haut-parleurs", "Régulateur de vitesse", "Sièges chauffants"]
  },
  {
    name: "Premium",
    price: 5500,
    features: ["Climatisation bi-zone", "Écran tactile 10\"", "Système audio premium", "Navigation GPS", "Sièges cuir chauffants", "Toit ouvrant"]
  }
];

const options = [
  { name: "Pack Sécurité", description: "Aide au stationnement, caméra de recul", price: 890 },
  { name: "Pack Technologie", description: "Chargeur sans fil, USB-C, WiFi", price: 650 },
  { name: "Pack Confort", description: "Sièges ventilés, éclairage d'ambiance", price: 1200 },
  { name: "Jantes Alliage 18\"", description: "Jantes sport en alliage léger", price: 750 },
  { name: "Peinture Métallisée", description: "Finition métallisée premium", price: 590 }
];

export default function ConfiguratorPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedTrim, setSelectedTrim] = useState(trims[0]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const steps = [
    { id: 'model', name: 'Modèle', icon: <Car className="w-5 h-5" /> },
    { id: 'color', name: 'Couleur', icon: <Palette className="w-5 h-5" /> },
    { id: 'trim', name: 'Finition', icon: <Settings className="w-5 h-5" /> },
    { id: 'options', name: 'Options', icon: <Package className="w-5 h-5" /> },
    { id: 'summary', name: 'Récapitulatif', icon: <CreditCard className="w-5 h-5" /> }
  ];

  const calculateTotal = () => {
    const colorPrice = selectedColor.price;
    const trimPrice = selectedTrim.price;
    const optionsPrice = selectedOptions.reduce((total, optionName) => {
      const option = options.find(opt => opt.name === optionName);
      return total + (option?.price || 0);
    }, 0);
    
    return baseVehicle.basePrice + colorPrice + trimPrice + optionsPrice;
  };

  const toggleOption = (optionName: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionName) 
        ? prev.filter(name => name !== optionName)
        : [...prev, optionName]
    );
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Progress Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-slate-800">Configurateur Build & Price</h1>
            <div className="text-2xl font-bold text-red-600">
              {calculateTotal().toLocaleString()}€
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  index === currentStep 
                    ? 'bg-red-600 text-white' 
                    : index < currentStep 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-600'
                }`}>
                  {index < currentStep ? <Check className="w-4 h-4" /> : step.icon}
                  <span className="hidden sm:inline">{step.name}</span>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
              </div>
            ))}
          </div>
          
          <Progress value={(currentStep / (steps.length - 1)) * 100} className="mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vehicle Preview */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <Card className="overflow-hidden">
              <div className="relative">
                <img 
                  src={selectedColor.image} 
                  alt={baseVehicle.name}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-600">
                  Configuration en cours
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{baseVehicle.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Prix de base:</span>
                    <span>{baseVehicle.basePrice.toLocaleString()}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Couleur ({selectedColor.name}):</span>
                    <span>+{selectedColor.price.toLocaleString()}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Finition ({selectedTrim.name}):</span>
                    <span>+{selectedTrim.price.toLocaleString()}€</span>
                  </div>
                  {selectedOptions.map(optionName => {
                    const option = options.find(opt => opt.name === optionName);
                    return option ? (
                      <div key={optionName} className="flex justify-between">
                        <span>{option.name}:</span>
                        <span>+{option.price.toLocaleString()}€</span>
                      </div>
                    ) : null;
                  })}
                  <hr className="my-2" />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span className="text-red-600">{calculateTotal().toLocaleString()}€</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Configuration Steps */}
          <div>
            {/* Step 0: Model Selection */}
            {currentStep === 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    Sélection du modèle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <img 
                      src={baseVehicle.image} 
                      alt={baseVehicle.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-2">{baseVehicle.name}</h3>
                    <p className="text-gray-600 mb-4">
                      Véhicule hybride moderne alliant performance et économie de carburant
                    </p>
                    <div className="text-3xl font-bold text-red-600 mb-6">
                      À partir de {baseVehicle.basePrice.toLocaleString()}€
                    </div>
                    <ul className="text-left space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Motorisation hybride 4.2L/100km
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        5 places confortables
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Garantie constructeur 7 ans
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Technologies de sécurité avancées
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 1: Color Selection */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Choix de la couleur
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {colors.map((color) => (
                      <div
                        key={color.name}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                          selectedColor.name === color.name 
                            ? 'border-red-600 bg-red-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedColor(color)}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div 
                            className="w-8 h-8 rounded-full border-2 border-gray-300"
                            style={{ backgroundColor: color.code }}
                          />
                          <div>
                            <div className="font-medium">{color.name}</div>
                            <div className="text-sm text-gray-600">
                              {color.price > 0 ? `+${color.price}€` : 'Inclus'}
                            </div>
                          </div>
                        </div>
                        {selectedColor.name === color.name && (
                          <Check className="w-5 h-5 text-red-600 ml-auto" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Trim Selection */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Choix de la finition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trims.map((trim) => (
                      <div
                        key={trim.name}
                        className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                          selectedTrim.name === trim.name 
                            ? 'border-red-600 bg-red-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedTrim(trim)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-semibold">{trim.name}</h4>
                            <p className="text-gray-600">
                              {trim.price > 0 ? `+${trim.price.toLocaleString()}€` : 'Inclus'}
                            </p>
                          </div>
                          {selectedTrim.name === trim.name && (
                            <Check className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                        <ul className="space-y-1">
                          {trim.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <Check className="w-3 h-3 text-green-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Options Selection */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Options et accessoires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {options.map((option) => (
                      <div
                        key={option.name}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                          selectedOptions.includes(option.name)
                            ? 'border-red-600 bg-red-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => toggleOption(option.name)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium">{option.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                            <p className="text-sm font-medium text-red-600 mt-2">
                              +{option.price.toLocaleString()}€
                            </p>
                          </div>
                          {selectedOptions.includes(option.name) && (
                            <Check className="w-5 h-5 text-red-600 ml-4" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Summary */}
            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Récapitulatif de votre configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Véhicule configuré</h4>
                      <p className="text-gray-600">{baseVehicle.name} - {selectedTrim.name}</p>
                      <p className="text-gray-600">Couleur: {selectedColor.name}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Options sélectionnées</h4>
                      {selectedOptions.length > 0 ? (
                        <ul className="space-y-1">
                          {selectedOptions.map(optionName => {
                            const option = options.find(opt => opt.name === optionName);
                            return option ? (
                              <li key={optionName} className="flex justify-between text-sm">
                                <span>{option.name}</span>
                                <span>+{option.price.toLocaleString()}€</span>
                              </li>
                            ) : null;
                          })}
                        </ul>
                      ) : (
                        <p className="text-gray-600">Aucune option sélectionnée</p>
                      )}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between text-2xl font-bold">
                        <span>Prix total:</span>
                        <span className="text-red-600">{calculateTotal().toLocaleString()}€</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button className="flex-1 bg-red-600 hover:bg-red-700">
                        Demander un devis
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Sauvegarder la configuration
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Précédent
              </Button>
              
              <Button 
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
                className="bg-red-600 hover:bg-red-700"
              >
                Suivant
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}