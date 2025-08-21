import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IMA Automobil Niger - Révolution Automobile au Cœur de l\'Afrique',
  description: 'Présentation complète du projet IMA Automobil pour le marché nigérien - La première plateforme automobile digitale du Niger',
};

export default function NigerPresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}