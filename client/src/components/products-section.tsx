import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Gavel, Users, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductsSection() {
  const products = [
    {
      icon: Home,
      title: "Real Estate CRM",
      description: "Streamline your real estate operations with AI-powered lead management, automated follow-ups, and intelligent market analysis.",
      features: [
        "AI Lead Scoring",
        "Automated Workflows", 
        "Market Intelligence",
        "Document Management"
      ]
    },
    {
      icon: Gavel,
      title: "Legal Information Hub",
      description: "Real-time legal information system for students and professionals with AI-powered case research and legal updates.",
      features: [
        "Real-time Legal Updates",
        "AI Case Research",
        "Citation Management",
        "Collaboration Tools"
      ]
    },
    {
      icon: Users,
      title: "Law Community",
      description: "Connect with legal professionals worldwide through our intelligent networking platform designed for knowledge sharing.",
      features: [
        "Professional Networking",
        "Knowledge Sharing",
        "Expert Q&A",
        "Career Opportunities"
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Suite</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed to revolutionize how you work in real estate and legal industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-sf-blue-lightest rounded-xl flex items-center justify-center mb-6">
                    <product.icon className="text-sf-blue h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <Check className="text-sf-success h-4 w-4 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-sf-blue text-white hover:bg-sf-blue-dark"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Product Showcase with Images */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500" 
              alt="Real estate professionals collaborating" 
              className="rounded-2xl shadow-lg w-full h-auto" 
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Revolutionizing Real Estate</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our AI-driven CRM transforms how real estate professionals manage leads, close deals, and grow their business. 
              Experience the power of intelligent automation.
            </p>
            <div className="space-y-4">
              {[
                "40% increase in lead conversion rates",
                "60% reduction in administrative tasks", 
                "Real-time market insights and analytics"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center">
                  <div className="w-8 h-8 bg-sf-success rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white h-4 w-4" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500" 
              alt="Legal professionals in meeting" 
              className="rounded-2xl shadow-lg w-full h-auto" 
            />
          </div>
          <div className="lg:order-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Empowering Legal Excellence</h3>
            <p className="text-lg text-gray-600 mb-6">
              Stay ahead in the legal field with real-time information, AI-powered research tools, and a connected community 
              of legal professionals worldwide.
            </p>
            <div className="space-y-4">
              {[
                "Access to 10M+ legal documents",
                "Real-time legal updates and alerts",
                "Connect with 50K+ legal professionals"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center">
                  <div className="w-8 h-8 bg-sf-success rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white h-4 w-4" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
