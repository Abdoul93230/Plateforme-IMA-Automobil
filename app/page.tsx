import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import FeaturedVehicles from '@/components/home/FeaturedVehicles';
import ServicesSection from '@/components/home/ServicesSection';
import NewsSection from '@/components/home/NewsSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedVehicles />
      <ServicesSection />
      <NewsSection />
      <Footer />
    </div>
  );
}