import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageSquare, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function AiTechnologySection() {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced algorithms that continuously learn and improve from data patterns to provide better insights."
    },
    {
      icon: MessageSquare,
      title: "Natural Language",
      description: "Understand and process human language to extract meaningful information from documents and conversations."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and outcomes using historical data to help you make informed strategic decisions."
    }
  ];

  const stats = [
    { value: "95%", label: "Accuracy Rate" },
    { value: "3x", label: "Faster Processing" },
    { value: "50%", label: "Cost Reduction" },
    { value: "24/7", label: "Availability" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powered by Advanced AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our cutting-edge artificial intelligence capabilities drive innovation across all our products
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500" 
              alt="AI technology and neural networks" 
              className="rounded-2xl shadow-lg w-full h-auto" 
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Intelligence That Adapts</h3>
            <p className="text-lg text-gray-600 mb-8">
              Our AI learns from your behavior, optimizes your workflow, and provides intelligent recommendations 
              that help you make better decisions faster.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-sf-blue-lightest rounded-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-sf-blue mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-sf-blue-lightest rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="text-sf-blue h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
