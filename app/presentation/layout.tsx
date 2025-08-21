import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Présentation IMA Automobil - Plateforme Automobile du Futur',
  description: 'Présentation complète du projet IMA Automobil - Solution MERN/Next.js pour révolutionner l\'expérience automobile',
};

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}