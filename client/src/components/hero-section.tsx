import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-sf-blue-lightest to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI-Driven Solutions for 
              <span className="text-sf-blue"> Modern Business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Empowering real estate professionals and legal practitioners with cutting-edge AI technology. 
              Transform your workflow with our intelligent CRM and legal information systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('products')}
                className="bg-sf-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-sf-blue-dark transition-colors shadow-lg"
                size="lg"
              >
                Explore Our Products
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="border-2 border-sf-blue text-sf-blue px-8 py-4 rounded-lg font-semibold hover:bg-sf-blue hover:text-white transition-colors"
                size="lg"
              >
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-sf-blue">10K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sf-blue">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sf-blue">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="lg:col-span-6 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600" 
              alt="Modern office technology setup" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
