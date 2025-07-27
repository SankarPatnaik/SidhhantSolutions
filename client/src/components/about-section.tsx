import { Target, Rocket, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      text: "Mission-driven innovation"
    },
    {
      icon: Rocket,
      text: "Rapid deployment and scaling"
    },
    {
      icon: Shield,
      text: "Enterprise-grade security"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Sidhhant</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a modern technology organization dedicated to solving real-world problems through 
              innovative AI-driven solutions. Our mission is to empower professionals in the real estate 
              and legal industries with tools that enhance productivity and decision-making.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Founded by industry experts who understand the challenges faced by modern professionals, 
              Sidhhant combines deep domain knowledge with cutting-edge technology to deliver solutions 
              that truly make a difference.
            </p>
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div 
                  key={value.text}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <value.icon className="text-sf-blue h-6 w-6 mr-4" />
                  <span className="text-gray-700 font-medium">{value.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500" 
              alt="Business team collaborating in modern office" 
              className="rounded-2xl shadow-lg w-full h-auto" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}