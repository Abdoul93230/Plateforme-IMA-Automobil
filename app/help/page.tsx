'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  HelpCircle, 
  Book, 
  MessageSquare, 
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';

const faqCategories = [
  {
    id: 'vehicles',
    name: 'Véhicules',
    icon: <HelpCircle className="w-5 h-5" />,
    questions: [
      {
        question: "Comment configurer mon véhicule ?",
        answer: "Utilisez notre configurateur Build & Price en ligne. Sélectionnez votre modèle, choisissez la couleur, la finition et les options. Vous obtiendrez un devis personnalisé en temps réel."
      },
      {
        question: "Quelle est la garantie sur les véhicules neufs ?",
        answer: "Tous nos véhicules neufs bénéficient d'une garantie constructeur de 7 ans ou 150 000 km. Cette garantie couvre les défauts de fabrication et inclut l'assistance dépannage 24h/24."
      },
      {
        question: "Puis-je essayer un véhicule avant l'achat ?",
        answer: "Bien sûr ! Prenez rendez-vous dans l'un de nos concessionnaires pour un essai gratuit. Vous pouvez réserver votre créneau en ligne ou par téléphone."
      }
    ]
  },
  {
    id: 'financing',
    name: 'Financement',
    icon: <HelpCircle className="w-5 h-5" />,
    questions: [
      {
        question: "Quelles sont les options de financement disponibles ?",
        answer: "Nous proposons plusieurs solutions : crédit classique, LOA (Location avec Option d'Achat), et LLD (Location Longue Durée). Chaque solution s'adapte à vos besoins et votre budget."
      },
      {
        question: "Comment obtenir un financement ?",
        answer: "Remplissez notre formulaire de demande en ligne ou contactez nos conseillers. Nous étudions votre dossier sous 24h et vous proposons une solution personnalisée."
      },
      {
        question: "Puis-je faire reprendre mon ancien véhicule ?",
        answer: "Oui, nous reprenons votre ancien véhicule. Nos experts l'évaluent gratuitement et vous proposent le meilleur prix de reprise pour financer votre nouveau véhicule."
      }
    ]
  },
  {
    id: 'service',
    name: 'Service après-vente',
    icon: <HelpCircle className="w-5 h-5" />,
    questions: [
      {
        question: "Comment prendre rendez-vous pour un entretien ?",
        answer: "Réservez en ligne sur notre site, appelez votre concessionnaire ou utilisez notre application mobile. Vous pouvez choisir votre créneau et le type d'intervention."
      },
      {
        question: "À quelle fréquence entretenir mon véhicule ?",
        answer: "Suivez le plan d'entretien constructeur : généralement tous les 10 000 km ou 12 mois. Nos techniciens vous rappelleront les échéances importantes."
      },
      {
        question: "Les pièces de rechange sont-elles garanties ?",
        answer: "Toutes nos pièces d'origine sont garanties 2 ans. Nous utilisons exclusivement des pièces certifiées pour maintenir les performances de votre véhicule."
      }
    ]
  }
];

const quickHelp = [
  {
    title: "Guide d'achat",
    description: "Tout savoir pour bien choisir votre véhicule",
    icon: <Book className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Support technique",
    description: "Aide pour l'utilisation de votre véhicule",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Contact direct",
    description: "Parlez à un conseiller",
    icon: <Phone className="w-6 h-6" />,
    color: "bg-red-50 text-red-600"
  }
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('vehicles');

  const toggleFaq = (questionId: string) => {
    setExpandedFaq(expandedFaq === questionId ? null : questionId);
  };

  const filteredQuestions = faqCategories
    .find(cat => cat.id === selectedCategory)
    ?.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Centre d'aide</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher dans l'aide..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-lg"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Help */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Comment pouvons-nous vous aider ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickHelp.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Questions fréquentes
          </h2>
          
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="space-y-4">
                  {(searchTerm ? filteredQuestions : category.questions).map((faq, index) => {
                    const questionId = `${category.id}-${index}`;
                    const isExpanded = expandedFaq === questionId;
                    
                    return (
                      <Card key={questionId} className="overflow-hidden">
                        <CardHeader 
                          className="cursor-pointer hover:bg-gray-50 transition-colors"
                          onClick={() => toggleFaq(questionId)}
                        >
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{faq.question}</CardTitle>
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                          </div>
                        </CardHeader>
                        {isExpanded && (
                          <CardContent className="pt-0">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Contact Support */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Vous ne trouvez pas votre réponse ?
              </h2>
              <p className="text-xl mb-8 text-red-100">
                Notre équipe support est là pour vous aider
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  01 23 45 67 89
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  <Mail className="w-5 h-5 mr-2" />
                  Nous écrire
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