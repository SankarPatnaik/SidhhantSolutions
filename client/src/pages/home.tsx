import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProductsSection from "@/components/products-section";
import AiTechnologySection from "@/components/ai-technology-section";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <title>Sidhhant - AI-Driven Solutions for Real Estate & Legal Industries</title>
      <meta name="description" content="Empowering real estate professionals and legal practitioners with cutting-edge AI technology. Transform your workflow with our intelligent CRM and legal information systems." />
      <meta property="og:title" content="Sidhhant - AI-Driven Solutions for Real Estate & Legal Industries" />
      <meta property="og:description" content="Empowering real estate professionals and legal practitioners with cutting-edge AI technology." />
      <meta property="og:type" content="website" />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection />
        <ProductsSection />
        <AiTechnologySection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
