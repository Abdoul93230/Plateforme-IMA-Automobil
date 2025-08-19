'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Eye, 
  Lock, 
  UserCheck, 
  Database, 
  Globe,
  Mail,
  Phone
} from 'lucide-react';

const dataTypes = [
  {
    title: "Données d'identification",
    description: "Nom, prénom, adresse email, numéro de téléphone",
    icon: <UserCheck className="w-5 h-5" />,
    purpose: "Création de compte et communication"
  },
  {
    title: "Données de navigation",
    description: "Pages visitées, durée de session, préférences",
    icon: <Eye className="w-5 h-5" />,
    purpose: "Amélioration de l'expérience utilisateur"
  },
  {
    title: "Données véhicules",
    description: "Configurations, préférences, historique d'achat",
    icon: <Database className="w-5 h-5" />,
    purpose: "Personnalisation des services"
  }
];

const rights = [
  {
    title: "Droit d'accès",
    description: "Vous pouvez demander l'accès à vos données personnelles"
  },
  {
    title: "Droit de rectification",
    description: "Vous pouvez corriger vos données inexactes ou incomplètes"
  },
  {
    title: "Droit à l'effacement",
    description: "Vous pouvez demander la suppression de vos données"
  },
  {
    title: "Droit à la portabilité",
    description: "Vous pouvez récupérer vos données dans un format structuré"
  },
  {
    title: "Droit d'opposition",
    description: "Vous pouvez vous opposer au traitement de vos données"
  },
  {
    title: "Droit à la limitation",
    description: "Vous pouvez demander la limitation du traitement"
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 text-red-500" />
            <h1 className="text-5xl font-bold mb-4">Politique de confidentialité</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Votre vie privée est importante pour nous. Découvrez comment nous protégeons vos données.
            </p>
            <Badge className="mt-4 bg-green-600">
              Dernière mise à jour : 15 Mars 2024
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                IMA Automobil s'engage à protéger la confidentialité et la sécurité de vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et 
                protégeons vos informations personnelles conformément au Règlement Général sur la Protection 
                des Données (RGPD) et à la loi française.
              </p>
              <p className="text-gray-600 leading-relaxed">
                En utilisant nos services, vous acceptez les pratiques décrites dans cette politique. 
                Nous nous réservons le droit de modifier cette politique à tout moment, les modifications 
                prenant effet dès leur publication sur notre site.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Données collectées */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Données que nous collectons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                      {type.icon}
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{type.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {type.purpose}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Utilisation des données */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Database className="w-6 h-6 text-red-600" />
                Utilisation de vos données
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Finalités du traitement :</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Gestion de votre compte client et authentification</li>
                    <li>Traitement de vos commandes et demandes de devis</li>
                    <li>Communication commerciale et support client</li>
                    <li>Personnalisation de votre expérience sur notre site</li>
                    <li>Amélioration de nos services et analyses statistiques</li>
                    <li>Respect de nos obligations légales et réglementaires</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Base légale :</h4>
                  <p className="text-gray-600">
                    Le traitement de vos données repose sur votre consentement, l'exécution d'un contrat, 
                    le respect d'une obligation légale ou notre intérêt légitime à améliorer nos services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Partage des données */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Globe className="w-6 h-6 text-red-600" />
                Partage de vos données
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Nous ne vendons jamais vos données personnelles. Nous pouvons les partager uniquement dans les cas suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Avec nos partenaires concessionnaires pour le traitement de vos demandes</li>
                <li>Avec nos prestataires de services (hébergement, paiement, livraison)</li>
                <li>Avec les autorités compétentes si requis par la loi</li>
                <li>En cas de fusion, acquisition ou cession d'activité</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Tous nos partenaires sont tenus de respecter la confidentialité de vos données et 
                de les utiliser uniquement aux fins spécifiées.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Sécurité */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Lock className="w-6 h-6 text-red-600" />
                Sécurité de vos données
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Mesures techniques :</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Chiffrement SSL/TLS</li>
                    <li>Authentification forte</li>
                    <li>Pare-feu et antivirus</li>
                    <li>Sauvegardes régulières</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Mesures organisationnelles :</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Accès limité aux données</li>
                    <li>Formation du personnel</li>
                    <li>Audits de sécurité</li>
                    <li>Politique de confidentialité</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Vos droits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Vos droits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rights.map((right, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-800 mb-2">{right.title}</h3>
                  <p className="text-gray-600 text-sm">{right.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="mt-6 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-blue-800 mb-2">Comment exercer vos droits ?</h3>
              <p className="text-blue-700 text-sm mb-4">
                Pour exercer vos droits, contactez notre Délégué à la Protection des Données (DPO) :
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 text-blue-700">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">dpo@ima-automobil.fr</span>
                </div>
                <div className="flex items-center gap-2 text-blue-700">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">01 23 45 67 89</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conservation des données */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Conservation des données</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités 
                pour lesquelles elles ont été collectées :
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Données de compte client</span>
                  <Badge variant="outline">3 ans après dernière activité</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Données de navigation</span>
                  <Badge variant="outline">13 mois maximum</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Données de facturation</span>
                  <Badge variant="outline">10 ans (obligation légale)</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section>
          <Card className="bg-slate-800 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Des questions sur vos données ?</h2>
              <p className="text-gray-300 mb-6">
                Notre équipe est à votre disposition pour répondre à toutes vos questions 
                concernant la protection de vos données personnelles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span>dpo@ima-automobil.fr</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-red-500" />
                  <span>01 23 45 67 89</span>
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